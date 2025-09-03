import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users, Target, Megaphone, Book, Code2, Heart, Mic } from "lucide-react";

const Programs = () => {
  const programs = [
    {
      name: "Ramadhan Kareem / Buka Bersama",
      bidang: "Agama",
      bulan: "26 Maret 2025",
      icon: Heart,
      color: "bg-green-500",
      description: "Kegiatan buka bersama dalam rangka menyambut bulan suci Ramadhan"
    },
    {
      name: "Fun Sport",
      bidang: "Minba",
      bulan: "04-05 Mei 2025",
      icon: Target,
      color: "bg-blue-500",
      description: "Kompetisi olahraga antar mahasiswa FST untuk mempererat silaturahmi"
    },
    {
      name: "BEM FST Peduli",
      bidang: "Humas",
      bulan: "22 Mei 2025",
      icon: Heart,
      color: "bg-red-500",
      description: "Program kepedulian sosial BEM FST kepada masyarakat sekitar"
    },
    {
      name: "Sanggar Fakultas",
      bidang: "Minba",
      bulan: "Mei 2025",
      icon: Book,
      color: "bg-purple-500",
      description: "Wadah pengembangan bakat dan minat mahasiswa FST"
    },
    {
      name: "Podcast",
      bidang: "Kominfo",
      bulan: "Mei 2025",
      icon: Mic,
      color: "bg-yellow-500",
      description: "Program podcast BEM FST untuk berbagi informasi dan edukasi"
    },
    {
      name: "Website BEM FST",
      bidang: "Ristek",
      bulan: "Juni 2025",
      icon: Code2,
      color: "bg-indigo-500",
      description: "Pengembangan website resmi BEM FST UNSAM"
    },
    {
      name: "PKKMB",
      bidang: "Humas",
      bulan: "Agustus 2025",
      icon: Users,
      color: "bg-bem-orange",
      description: "Pengenalan Kehidupan Kampus bagi Mahasiswa Baru FST"
    },
    {
      name: "Makrab",
      bidang: "Humas",
      bulan: "Agustus 2025",
      icon: Users,
      color: "bg-teal-500",
      description: "Malam Keakraban untuk mempererat hubungan antar mahasiswa"
    },
    {
      name: "Maulid Nabi Muhammad",
      bidang: "Agama",
      bulan: "September 2025",
      icon: Heart,
      color: "bg-green-600",
      description: "Peringatan Maulid Nabi Muhammad SAW"
    },
    {
      name: "Lomba Karya Tulis Ilmiah",
      bidang: "Ristek",
      bulan: "September 2025",
      icon: Book,
      color: "bg-orange-500",
      description: "Kompetisi karya tulis ilmiah bertemakan inovasi teknologi"
    },
    {
      name: "Diskusi IKA-FT",
      bidang: "Humas",
      bulan: "Oktober 2025",
      icon: Megaphone,
      color: "bg-gray-500",
      description: "Diskusi dan sharing session dengan alumni Fakultas Teknik"
    },
    {
      name: "Festival FST Fest",
      bidang: "Humas dan Minba",
      bulan: "Oktober 2025",
      icon: Target,
      color: "bg-pink-500",
      description: "Festival tahunan FST dengan berbagai kompetisi dan pertunjukan"
    },
    {
      name: "Mengelola Sosial Media BEM FST",
      bidang: "Kominfo",
      bulan: "Kondisional",
      icon: Megaphone,
      color: "bg-cyan-500",
      description: "Pengelolaan dan pengembangan media sosial BEM FST"
    }
  ];

  const bidangColors = {
    "Agama": "bg-green-100 text-green-800 border-green-200",
    "Minba": "bg-blue-100 text-blue-800 border-blue-200",
    "Humas": "bg-purple-100 text-purple-800 border-purple-200",
    "Kominfo": "bg-yellow-100 text-yellow-800 border-yellow-200",
    "Ristek": "bg-bem-orange/10 text-bem-orange-dark border-bem-orange/20",
    "Humas dan Minba": "bg-pink-100 text-pink-800 border-pink-200"
  };

  return (
    <main className="min-h-screen py-8 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-bem-black mb-4">
            Program <span className="text-bem-orange">Kerja</span>
          </h1>
          <p className="text-bem-gray text-lg max-w-2xl mx-auto">
            Rencana kegiatan BEM FST UNSAM periode 2025 untuk mengembangkan potensi mahasiswa
          </p>
          <div className="w-20 h-1 bg-bem-orange mx-auto mt-4"></div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <Card className="border-0 shadow-elegant text-center">
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-bem-orange mb-1">13</div>
              <p className="text-bem-gray text-sm">Total Program</p>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-elegant text-center">
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-bem-orange mb-1">5</div>
              <p className="text-bem-gray text-sm">Bidang Kerja</p>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-elegant text-center">
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-bem-orange mb-1">10</div>
              <p className="text-bem-gray text-sm">Bulan Aktif</p>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-elegant text-center">
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-bem-orange mb-1">2025</div>
              <p className="text-bem-gray text-sm">Periode</p>
            </CardContent>
          </Card>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, index) => (
            <Card key={index} className="border-0 shadow-elegant hover:shadow-orange transition-all duration-300 group">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-12 h-12 rounded-lg ${program.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <program.icon className="h-6 w-6 text-white" />
                  </div>
                  <Badge className={bidangColors[program.bidang as keyof typeof bidangColors] || "bg-gray-100 text-gray-800"}>
                    {program.bidang}
                  </Badge>
                </div>
                <CardTitle className="text-bem-black text-lg leading-tight">
                  {program.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-bem-gray text-sm mb-4 leading-relaxed">
                  {program.description}
                </p>
                <div className="flex items-center gap-2 text-sm">
                  <Calendar className="h-4 w-4 text-bem-orange" />
                  <span className="text-bem-black font-medium">{program.bulan}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Timeline Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-bem-black text-center mb-8">
            Timeline <span className="text-bem-orange">2025</span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-bem-orange/30 transform md:-translate-x-px"></div>
              
              {programs.filter(p => p.bulan !== "Kondisional").map((program, index) => (
                <div key={index} className={`relative flex items-center mb-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-bem-orange rounded-full transform md:-translate-x-1/2 z-10"></div>
                  
                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                    <Card className="border-0 shadow-elegant">
                      <CardContent className="p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge className={bidangColors[program.bidang as keyof typeof bidangColors] || "bg-gray-100 text-gray-800"}>
                            {program.bidang}
                          </Badge>
                          <span className="text-sm text-bem-gray">{program.bulan}</span>
                        </div>
                        <h3 className="font-semibold text-bem-black text-sm">{program.name}</h3>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Programs;