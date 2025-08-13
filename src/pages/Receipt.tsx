
import { useLocation, useNavigate } from "react-router-dom";
import { ArrowLeft, Download, Check, Calendar, User, Phone, CreditCard, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Receipt = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const receiptData = location.state;

  if (!receiptData) {
    navigate('/');
    return null;
  }

  const {
    customerName,
    contact,
    planName,
    planPrice,
    paymentMethod,
    date,
    proofFileName
  } = receiptData;

  const receiptNumber = `JH-${Date.now().toString().slice(-6)}`;

  const handlePrint = () => {
    window.print();
  };

  const getPaymentMethodName = (method: string) => {
    const methods: Record<string, string> = {
      'pago_movil': 'Pago Móvil',
      'transferencia': 'Transferencia Bancaria',
      'zinli': 'Zinli',
      'binance': 'Binance'
    };
    return methods[method] || method;
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-8 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
        {/* Header */}
        <div className="mb-8 print:hidden">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Volver al inicio
          </Button>
        </div>

        {/* Receipt Card */}
        <Card className="bg-gradient-to-br from-white to-gray-50 shadow-lg animate-fade-in-up overflow-hidden">
          {/* Encabezado con borde superior de color para el plan popular */}
          <div className="h-1.5 bg-blue-gradient"></div>
          
          <CardHeader className="text-center pb-6">
            <div className="mb-6 flex justify-center">
              <div className="p-4 rounded-xl bg-blue-50 text-blue-600">
                <Package className="h-8 w-8" />
              </div>
            </div>
            
            <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl inline-flex items-center justify-center mb-6 shadow-lg transform group-hover:scale-110 transition-transform duration-500">
              <h1 className="text-2xl font-bold text-gray-900">Recibo de Compra</h1>
              <div className="flex items-center gap-2 bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                <Check className="h-4 w-4" />
                Comprobante Recibido
              </div>
              <p className="text-gray-600 text-sm">Recibo #{receiptNumber}</p>
            </div>
          </CardHeader>

          <CardContent className="px-8 pb-8 -mt-4">
            <div className="space-y-6">
              {/* Customer Info */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-6 transform transition-all duration-300 hover:shadow-md hover:border-blue-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <User className="h-5 w-5 text-blue-500" />
                  Información del Cliente
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between pb-3 border-b border-gray-100">
                    <span className="text-gray-600">Nombre</span>
                    <span className="font-medium text-gray-900 text-right">{customerName}</span>
                  </div>
                  <div className="flex justify-between pb-3 border-b border-gray-100">
                    <span className="text-gray-600">Contacto</span>
                    <span className="font-medium text-gray-900">{contact}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Fecha</span>
                    <span className="font-medium text-gray-900 flex items-center gap-1">
                      <Calendar className="h-4 w-4 text-blue-500" />
                      {date}
                    </span>
                  </div>
                </div>
              </div>

              {/* Order Details */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-6 transform transition-all duration-300 hover:shadow-md hover:border-blue-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Package className="h-5 w-5 text-blue-500" />
                  Detalles del Pedido
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                    <span className="text-gray-600">Plan seleccionado</span>
                    <span className="font-semibold text-gray-900">{planName}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Precio total</span>
                    <div className="text-right">
                      <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                        {planPrice}
                      </span>
                      <p className="text-xs text-gray-500">Pago único</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment Info */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-6 transform transition-all duration-300 hover:shadow-md hover:border-blue-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <CreditCard className="h-5 w-5 text-blue-500" />
                  Información de Pago
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                    <span className="text-gray-600">Método de pago</span>
                    <span className="font-medium text-gray-900">{getPaymentMethodName(paymentMethod)}</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                    <span className="text-gray-600">Comprobante</span>
                    <span className="font-medium text-green-600 flex items-center gap-1">
                      <Check className="h-4 w-4" />
                      {proofFileName}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Estado del pago</span>
                    <Badge className="bg-yellow-50 text-yellow-700 border border-yellow-100">
                      En Revisión
                    </Badge>
                  </div>
                </div>
              </div>

              {/* Total */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-6 transform transition-all duration-300 hover:shadow-md hover:border-blue-100">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-gray-900">Total Pagado</span>
                  <div className="text-right">
                    <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                      {planPrice}
                    </span>
                  </div>
                </div>
              </div>

              {/* Next Steps */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-100">
                <h4 className="font-semibold text-blue-900 mb-4 flex items-center gap-2">
                  <svg className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Próximos Pasos
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    </div>
                    <span className="text-blue-800">Revisaremos tu comprobante de pago en las próximas 24 horas</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    </div>
                    <span className="text-blue-800">Te contactaremos para confirmar el pago y comenzar tu proyecto</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    </div>
                    <span className="text-blue-800">Recibirás todas las actualizaciones en tu información de contacto</span>
                  </li>
                </ul>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-4 print:hidden">
                <Button 
                  onClick={handlePrint}
                  className="flex-1 bg-gradient-to-r from-blue-600 to-blue-500 text-white hover:from-blue-700 hover:to-blue-600 transition-all duration-300 h-12"
                >
                  <Download className="h-5 w-5 mr-2" />
                  Descargar Recibo
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => navigate('/')}
                  className="flex-1 h-12 border-gray-300 hover:bg-gray-50 transition-colors duration-300"
                >
                  Volver al Inicio
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Info */}
        <div className="mt-8 text-center text-gray-600 print:hidden">
          <p className="mb-2">¿Tienes alguna pregunta sobre tu pedido?</p>
          <p>Contáctanos: <span className="text-blue-600 font-medium">saviel.dev@gmail.com</span></p>
          <p>WhatsApp: <span className="text-blue-600 font-medium">+58 412 286 55 50</span></p>
        </div>
      </div>
    </div>
  );
};

export default Receipt;
