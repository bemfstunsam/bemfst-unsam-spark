import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Instagram, Mail, MapPin, Youtube, Linkedin } from "lucide-react";

const Profile = () => {
  // Leadership data
  const leadership = [
    { name: "Rico Yolanda", position: "Ketua", image: "/lovable-uploads/5eab6698-f45d-476b-bb9b-8469356b0bed.png" },
    { name: "Adriya Egi Widana", position: "Wakil Ketua", image: "/lovable-uploads/ddaeb30b-db3a-4711-b9fb-6f4c0c71ff9a.png" },
    { name: "David Ricardo Purba", position: "Sekretaris", image: "/lovable-uploads/f8caed5f-fc7d-4f52-8a82-f2ffb2174862.png" },
    { name: "Ibbnuagil Prabowo", position: "Bendahara", image: "/lovable-uploads/7cdd6702-eb45-47f3-98d4-30fb46cca019.png" }
  ];

  // Division data
  const divisions = [
    {
      name: "Humas",
      head: "Ari Setia Lubis",
      members: ["Yusra Alfian", "Tara Hawary"],
      description: "Divisi Humas bertanggung jawab dalam menjalin hubungan masyarakat, komunikasi eksternal, dan membangun citra positif BEM FST."
    },
    {
      name: "Riset dan Teknologi",
      head: "Muhammad Syahrul",
      members: ["Dia Suci Cahyani", "Muhammad Ridwan"],
      description: "Divisi Ristek fokus pada pengembangan teknologi, penelitian, dan inovasi untuk kemajuan organisasi dan mahasiswa FST."
    },
    {
      name: "Minat dan Bakat",
      head: "Mandrius Manalu",
      members: ["Ramada Alya Fitri", "Fachri Aulia Rachman"],
      description: "Divisi Minba bertugas mengembangkan minat dan bakat mahasiswa melalui berbagai kegiatan kreatif dan kompetitif."
    },
    {
      name: "Agama",
      head: "Syafaruddin",
      members: ["Ridha Nurjannah"],
      description: "Divisi Agama bertugas sebagai wadah pembinaan rohani, pengembangan nilai-nilai keislaman, serta peningkatan keimanan dan ketakwaan anggota."
    },
    {
      name: "Kominfo",
      head: "M. Habibi",
      members: ["Quwin Noor", "Fransiska Yongtina Marbun"],
      description: "Divisi Kominfo mengelola komunikasi dan informasi, media sosial, serta dokumentasi kegiatan BEM FST."
    },
    {
      name: "Kesekretariatan",
      head: "David Julkarnain",
      members: [],
      description: "Divisi Kesekretariatan bertanggung jawab dalam administrasi, dokumentasi, dan kearsipan organisasi."
    }
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
      icon: Instagram,
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
            Periode <span className="text-bem-orange">2025/2026</span>
          </h1>
          <p className="text-bem-gray text-lg max-w-2xl mx-auto">
            Mengenal lebih dekat pengurus dan kontak BEM Fakultas Sains dan Teknologi UNSAM
          </p>
          <div className="w-20 h-1 bg-bem-orange mx-auto mt-4"></div>
        </div>

        {/* Leadership Section */}
        <div className="mb-16">
          <div className="flex items-center justify-start mb-8">
            <div className="w-6 h-6 bg-bem-orange rounded mr-3"></div>
            <h2 className="text-3xl font-bold text-bem-black">
              Pimpinan
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((leader, index) => (
              <Card key={index} className="border-0 shadow-elegant hover:shadow-orange transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-gradient-to-br from-bem-orange/20 to-bem-orange/40 p-1">
                    <div className="w-full h-full rounded-full bg-bem-gray-light flex items-center justify-center overflow-hidden">
                      <img 
                        src={leader.image} 
                        alt={leader.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.currentTarget as HTMLImageElement;
                          const fallback = target.nextElementSibling as HTMLElement;
                          target.style.display = 'none';
                          if (fallback) fallback.style.display = 'flex';
                        }}
                      />
                      <div className="w-full h-full bg-bem-gray-light flex items-center justify-center" style={{display: 'none'}}>
                        <span className="text-bem-orange font-bold text-lg">
                          {leader.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                        </span>
                      </div>
                    </div>
                  </div>
                  <h3 className="font-bold text-bem-black text-lg mb-1">{leader.name}</h3>
                  <p className="text-bem-orange font-medium text-sm">{leader.position}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Description */}
        <div className="mb-16">
          <div className="flex items-center justify-start mb-8">
            <div className="w-6 h-6 bg-bem-orange rounded mr-3"></div>
            <h2 className="text-3xl font-bold text-bem-black">
              Deskripsi
            </h2>
          </div>
          <Card className="border-0 shadow-elegant bg-gradient-to-r from-bem-orange/5 to-bem-orange/10">
            <CardContent className="p-8">
              <p className="text-bem-gray text-lg leading-relaxed">
                Mengembangkan dan meningkatkan minat akademik dan organisasi mahasiswa Fakultas Sains dan Teknologi. 
                Serta menjadikan BEM FST sebagai badan eksekutif yang berintegritas, inovatif, dan kolaboratif dalam 
                menghadapi tantangan teknologi masa depan.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Organizational Structure */}
        <div className="mb-16">
          <div className="flex items-center justify-start mb-8">
            <div className="w-6 h-6 bg-bem-orange rounded mr-3"></div>
            <h2 className="text-3xl font-bold text-bem-black">
              Struktur Organisasi
            </h2>
          </div>
          
          <div className="grid gap-8">
            {divisions.map((division, index) => (
              <Card key={index} className="border-0 shadow-elegant hover:shadow-orange transition-all duration-300">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-bem-orange mb-2">{division.name}</h3>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-bem-orange/20 to-bem-orange/40 flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-bem-gray-light flex items-center justify-center">
                          <span className="text-bem-orange font-bold text-sm">
                            {division.head.split(' ').map(n => n[0]).join('').slice(0, 2)}
                          </span>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-bold text-bem-black text-lg">{division.head}</h4>
                        <p className="text-bem-orange text-sm font-medium">Kepala Divisi</p>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h5 className="font-semibold text-bem-black mb-3">Deskripsi Divisi</h5>
                    <p className="text-bem-gray">{division.description}</p>
                  </div>

                  {division.members.length > 0 && (
                    <div>
                      <div className="w-full h-px bg-bem-gray-light mb-6"></div>
                      <h5 className="font-semibold text-bem-black mb-4">Anggota Divisi</h5>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {division.members.map((member, memberIndex) => (
                          <div key={memberIndex} className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-bem-orange/20 to-bem-orange/40 flex items-center justify-center">
                              <div className="w-10 h-10 rounded-full bg-bem-gray-light flex items-center justify-center">
                                <span className="text-bem-orange font-bold text-xs">
                                  {member.split(' ').map(n => n[0]).join('').slice(0, 2)}
                                </span>
                              </div>
                            </div>
                            <h6 className="font-medium text-bem-black text-sm">{member}</h6>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
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
      </div>
    </main>
  );
};

export default Profile;