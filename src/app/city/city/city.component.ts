import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss'],
})
export class CityComponent implements OnInit {
  city = '';
  cities = {
    'samsun': {
      img: `/assets/cities/samsun.jpg`,
      title: 'Samsun',
      text: "Samsun, Türkiye'nin büyükşehir statüsündeki otuz ilinden biridir.'Karadeniz'in Başkenti' ve 'Atatürk'ün Şehri' olarak tanıtılmaktadır.",
      notes: [
        {
          author: 'Anonim',
          text: 'Harika bir şehir'
        }
      ],
      yerler:['Atatürk Heykeli','Amisos','Atakum Sahili','Amazon Köyü']
    },
    'ankara': {
      img: `/assets/cities/ankara.jpg`,
      title: 'Ankara',
      text: "Ankara, Türkiye'nin başkenti ve en kalabalık ikinci ilidir.Ankara'da turizm; daha çok yerli turistlerin ziyaretleriyle yürümektedir ve büyük oranda kültür turizmine dayanmaktadır. Ankara, 2018 yılında 3,7 milyon ziyaretçi ile yerli turistlerin en çok konaklama yaptığı 5. Türk şehri olmuştur. Ayrıca turistik tesis ve yatak sayısı bakımından 81 il arasından 11. sırada yer almaktadır.Ankara'nın başkent ilan edilmesinin ardından (13 Ekim 1923) şehir hızla gelişmiş ve Türkiye'nin ikinci en kalabalık ili olmuştur. Türkiye Cumhuriyeti'nin ilk yıllarında ekonomisi tarım ve hayvancılığa dayanan ilin topraklarının yarısı hâlâ tarım amaçlı kullanılmaktadır. Ekonomik etkinlik büyük oranda ticaret ve sanayiye dayalıdır. Tarım ve hayvancılığın ağırlığı ise giderek azalmaktadır. Ankara ve civarındaki gerek kamu sektörü gerek özel sektör yatırımları, başka illerden büyük bir nüfus göçünü teşvik etmiştir. Cumhuriyetin kuruluşundan günümüze, nüfusu ülke nüfusunun iki katı hızda artmıştır.",
      notes: [
        {
          author: 'Anonim',
          text: 'Kesinlikle görülmesi gereken bir yer Anıtkabir.'
        },
        {
          author: 'Ahmet',
          text: 'Atakulenin manzarası harika!'
        }
      ],
      yerler:['Anıtkabir','Atakule','7.Cadde','Hamamönü']
    },
    'trabzon': {
      img: `/assets/cities/trabzon.jpg`,
      title: 'Trabzon',
      text: "Trabzon turizminin önemli bir ayağını oluşturan kültür turizmi sayesinde kente önemli bir turist girdisi sağlanmaktadır.Trabzon kentinin tarihi ve kültürel dokusunu ortaya çıkarmak üzere uzun zamandan beri konuşulan ve tartışılan iki proje uygulamaya başlandı. Bunlardan biri Ortahisar Mahallesi “Turistik Amaçlı Özel Planlama Alanı” projesidir. Trabzon kentinin kurulduğu yer olan ve tarihi dokusu nedeniyle kentsel sit alanı olarak tescillenen Ortahisar Mahallesinde Kültür ve Turizm Bakanlığınca kamulaştırılan 10 bin m2’lik alan, “Turistik Amaçlı Özel Planlama Alanı” olarak yeniden fonksiyonlandırılmak üzere çevre düzenlemesi ve restorasyon projeleri ihalesi yapılmıştır.",
      notes: [{
        author: 'Miray',
        text: 'Mavi ve yeşilin birleştiği doğa harikası muhteşem bir şehir!'
      }],
      yerler:['Sümela Manastırı','Beşikdüzü','Akçabat','Maçka Yaylası']
    },
    'kocaeli': {
      img: `/assets/cities/kocaeli.jpg`,
      title: 'Kocaeli',
      text: "Kocaeli, Türkiye'nin bir ili ve en kalabalık onuncu şehridir. Şehir, ülkenin en büyük sanayi ve ticaret kentlerinden biridir. Kocaeli; SEGE-2011 sıralamasına göre istanbul, Ankara ve İzmir'den sonra en gelişmiş şehirdir. 2019 itibarıyla 1.953.035 kişilik nüfusa sahiptir. Adını 1320 yılında İzmit yöresini fetheden Akça Koca'dan almaktadır. İstanbul, Bursa, Sakarya, Yalova illeriyle komşudur.İlde çok sayıda küçük dere vadisi vardır. Ovalar genellikle akarsuların yığıntılarıyla oluşmuş küçük alüvyal düzlükler niteliğindedir. Karadeniz'e dökülen akarsuların oluşturduğu vadiler, Kocaeli Yarımadası'nın yeni bir biçim almasına yol açan tektonik hareketlerin öncesinde ortaya çıkmış, buna karşılık Marmara Denizi'ne dökülen akarsu vadileri bu hareketlerin sonrasındadır.",
      notes: [{
        author: 'Selma',
        text: 'İzmit ailecek eğlenilebilecek, çeşitli etkinliklere sahip bir şehir'
      }],
      yerler:['İzmit','Yuvacık','Darıca']
    },
    'istanbul': {
      img: `/assets/cities/istanbul.jpg`,
      title: 'İstanbul',
      text: "Dünyanın en eski şehirlerinden biri olan İstanbul, 330-395 yılları arasında Roma İmparatorluğu, 395-1204 yılları arasında Bizans İmparatorluğu, 1204-1261 yılları arasında Latin İmparatorluğu,1261-1453 yılları arasında tekrar Bizans İmparatorluğu ve son olarak 1453-1922 yılları arasında Osmanlı İmparatorluğu'na başkentlik yaptı.Ayrıca İstanbul, Hilâfetin Osmanlı İmparatorluğu'na geçtiği 1517'den kaldırıldığı 1924'e kadar İslam dünyasının da merkezi oldu.stanbul'a çağlar boyunca değişik adlar verilmiştir. Bu kent adları, kent tarihinin farklı dönemleriyle ilişkilidir. Bu adlar tarihsel sırayla, Byzantion, Augusta Antonina, Nova Roma, Konstantinopolis, Kostantiniyye, İslambol ve İstanbul'dur. ",
      notes: [ {
        author: 'Hasan',
        text: "İstanbul'un gece hayatı başka hiçbir yerde yok ."
      },],
      yerler:['Kız Kulesi','Galata Kulesi','Kuzguncuk','Üsküdar']
    },
    'bursa': {
      img: `/assets/cities/bursa.jpg`,
      title: 'Bursa',
      text: "Ekonomik açıdan Türkiye'nin en gelişmiş kentlerinden biri olan Bursa doğal ve tarihsel zenginlikleriyle de önem taşır. Bursa'da en çok Osmanlı İmparatorluğu'nun kuruluş dönemine ait tarihî eserlerin bulunmasının sebebi ise, Bursa'nın Osmanlı Devleti'nin ilk başkenti olmasıdır. ",
      notes: [ {
        author: 'Gözde',
        text: "Koza Han'da tahinli irmik helvası yemeyen çok şey kaybeder"
      },],
      yerler:['Koza Han','Ulu Cami','Tophane']
    },
    'amasya': {
      img: `/assets/cities/amasya.jpg`,
      title: 'Amasya',
      text: "Orta Karadeniz Bölümü'nde yer alır. Anadolu'nun eski yerleşim alanlarından biridir. Hititlerden başlayarak çeşitli uygarlıkların merkezi olmuştur. Kentin bilinen en eski adı, söylendiği biçimi ile günümüze kadar hiçbir değişikliğe uğramadan gelen Amasya’dır. Eski kayıtlarda ve buluntularda Amesseia - Amacia - Amaccia ismi okunmaktadır. Amasya isminin açık bir şekilde okunduğu, Pers, Pontos ve Roma İmparatorluğu dönemlerinde ticarette kullanılan gümüş ve bronz sikkeler (paralar) üzerinde görmek mümkündür.Bazı sikkeler üzerinde Amaccia veya Amacia isimlerine rastlanılmaktadır. Amasya’nın fethinden önce ve sonrasında da Türkler, Amasseia’yı veya Amaccia, Amacia Türkçede söylendiği gibi Amasya yapmışlardır.",
      notes: [ {
        author: 'Ahsen',
        text: 'Tarihi dokusu o kadar güzel bir şehir ki! Sokaklarda yürürken şehzadeler zamanına gittiğini hissedyorsun.'
      },],
      yerler:['Yalı Boyu','Kral Mezarları','Şehzadeler Müzesi']
    },
  };

  constructor(private route: ActivatedRoute, public modalController: ModalController) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.city = params['city'];
   });
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalPage
    });

    modal.onDidDismiss()
    .then((data) => {
      const newNote = data.data;
      if(newNote.author && newNote.text)
        this.cities[this.city].notes.push(newNote);
    });

    return await modal.present();
  }
 
}
