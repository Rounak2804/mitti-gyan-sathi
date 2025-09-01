import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Leaf, 
  CloudSun, 
  Bug, 
  TrendingUp, 
  Mic, 
  Upload, 
  MapPin, 
  Phone, 
  MessageCircle,
  Users,
  Award,
  Shield,
  Zap,
  Globe,
  Camera,
  BarChart3,
  Thermometer,
  Droplets,
  Wind
} from 'lucide-react';

// Multilingual content
const content = {
  en: {
    title: "Mitti Gyan Sathi",
    subtitle: "Your AI-Powered Agricultural Advisor",
    description: "Empowering farmers with smart, science-based farming solutions in their native language",
    cta: "Start Your Agricultural Journey",
    features: {
      crop: {
        title: "Smart Crop Advisory",
        description: "Get personalized crop recommendations based on soil type, weather, and market demand"
      },
      soil: {
        title: "Soil Health Analysis",
        description: "Upload soil images for instant health assessment and fertilizer recommendations"
      },
      weather: {
        title: "Weather Intelligence",
        description: "Real-time weather alerts and farming predictions for your location"
      },
      pest: {
        title: "Pest & Disease Detection",
        description: "AI-powered pest identification with treatment recommendations"
      },
      market: {
        title: "Market Price Tracking",
        description: "Live market prices and trend analysis for better selling decisions"
      },
      voice: {
        title: "Voice Assistant",
        description: "Ask questions in your local language - Hindi, English, and regional dialects"
      }
    },
    services: {
      realtime: "Real-time Advisory",
      location: "Location-specific Insights", 
      multilingual: "Multilingual Support",
      offline: "Offline Capability"
    },
    testimonials: {
      farmer1: {
        name: "Ramesh Kumar",
        location: "Uttar Pradesh",
        text: "Increased my wheat yield by 30% using Mitti Gyan Sathi's recommendations"
      },
      farmer2: {
        name: "Sunita Devi", 
        location: "Punjab",
        text: "The pest detection feature saved my cotton crop from major damage"
      },
      farmer3: {
        name: "Arjun Patel",
        location: "Gujarat",
        text: "Market price alerts helped me get ₹2000 more per quintal"
      }
    },
    stats: {
      farmers: "50,000+ Farmers Helped",
      yield: "25% Average Yield Increase",
      savings: "₹15,000 Average Annual Savings",
      languages: "12+ Regional Languages"
    },
    contact: {
      title: "Get Started Today",
      phone: "+91-1800-KRISHI",
      whatsapp: "WhatsApp Support",
      download: "Download Mobile App"
    }
  },
  hi: {
    title: "मिट्टी ज्ञान साथी",
    subtitle: "आपका AI-संचालित कृषि सलाहकार",
    description: "किसानों को उनकी मातृभाषा में स्मार्ट, विज्ञान-आधारित कृषि समाधान प्रदान करना",
    cta: "अपनी कृषि यात्रा शुरू करें",
    features: {
      crop: {
        title: "स्मार्ट फसल सलाह",
        description: "मिट्टी के प्रकार, मौसम और बाजार की मांग के आधार पर व्यक्तिगत फसल सुझाव पाएं"
      },
      soil: {
        title: "मिट्टी स्वास्थ्य विश्लेषण", 
        description: "तुरंत स्वास्थ्य मूल्यांकन और उर्वरक सिफारिशों के लिए मिट्टी की तस्वीरें अपलोड करें"
      },
      weather: {
        title: "मौसम बुद्धिमत्ता",
        description: "आपके स्थान के लिए वास्तविक समय मौसम अलर्ट और कृषि भविष्यवाणी"
      },
      pest: {
        title: "कीट और रोग की पहचान",
        description: "उपचार सुझावों के साथ AI-संचालित कीट पहचान"
      },
      market: {
        title: "बाजार मूल्य ट्रैकिंग",
        description: "बेहतर बिक्री निर्णयों के लिए लाइव बाजार मूल्य और ट्रेंड विश्लेषण"
      },
      voice: {
        title: "आवाज सहायक",
        description: "अपनी स्थानीय भाषा में प्रश्न पूछें - हिंदी, अंग्रेजी और क्षेत्रीय बोलियां"
      }
    },
    services: {
      realtime: "वास्तविक समय सलाह",
      location: "स्थान-विशिष्ट अंतर्दृष्टि",
      multilingual: "बहुभाषी समर्थन", 
      offline: "ऑफलाइन क्षमता"
    },
    testimonials: {
      farmer1: {
        name: "रमेश कुमार",
        location: "उत्तर प्रदेश",
        text: "मिट्टी ज्ञान साथी की सिफारिशों का उपयोग करके अपनी गेहूं की पैदावार में 30% की वृद्धि की"
      },
      farmer2: {
        name: "सुनीता देवी",
        location: "पंजाब", 
        text: "कीट पहचान सुविधा ने मेरी कपास की फसल को बड़े नुकसान से बचाया"
      },
      farmer3: {
        name: "अर्जुन पटेल",
        location: "गुजरात",
        text: "बाजार मूल्य अलर्ट ने मुझे प्रति क्विंटल ₹2000 अधिक दिलाने में मदद की"
      }
    },
    stats: {
      farmers: "50,000+ किसानों की मदद की",
      yield: "25% औसत उपज वृद्धि",
      savings: "₹15,000 औसत वार्षिक बचत",
      languages: "12+ क्षेत्रीय भाषाएं"
    },
    contact: {
      title: "आज ही शुरू करें",
      phone: "+91-1800-KRISHI",
      whatsapp: "WhatsApp सपोर्ट",
      download: "मोबाइल ऐप डाउनलोड करें"
    }
  }
};

