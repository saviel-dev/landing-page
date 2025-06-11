
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
        <Card className="bg-white shadow-lg animate-fade-in-up">
          <CardHeader className="text-center border-b">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">JH</span>
              </div>
              <span className="text-2xl font-bold text-gray-900">JH - Services</span>
            </div>
            
            <div className="flex items-center justify-center gap-2 mb-4">
              <Check className="h-6 w-6 text-green-500" />
              <Badge className="bg-green-100 text-green-800">Comprobante Recibido</Badge>
            </div>
            
            <CardTitle className="text-2xl text-gray-900">Recibo de Compra</CardTitle>
            <p className="text-gray-600">Recibo #{receiptNumber}</p>
          </CardHeader>

          <CardContent className="p-8">
            {/* Customer Info */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <User className="h-5 w-5" />
                Información del Cliente
              </h3>
              <div className="bg-gray-50 p-4 rounded-lg space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Nombre:</span>
                  <span className="font-medium">{customerName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Contacto:</span>
                  <span className="font-medium">{contact}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Fecha:</span>
                  <span className="font-medium flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {date}
                  </span>
                </div>
              </div>
            </div>

            {/* Order Details */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Package className="h-5 w-5" />
                Detalles del Pedido
              </h3>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-gray-600">Plan seleccionado:</span>
                  <span className="font-semibold text-lg">{planName}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Precio:</span>
                  <span className="text-2xl font-bold text-blue-600">{planPrice}</span>
                </div>
              </div>
            </div>

            {/* Payment Info */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <CreditCard className="h-5 w-5" />
                Información de Pago
              </h3>
              <div className="bg-gray-50 p-4 rounded-lg space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Método de pago:</span>
                  <span className="font-medium">{getPaymentMethodName(paymentMethod)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Comprobante:</span>
                  <span className="font-medium text-green-600">✓ {proofFileName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Estado:</span>
                  <Badge className="bg-yellow-100 text-yellow-800">En Revisión</Badge>
                </div>
              </div>
            </div>

            {/* Total */}
            <div className="border-t pt-6 mb-8">
              <div className="flex justify-between items-center text-xl font-bold">
                <span>Total Pagado:</span>
                <span className="text-blue-600">{planPrice}</span>
              </div>
            </div>

            {/* Next Steps */}
            <div className="bg-blue-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-blue-900 mb-3">Próximos Pasos:</h4>
              <ul className="space-y-2 text-blue-800">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Revisaremos tu comprobante de pago en las próximas 24 horas</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Te contactaremos para confirmar el pago y comenzar tu proyecto</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Recibirás todas las actualizaciones en tu información de contacto</span>
                </li>
              </ul>
            </div>

            {/* Actions */}
            <div className="flex gap-4 print:hidden">
              <Button 
                onClick={handlePrint}
                className="flex-1 bg-blue-gradient text-white"
              >
                <Download className="h-4 w-4 mr-2" />
                Descargar Recibo
              </Button>
              <Button 
                variant="outline" 
                onClick={() => navigate('/')}
                className="flex-1"
              >
                Volver al Inicio
              </Button>
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
