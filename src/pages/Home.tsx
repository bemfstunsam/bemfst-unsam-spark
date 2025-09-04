import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Target, Heart, Award } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative py-20 px-4 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(/lovable-uploads/hero-event-bg.png)`
        }}
      >
        <div className="container mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-bem-orange to-bem-orange-dark mb-6">
              <span className="text-white font-bold text-2xl">BEM</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              BEM FST <span className="text-bem-orange">UNSAM</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Badan Eksekutif Mahasiswa Fakultas Sains dan Teknologi Universitas Samudra
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/program">
                <Button className="bg-bem-orange hover:bg-bem-orange-dark text-white px-8 py-3 text-lg">
                  Lihat Program Kerja
                </Button>
              </Link>
              <Link to="/profil">
                <Button variant="outline" className="border-bem-orange text-bem-orange hover:bg-bem-orange hover:text-white px-8 py-3 text-lg">
                  Tentang Kami
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 px-4 bg-bem-gray-light">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-elegant">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <Target className="h-8 w-8 text-bem-orange" />
                  <CardTitle className="text-bem-black text-2xl">Visi</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-bem-gray leading-relaxed">
                  Mengembangkan dan meningkatkan minat akademik dan organisasi mahasiswa Fakultas Sains dan Teknologi. 
                  Serta menjadikan BEM FST sebagai badan eksekutif yang berintegritas.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-elegant">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <Heart className="h-8 w-8 text-bem-orange" />
                  <CardTitle className="text-bem-black text-2xl">Misi</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="text-bem-gray leading-relaxed space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-bem-orange mt-2 flex-shrink-0"></div>
                    <span>Membantu mengembangkan potensi serta minat akademik dan organisasi mahasiswa.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-bem-orange mt-2 flex-shrink-0"></div>
                    <span>Meningkatkan kerjasama dan keharmonisan dengan IKA FT.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-bem-orange mt-2 flex-shrink-0"></div>
                    <span>Meningkatkan keharmonisan dan loyalitas sesama mahasiswa FST.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-bem-orange mt-2 flex-shrink-0"></div>
                    <span>Meningkatkan integritas BEM dan seluruh mahasiswa FST.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-bem-black mb-4">
              Tentang BEM FST UNSAM
            </h2>
            <div className="w-20 h-1 bg-bem-orange mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center border-0 shadow-elegant group hover:shadow-orange transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-16 h-16 rounded-full bg-bem-orange/10 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-bem-orange" />
                </div>
                <h3 className="font-semibold text-bem-black mb-2">20 Pengurus</h3>
                <p className="text-bem-gray text-sm">Total pengurus aktif BEM FST</p>
              </CardContent>
            </Card>
            
            <Card className="text-center border-0 shadow-elegant group hover:shadow-orange transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-16 h-16 rounded-full bg-bem-orange/10 flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-bem-orange" />
                </div>
                <h3 className="font-semibold text-bem-black mb-2">32 Tahun</h3>
                <p className="text-bem-gray text-sm">Pengalaman berorganisasi</p>
              </CardContent>
            </Card>
            
            <Card className="text-center border-0 shadow-elegant group hover:shadow-orange transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-16 h-16 rounded-full bg-bem-orange/10 flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-bem-orange" />
                </div>
                <h3 className="font-semibold text-bem-black mb-2">Berintegritas</h3>
                <p className="text-bem-gray text-sm">Komitmen organisasi kami</p>
              </CardContent>
            </Card>
          </div>
          
          <Card className="border-0 shadow-elegant bg-gradient-to-r from-bem-orange/5 to-bem-orange/10">
            <CardContent className="p-8">
              <p className="text-bem-gray text-lg leading-relaxed text-center">
                Badan Eksekutif Mahasiswa (BEM) adalah lembaga eksekutif tertinggi di lingkungan universitas maupun fakultas. 
                BEM-FT Unsam berkedudukan di Fakultas Teknik Universitas Samudra dan terbentuknya pada tanggal 05 juni 1992 
                kemudian berubah nama menjadi BEM FST-UNSAM pada tanggal 27 Januari 2025 dan berkedudukan di Fakultas Sains 
                dan Teknologi Universitas Samudra. Terjadinya perubahan nama setelah 32 tahun berdiri dikarenakan adanya 
                perubahan nama Fakultas, dari Fakultas Teknik menjadi Fakultas Sains dan Teknologi.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
};

export default Home;