const Index = () => {
  const [language, setLanguage] = useState<'en' | 'hi'>('en');
  const [isListening, setIsListening] = useState(false);
  const [activeTab, setActiveTab] = useState('advisory');
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const t = content[language];

  // Voice recognition simulation
  const toggleVoiceRecognition = () => {
    setIsListening(!isListening);
    if (!isListening) {
      // Simulate voice recognition
      setTimeout(() => {
        setIsListening(false);
      }, 3000);
    }
  };

  // Image upload handler
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-background font-inter">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl hero-gradient flex items-center justify-center">
              <Leaf className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-foreground">{t.title}</h1>
          </div>
          
          <div className="flex items-center gap-4">
            {/* Language Toggle */}
            <div className="flex bg-muted rounded-lg p-1">
              <Button
                variant={language === 'en' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setLanguage('en')}
                className="px-4 py-2 text-sm transition-natural"
              >
                English
              </Button>
              <Button
                variant={language === 'hi' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setLanguage('hi')}
                className="px-4 py-2 text-sm transition-natural"
              >
                हिंदी
              </Button>
            </div>
            
            {/* Voice Assistant Toggle */}
            <Button
              variant={isListening ? 'default' : 'outline'}
              size="sm"
              onClick={toggleVoiceRecognition}
              className={`transition-natural ${isListening ? 'animate-pulse-gentle' : ''}`}
            >
              <Mic className="h-4 w-4 mr-2" />
              {isListening ? (language === 'en' ? 'Listening...' : 'सुन रहे हैं...') : ''}
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 hero-gradient text-white relative overflow-hidden">
        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-4xl mx-auto animate-fade-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              {t.title}
            </h1>
            <p className="text-xl md:text-2xl mb-4 opacity-95">
              {t.subtitle}
            </p>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              {t.description}
            </p>
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 glow-shadow transition-bounce">
              {t.cta}
            </Button>
          </div>
        </div>
        
        {/* Floating Agricultural Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 animate-float">
            <Leaf className="h-16 w-16 text-white/20" />
          </div>
          <div className="absolute top-40 right-20 animate-float" style={{animationDelay: '1s'}}>
            <CloudSun className="h-20 w-20 text-white/20" />
          </div>
          <div className="absolute bottom-20 left-1/4 animate-float" style={{animationDelay: '2s'}}>
            <Bug className="h-12 w-12 text-white/20" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">{language === 'en' ? 'Smart Agricultural Features' : 'स्मार्ट कृषि सुविधाएं'}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {language === 'en' 
                ? 'Comprehensive AI-powered tools to transform your farming experience'
                : 'आपके कृषि अनुभव को बदलने के लिए व्यापक AI-संचालित उपकरण'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(t.features).map(([key, feature], index) => {
              const icons = {
                crop: Leaf,
                soil: Thermometer, 
                weather: CloudSun,
                pest: Bug,
                market: TrendingUp,
                voice: Mic
              };
              const Icon = icons[key as keyof typeof icons];
              
              return (
                <Card key={key} className="card-gradient natural-shadow hover:elevated-shadow transition-natural group">
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-natural">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Interactive Features Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              {language === 'en' ? 'Try Our AI Tools' : 'हमारे AI उपकरण आज़माएं'}
            </h2>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="advisory">{language === 'en' ? 'Advisory' : 'सलाह'}</TabsTrigger>
              <TabsTrigger value="detection">{language === 'en' ? 'Detection' : 'पहचान'}</TabsTrigger>
              <TabsTrigger value="weather">{language === 'en' ? 'Weather' : 'मौसम'}</TabsTrigger>
              <TabsTrigger value="market">{language === 'en' ? 'Market' : 'बाज़ार'}</TabsTrigger>
            </TabsList>

            <TabsContent value="advisory" className="mt-8">
              <Card className="card-gradient">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Leaf className="h-6 w-6 text-primary" />
                    {language === 'en' ? 'Smart Crop Advisory' : 'स्मार्ट फसल सलाह'}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input placeholder={language === 'en' ? 'Enter your location' : 'अपना स्थान दर्ज करें'} />
                    <Input placeholder={language === 'en' ? 'Soil type' : 'मिट्टी का प्रकार'} />
                  </div>
                  <Button className="w-full">
                    {language === 'en' ? 'Get Crop Recommendations' : 'फसल सुझाव प्राप्त करें'}
                  </Button>
                  
                  {/* Sample Recommendations */}
                  <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/10">
                    <h4 className="font-semibold mb-2 text-primary">
                      {language === 'en' ? 'Recommended Crops for Your Region:' : 'आपके क्षेत्र के लिए सुझाई गई फसलें:'}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">
                        {language === 'en' ? 'Wheat' : 'गेहूं'} - 85% {language === 'en' ? 'suitable' : 'उपयुक्त'}
                      </Badge>
                      <Badge variant="secondary">
                        {language === 'en' ? 'Mustard' : 'सरसों'} - 78% {language === 'en' ? 'suitable' : 'उपयुक्त'}
                      </Badge>
                      <Badge variant="secondary">
                        {language === 'en' ? 'Chickpea' : 'चना'} - 71% {language === 'en' ? 'suitable' : 'उपयुक्त'}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="detection" className="mt-8">
              <Card className="card-gradient">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Camera className="h-6 w-6 text-primary" />
                    {language === 'en' ? 'Pest & Disease Detection' : 'कीट और रोग की पहचान'}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="border-2 border-dashed border-primary/30 rounded-lg p-8 text-center hover:border-primary/50 transition-natural cursor-pointer"
                       onClick={() => fileInputRef.current?.click()}>
                    {uploadedImage ? (
                      <div>
                        <img src={uploadedImage} alt="Uploaded" className="max-w-xs mx-auto rounded-lg mb-4" />
                        <p className="text-primary font-medium">
                          {language === 'en' ? 'Analyzing image...' : 'छवि का विश्लेषण हो रहा है...'}
                        </p>
                      </div>
                    ) : (
                      <div>
                        <Upload className="h-16 w-16 text-primary/50 mx-auto mb-4" />
                        <p className="text-lg font-medium mb-2">
                          {language === 'en' ? 'Upload Crop Image' : 'फसल की तस्वीर अपलोड करें'}
                        </p>
                        <p className="text-muted-foreground">
                          {language === 'en' ? 'Click to upload or drag and drop' : 'अपलोड करने के लिए क्लिक करें या खींचकर छोड़ें'}
                        </p>
                      </div>
                    )}
                  </div>
                  <input
                    type="file"
                    ref={fileInputRef}
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="weather" className="mt-8">
              <Card className="card-gradient">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <CloudSun className="h-6 w-6 text-primary" />
                    {language === 'en' ? 'Weather Intelligence' : 'मौसम बुद्धिमत्ता'}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-primary/5 p-4 rounded-lg text-center">
                      <Thermometer className="h-8 w-8 text-primary mx-auto mb-2" />
                      <p className="text-2xl font-bold">28°C</p>
                      <p className="text-sm text-muted-foreground">
                        {language === 'en' ? 'Temperature' : 'तापमान'}
                      </p>
                    </div>
                    <div className="bg-primary/5 p-4 rounded-lg text-center">
                      <Droplets className="h-8 w-8 text-primary mx-auto mb-2" />
                      <p className="text-2xl font-bold">65%</p>
                      <p className="text-sm text-muted-foreground">
                        {language === 'en' ? 'Humidity' : 'नमी'}
                      </p>
                    </div>
                    <div className="bg-primary/5 p-4 rounded-lg text-center">
                      <Wind className="h-8 w-8 text-primary mx-auto mb-2" />
                      <p className="text-2xl font-bold">12 km/h</p>
                      <p className="text-sm text-muted-foreground">
                        {language === 'en' ? 'Wind Speed' : 'हवा की गति'}
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-accent/10 rounded-lg border border-accent/20">
                    <h4 className="font-semibold mb-2 text-accent-foreground">
                      {language === 'en' ? 'Today\'s Farming Advice:' : 'आज की कृषि सलाह:'}
                    </h4>
                    <p className="text-sm">
                      {language === 'en' 
                        ? 'Ideal conditions for pesticide application. Light winds and moderate temperature recommended for spraying operations.'
                        : 'कीटनाशक के छिड़काव के लिए आदर्श स्थितियां। छिड़काव के लिए हल्की हवा और मध्यम तापमान की सिफारिश की जाती है।'
                      }
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="market" className="mt-8">
              <Card className="card-gradient">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <BarChart3 className="h-6 w-6 text-primary" />
                    {language === 'en' ? 'Market Price Intelligence' : 'बाजार मूल्य बुद्धिमत्ता'}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { crop: language === 'en' ? 'Wheat' : 'गेहूं', price: '₹2,150', trend: 'up', change: '+₹50' },
                      { crop: language === 'en' ? 'Rice' : 'चावल', price: '₹3,200', trend: 'down', change: '-₹25' },
                      { crop: language === 'en' ? 'Mustard' : 'सरसों', price: '₹5,800', trend: 'up', change: '+₹120' }
                    ].map((item, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                        <div>
                          <h4 className="font-semibold">{item.crop}</h4>
                          <p className="text-sm text-muted-foreground">
                            {language === 'en' ? 'Per Quintal' : 'प्रति क्विंटल'}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-xl font-bold">{item.price}</p>
                          <p className={`text-sm ${item.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                            {item.change}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 px-4 hero-gradient text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {Object.values(t.stats).map((stat, index) => (
              <div key={index} className="animate-fade-up" style={{animationDelay: `${index * 0.2}s`}}>
                <div className="text-4xl font-bold mb-2">{stat.split(' ')[0]}</div>
                <div className="text-lg opacity-90">{stat.split(' ').slice(1).join(' ')}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              {language === 'en' ? 'Farmer Success Stories' : 'किसान सफलता की कहानियां'}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.values(t.testimonials).map((testimonial, index) => (
              <Card key={index} className="card-gradient natural-shadow">
                <CardContent className="pt-6">
                  <p className="text-lg mb-4 italic">"{testimonial.text}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-muted-foreground">{testimonial.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">{t.contact.title}</h2>
          <p className="text-xl mb-8 opacity-90">
            {language === 'en' 
              ? 'Join thousands of farmers already using our AI-powered agricultural solutions'
              : 'हजारों किसानों में शामिल हों जो पहले से ही हमारे AI-संचालित कृषि समाधानों का उपयोग कर रहे हैं'
            }
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              <Phone className="h-5 w-5 mr-2" />
              {t.contact.phone}
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              <MessageCircle className="h-5 w-5 mr-2" />
              {t.contact.whatsapp}
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              <Upload className="h-5 w-5 mr-2" />
              {t.contact.download}
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-10 w-10 rounded-xl hero-gradient flex items-center justify-center">
              <Leaf className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold">{t.title}</h3>
          </div>
          <p className="text-lg mb-6 opacity-80">
            {language === 'en' 
              ? 'Empowering farmers with technology, one field at a time'
              : 'प्रौद्योगिकी के साथ किसानों को सशक्त बनाना, एक समय में एक खेत'
            }
          </p>
          <div className="flex justify-center gap-6 text-sm opacity-70">
            <span>{language === 'en' ? 'Made for Indian Farmers' : 'भारतीय किसानों के लिए बनाया गया'}</span>
            <span>•</span>
            <span>{language === 'en' ? 'Powered by AI' : 'AI द्वारा संचालित'}</span>
            <span>•</span>
            <span>© 2024 {t.title}</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;