import image from "./../../assets/information.webp";

export const Help = () => (
  <div className="flex m-5 flex-col">
    <div className="max-w-sm w-full lg:max-w-full lg:flex mb-4">
      <div
        className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
        style={{ backgroundImage: `url('${image}')` }}
        title="Woman holding a mug"
      ></div>
      <div className="border-r border-b border-l border-gray-100 lg:border-l-0 lg:border-t lg:border-gray-100 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8">
          <div className="text-gray-900 font-bold text-xl mb-2">
            ¿Quiénes somos?
          </div>
          <p className="text-gray-700 text-base">
            Nosotros somos una fabrica familiar de artículos de cuero ubicada en
            Ituzaingó, zona oeste, que hasta el día de hoy vendía solo al por
            mayor, pero por la situación que el país está viviendo nos
            encontramos en la necesidad de ampliar nuestro mercado hacia la
            venta por internet. Por eso, nos parece importante que entre todos
            construyamos un lugar óptimo para comprar en donde estemos conformes
            y no haya ninguna duda antes de obtener alguno de nuestros
            productos.
          </p>
        </div>
        <div className="flex items-center">
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #cuero
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #familiar
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #nosotros
            </span>
          </div>
        </div>
      </div>
    </div>

    <div className="max-w-sm w-full lg:max-w-full lg:flex">
      <div
        className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
        style={{ backgroundImage: `url('${image}')` }}
        title="Woman holding a mug"
      ></div>
      <div className="border-r border-b border-l border-gray-100 lg:border-l-0 lg:border-t lg:border-gray-100 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8">
          <div className="text-gray-900 font-bold text-xl mb-2">
            ¿Cómo comprar?
          </div>
          <p className="text-gray-700 text-base">
            Para comprar en nuestra tienda solamente hay que buscar el producto
            que les haya gustado, seleccionarlo y agregarlo al carrito, una vez
            allí, procederemos a hacer click en el botón "finalizar compra". En
            la pantalla de nuestra compra, el sistema les pedirá los datos
            necesarios para poder cobrar y para poder enviar el producto a su
            destino. Nosotros aceptamos MercadoPago, transferencias bancarias e
            incluso pago en efectivo si el método de envío es retiro en
            sucursal.
          </p>
        </div>
        <div className="flex items-center">
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #cuero
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #familiar
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #nosotros
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
);
