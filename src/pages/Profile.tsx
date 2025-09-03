import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Instagram, Mail, MapPin, Youtube, Linkedin } from "lucide-react";

const Profile = () => {
  const officers = [
    { name: "Ketua BEM", position: "Ketua", image: "/placeholder-person.jpg" },
    { name: "Wakil Ketua BEM", position: "Wakil Ketua", image: "/placeholder-person.jpg" },
    { name: "Sekretaris", position: "Sekretaris", image: "/placeholder-person.jpg" },
    { name: "Bendahara", position: "Bendahara", image: "/placeholder-person.jpg" },
    { name: "Koordinator Humas", position: "Humas", image: "/placeholder-person.jpg" },
    { name: "Koordinator Kominfo", position: "Kominfo", image: "/placeholder-person.jpg" },
    { name: "Koordinator Ristek", position: "Ristek", image: "/placeholder-person.jpg" },
    { name: "Koordinator Agama", position: "Agama", image: "/placeholder-person.jpg" },
    { name: "Koordinator Minba", position: "Minba", image: "/placeholder-person.jpg" },
  ];

  const socialMedia = [
    {
      name: "Instagram",
      handle: "@Bemfstunsam",
      icon: Instagram,
      color: "hover:text-pink-500",
      bgColor: "hover:bg-pink-50"
    },
    {
      name: "Email",
      handle: "bemteknikunsam.aceh@gmail.com",
      icon: Mail,
      color: "hover:text-red-500",
      bgColor: "hover:bg-red-50"
    },
    {
      name: "TikTok",
      handle: "@Bemfstunsam",
      icon: Instagram, // Using Instagram icon as placeholder
      color: "hover:text-black",
      bgColor: "hover:bg-gray-50"
    },
    {
      name: "YouTube",
      handle: "BEM FAKULTAS SAINS DAN TEKNOLOGI",
      icon: Youtube,
      color: "hover:text-red-600",
      bgColor: "hover:bg-red-50"
    },
    {
      name: "LinkedIn",
      handle: "BEM FST UNSAM",
      icon: Linkedin,
      color: "hover:text-blue-600",
      bgColor: "hover:bg-blue-50"
    }
  ];

  return (
    <main className="min-h-screen py-8 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-bem-black mb-4">
            Profil <span className="text-bem-orange">BEM FST</span>
          </h1>
          <p className="text-bem-gray text-lg max-w-2xl mx-auto">
            Mengenal lebih dekat pengurus dan kontak BEM Fakultas Sains dan Teknologi UNSAM
          </p>
          <div className="w-20 h-1 bg-bem-orange mx-auto mt-4"></div>
        </div>

        {/* Organization Structure */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-bem-black text-center mb-8">
            Struktur <span className="text-bem-orange">Organisasi</span>
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {officers.map((officer, index) => (
              <Card key={index} className="border-0 shadow-elegant hover:shadow-orange transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-bem-orange/20 to-bem-orange/40 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <div className="w-16 h-16 rounded-full bg-bem-gray-light flex items-center justify-center">
                      <span className="text-bem-orange font-bold text-lg">
                        {officer.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                      </span>
                    </div>
                  </div>
                  <h3 className="font-semibold text-bem-black text-sm mb-1">{officer.name}</h3>
                  <p className="text-bem-gray text-xs">{officer.position}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact Information */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-bem-black text-center mb-8">
            Hubungi <span className="text-bem-orange">Kami</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {socialMedia.map((social, index) => (
              <Card key={index} className={`border-0 shadow-elegant transition-all duration-300 cursor-pointer group ${social.bgColor}`}>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-lg bg-bem-orange/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <social.icon className={`h-6 w-6 text-bem-orange transition-colors duration-300 ${social.color}`} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-bem-black text-sm mb-1">{social.name}</h3>
                      <p className="text-bem-gray text-xs break-all">{social.handle}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Location */}
        <div className="text-center">
          <Card className="border-0 shadow-elegant max-w-2xl mx-auto">
            <CardContent className="p-8">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-bem-orange/10 flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-bem-orange" />
                </div>
                <h3 className="text-2xl font-bold text-bem-black">Lokasi Kantor</h3>
              </div>
              <p className="text-bem-gray mb-6">
                Fakultas Sains dan Teknologi<br />
                Universitas Samudra<br />
                Langsa, Aceh
              </p>
              <Button 
                className="bg-bem-orange hover:bg-bem-orange-dark text-white"
                onClick={() => window.open('https://maps.google.com/?cid=16456346123908801610&entry=gps', '_blank')}
              >
                <MapPin className="h-4 w-4 mr-2" />
                Lihat di Google Maps
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <Card className="border-0 shadow-elegant bg-gradient-to-r from-bem-orange/5 to-bem-orange/10">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-bem-black mb-4">
                Mari Berkolaborasi
              </h3>
              <p className="text-bem-gray max-w-2xl mx-auto mb-6">
                BEM FST UNSAM selalu terbuka untuk kerjasama dan kolaborasi dengan berbagai pihak 
                dalam rangka mengembangkan potensi mahasiswa Fakultas Sains dan Teknologi.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-bem-orange hover:bg-bem-orange-dark text-white">
                  <Mail className="h-4 w-4 mr-2" />
                  Kirim Email
                </Button>
                <Button variant="outline" className="border-bem-orange text-bem-orange hover:bg-bem-orange hover:text-white">
                  <Instagram className="h-4 w-4 mr-2" />
                  Follow Instagram
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
};

export default Profile;