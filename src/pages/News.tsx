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
            Berita & <span className="text-bem-orange">Informasi</span>
          </h1>
          <p className="text-bem-gray text-lg max-w-2xl mx-auto">
            Dapatkan informasi terbaru tentang kegiatan dan program BEM FST UNSAM
          </p>
          <div className="w-20 h-1 bg-bem-orange mx-auto mt-4"></div>
        </div>

        {/* Featured News */}
        <div className="mb-12">
          <Card className="border-0 shadow-elegant overflow-hidden">
            <div className="bg-gradient-to-r from-bem-orange to-bem-orange-dark p-6">
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
                    <div className="w-12 h-12 rounded-full bg-bem-orange/10 flex items-center justify-center">
                      <FileText className="h-6 w-6 text-bem-orange" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-bem-black">Tema: Inovasi Teknologi</h3>
                      <p className="text-bem-gray text-sm">Kategori: Karya Tulis Ilmiah</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start gap-3">
                      <Calendar className="h-5 w-5 text-bem-orange mt-1" />
                      <div>
                        <p className="font-medium text-bem-black">Periode Lomba</p>
                        <p className="text-bem-gray">September 2025</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Users className="h-5 w-5 text-bem-orange mt-1" />
                      <div>
                        <p className="font-medium text-bem-black">Peserta</p>
                        <p className="text-bem-gray">Mahasiswa FST UNSAM</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Trophy className="h-5 w-5 text-bem-orange mt-1" />
                      <div>
                        <p className="font-medium text-bem-black">Penyelenggara</p>
                        <p className="text-bem-gray">Bidang Ristek BEM FST</p>
                      </div>
                    </div>
                  </div>
                  
                  <Button className="bg-bem-orange hover:bg-bem-orange-dark text-white">
                    Daftar Sekarang
                  </Button>
                </div>
                
                <div className="space-y-4">
                  <Card className="border border-bem-orange/20 bg-bem-orange/5">
                    <CardContent className="p-6">
                      <h4 className="font-semibold text-bem-black mb-3">Ketentuan Lomba:</h4>
                      <ul className="space-y-2 text-bem-gray">
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 rounded-full bg-bem-orange mt-2 flex-shrink-0"></div>
                          <span>Karya tulis bersifat original dan belum pernah dipublikasikan</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 rounded-full bg-bem-orange mt-2 flex-shrink-0"></div>
                          <span>Tema harus berkaitan dengan inovasi teknologi terkini</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 rounded-full bg-bem-orange mt-2 flex-shrink-0"></div>
                          <span>Maksimal 3 penulis per tim</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 rounded-full bg-bem-orange mt-2 flex-shrink-0"></div>
                          <span>Format penulisan sesuai template yang disediakan</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card className="border border-bem-orange/20 bg-bem-orange/5">
                    <CardContent className="p-6">
                      <h4 className="font-semibold text-bem-black mb-3">Hadiah Menarik:</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-bem-gray">Juara 1</span>
                          <span className="font-semibold text-bem-black">Rp 2.000.000 + Sertifikat</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-bem-gray">Juara 2</span>
                          <span className="font-semibold text-bem-black">Rp 1.500.000 + Sertifikat</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-bem-gray">Juara 3</span>
                          <span className="font-semibold text-bem-black">Rp 1.000.000 + Sertifikat</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Other News */}
        <div>
          <h3 className="text-2xl font-bold text-bem-black mb-6">Berita Lainnya</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-0 shadow-elegant hover:shadow-orange transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="w-full h-48 bg-gradient-to-br from-bem-orange/20 to-bem-orange/40 rounded-lg mb-4 flex items-center justify-center">
                  <Users className="h-12 w-12 text-bem-orange" />
                </div>
                <CardTitle className="text-bem-black">PKKMB 2025</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-bem-gray mb-4">
                  Persiapan Pengenalan Kehidupan Kampus bagi Mahasiswa Baru FST UNSAM.
                </p>
                <div className="flex items-center gap-2 text-sm text-bem-gray">
                  <Calendar className="h-4 w-4" />
                  <span>Agustus 2025</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-elegant hover:shadow-orange transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="w-full h-48 bg-gradient-to-br from-bem-orange/20 to-bem-orange/40 rounded-lg mb-4 flex items-center justify-center">
                  <Trophy className="h-12 w-12 text-bem-orange" />
                </div>
                <CardTitle className="text-bem-black">FST Fest 2025</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-bem-gray mb-4">
                  Festival tahunan Fakultas Sains dan Teknologi dengan berbagai kompetisi menarik.
                </p>
                <div className="flex items-center gap-2 text-sm text-bem-gray">
                  <Calendar className="h-4 w-4" />
                  <span>Oktober 2025</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-elegant hover:shadow-orange transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="w-full h-48 bg-gradient-to-br from-bem-orange/20 to-bem-orange/40 rounded-lg mb-4 flex items-center justify-center">
                  <FileText className="h-12 w-12 text-bem-orange" />
                </div>
                <CardTitle className="text-bem-black">Website Baru</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-bem-gray mb-4">
                  Launching website resmi BEM FST UNSAM dengan fitur-fitur terbaru.
                </p>
                <div className="flex items-center gap-2 text-sm text-bem-gray">
                  <Calendar className="h-4 w-4" />
                  <span>Juni 2025</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
};

export default News;
