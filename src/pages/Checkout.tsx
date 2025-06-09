
import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { ArrowLeft, CreditCard, Smartphone, Copy, Check, Upload, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const Checkout = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const planId = searchParams.get('plan');
  const planName = searchParams.get('name');
  const planPrice = searchParams.get('price');
  
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
  const [copiedField, setCopiedField] = useState('');
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [proofFile, setProofFile] = useState<File | null>(null);
  const [customerName, setCustomerName] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  const [countryCode, setCountryCode] = useState('+58');

  useEffect(() => {
    if (!planId || !planName || !planPrice) {
      navigate('/');
    }
  }, [planId, planName, planPrice, navigate]);

  const paymentMethods = [
    {
      id: 'pago_movil',
      name: 'Pago Móvil',
      icon: <Smartphone className="h-6 w-6" />,
      description: 'Transferencia inmediata desde tu banco',
      popular: true
    },
    {
      id: 'transferencia',
      name: 'Transferencia Bancaria',
      icon: <CreditCard className="h-6 w-6" />,
      description: 'Transferencia tradicional',
      popular: false
    },
    {
      id: 'zinli',
      name: 'Zinli',
      icon: <CreditCard className="h-6 w-6" />,
      description: 'Pago mediante Zinli',
      popular: false
    },
    {
      id: 'binance',
      name: 'Binance',
      icon: <CreditCard className="h-6 w-6" />,
      description: 'Pago mediante Binance',
      popular: false
    }
  ];

  const pagoMovilData = {
    banco: "Banco de Venezuela",
    telefono: "0424-1234567",
    cedula: "V-12.345.678",
    titular: "JH Services C.A."
  };

  const transferenciaBancaria = {
    banco: "Banco Nacional",
    numeroCuenta: "0123-4567-8901-2345",
    cedulaRif: "J-12345678-9",
    titular: "JH Services C.A."
  };

  const zinliData = {
    correo: "saviel927@gmail.com",
    titular: "JH Services"
  };

  const binanceData = {
    id: "123456789",
    titular: "JH Services"
  };

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    toast({
      title: "Copiado",
      description: `${field} copiado al portapapeles`,
    });
    setTimeout(() => setCopiedField(''), 2000);
  };

  const handleConfirmPayment = () => {
    setShowConfirmModal(true);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setProofFile(e.target.files[0]);
    }
  };

  const handleSubmitProof = () => {
    if (!proofFile || !customerName || !contactInfo) {
      toast({
        title: "Error",
        description: "Por favor completa todos los campos y sube el comprobante",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Comprobante Enviado",
      description: "Tu comprobante ha sido enviado exitosamente. Te contactaremos pronto para confirmar el pago.",
    });
    
    setShowConfirmModal(false);
    navigate('/');
  };

  const renderPaymentData = (data: any, type: string) => {
    return Object.entries(data).map(([key, value]) => (
      <div key={key} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
        <div>
          <span className="text-sm text-gray-600 capitalize">
            {key === 'telefono' ? 'Teléfono' : 
             key === 'cedula' ? 'Cédula' : 
             key === 'numeroCuenta' ? 'Número de Cuenta' :
             key === 'cedulaRif' ? 'Cédula/RIF' :
             key === 'correo' ? 'Correo' :
             key === 'id' ? 'ID' :
             key.charAt(0).toUpperCase() + key.slice(1)}:
          </span>
          <p className="font-medium">{value}</p>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => copyToClipboard(value, key)}
        >
          {copiedField === key ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
        </Button>
      </div>
    ));
  };

  if (!planId || !planName || !planPrice) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-8 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Volver a planes
          </Button>
          
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Finalizar Compra</h1>
            <p className="text-gray-600">Completa tu pedido del plan seleccionado</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Plan Summary */}
          <div>
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Resumen del Plan</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{planName}</h3>
                    <p className="text-gray-600">Plan de desarrollo web</p>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-bold text-blue-600">{planPrice}</span>
                    <p className="text-sm text-gray-500">Pago único</p>
                  </div>
                </div>
                
                <div className="border-t pt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold">Total:</span>
                    <span className="text-2xl font-bold text-blue-600">{planPrice}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Payment Methods */}
            <Card>
              <CardHeader>
                <CardTitle>Método de Pago</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {paymentMethods.map((method) => (
                    <div
                      key={method.id}
                      className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                        selectedPaymentMethod === method.id
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      onClick={() => setSelectedPaymentMethod(method.id)}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="text-blue-500">{method.icon}</div>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="font-medium">{method.name}</span>
                              {method.popular && (
                                <Badge variant="secondary" className="text-xs">Popular</Badge>
                              )}
                            </div>
                            <p className="text-sm text-gray-600">{method.description}</p>
                          </div>
                        </div>
                        <div className={`w-4 h-4 rounded-full border-2 ${
                          selectedPaymentMethod === method.id
                            ? 'border-blue-500 bg-blue-500'
                            : 'border-gray-300'
                        }`}>
                          {selectedPaymentMethod === method.id && (
                            <div className="w-2 h-2 bg-white rounded-full mx-auto mt-0.5"></div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Payment Details */}
          <div>
            {selectedPaymentMethod === 'pago_movil' && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Smartphone className="h-5 w-5" />
                    Datos para Pago Móvil
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <p className="text-sm text-blue-800 mb-2">
                        Realiza la transferencia con los siguientes datos:
                      </p>
                    </div>
                    
                    {renderPaymentData(pagoMovilData, 'pago_movil')}
                    
                    <div className="mt-6">
                      <Button 
                        className="w-full bg-blue-gradient text-white"
                        onClick={handleConfirmPayment}
                      >
                        Confirmar Pago Realizado
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {selectedPaymentMethod === 'transferencia' && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CreditCard className="h-5 w-5" />
                    Datos para Transferencia
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <p className="text-sm text-blue-800 mb-2">
                        Realiza la transferencia bancaria con los siguientes datos:
                      </p>
                    </div>
                    
                    {renderPaymentData(transferenciaBancaria, 'transferencia')}
                    
                    <div className="mt-6">
                      <Button 
                        className="w-full bg-blue-gradient text-white"
                        onClick={handleConfirmPayment}
                      >
                        Confirmar Pago Realizado
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {selectedPaymentMethod === 'zinli' && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CreditCard className="h-5 w-5" />
                    Datos para Zinli
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <p className="text-sm text-blue-800 mb-2">
                        Realiza el pago con los siguientes datos:
                      </p>
                    </div>
                    
                    {renderPaymentData(zinliData, 'zinli')}
                    
                    <div className="mt-6">
                      <Button 
                        className="w-full bg-blue-gradient text-white"
                        onClick={handleConfirmPayment}
                      >
                        Confirmar Pago Realizado
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {selectedPaymentMethod === 'binance' && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CreditCard className="h-5 w-5" />
                    Datos para Binance
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <p className="text-sm text-blue-800 mb-2">
                        Realiza el pago con los siguientes datos:
                      </p>
                    </div>
                    
                    {renderPaymentData(binanceData, 'binance')}
                    
                    <div className="mt-6">
                      <Button 
                        className="w-full bg-blue-gradient text-white"
                        onClick={handleConfirmPayment}
                      >
                        Confirmar Pago Realizado
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {!selectedPaymentMethod && (
              <Card>
                <CardContent className="text-center py-12">
                  <p className="text-gray-500">Selecciona un método de pago para continuar</p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>

        {/* Confirmation Modal */}
        <Dialog open={showConfirmModal} onOpenChange={setShowConfirmModal}>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>Confirmar Pago</DialogTitle>
            </DialogHeader>
            
            <div className="space-y-4">
              <div>
                <Label htmlFor="proof">Comprobante de Pago *</Label>
                <div className="mt-2">
                  <Input
                    id="proof"
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="cursor-pointer"
                  />
                  {proofFile && (
                    <p className="text-sm text-green-600 mt-1">
                      ✓ {proofFile.name}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <Label htmlFor="name">Nombre o Apodo *</Label>
                <Input
                  id="name"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder="Tu nombre o como prefieres que te llamen"
                />
              </div>

              <div>
                <Label htmlFor="contact">Contacto *</Label>
                <div className="flex gap-2 mt-1">
                  <select
                    value={countryCode}
                    onChange={(e) => setCountryCode(e.target.value)}
                    className="px-3 py-2 border rounded-md bg-white"
                  >
                    <option value="+58">🇻🇪 +58</option>
                    <option value="+1">🇺🇸 +1</option>
                    <option value="+57">🇨🇴 +57</option>
                    <option value="+51">🇵🇪 +51</option>
                  </select>
                  <Input
                    id="contact"
                    value={contactInfo}
                    onChange={(e) => setContactInfo(e.target.value)}
                    placeholder="Número de teléfono o correo electrónico"
                    className="flex-1"
                  />
                </div>
              </div>

              <div className="flex gap-3 pt-4">
                <Button 
                  variant="outline" 
                  onClick={() => setShowConfirmModal(false)}
                  className="flex-1"
                >
                  Cancelar
                </Button>
                <Button 
                  onClick={handleSubmitProof}
                  className="flex-1 bg-blue-gradient text-white"
                >
                  Enviar Comprobante
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default Checkout;
