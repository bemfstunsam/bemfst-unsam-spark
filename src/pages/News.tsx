import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Trophy, FileText, Users } from "lucide-react";

const News = () => {
  return (
    <main className="min-h-screen py-8 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-bem-black mb-4">
            Berita & <span className="text-bem-gold">Informasi</span>
          </h1>
          <p className="text-bem-gray text-lg max-w-2xl mx-auto">
            Dapatkan informasi terbaru tentang kegiatan dan program BEM FST UNSAM
          </p>
          <div className="w-20 h-1 bg-bem-gold mx-auto mt-4"></div>
        </div>

        {/* Featured News */}
        <div className="mb-12">
          <Card className="border-0 shadow-elegant overflow-hidden">
            <div className="bg-gradient-to-r from-bem-gold to-bem-gold-dark p-6">
              <div className="flex items-center gap-2 mb-4">
                <Trophy className="h-6 w-6 text-white" />
                <Badge className="bg-white/20 text-white border-white/30">
                  LOMBA TERBARU
                </Badge>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Lomba Karya Tulis Ilmiah
              </h2>
              <p className="text-white/90 text-lg">
                Bertemakan Inovasi Teknologi
              </p>
            </div>
            
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-full bg-bem-gold/10 flex items-center justify-center">
                      <FileText className="h-6 w-6 text-bem-gold" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-bem-black">Tema: Inovasi Teknologi</h3>
                      <p className="text-bem-gray text-sm">Kategori: Karya Tulis Ilmiah</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start gap-3">
                      <Calendar className="h-5 w-5 text-bem-gold mt-1" />
                      <div>
                        <h4 className="font-medium text-bem-black">Pendaftaran</h4>
                        <p className="text-bem-gray text-sm">1 September - 15 September 2025</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Users className="h-5 w-5 text-bem-gold mt-1" />
                      <div>
                        <h4 className="font-medium text-bem-black">Peserta</h4>
                        <p className="text-bem-gray text-sm">Mahasiswa Fakultas Sains dan Teknologi</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Trophy className="h-5 w-5 text-bem-gold mt-1" />
                      <div>
                        <h4 className="font-medium text-bem-black">Hadiah</h4>
                        <p className="text-bem-gray text-sm">Total hadiah Rp 5.000.000</p>
                      </div>
                    </div>
                  </div>
                  
                  <Button className="bg-bem-gold hover:bg-bem-gold-dark text-white">
                    Daftar Sekarang
                  </Button>
                </div>
                
                <div className="space-y-6">
                  <Card className="border border-bem-gold/20 bg-bem-gold/5">
                    <CardContent className="p-6">
                      <h4 className="font-semibold text-bem-black mb-3">Ketentuan Lomba</h4>
                      <ul className="space-y-2 text-bem-gray text-sm">
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-bem-gold mt-2 flex-shrink-0"></div>
                          <span>Karya tulis berupa penelitian tentang inovasi teknologi</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-bem-gold mt-2 flex-shrink-0"></div>
                          <span>Maksimal 20 halaman (format A4, font Times New Roman 12pt)</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-bem-gold mt-2 flex-shrink-0"></div>
                          <span>Karya asli dan belum pernah dipublikasikan</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-bem-gold mt-2 flex-shrink-0"></div>
                          <span>Tim maksimal 3 orang</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card className="border border-bem-gold/20 bg-bem-gold/5">
                    <CardContent className="p-6">
                      <h4 className="font-semibold text-bem-black mb-3">Timeline</h4>
                      <div className="space-y-3 text-sm">
                        <div className="flex justify-between">
                          <span className="text-bem-gray">Pendaftaran</span>
                          <span className="text-bem-black font-medium">1-15 Sep 2025</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-bem-gray">Pengumpulan Karya</span>
                          <span className="text-bem-black font-medium">16-20 Sep 2025</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-bem-gray">Penilaian</span>
                          <span className="text-bem-black font-medium">21-25 Sep 2025</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-bem-gray">Pengumuman</span>
                          <span className="text-bem-black font-medium">30 Sep 2025</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="border-0 shadow-elegant hover:shadow-gold transition-all duration-300">
            <CardContent className="p-6">
              <div className="w-full h-48 bg-gradient-to-br from-bem-gold/20 to-bem-gold/40 rounded-lg mb-4 flex items-center justify-center">
                <Users className="h-12 w-12 text-bem-gold" />
              </div>
              <Badge className="mb-3 bg-bem-gold/10 text-bem-gold border-bem-gold/20">
                KEGIATAN
              </Badge>
              <h3 className="font-bold text-bem-black mb-2">
                PKKMB 2025
              </h3>
              <p className="text-bem-gray text-sm mb-4">
                Pengenalan Kehidupan Kampus bagi Mahasiswa Baru Fakultas Sains dan Teknologi tahun 2025.
              </p>
              <div className="flex items-center text-bem-gray text-xs">
                <Calendar className="h-4 w-4 mr-1" />
                <span>Agustus 2025</span>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-elegant hover:shadow-gold transition-all duration-300">
            <CardContent className="p-6">
              <div className="w-full h-48 bg-gradient-to-br from-bem-gold/20 to-bem-gold/40 rounded-lg mb-4 flex items-center justify-center">
                <Trophy className="h-12 w-12 text-bem-gold" />
              </div>
              <Badge className="mb-3 bg-bem-gold/10 text-bem-gold border-bem-gold/20">
                KOMPETISI
              </Badge>
              <h3 className="font-bold text-bem-black mb-2">
                Festival FST Fest
              </h3>
              <p className="text-bem-gray text-sm mb-4">
                Festival tahunan yang menampilkan berbagai kompetisi dan pertunjukan mahasiswa FST.
              </p>
              <div className="flex items-center text-bem-gray text-xs">
                <Calendar className="h-4 w-4 mr-1" />
                <span>Oktober 2025</span>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-elegant hover:shadow-gold transition-all duration-300">
            <CardContent className="p-6">
              <div className="w-full h-48 bg-gradient-to-br from-bem-gold/20 to-bem-gold/40 rounded-lg mb-4 flex items-center justify-center">
                <FileText className="h-12 w-12 text-bem-gold" />
              </div>
              <Badge className="mb-3 bg-bem-gold/10 text-bem-gold border-bem-gold/20">
                PENGUMUMAN
              </Badge>
              <h3 className="font-bold text-bem-black mb-2">
                Diskusi IKA-FT
              </h3>
              <p className="text-bem-gray text-sm mb-4">
                Diskusi dan kerjasama dengan Ikatan Alumni Fakultas Teknik untuk pengembangan organisasi.
              </p>
              <div className="flex items-center text-bem-gray text-xs">
                <Calendar className="h-4 w-4 mr-1" />
                <span>Oktober 2025</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
};

export default News;