import { useCart } from '../context/CartContext';

const CartDrawer = () => {
  const { items, isCartOpen, setIsCartOpen, removeItem, updateQuantity, totalPrice } = useCart();

  return (
    <>
      {/* Overlay */}
      {isCartOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-[100] animate-fadeIn"
          onClick={() => setIsCartOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-surface z-[110] shadow-2xl flex flex-col transition-transform duration-400 ease-out ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ transition: 'transform 0.35s cubic-bezier(0.32, 0.72, 0, 1)' }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-outline-variant/30">
          <h2 className="font-['Space_Grotesk'] text-xl font-bold text-on-surface flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">shopping_bag</span>
            장바구니
            {items.length > 0 && (
              <span className="bg-primary text-white text-xs font-bold px-2 py-0.5 rounded-full">
                {items.reduce((s, i) => s + i.quantity, 0)}
              </span>
            )}
          </h2>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-2 hover:bg-surface-container-low rounded-full transition-all"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-on-surface-variant">
              <span className="material-symbols-outlined text-6xl opacity-30">shopping_cart</span>
              <p className="text-base font-medium">장바구니가 비어 있습니다</p>
              <button
                onClick={() => setIsCartOpen(false)}
                className="btn-gradient text-white px-6 py-2.5 rounded-lg text-sm font-semibold"
              >
                쇼핑 계속하기
              </button>
            </div>
          ) : (
            items.map(item => (
              <div
                key={`${item.id}-${item.size}-${item.texture}`}
                className="flex gap-4 bg-surface-container-low rounded-xl p-3 border border-outline-variant/20"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 rounded-lg object-cover flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-primary font-semibold mb-0.5">{item.category}</p>
                  <h4 className="text-sm font-bold text-on-surface line-clamp-2">{item.name}</h4>
                  {item.size && <p className="text-xs text-on-surface-variant mt-0.5">사이즈: {item.size}</p>}
                  {item.texture && <p className="text-xs text-on-surface-variant">텍스처: {item.texture}</p>}
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-primary font-bold text-sm">
                      ₩{(item.price * item.quantity).toLocaleString()}
                    </span>
                    <div className="flex items-center gap-1">
                      <button
                        className="w-6 h-6 rounded-full border border-outline-variant flex items-center justify-center hover:bg-surface-container transition-all text-xs"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        <span className="material-symbols-outlined text-[14px]">remove</span>
                      </button>
                      <span className="w-6 text-center text-sm font-bold">{item.quantity}</span>
                      <button
                        className="w-6 h-6 rounded-full border border-outline-variant flex items-center justify-center hover:bg-surface-container transition-all"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <span className="material-symbols-outlined text-[14px]">add</span>
                      </button>
                      <button
                        className="w-6 h-6 rounded-full hover:bg-error/10 flex items-center justify-center transition-all ml-1"
                        onClick={() => removeItem(item.id)}
                      >
                        <span className="material-symbols-outlined text-[14px] text-error">delete</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-5 border-t border-outline-variant/30 space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-on-surface-variant text-sm">합계</span>
              <span className="font-['Space_Grotesk'] text-2xl font-bold text-primary">
                ₩{totalPrice.toLocaleString()}
              </span>
            </div>
            <a
              href="#/checkout"
              onClick={() => setIsCartOpen(false)}
              className="btn-gradient text-white w-full py-3.5 rounded-xl font-bold text-base flex items-center justify-center gap-2 hover:shadow-lg transition-all"
            >
              <span className="material-symbols-outlined">lock</span>
              결제하기
            </a>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
