// Enteral Ürünler — ürün verisi ve ESPEN hedef/senaryo tanımları
//
// Yeni bir ürün eklemek için: PRODUCTS dizisine, mevcut ürünlerle aynı şekilde
// { "isim", "uretici", "veriler": [...], "endikasyon", "hedefKitle", "form",
//   "diyabetik", "renal", "immun", "kcal100", "protein100", "lif100",
//   "osmolarite", "lifVar" } alanlarını içeren yeni bir obje eklemek yeterli.
// Bu dosya index.html tarafından <script src="data.js"></script> ile
// çağrılır; index.html'in kendisine dokunmaya gerek kalmaz.

const PRODUCTS = [
 {
  "isim": "Nutrivigor",
  "uretici": "Abbott",
  "veriler": [
   {
    "kategori": "Makro",
    "bilesen": "Enerji",
    "birim": "kcal",
    "hedef": "1500 kcal (Akut <48-72s: <%70; >3. gün: 20-25 kcal/kg/gün)",
    "deger": "150"
   },
   {
    "kategori": "Makro",
    "bilesen": "Enerji",
    "birim": "kJ",
    "hedef": "6276 kJ",
    "deger": "631"
   },
   {
    "kategori": "Makro",
    "bilesen": "Protein",
    "birim": "g",
    "hedef": "1.3 g/kg/gün (1.2 - 1.5; KRT/Obezitede 2.0'ye kadar)",
    "deger": "8.00"
   },
   {
    "kategori": "Makro",
    "bilesen": "Yağ",
    "birim": "g",
    "hedef": "Maks 1.5 g/kg/gün",
    "deger": "4.85"
   },
   {
    "kategori": "Makro",
    "bilesen": "Doymuş Yağ",
    "birim": "g",
    "hedef": "-",
    "deger": "1.22"
   },
   {
    "kategori": "Makro",
    "bilesen": "Tekli Doymamış Yağ",
    "birim": "g",
    "hedef": "-",
    "deger": "2.70"
   },
   {
    "kategori": "Makro",
    "bilesen": "Çoklu Doymamış Yağ",
    "birim": "g",
    "hedef": "-",
    "deger": "0.67"
   },
   {
    "kategori": "Makro",
    "bilesen": "Karbonhidrat",
    "birim": "g",
    "hedef": "Maks 5 mg/kg/dk infüzyon hızı",
    "deger": "18.00"
   },
   {
    "kategori": "Makro",
    "bilesen": "Şekerler",
    "birim": "g",
    "hedef": "-",
    "deger": "-"
   },
   {
    "kategori": "Makro",
    "bilesen": "Polioller",
    "birim": "g",
    "hedef": "-",
    "deger": "-"
   },
   {
    "kategori": "Makro",
    "bilesen": "Lif / FOS",
    "birim": "g",
    "hedef": "10 - 20 g/gün (iskemi/şokta kontrendike)",
    "deger": "0.75"
   },
   {
    "kategori": "Makro",
    "bilesen": "Diyet Lifi",
    "birim": "g",
    "hedef": "-",
    "deger": "-"
   },
   {
    "kategori": "Makro",
    "bilesen": "FOS",
    "birim": "g",
    "hedef": "-",
    "deger": "0.75"
   },
   {
    "kategori": "Makro",
    "bilesen": "Tuz (NaCl)",
    "birim": "g",
    "hedef": "4 - 6 g/gün",
    "deger": "0.28"
   },
   {
    "kategori": "Makro",
    "bilesen": "Su / Sıvı Gereksinimi",
    "birim": "mL/gün",
    "hedef": "25 - 30 mL/kg/gün (veya 1 mL / kcal)",
    "deger": "-"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin A",
    "birim": "mcg RE",
    "hedef": "900 - 1500",
    "deger": "80 (60 palmitat + 20 b-karoten)"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin D3",
    "birim": "mcg",
    "hedef": "En az 25 mcg (1000 IU)",
    "deger": "2.5 (100 IU)"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin E",
    "birim": "mg a-TE",
    "hedef": "En az 15",
    "deger": "2.5"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin K1",
    "birim": "mcg",
    "hedef": "En az 120",
    "deger": "15"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin C",
    "birim": "mg",
    "hedef": "En az 100",
    "deger": "16"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Folik Asit",
    "birim": "mcg",
    "hedef": "330 - 400 DFE",
    "deger": "35"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin B1 (Tiamin)",
    "birim": "mg",
    "hedef": "1.5 - 3.0",
    "deger": "0.20"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin B2 (Riboflavin)",
    "birim": "mg",
    "hedef": "En az 1.2",
    "deger": "0.34"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin B6 (Piridoksin)",
    "birim": "mg",
    "hedef": "En az 1.5",
    "deger": "0.34"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin B12",
    "birim": "mcg",
    "hedef": "En az 2.5",
    "deger": "0.55"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Niasin",
    "birim": "mg NE",
    "hedef": "18 - 40",
    "deger": "3.0"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Pantotenik Asit",
    "birim": "mg",
    "hedef": "En az 5.0",
    "deger": "1.0"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Biotin",
    "birim": "mcg",
    "hedef": "En az 30",
    "deger": "6.0"
   },
   {
    "kategori": "Elektrolit",
    "bilesen": "Sodyum (Na)",
    "birim": "mg",
    "hedef": "1500 - 3000 mg/gün (1 - 2 mmol/kg/gün)",
    "deger": "110"
   },
   {
    "kategori": "Elektrolit",
    "bilesen": "Potasyum (K)",
    "birim": "mg",
    "hedef": "2000 - 3500 mg/gün (1 - 1.5 mmol/kg/gün)",
    "deger": "235"
   },
   {
    "kategori": "Elektrolit",
    "bilesen": "Klor (Cl)",
    "birim": "mg",
    "hedef": "1 - 2 mmol/kg/gün (Na/K'ya paralel)",
    "deger": "80"
   },
   {
    "kategori": "Elektrolit",
    "bilesen": "Kalsiyum (Ca)",
    "birim": "mg",
    "hedef": "500 - 1000 mg/gün (10 - 15 mmol/gün)",
    "deger": "125"
   },
   {
    "kategori": "Elektrolit",
    "bilesen": "Fosfor (P)",
    "birim": "mg",
    "hedef": "700 - 1000 mg/gün (20 - 30 mmol/gün)",
    "deger": "100"
   },
   {
    "kategori": "Elektrolit",
    "bilesen": "Magnezyum (Mg)",
    "birim": "mg",
    "hedef": "250 - 400 mg/gün (10 - 15 mmol/gün)",
    "deger": "27"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Demir (Fe)",
    "birim": "mg",
    "hedef": "18 - 30",
    "deger": "2.0"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Çinko (Zn)",
    "birim": "mg",
    "hedef": "10 - 20",
    "deger": "1.8"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Manganez (Mn)",
    "birim": "mg",
    "hedef": "2 - 3 (maks 6)",
    "deger": "0.45"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Bakır (Cu)",
    "birim": "mcg",
    "hedef": "1000 - 3000",
    "deger": "245"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "İyot (I)",
    "birim": "mcg",
    "hedef": "150 - 300",
    "deger": "15"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Selenyum (Se)",
    "birim": "mcg",
    "hedef": "50 - 150",
    "deger": "9.0"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Krom (Cr)",
    "birim": "mcg",
    "hedef": "35 - 150",
    "deger": "7.0"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Molibden (Mo)",
    "birim": "mcg",
    "hedef": "50 - 250",
    "deger": "15"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Florür (F)",
    "birim": "mg",
    "hedef": "0 - 3",
    "deger": "-"
   },
   {
    "kategori": "Özel",
    "bilesen": "CaHMB",
    "birim": "g",
    "hedef": "3.0 g/gün (sarkopeni/ağır katabolizmada)",
    "deger": "0.30"
   },
   {
    "kategori": "Özel",
    "bilesen": "Kolin",
    "birim": "mg",
    "hedef": "400 - 550 mg/gün (Adequate Intake - AI)",
    "deger": "60"
   },
   {
    "kategori": "Özel",
    "bilesen": "Taurin",
    "birim": "mg",
    "hedef": "-",
    "deger": "15"
   },
   {
    "kategori": "Özel",
    "bilesen": "L-Karnitin",
    "birim": "mg",
    "hedef": "500 - 1000 mg/gün (diyaliz/kayıplarda)",
    "deger": "12"
   },
   {
    "kategori": "Fizikokimya",
    "bilesen": "Osmolarite",
    "birim": "mOsm/l",
    "hedef": "İzo-ozmolar (280-350) veya makul (<450-500)",
    "deger": "382"
   },
   {
    "kategori": "Fizikokimya",
    "bilesen": "Osmolalite",
    "birim": "mOsm/kg su",
    "hedef": "İzo-ozmolar (280-350)",
    "deger": "501"
   },
   {
    "kategori": "Fizikokimya",
    "bilesen": "Renal Solüt Yükü",
    "birim": "mOsm/l",
    "hedef": "300 - 600",
    "deger": "587"
   }
  ],
  "kcal": null,
  "kcal100": 150.0,
  "protein100": 8.0,
  "lif100": 0.75,
  "osmolarite": 382.0,
  "lifVar": true,
  "endikasyon": "Protein + HMB içerikli oral beslenme takviyesi; sarkopeni ve kas kütlesi kaybının desteklenmesi.",
  "hedefKitle": "Erişkin",
  "form": "Toz (sulandırılarak içilir)",
  "diyabetik": false,
  "renal": false,
  "immun": false
 },
 {
  "isim": "Glucerna SR",
  "uretici": "Abbott",
  "veriler": [
   {
    "kategori": "Makro",
    "bilesen": "Enerji",
    "birim": "kcal",
    "hedef": "1500 kcal (Akut <48-72s: <%70; >3. gün: 20-25 kcal/kg/gün)",
    "deger": "93"
   },
   {
    "kategori": "Makro",
    "bilesen": "Enerji",
    "birim": "kJ",
    "hedef": "6276 kJ",
    "deger": "390"
   },
   {
    "kategori": "Makro",
    "bilesen": "Protein",
    "birim": "g",
    "hedef": "1.3 g/kg/gün (1.2 - 1.5; KRT/Obezitede 2.0'ye kadar)",
    "deger": "4.29"
   },
   {
    "kategori": "Makro",
    "bilesen": "Yağ",
    "birim": "g",
    "hedef": "Maks 1.5 g/kg/gün",
    "deger": "3.50"
   },
   {
    "kategori": "Makro",
    "bilesen": "Doymuş Yağ",
    "birim": "g",
    "hedef": "-",
    "deger": "0.30"
   },
   {
    "kategori": "Makro",
    "bilesen": "Tekli Doymamış Yağ",
    "birim": "g",
    "hedef": "-",
    "deger": "2.25"
   },
   {
    "kategori": "Makro",
    "bilesen": "Çoklu Doymamış Yağ",
    "birim": "g",
    "hedef": "-",
    "deger": "0.80"
   },
   {
    "kategori": "Makro",
    "bilesen": "Karbonhidrat",
    "birim": "g",
    "hedef": "Maks 5 mg/kg/dk infüzyon hızı",
    "deger": "10.87"
   },
   {
    "kategori": "Makro",
    "bilesen": "Şekerler",
    "birim": "g",
    "hedef": "-",
    "deger": "2.00"
   },
   {
    "kategori": "Makro",
    "bilesen": "Polioller",
    "birim": "g",
    "hedef": "-",
    "deger": "2.17"
   },
   {
    "kategori": "Makro",
    "bilesen": "Lif / FOS",
    "birim": "g",
    "hedef": "10 - 20 g/gün (iskemi/şokta kontrendike)",
    "deger": "2.25"
   },
   {
    "kategori": "Makro",
    "bilesen": "Diyet Lifi",
    "birim": "g",
    "hedef": "-",
    "deger": "1.80"
   },
   {
    "kategori": "Makro",
    "bilesen": "FOS",
    "birim": "g",
    "hedef": "-",
    "deger": "0.45"
   },
   {
    "kategori": "Makro",
    "bilesen": "Tuz (NaCl)",
    "birim": "g",
    "hedef": "4 - 6 g/gün",
    "deger": "0.24"
   },
   {
    "kategori": "Makro",
    "bilesen": "Su / Sıvı Gereksinimi",
    "birim": "mL/gün",
    "hedef": "25 - 30 mL/kg/gün (veya 1 mL / kcal)",
    "deger": "-"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin A",
    "birim": "mcg RE",
    "hedef": "900 - 1500",
    "deger": "100"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin D3",
    "birim": "mcg",
    "hedef": "En az 25 mcg (1000 IU)",
    "deger": "0.63 (~25.2 IU)"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin E",
    "birim": "mg a-TE",
    "hedef": "En az 15",
    "deger": "1.8"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin K1",
    "birim": "mcg",
    "hedef": "En az 120",
    "deger": "6.0"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin C",
    "birim": "mg",
    "hedef": "En az 100",
    "deger": "9.0"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Folik Asit",
    "birim": "mcg",
    "hedef": "330 - 400 DFE",
    "deger": "25"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin B1 (Tiamin)",
    "birim": "mg",
    "hedef": "1.5 - 3.0",
    "deger": "0.17"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin B2 (Riboflavin)",
    "birim": "mg",
    "hedef": "En az 1.2",
    "deger": "0.20"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin B6 (Piridoksin)",
    "birim": "mg",
    "hedef": "En az 1.5",
    "deger": "0.26"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin B12",
    "birim": "mcg",
    "hedef": "En az 2.5",
    "deger": "0.40"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Niasin",
    "birim": "mg NE",
    "hedef": "18 - 40",
    "deger": "2.0"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Pantotenik Asit",
    "birim": "mg",
    "hedef": "En az 5.0",
    "deger": "0.75"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Biotin",
    "birim": "mcg",
    "hedef": "En az 30",
    "deger": "4.0"
   },
   {
    "kategori": "Elektrolit",
    "bilesen": "Sodyum (Na)",
    "birim": "mg",
    "hedef": "1500 - 3000 mg/gün (1 - 2 mmol/kg/gün)",
    "deger": "95"
   },
   {
    "kategori": "Elektrolit",
    "bilesen": "Potasyum (K)",
    "birim": "mg",
    "hedef": "2000 - 3500 mg/gün (1 - 1.5 mmol/kg/gün)",
    "deger": "150"
   },
   {
    "kategori": "Elektrolit",
    "bilesen": "Klor (Cl)",
    "birim": "mg",
    "hedef": "1 - 2 mmol/kg/gün (Na/K'ya paralel)",
    "deger": "130"
   },
   {
    "kategori": "Elektrolit",
    "bilesen": "Kalsiyum (Ca)",
    "birim": "mg",
    "hedef": "500 - 1000 mg/gün (10 - 15 mmol/gün)",
    "deger": "85"
   },
   {
    "kategori": "Elektrolit",
    "bilesen": "Fosfor (P)",
    "birim": "mg",
    "hedef": "700 - 1000 mg/gün (20 - 30 mmol/gün)",
    "deger": "60"
   },
   {
    "kategori": "Elektrolit",
    "bilesen": "Magnezyum (Mg)",
    "birim": "mg",
    "hedef": "250 - 400 mg/gün (10 - 15 mmol/gün)",
    "deger": "18"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Demir (Fe)",
    "birim": "mg",
    "hedef": "18 - 30",
    "deger": "1.3"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Çinko (Zn)",
    "birim": "mg",
    "hedef": "10 - 20",
    "deger": "1.1"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Manganez (Mn)",
    "birim": "mg",
    "hedef": "2 - 3 (maks 6)",
    "deger": "0.25"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Bakır (Cu)",
    "birim": "mcg",
    "hedef": "1000 - 3000",
    "deger": "140"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "İyot (I)",
    "birim": "mcg",
    "hedef": "150 - 300",
    "deger": "16"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Selenyum (Se)",
    "birim": "mcg",
    "hedef": "50 - 150",
    "deger": "6.0"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Krom (Cr)",
    "birim": "mcg",
    "hedef": "35 - 150",
    "deger": "5.0"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Molibden (Mo)",
    "birim": "mcg",
    "hedef": "50 - 250",
    "deger": "11"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Florür (F)",
    "birim": "mg",
    "hedef": "0 - 3",
    "deger": "-"
   },
   {
    "kategori": "Özel",
    "bilesen": "CaHMB",
    "birim": "g",
    "hedef": "3.0 g/gün (sarkopeni/ağır katabolizmada)",
    "deger": "-"
   },
   {
    "kategori": "Özel",
    "bilesen": "Kolin",
    "birim": "mg",
    "hedef": "400 - 550 mg/gün (Adequate Intake - AI)",
    "deger": "42"
   },
   {
    "kategori": "Özel",
    "bilesen": "Taurin",
    "birim": "mg",
    "hedef": "-",
    "deger": "-"
   },
   {
    "kategori": "Özel",
    "bilesen": "L-Karnitin",
    "birim": "mg",
    "hedef": "500 - 1000 mg/gün (diyaliz/kayıplarda)",
    "deger": "-"
   },
   {
    "kategori": "Fizikokimya",
    "bilesen": "Osmolarite",
    "birim": "mOsm/l",
    "hedef": "İzo-ozmolar (280-350) veya makul (<450-500)",
    "deger": "610"
   },
   {
    "kategori": "Fizikokimya",
    "bilesen": "Osmolalite",
    "birim": "mOsm/kg su",
    "hedef": "İzo-ozmolar (280-350)",
    "deger": "725"
   },
   {
    "kategori": "Fizikokimya",
    "bilesen": "Renal Solüt Yükü",
    "birim": "mOsm/l",
    "hedef": "300 - 600",
    "deger": "361"
   }
  ],
  "kcal": null,
  "kcal100": 93.0,
  "protein100": 4.29,
  "lif100": 2.25,
  "osmolarite": 610.0,
  "lifVar": true,
  "endikasyon": "Diyabetik hasta için düşük kalorili, yavaş salınımlı karbonhidrat içerikli formül.",
  "hedefKitle": "Erişkin",
  "form": "Oral / tüp",
  "diyabetik": true,
  "renal": false,
  "immun": false
 },
 {
  "isim": "Glucerna Advance",
  "uretici": "Abbott",
  "veriler": [
   {
    "kategori": "Makro",
    "bilesen": "Enerji",
    "birim": "kcal",
    "hedef": "1500 kcal (Akut <48-72s: <%70; >3. gün: 20-25 kcal/kg/gün)",
    "deger": "162"
   },
   {
    "kategori": "Makro",
    "bilesen": "Enerji",
    "birim": "kJ",
    "hedef": "6276 kJ",
    "deger": "675"
   },
   {
    "kategori": "Makro",
    "bilesen": "Protein",
    "birim": "g",
    "hedef": "1.3 g/kg/gün (1.2 - 1.5; KRT/Obezitede 2.0'ye kadar)",
    "deger": "8.32"
   },
   {
    "kategori": "Makro",
    "bilesen": "Yağ",
    "birim": "g",
    "hedef": "Maks 1.5 g/kg/gün",
    "deger": "8.28"
   },
   {
    "kategori": "Makro",
    "bilesen": "Doymuş Yağ",
    "birim": "g",
    "hedef": "-",
    "deger": "0.70"
   },
   {
    "kategori": "Makro",
    "bilesen": "Tekli Doymamış Yağ",
    "birim": "g",
    "hedef": "-",
    "deger": "5.5"
   },
   {
    "kategori": "Makro",
    "bilesen": "Çoklu Doymamış Yağ",
    "birim": "g",
    "hedef": "-",
    "deger": "1.8"
   },
   {
    "kategori": "Makro",
    "bilesen": "Karbonhidrat",
    "birim": "g",
    "hedef": "Maks 5 mg/kg/dk infüzyon hızı",
    "deger": "12.75"
   },
   {
    "kategori": "Makro",
    "bilesen": "Şekerler",
    "birim": "g",
    "hedef": "-",
    "deger": "6.70"
   },
   {
    "kategori": "Makro",
    "bilesen": "Polioller",
    "birim": "g",
    "hedef": "-",
    "deger": "1.20"
   },
   {
    "kategori": "Makro",
    "bilesen": "Lif / FOS",
    "birim": "g",
    "hedef": "10 - 20 g/gün (iskemi/şokta kontrendike)",
    "deger": "1.9"
   },
   {
    "kategori": "Makro",
    "bilesen": "Diyet Lifi",
    "birim": "g",
    "hedef": "-",
    "deger": "-"
   },
   {
    "kategori": "Makro",
    "bilesen": "FOS",
    "birim": "g",
    "hedef": "-",
    "deger": "1.0"
   },
   {
    "kategori": "Makro",
    "bilesen": "Tuz (NaCl)",
    "birim": "g",
    "hedef": "4 - 6 g/gün",
    "deger": "0.35"
   },
   {
    "kategori": "Makro",
    "bilesen": "Su / Sıvı Gereksinimi",
    "birim": "mL/gün",
    "hedef": "25 - 30 mL/kg/gün (veya 1 mL / kcal)",
    "deger": "-"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin A",
    "birim": "mcg RE",
    "hedef": "900 - 1500",
    "deger": "144"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin D3",
    "birim": "mcg",
    "hedef": "En az 25 mcg (1000 IU)",
    "deger": "3.2 (128 IU)"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin E",
    "birim": "mg a-TE",
    "hedef": "En az 15",
    "deger": "3.0"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin K1",
    "birim": "mcg",
    "hedef": "En az 120",
    "deger": "12"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin C",
    "birim": "mg",
    "hedef": "En az 100",
    "deger": "13"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Folik Asit",
    "birim": "mcg",
    "hedef": "330 - 400 DFE",
    "deger": "40"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin B1 (Tiamin)",
    "birim": "mg",
    "hedef": "1.5 - 3.0",
    "deger": "0.26"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin B2 (Riboflavin)",
    "birim": "mg",
    "hedef": "En az 1.2",
    "deger": "0.34"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin B6 (Piridoksin)",
    "birim": "mg",
    "hedef": "En az 1.5",
    "deger": "0.39"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin B12",
    "birim": "mcg",
    "hedef": "En az 2.5",
    "deger": "0.50"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Niasin",
    "birim": "mg NE",
    "hedef": "18 - 40",
    "deger": "3.0"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Pantotenik Asit",
    "birim": "mg",
    "hedef": "En az 5.0",
    "deger": "1.2"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Biotin",
    "birim": "mcg",
    "hedef": "En az 30",
    "deger": "7.2"
   },
   {
    "kategori": "Elektrolit",
    "bilesen": "Sodyum (Na)",
    "birim": "mg",
    "hedef": "1500 - 3000 mg/gün (1 - 2 mmol/kg/gün)",
    "deger": "140"
   },
   {
    "kategori": "Elektrolit",
    "bilesen": "Potasyum (K)",
    "birim": "mg",
    "hedef": "2000 - 3500 mg/gün (1 - 1.5 mmol/kg/gün)",
    "deger": "165"
   },
   {
    "kategori": "Elektrolit",
    "bilesen": "Klor (Cl)",
    "birim": "mg",
    "hedef": "1 - 2 mmol/kg/gün (Na/K'ya paralel)",
    "deger": "123"
   },
   {
    "kategori": "Elektrolit",
    "bilesen": "Kalsiyum (Ca)",
    "birim": "mg",
    "hedef": "500 - 1000 mg/gün (10 - 15 mmol/gün)",
    "deger": "123"
   },
   {
    "kategori": "Elektrolit",
    "bilesen": "Fosfor (P)",
    "birim": "mg",
    "hedef": "700 - 1000 mg/gün (20 - 30 mmol/gün)",
    "deger": "88"
   },
   {
    "kategori": "Elektrolit",
    "bilesen": "Magnezyum (Mg)",
    "birim": "mg",
    "hedef": "250 - 400 mg/gün (10 - 15 mmol/gün)",
    "deger": "26"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Demir (Fe)",
    "birim": "mg",
    "hedef": "18 - 30",
    "deger": "1.2"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Çinko (Zn)",
    "birim": "mg",
    "hedef": "10 - 20",
    "deger": "1.7"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Manganez (Mn)",
    "birim": "mg",
    "hedef": "2 - 3 (maks 6)",
    "deger": "0.44"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Bakır (Cu)",
    "birim": "mcg",
    "hedef": "1000 - 3000",
    "deger": "110"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "İyot (I)",
    "birim": "mcg",
    "hedef": "150 - 300",
    "deger": "15"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Selenyum (Se)",
    "birim": "mcg",
    "hedef": "50 - 150",
    "deger": "9.5"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Krom (Cr)",
    "birim": "mcg",
    "hedef": "35 - 150",
    "deger": "8.4"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Molibden (Mo)",
    "birim": "mcg",
    "hedef": "50 - 250",
    "deger": "16"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Florür (F)",
    "birim": "mg",
    "hedef": "0 - 3",
    "deger": "-"
   },
   {
    "kategori": "Özel",
    "bilesen": "CaHMB",
    "birim": "g",
    "hedef": "3.0 g/gün (sarkopeni/ağır katabolizmada)",
    "deger": "0.28 (CaHMB 0.35 g)"
   },
   {
    "kategori": "Özel",
    "bilesen": "Kolin",
    "birim": "mg",
    "hedef": "400 - 550 mg/gün (Adequate Intake - AI)",
    "deger": "60"
   },
   {
    "kategori": "Özel",
    "bilesen": "Taurin",
    "birim": "mg",
    "hedef": "-",
    "deger": "15"
   },
   {
    "kategori": "Özel",
    "bilesen": "L-Karnitin",
    "birim": "mg",
    "hedef": "500 - 1000 mg/gün (diyaliz/kayıplarda)",
    "deger": "12"
   },
   {
    "kategori": "Fizikokimya",
    "bilesen": "Osmolarite",
    "birim": "mOsm/l",
    "hedef": "İzo-ozmolar (280-350) veya makul (<450-500)",
    "deger": "704"
   },
   {
    "kategori": "Fizikokimya",
    "bilesen": "Osmolalite",
    "birim": "mOsm/kg su",
    "hedef": "İzo-ozmolar (280-350)",
    "deger": "-"
   },
   {
    "kategori": "Fizikokimya",
    "bilesen": "Renal Solüt Yükü",
    "birim": "mOsm/l",
    "hedef": "300 - 600",
    "deger": "-"
   }
  ],
  "kcal": null,
  "kcal100": 162.0,
  "protein100": 8.32,
  "lif100": 1.9,
  "osmolarite": 704.0,
  "lifVar": true,
  "endikasyon": "Diyabetik hasta için yüksek kalorili, yüksek proteinli, MUFA ağırlıklı formül.",
  "hedefKitle": "Erişkin",
  "form": "Oral / tüp",
  "diyabetik": true,
  "renal": false,
  "immun": false
 },
 {
  "isim": "Glucerna Select",
  "uretici": "Abbott",
  "veriler": [
   {
    "kategori": "Makro",
    "bilesen": "Enerji",
    "birim": "kcal",
    "hedef": "1500 kcal (Akut <48-72s: <%70; >3. gün: 20-25 kcal/kg/gün)",
    "deger": "100"
   },
   {
    "kategori": "Makro",
    "bilesen": "Enerji",
    "birim": "kJ",
    "hedef": "6276 kJ",
    "deger": "417"
   },
   {
    "kategori": "Makro",
    "bilesen": "Protein",
    "birim": "g",
    "hedef": "1.3 g/kg/gün (1.2 - 1.5; KRT/Obezitede 2.0'ye kadar)",
    "deger": "5.00"
   },
   {
    "kategori": "Makro",
    "bilesen": "Yağ",
    "birim": "g",
    "hedef": "Maks 1.5 g/kg/gün",
    "deger": "5.44"
   },
   {
    "kategori": "Makro",
    "bilesen": "Doymuş Yağ",
    "birim": "g",
    "hedef": "-",
    "deger": "0.42"
   },
   {
    "kategori": "Makro",
    "bilesen": "Tekli Doymamış Yağ",
    "birim": "g",
    "hedef": "-",
    "deger": "3.5"
   },
   {
    "kategori": "Makro",
    "bilesen": "Çoklu Doymamış Yağ",
    "birim": "g",
    "hedef": "-",
    "deger": "1.0"
   },
   {
    "kategori": "Makro",
    "bilesen": "Karbonhidrat",
    "birim": "g",
    "hedef": "Maks 5 mg/kg/dk infüzyon hızı",
    "deger": "7.46"
   },
   {
    "kategori": "Makro",
    "bilesen": "Şekerler",
    "birim": "g",
    "hedef": "-",
    "deger": "2.4"
   },
   {
    "kategori": "Makro",
    "bilesen": "Polioller",
    "birim": "g",
    "hedef": "-",
    "deger": "1.90"
   },
   {
    "kategori": "Makro",
    "bilesen": "Lif / FOS",
    "birim": "g",
    "hedef": "10 - 20 g/gün (iskemi/şokta kontrendike)",
    "deger": "2.11"
   },
   {
    "kategori": "Makro",
    "bilesen": "Diyet Lifi",
    "birim": "g",
    "hedef": "-",
    "deger": "-"
   },
   {
    "kategori": "Makro",
    "bilesen": "FOS",
    "birim": "g",
    "hedef": "-",
    "deger": "0.67"
   },
   {
    "kategori": "Makro",
    "bilesen": "Tuz (NaCl)",
    "birim": "g",
    "hedef": "4 - 6 g/gün",
    "deger": "0.24"
   },
   {
    "kategori": "Makro",
    "bilesen": "Su / Sıvı Gereksinimi",
    "birim": "mL/gün",
    "hedef": "25 - 30 mL/kg/gün (veya 1 mL / kcal)",
    "deger": "-"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin A",
    "birim": "mcg RE",
    "hedef": "900 - 1500",
    "deger": "58 (45 palmitat + 13 b-karoten)"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin D3",
    "birim": "mcg",
    "hedef": "En az 25 mcg (1000 IU)",
    "deger": "0.93 (37 IU)"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin E",
    "birim": "mg a-TE",
    "hedef": "En az 15",
    "deger": "1.9"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin K1",
    "birim": "mcg",
    "hedef": "En az 120",
    "deger": "10.0"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin C",
    "birim": "mg",
    "hedef": "En az 100",
    "deger": "11"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Folik Asit",
    "birim": "mcg",
    "hedef": "330 - 400 DFE",
    "deger": "25"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin B1 (Tiamin)",
    "birim": "mg",
    "hedef": "1.5 - 3.0",
    "deger": "0.15"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin B2 (Riboflavin)",
    "birim": "mg",
    "hedef": "En az 1.2",
    "deger": "0.18"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin B6 (Piridoksin)",
    "birim": "mg",
    "hedef": "En az 1.5",
    "deger": "0.21"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin B12",
    "birim": "mcg",
    "hedef": "En az 2.5",
    "deger": "0.30"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Niasin",
    "birim": "mg NE",
    "hedef": "18 - 40",
    "deger": "1.7"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Pantotenik Asit",
    "birim": "mg",
    "hedef": "En az 5.0",
    "deger": "0.75"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Biotin",
    "birim": "mcg",
    "hedef": "En az 30",
    "deger": "4.0"
   },
   {
    "kategori": "Elektrolit",
    "bilesen": "Sodyum (Na)",
    "birim": "mg",
    "hedef": "1500 - 3000 mg/gün (1 - 2 mmol/kg/gün)",
    "deger": "94"
   },
   {
    "kategori": "Elektrolit",
    "bilesen": "Potasyum (K)",
    "birim": "mg",
    "hedef": "2000 - 3500 mg/gün (1 - 1.5 mmol/kg/gün)",
    "deger": "130"
   },
   {
    "kategori": "Elektrolit",
    "bilesen": "Klor (Cl)",
    "birim": "mg",
    "hedef": "1 - 2 mmol/kg/gün (Na/K'ya paralel)",
    "deger": "125"
   },
   {
    "kategori": "Elektrolit",
    "bilesen": "Kalsiyum (Ca)",
    "birim": "mg",
    "hedef": "500 - 1000 mg/gün (10 - 15 mmol/gün)",
    "deger": "70"
   },
   {
    "kategori": "Elektrolit",
    "bilesen": "Fosfor (P)",
    "birim": "mg",
    "hedef": "700 - 1000 mg/gün (20 - 30 mmol/gün)",
    "deger": "65"
   },
   {
    "kategori": "Elektrolit",
    "bilesen": "Magnezyum (Mg)",
    "birim": "mg",
    "hedef": "250 - 400 mg/gün (10 - 15 mmol/gün)",
    "deger": "21"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Demir (Fe)",
    "birim": "mg",
    "hedef": "18 - 30",
    "deger": "1.3"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Çinko (Zn)",
    "birim": "mg",
    "hedef": "10 - 20",
    "deger": "1.2"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Manganez (Mn)",
    "birim": "mg",
    "hedef": "2 - 3 (maks 6)",
    "deger": "0.35"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Bakır (Cu)",
    "birim": "mcg",
    "hedef": "1000 - 3000",
    "deger": "140"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "İyot (I)",
    "birim": "mcg",
    "hedef": "150 - 300",
    "deger": "11"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Selenyum (Se)",
    "birim": "mcg",
    "hedef": "50 - 150",
    "deger": "5.0"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Krom (Cr)",
    "birim": "mcg",
    "hedef": "35 - 150",
    "deger": "8.5"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Molibden (Mo)",
    "birim": "mcg",
    "hedef": "50 - 250",
    "deger": "10"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Florür (F)",
    "birim": "mg",
    "hedef": "0 - 3",
    "deger": "-"
   },
   {
    "kategori": "Özel",
    "bilesen": "CaHMB",
    "birim": "g",
    "hedef": "3.0 g/gün (sarkopeni/ağır katabolizmada)",
    "deger": "-"
   },
   {
    "kategori": "Özel",
    "bilesen": "Kolin",
    "birim": "mg",
    "hedef": "400 - 550 mg/gün (Adequate Intake - AI)",
    "deger": "43"
   },
   {
    "kategori": "Özel",
    "bilesen": "Taurin",
    "birim": "mg",
    "hedef": "-",
    "deger": "11"
   },
   {
    "kategori": "Özel",
    "bilesen": "L-Karnitin",
    "birim": "mg",
    "hedef": "500 - 1000 mg/gün (diyaliz/kayıplarda)",
    "deger": "7.8"
   },
   {
    "kategori": "Fizikokimya",
    "bilesen": "Osmolarite",
    "birim": "mOsm/l",
    "hedef": "İzo-ozmolar (280-350) veya makul (<450-500)",
    "deger": "378"
   },
   {
    "kategori": "Fizikokimya",
    "bilesen": "Osmolalite",
    "birim": "mOsm/kg su",
    "hedef": "İzo-ozmolar (280-350)",
    "deger": "450"
   },
   {
    "kategori": "Fizikokimya",
    "bilesen": "Renal Solüt Yükü",
    "birim": "mOsm/l",
    "hedef": "300 - 600",
    "deger": "394"
   }
  ],
  "kcal": null,
  "kcal100": 100.0,
  "protein100": 5.0,
  "lif100": 2.11,
  "osmolarite": 378.0,
  "lifVar": true,
  "endikasyon": "Diyabetik hasta için standart kalorili idame formülü.",
  "hedefKitle": "Erişkin",
  "form": "Oral / tüp",
  "diyabetik": true,
  "renal": false,
  "immun": false
 },
 {
  "isim": "Nutrison Advanced Cubison",
  "uretici": "Nutricia",
  "veriler": [
   {
    "kategori": "Makro",
    "bilesen": "Enerji",
    "birim": "kcal",
    "hedef": "1500 kcal (Akut <48-72s: <%70; >3. gün: 20-25 kcal/kg/gün)",
    "deger": "104"
   },
   {
    "kategori": "Makro",
    "bilesen": "Enerji",
    "birim": "kJ",
    "hedef": "6276 kJ",
    "deger": "435"
   },
   {
    "kategori": "Makro",
    "bilesen": "Protein",
    "birim": "g",
    "hedef": "1.3 g/kg/gün (1.2 - 1.5; KRT/Obezitede 2.0'ye kadar)",
    "deger": "5.5"
   },
   {
    "kategori": "Makro",
    "bilesen": "Yağ",
    "birim": "g",
    "hedef": "Maks 1.5 g/kg/gün",
    "deger": "3.3"
   },
   {
    "kategori": "Makro",
    "bilesen": "Doymuş Yağ",
    "birim": "g",
    "hedef": "-",
    "deger": "1.2"
   },
   {
    "kategori": "Makro",
    "bilesen": "Tekli Doymamış Yağ",
    "birim": "g",
    "hedef": "-",
    "deger": "1.4"
   },
   {
    "kategori": "Makro",
    "bilesen": "Çoklu Doymamış Yağ",
    "birim": "g",
    "hedef": "-",
    "deger": "0.7"
   },
   {
    "kategori": "Makro",
    "bilesen": "Karbonhidrat",
    "birim": "g",
    "hedef": "Maks 5 mg/kg/dk infüzyon hızı",
    "deger": "12.5"
   },
   {
    "kategori": "Makro",
    "bilesen": "Şekerler",
    "birim": "g",
    "hedef": "-",
    "deger": "1.0"
   },
   {
    "kategori": "Makro",
    "bilesen": "Polioller",
    "birim": "g",
    "hedef": "-",
    "deger": "-"
   },
   {
    "kategori": "Makro",
    "bilesen": "Lif / FOS",
    "birim": "g",
    "hedef": "10 - 20 g/gün (iskemi/şokta kontrendike)",
    "deger": "1.5"
   },
   {
    "kategori": "Makro",
    "bilesen": "Diyet Lifi",
    "birim": "g",
    "hedef": "-",
    "deger": "1.5"
   },
   {
    "kategori": "Makro",
    "bilesen": "FOS",
    "birim": "g",
    "hedef": "-",
    "deger": "-"
   },
   {
    "kategori": "Makro",
    "bilesen": "Tuz (NaCl)",
    "birim": "g",
    "hedef": "4 - 6 g/gün",
    "deger": "0.25"
   },
   {
    "kategori": "Makro",
    "bilesen": "Su / Sıvı Gereksinimi",
    "birim": "mL/gün",
    "hedef": "25 - 30 mL/kg/gün (veya 1 mL / kcal)",
    "deger": "83 mL/100 mL"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin A",
    "birim": "mcg RE",
    "hedef": "900 - 1500",
    "deger": "82"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin D3",
    "birim": "mcg",
    "hedef": "En az 25 mcg (1000 IU)",
    "deger": "0.70 (28 IU)"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin E",
    "birim": "mg a-TE",
    "hedef": "En az 15",
    "deger": "7.5"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin K1",
    "birim": "mcg",
    "hedef": "En az 120",
    "deger": "5.3"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin C",
    "birim": "mg",
    "hedef": "En az 100",
    "deger": "38"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Folik Asit",
    "birim": "mcg",
    "hedef": "330 - 400 DFE",
    "deger": "30"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin B1 (Tiamin)",
    "birim": "mg",
    "hedef": "1.5 - 3.0",
    "deger": "0.15"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin B2 (Riboflavin)",
    "birim": "mg",
    "hedef": "En az 1.2",
    "deger": "0.19"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin B6 (Piridoksin)",
    "birim": "mg",
    "hedef": "En az 1.5",
    "deger": "0.20"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin B12",
    "birim": "mcg",
    "hedef": "En az 2.5",
    "deger": "0.24"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Niasin",
    "birim": "mg NE",
    "hedef": "18 - 40",
    "deger": "1.8"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Pantotenik Asit",
    "birim": "mg",
    "hedef": "En az 5.0",
    "deger": "0.53"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Biotin",
    "birim": "mcg",
    "hedef": "En az 30",
    "deger": "4.0"
   },
   {
    "kategori": "Elektrolit",
    "bilesen": "Sodyum (Na)",
    "birim": "mg",
    "hedef": "1500 - 3000 mg/gün (1 - 2 mmol/kg/gün)",
    "deger": "100"
   },
   {
    "kategori": "Elektrolit",
    "bilesen": "Potasyum (K)",
    "birim": "mg",
    "hedef": "2000 - 3500 mg/gün (1 - 1.5 mmol/kg/gün)",
    "deger": "150"
   },
   {
    "kategori": "Elektrolit",
    "bilesen": "Klor (Cl)",
    "birim": "mg",
    "hedef": "1 - 2 mmol/kg/gün (Na/K'ya paralel)",
    "deger": "125"
   },
   {
    "kategori": "Elektrolit",
    "bilesen": "Kalsiyum (Ca)",
    "birim": "mg",
    "hedef": "500 - 1000 mg/gün (10 - 15 mmol/gün)",
    "deger": "80"
   },
   {
    "kategori": "Elektrolit",
    "bilesen": "Fosfor (P)",
    "birim": "mg",
    "hedef": "700 - 1000 mg/gün (20 - 30 mmol/gün)",
    "deger": "72"
   },
   {
    "kategori": "Elektrolit",
    "bilesen": "Magnezyum (Mg)",
    "birim": "mg",
    "hedef": "250 - 400 mg/gün (10 - 15 mmol/gün)",
    "deger": "23"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Demir (Fe)",
    "birim": "mg",
    "hedef": "18 - 30",
    "deger": "1.6"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Çinko (Zn)",
    "birim": "mg",
    "hedef": "10 - 20",
    "deger": "2.0"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Manganez (Mn)",
    "birim": "mg",
    "hedef": "2 - 3 (maks 6)",
    "deger": "0.38"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Bakır (Cu)",
    "birim": "mcg",
    "hedef": "1000 - 3000",
    "deger": "200"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "İyot (I)",
    "birim": "mcg",
    "hedef": "150 - 300",
    "deger": "13"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Selenyum (Se)",
    "birim": "mcg",
    "hedef": "50 - 150",
    "deger": "9.6"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Krom (Cr)",
    "birim": "mcg",
    "hedef": "35 - 150",
    "deger": "12"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Molibden (Mo)",
    "birim": "mcg",
    "hedef": "50 - 250",
    "deger": "10"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Florür (F)",
    "birim": "mg",
    "hedef": "0 - 3",
    "deger": "0.10"
   },
   {
    "kategori": "Özel",
    "bilesen": "CaHMB",
    "birim": "g",
    "hedef": "3.0 g/gün (sarkopeni/ağır katabolizmada)",
    "deger": "-"
   },
   {
    "kategori": "Özel",
    "bilesen": "Kolin",
    "birim": "mg",
    "hedef": "400 - 550 mg/gün (Adequate Intake - AI)",
    "deger": "37"
   },
   {
    "kategori": "Özel",
    "bilesen": "Taurin",
    "birim": "mg",
    "hedef": "-",
    "deger": "-"
   },
   {
    "kategori": "Özel",
    "bilesen": "L-Karnitin",
    "birim": "mg",
    "hedef": "500 - 1000 mg/gün (diyaliz/kayıplarda)",
    "deger": "-"
   },
   {
    "kategori": "Fizikokimya",
    "bilesen": "Osmolarite",
    "birim": "mOsm/l",
    "hedef": "İzo-ozmolar (280-350) veya makul (<450-500)",
    "deger": "315"
   },
   {
    "kategori": "Fizikokimya",
    "bilesen": "Osmolalite",
    "birim": "mOsm/kg su",
    "hedef": "İzo-ozmolar (280-350)",
    "deger": "380"
   },
   {
    "kategori": "Fizikokimya",
    "bilesen": "Renal Solüt Yükü",
    "birim": "mOsm/l",
    "hedef": "300 - 600",
    "deger": "488"
   }
  ],
  "kcal": null,
  "kcal100": 104.0,
  "protein100": 5.5,
  "lif100": 1.5,
  "osmolarite": 315.0,
  "lifVar": true,
  "endikasyon": "Yara iyileşmesi/dekübit ülseri desteği; yüksek protein, arginin ve mikrobesin zenginleştirilmiş.",
  "hedefKitle": "Erişkin",
  "form": "Tüp beslenme",
  "diyabetik": false,
  "renal": false,
  "immun": false
 },
 {
  "isim": "Nutrison Advanced Diason",
  "uretici": "Nutricia",
  "veriler": [
   {
    "kategori": "Makro",
    "bilesen": "Enerji",
    "birim": "kcal",
    "hedef": "1500 kcal (Akut <48-72s: <%70; >3. gün: 20-25 kcal/kg/gün)",
    "deger": "103"
   },
   {
    "kategori": "Makro",
    "bilesen": "Enerji",
    "birim": "kJ",
    "hedef": "6276 kJ",
    "deger": "435"
   },
   {
    "kategori": "Makro",
    "bilesen": "Protein",
    "birim": "g",
    "hedef": "1.3 g/kg/gün (1.2 - 1.5; KRT/Obezitede 2.0'ye kadar)",
    "deger": "4.3"
   },
   {
    "kategori": "Makro",
    "bilesen": "Yağ",
    "birim": "g",
    "hedef": "Maks 1.5 g/kg/gün",
    "deger": "4.2"
   },
   {
    "kategori": "Makro",
    "bilesen": "Doymuş Yağ",
    "birim": "g",
    "hedef": "-",
    "deger": "0.5"
   },
   {
    "kategori": "Makro",
    "bilesen": "Tekli Doymamış Yağ",
    "birim": "g",
    "hedef": "-",
    "deger": "3.0"
   },
   {
    "kategori": "Makro",
    "bilesen": "Çoklu Doymamış Yağ",
    "birim": "g",
    "hedef": "-",
    "deger": "0.7"
   },
   {
    "kategori": "Makro",
    "bilesen": "Karbonhidrat",
    "birim": "g",
    "hedef": "Maks 5 mg/kg/dk infüzyon hızı",
    "deger": "11.3"
   },
   {
    "kategori": "Makro",
    "bilesen": "Şekerler",
    "birim": "g",
    "hedef": "-",
    "deger": "2.3"
   },
   {
    "kategori": "Makro",
    "bilesen": "Polioller",
    "birim": "g",
    "hedef": "-",
    "deger": "-"
   },
   {
    "kategori": "Makro",
    "bilesen": "Lif / FOS",
    "birim": "g",
    "hedef": "10 - 20 g/gün (iskemi/şokta kontrendike)",
    "deger": "1.5"
   },
   {
    "kategori": "Makro",
    "bilesen": "Diyet Lifi",
    "birim": "g",
    "hedef": "-",
    "deger": "1.5"
   },
   {
    "kategori": "Makro",
    "bilesen": "FOS",
    "birim": "g",
    "hedef": "-",
    "deger": "-"
   },
   {
    "kategori": "Makro",
    "bilesen": "Tuz (NaCl)",
    "birim": "g",
    "hedef": "4 - 6 g/gün",
    "deger": "0.25"
   },
   {
    "kategori": "Makro",
    "bilesen": "Su / Sıvı Gereksinimi",
    "birim": "mL/gün",
    "hedef": "25 - 30 mL/kg/gün (veya 1 mL / kcal)",
    "deger": "84 mL/100 mL"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin A",
    "birim": "mcg RE",
    "hedef": "900 - 1500",
    "deger": "82"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin D3",
    "birim": "mcg",
    "hedef": "En az 25 mcg (1000 IU)",
    "deger": "0.70 (28 IU)"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin E",
    "birim": "mg a-TE",
    "hedef": "En az 15",
    "deger": "2.5"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin K1",
    "birim": "mcg",
    "hedef": "En az 120",
    "deger": "5.3"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin C",
    "birim": "mg",
    "hedef": "En az 100",
    "deger": "15"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Folik Asit",
    "birim": "mcg",
    "hedef": "330 - 400 DFE",
    "deger": "38"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin B1 (Tiamin)",
    "birim": "mg",
    "hedef": "1.5 - 3.0",
    "deger": "0.15"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin B2 (Riboflavin)",
    "birim": "mg",
    "hedef": "En az 1.2",
    "deger": "0.16"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin B6 (Piridoksin)",
    "birim": "mg",
    "hedef": "En az 1.5",
    "deger": "0.17"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin B12",
    "birim": "mcg",
    "hedef": "En az 2.5",
    "deger": "0.50"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Niasin",
    "birim": "mg NE",
    "hedef": "18 - 40",
    "deger": "1.8"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Pantotenik Asit",
    "birim": "mg",
    "hedef": "En az 5.0",
    "deger": "0.53"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Biotin",
    "birim": "mcg",
    "hedef": "En az 30",
    "deger": "4.0"
   },
   {
    "kategori": "Elektrolit",
    "bilesen": "Sodyum (Na)",
    "birim": "mg",
    "hedef": "1500 - 3000 mg/gün (1 - 2 mmol/kg/gün)",
    "deger": "100"
   },
   {
    "kategori": "Elektrolit",
    "bilesen": "Potasyum (K)",
    "birim": "mg",
    "hedef": "2000 - 3500 mg/gün (1 - 1.5 mmol/kg/gün)",
    "deger": "150"
   },
   {
    "kategori": "Elektrolit",
    "bilesen": "Klor (Cl)",
    "birim": "mg",
    "hedef": "1 - 2 mmol/kg/gün (Na/K'ya paralel)",
    "deger": "125"
   },
   {
    "kategori": "Elektrolit",
    "bilesen": "Kalsiyum (Ca)",
    "birim": "mg",
    "hedef": "500 - 1000 mg/gün (10 - 15 mmol/gün)",
    "deger": "80"
   },
   {
    "kategori": "Elektrolit",
    "bilesen": "Fosfor (P)",
    "birim": "mg",
    "hedef": "700 - 1000 mg/gün (20 - 30 mmol/gün)",
    "deger": "72"
   },
   {
    "kategori": "Elektrolit",
    "bilesen": "Magnezyum (Mg)",
    "birim": "mg",
    "hedef": "250 - 400 mg/gün (10 - 15 mmol/gün)",
    "deger": "23"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Demir (Fe)",
    "birim": "mg",
    "hedef": "18 - 30",
    "deger": "1.6"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Çinko (Zn)",
    "birim": "mg",
    "hedef": "10 - 20",
    "deger": "1.2"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Manganez (Mn)",
    "birim": "mg",
    "hedef": "2 - 3 (maks 6)",
    "deger": "0.33"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Bakır (Cu)",
    "birim": "mcg",
    "hedef": "1000 - 3000",
    "deger": "180"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "İyot (I)",
    "birim": "mcg",
    "hedef": "150 - 300",
    "deger": "13"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Selenyum (Se)",
    "birim": "mcg",
    "hedef": "50 - 150",
    "deger": "7.5"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Krom (Cr)",
    "birim": "mcg",
    "hedef": "35 - 150",
    "deger": "12"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Molibden (Mo)",
    "birim": "mcg",
    "hedef": "50 - 250",
    "deger": "10"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Florür (F)",
    "birim": "mg",
    "hedef": "0 - 3",
    "deger": "0.10"
   },
   {
    "kategori": "Özel",
    "bilesen": "CaHMB",
    "birim": "g",
    "hedef": "3.0 g/gün (sarkopeni/ağır katabolizmada)",
    "deger": "-"
   },
   {
    "kategori": "Özel",
    "bilesen": "Kolin",
    "birim": "mg",
    "hedef": "400 - 550 mg/gün (Adequate Intake - AI)",
    "deger": "37"
   },
   {
    "kategori": "Özel",
    "bilesen": "Taurin",
    "birim": "mg",
    "hedef": "-",
    "deger": "-"
   },
   {
    "kategori": "Özel",
    "bilesen": "L-Karnitin",
    "birim": "mg",
    "hedef": "500 - 1000 mg/gün (diyaliz/kayıplarda)",
    "deger": "-"
   },
   {
    "kategori": "Fizikokimya",
    "bilesen": "Osmolarite",
    "birim": "mOsm/l",
    "hedef": "İzo-ozmolar (280-350) veya makul (<450-500)",
    "deger": "300"
   },
   {
    "kategori": "Fizikokimya",
    "bilesen": "Osmolalite",
    "birim": "mOsm/kg su",
    "hedef": "İzo-ozmolar (280-350)",
    "deger": "360"
   },
   {
    "kategori": "Fizikokimya",
    "bilesen": "Renal Solüt Yükü",
    "birim": "mOsm/l",
    "hedef": "300 - 600",
    "deger": "392"
   }
  ],
  "kcal": null,
  "kcal100": 103.0,
  "protein100": 4.3,
  "lif100": 1.5,
  "osmolarite": 300.0,
  "lifVar": true,
  "endikasyon": "Diyabetik hasta için standart kalorili tüp beslenme formülü.",
  "hedefKitle": "Erişkin",
  "form": "Tüp beslenme",
  "diyabetik": true,
  "renal": false,
  "immun": false
 },
 {
  "isim": "Nutrison Advanced Diason Energy HP",
  "uretici": "Nutricia",
  "veriler": [
   {
    "kategori": "Makro",
    "bilesen": "Enerji",
    "birim": "kcal",
    "hedef": "1500 kcal (Akut <48-72s: <%70; >3. gün: 20-25 kcal/kg/gün)",
    "deger": "150"
   },
   {
    "kategori": "Makro",
    "bilesen": "Enerji",
    "birim": "kJ",
    "hedef": "6276 kJ",
    "deger": "625"
   },
   {
    "kategori": "Makro",
    "bilesen": "Protein",
    "birim": "g",
    "hedef": "1.3 g/kg/gün (1.2 - 1.5; KRT/Obezitede 2.0'ye kadar)",
    "deger": "7.7"
   },
   {
    "kategori": "Makro",
    "bilesen": "Yağ",
    "birim": "g",
    "hedef": "Maks 1.5 g/kg/gün",
    "deger": "7.7"
   },
   {
    "kategori": "Makro",
    "bilesen": "Doymuş Yağ",
    "birim": "g",
    "hedef": "-",
    "deger": "0.8"
   },
   {
    "kategori": "Makro",
    "bilesen": "Tekli Doymamış Yağ",
    "birim": "g",
    "hedef": "-",
    "deger": "4.6"
   },
   {
    "kategori": "Makro",
    "bilesen": "Çoklu Doymamış Yağ",
    "birim": "g",
    "hedef": "-",
    "deger": "2.3"
   },
   {
    "kategori": "Makro",
    "bilesen": "Karbonhidrat",
    "birim": "g",
    "hedef": "Maks 5 mg/kg/dk infüzyon hızı",
    "deger": "11.7"
   },
   {
    "kategori": "Makro",
    "bilesen": "Şekerler",
    "birim": "g",
    "hedef": "-",
    "deger": "4.5"
   },
   {
    "kategori": "Makro",
    "bilesen": "Polioller",
    "birim": "g",
    "hedef": "-",
    "deger": "-"
   },
   {
    "kategori": "Makro",
    "bilesen": "Lif / FOS",
    "birim": "g",
    "hedef": "10 - 20 g/gün (iskemi/şokta kontrendike)",
    "deger": "1.5"
   },
   {
    "kategori": "Makro",
    "bilesen": "Diyet Lifi",
    "birim": "g",
    "hedef": "-",
    "deger": "-"
   },
   {
    "kategori": "Makro",
    "bilesen": "FOS",
    "birim": "g",
    "hedef": "-",
    "deger": "-"
   },
   {
    "kategori": "Makro",
    "bilesen": "Tuz (NaCl)",
    "birim": "g",
    "hedef": "4 - 6 g/gün",
    "deger": "0.33"
   },
   {
    "kategori": "Makro",
    "bilesen": "Su / Sıvı Gereksinimi",
    "birim": "mL/gün",
    "hedef": "25 - 30 mL/kg/gün (veya 1 mL / kcal)",
    "deger": "77 mL/100 mL"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin A",
    "birim": "mcg RE",
    "hedef": "900 - 1500",
    "deger": "119"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin D3",
    "birim": "mcg",
    "hedef": "En az 25 mcg (1000 IU)",
    "deger": "1.0 (40 IU)"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin E",
    "birim": "mg a-TE",
    "hedef": "En az 15",
    "deger": "3.6"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin K1",
    "birim": "mcg",
    "hedef": "En az 120",
    "deger": "7.7"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin C",
    "birim": "mg",
    "hedef": "En az 100",
    "deger": "22"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Folik Asit",
    "birim": "mcg",
    "hedef": "330 - 400 DFE",
    "deger": "42"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin B1 (Tiamin)",
    "birim": "mg",
    "hedef": "1.5 - 3.0",
    "deger": "0.23"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin B2 (Riboflavin)",
    "birim": "mg",
    "hedef": "En az 1.2",
    "deger": "0.24"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin B6 (Piridoksin)",
    "birim": "mg",
    "hedef": "En az 1.5",
    "deger": "0.24"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin B12",
    "birim": "mcg",
    "hedef": "En az 2.5",
    "deger": "0.72"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Niasin",
    "birim": "mg NE",
    "hedef": "18 - 40",
    "deger": "2.6"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Pantotenik Asit",
    "birim": "mg",
    "hedef": "En az 5.0",
    "deger": "0.77"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Biotin",
    "birim": "mcg",
    "hedef": "En az 30",
    "deger": "5.8"
   },
   {
    "kategori": "Elektrolit",
    "bilesen": "Sodyum (Na)",
    "birim": "mg",
    "hedef": "1500 - 3000 mg/gün (1 - 2 mmol/kg/gün)",
    "deger": "131"
   },
   {
    "kategori": "Elektrolit",
    "bilesen": "Potasyum (K)",
    "birim": "mg",
    "hedef": "2000 - 3500 mg/gün (1 - 1.5 mmol/kg/gün)",
    "deger": "200"
   },
   {
    "kategori": "Elektrolit",
    "bilesen": "Klor (Cl)",
    "birim": "mg",
    "hedef": "1 - 2 mmol/kg/gün (Na/K'ya paralel)",
    "deger": "98"
   },
   {
    "kategori": "Elektrolit",
    "bilesen": "Kalsiyum (Ca)",
    "birim": "mg",
    "hedef": "500 - 1000 mg/gün (10 - 15 mmol/gün)",
    "deger": "82"
   },
   {
    "kategori": "Elektrolit",
    "bilesen": "Fosfor (P)",
    "birim": "mg",
    "hedef": "700 - 1000 mg/gün (20 - 30 mmol/gün)",
    "deger": "82"
   },
   {
    "kategori": "Elektrolit",
    "bilesen": "Magnezyum (Mg)",
    "birim": "mg",
    "hedef": "250 - 400 mg/gün (10 - 15 mmol/gün)",
    "deger": "37"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Demir (Fe)",
    "birim": "mg",
    "hedef": "18 - 30",
    "deger": "1.9"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Çinko (Zn)",
    "birim": "mg",
    "hedef": "10 - 20",
    "deger": "1.4"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Manganez (Mn)",
    "birim": "mg",
    "hedef": "2 - 3 (maks 6)",
    "deger": "0.38"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Bakır (Cu)",
    "birim": "mcg",
    "hedef": "1000 - 3000",
    "deger": "210"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "İyot (I)",
    "birim": "mcg",
    "hedef": "150 - 300",
    "deger": "16"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Selenyum (Se)",
    "birim": "mcg",
    "hedef": "50 - 150",
    "deger": "8.7"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Krom (Cr)",
    "birim": "mcg",
    "hedef": "35 - 150",
    "deger": "14"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Molibden (Mo)",
    "birim": "mcg",
    "hedef": "50 - 250",
    "deger": "12"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Florür (F)",
    "birim": "mg",
    "hedef": "0 - 3",
    "deger": "0.12"
   },
   {
    "kategori": "Özel",
    "bilesen": "CaHMB",
    "birim": "g",
    "hedef": "3.0 g/gün (sarkopeni/ağır katabolizmada)",
    "deger": "-"
   },
   {
    "kategori": "Özel",
    "bilesen": "Kolin",
    "birim": "mg",
    "hedef": "400 - 550 mg/gün (Adequate Intake - AI)",
    "deger": "53"
   },
   {
    "kategori": "Özel",
    "bilesen": "Taurin",
    "birim": "mg",
    "hedef": "-",
    "deger": "-"
   },
   {
    "kategori": "Özel",
    "bilesen": "L-Karnitin",
    "birim": "mg",
    "hedef": "500 - 1000 mg/gün (diyaliz/kayıplarda)",
    "deger": "-"
   },
   {
    "kategori": "Fizikokimya",
    "bilesen": "Osmolarite",
    "birim": "mOsm/l",
    "hedef": "İzo-ozmolar (280-350) veya makul (<450-500)",
    "deger": "395"
   },
   {
    "kategori": "Fizikokimya",
    "bilesen": "Osmolalite",
    "birim": "mOsm/kg su",
    "hedef": "İzo-ozmolar (280-350)",
    "deger": "-"
   },
   {
    "kategori": "Fizikokimya",
    "bilesen": "Renal Solüt Yükü",
    "birim": "mOsm/l",
    "hedef": "300 - 600",
    "deger": "-"
   }
  ],
  "kcal": null,
  "kcal100": 150.0,
  "protein100": 7.7,
  "lif100": 1.5,
  "osmolarite": 395.0,
  "lifVar": true,
  "endikasyon": "Diyabetik hasta için yüksek kalorili, yüksek proteinli tüp beslenme formülü.",
  "hedefKitle": "Erişkin",
  "form": "Tüp beslenme",
  "diyabetik": true,
  "renal": false,
  "immun": false
 },
 {
  "isim": "Nepro HP",
  "uretici": "Abbott",
  "veriler": [
   {
    "kategori": "Makro",
    "bilesen": "Enerji",
    "birim": "kcal",
    "hedef": "1500 kcal (Akut <48-72s: <%70; >3. gün: 20-25 kcal/kg/gün)",
    "deger": "180"
   },
   {
    "kategori": "Makro",
    "bilesen": "Enerji",
    "birim": "kJ",
    "hedef": "6276 kJ",
    "deger": "752"
   },
   {
    "kategori": "Makro",
    "bilesen": "Protein",
    "birim": "g",
    "hedef": "1.3 g/kg/gün (1.2 - 1.5; KRT/Obezitede 2.0'ye kadar)",
    "deger": "8.10"
   },
   {
    "kategori": "Makro",
    "bilesen": "Yağ",
    "birim": "g",
    "hedef": "Maks 1.5 g/kg/gün",
    "deger": "9.77"
   },
   {
    "kategori": "Makro",
    "bilesen": "Doymuş Yağ",
    "birim": "g",
    "hedef": "-",
    "deger": "0.73"
   },
   {
    "kategori": "Makro",
    "bilesen": "Tekli Doymamış Yağ",
    "birim": "g",
    "hedef": "-",
    "deger": "7.4"
   },
   {
    "kategori": "Makro",
    "bilesen": "Çoklu Doymamış Yağ",
    "birim": "g",
    "hedef": "-",
    "deger": "1.4"
   },
   {
    "kategori": "Makro",
    "bilesen": "Karbonhidrat",
    "birim": "g",
    "hedef": "Maks 5 mg/kg/dk infüzyon hızı",
    "deger": "14.74"
   },
   {
    "kategori": "Makro",
    "bilesen": "Şekerler",
    "birim": "g",
    "hedef": "-",
    "deger": "3.20"
   },
   {
    "kategori": "Makro",
    "bilesen": "Polioller",
    "birim": "g",
    "hedef": "-",
    "deger": "1.10"
   },
   {
    "kategori": "Makro",
    "bilesen": "Lif / FOS",
    "birim": "g",
    "hedef": "10 - 20 g/gün (iskemi/şokta kontrendike)",
    "deger": "1.26"
   },
   {
    "kategori": "Makro",
    "bilesen": "Diyet Lifi",
    "birim": "g",
    "hedef": "-",
    "deger": "0.42"
   },
   {
    "kategori": "Makro",
    "bilesen": "FOS",
    "birim": "g",
    "hedef": "-",
    "deger": "0.84"
   },
   {
    "kategori": "Makro",
    "bilesen": "Tuz (NaCl)",
    "birim": "g",
    "hedef": "4 - 6 g/gün",
    "deger": "0.18"
   },
   {
    "kategori": "Makro",
    "bilesen": "Su / Sıvı Gereksinimi",
    "birim": "mL/gün",
    "hedef": "25 - 30 mL/kg/gün (veya 1 mL / kcal)",
    "deger": "-"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin A",
    "birim": "mcg RE",
    "hedef": "900 - 1500",
    "deger": "95"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin D3",
    "birim": "mcg",
    "hedef": "En az 25 mcg (1000 IU)",
    "deger": "1.2 (48 IU)"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin E",
    "birim": "mg a-TE",
    "hedef": "En az 15",
    "deger": "3.4"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin K1",
    "birim": "mcg",
    "hedef": "En az 120",
    "deger": "9.0"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin C",
    "birim": "mg",
    "hedef": "En az 100",
    "deger": "10.5"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Folik Asit",
    "birim": "mcg",
    "hedef": "330 - 400 DFE",
    "deger": "60"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin B1 (Tiamin)",
    "birim": "mg",
    "hedef": "1.5 - 3.0",
    "deger": "0.42"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin B2 (Riboflavin)",
    "birim": "mg",
    "hedef": "En az 1.2",
    "deger": "0.50"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin B6 (Piridoksin)",
    "birim": "mg",
    "hedef": "En az 1.5",
    "deger": "0.50"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin B12",
    "birim": "mcg",
    "hedef": "En az 2.5",
    "deger": "0.85"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Niasin",
    "birim": "mg NE",
    "hedef": "18 - 40",
    "deger": "3.4"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Pantotenik Asit",
    "birim": "mg",
    "hedef": "En az 5.0",
    "deger": "1.6"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Biotin",
    "birim": "mcg",
    "hedef": "En az 30",
    "deger": "9.0"
   },
   {
    "kategori": "Elektrolit",
    "bilesen": "Sodyum (Na)",
    "birim": "mg",
    "hedef": "1500 - 3000 mg/gün (1 - 2 mmol/kg/gün)",
    "deger": "70"
   },
   {
    "kategori": "Elektrolit",
    "bilesen": "Potasyum (K)",
    "birim": "mg",
    "hedef": "2000 - 3500 mg/gün (1 - 1.5 mmol/kg/gün)",
    "deger": "106"
   },
   {
    "kategori": "Elektrolit",
    "bilesen": "Klor (Cl)",
    "birim": "mg",
    "hedef": "1 - 2 mmol/kg/gün (Na/K'ya paralel)",
    "deger": "84"
   },
   {
    "kategori": "Elektrolit",
    "bilesen": "Kalsiyum (Ca)",
    "birim": "mg",
    "hedef": "500 - 1000 mg/gün (10 - 15 mmol/gün)",
    "deger": "106"
   },
   {
    "kategori": "Elektrolit",
    "bilesen": "Fosfor (P)",
    "birim": "mg",
    "hedef": "700 - 1000 mg/gün (20 - 30 mmol/gün)",
    "deger": "72"
   },
   {
    "kategori": "Elektrolit",
    "bilesen": "Magnezyum (Mg)",
    "birim": "mg",
    "hedef": "250 - 400 mg/gün (10 - 15 mmol/gün)",
    "deger": "21"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Demir (Fe)",
    "birim": "mg",
    "hedef": "18 - 30",
    "deger": "1.9"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Çinko (Zn)",
    "birim": "mg",
    "hedef": "10 - 20",
    "deger": "1.9"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Manganez (Mn)",
    "birim": "mg",
    "hedef": "2 - 3 (maks 6)",
    "deger": "0.21"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Bakır (Cu)",
    "birim": "mcg",
    "hedef": "1000 - 3000",
    "deger": "210"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "İyot (I)",
    "birim": "mcg",
    "hedef": "150 - 300",
    "deger": "16"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Selenyum (Se)",
    "birim": "mcg",
    "hedef": "50 - 150",
    "deger": "7.4"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Krom (Cr)",
    "birim": "mcg",
    "hedef": "35 - 150",
    "deger": "4.5"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Molibden (Mo)",
    "birim": "mcg",
    "hedef": "50 - 250",
    "deger": "8.0"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Florür (F)",
    "birim": "mg",
    "hedef": "0 - 3",
    "deger": "-"
   },
   {
    "kategori": "Özel",
    "bilesen": "CaHMB",
    "birim": "g",
    "hedef": "3.0 g/gün (sarkopeni/ağır katabolizmada)",
    "deger": "-"
   },
   {
    "kategori": "Özel",
    "bilesen": "Kolin",
    "birim": "mg",
    "hedef": "400 - 550 mg/gün (Adequate Intake - AI)",
    "deger": "63.5"
   },
   {
    "kategori": "Özel",
    "bilesen": "Taurin",
    "birim": "mg",
    "hedef": "-",
    "deger": "16"
   },
   {
    "kategori": "Özel",
    "bilesen": "L-Karnitin",
    "birim": "mg",
    "hedef": "500 - 1000 mg/gün (diyaliz/kayıplarda)",
    "deger": "26.5"
   },
   {
    "kategori": "Fizikokimya",
    "bilesen": "Osmolarite",
    "birim": "mOsm/l",
    "hedef": "İzo-ozmolar (280-350) veya makul (<450-500)",
    "deger": "538"
   },
   {
    "kategori": "Fizikokimya",
    "bilesen": "Osmolalite",
    "birim": "mOsm/kg su",
    "hedef": "İzo-ozmolar (280-350)",
    "deger": "735"
   },
   {
    "kategori": "Fizikokimya",
    "bilesen": "Renal Solüt Yükü",
    "birim": "mOsm/l",
    "hedef": "300 - 600",
    "deger": "543"
   }
  ],
  "kcal": null,
  "kcal100": 180.0,
  "protein100": 8.1,
  "lif100": 1.26,
  "osmolarite": 538.0,
  "lifVar": true,
  "endikasyon": "Kronik böbrek yetmezliği / diyaliz hastası; yüksek kalorili, yüksek proteinli, düşük K-P-sıvı hacimli.",
  "hedefKitle": "Erişkin",
  "form": "Oral / tüp",
  "diyabetik": false,
  "renal": true,
  "immun": false
 },
 {
  "isim": "Impact Glutamin",
  "uretici": "Nestlé Health Science",
  "veriler": [
   {
    "kategori": "Makro",
    "bilesen": "Enerji",
    "birim": "kcal",
    "hedef": "1500 kcal (Akut <48-72s: <%70; >3. gün: 20-25 kcal/kg/gün)",
    "deger": "113"
   },
   {
    "kategori": "Makro",
    "bilesen": "Enerji",
    "birim": "kJ",
    "hedef": "6276 kJ",
    "deger": "473"
   },
   {
    "kategori": "Makro",
    "bilesen": "Protein",
    "birim": "g",
    "hedef": "1.3 g/kg/gün (1.2 - 1.5; KRT/Obezitede 2.0'ye kadar)",
    "deger": "6.30"
   },
   {
    "kategori": "Makro",
    "bilesen": "Yağ",
    "birim": "g",
    "hedef": "Maks 1.5 g/kg/gün",
    "deger": "3.00"
   },
   {
    "kategori": "Makro",
    "bilesen": "Doymuş Yağ",
    "birim": "g",
    "hedef": "-",
    "deger": "-"
   },
   {
    "kategori": "Makro",
    "bilesen": "Tekli Doymamış Yağ",
    "birim": "g",
    "hedef": "-",
    "deger": "-"
   },
   {
    "kategori": "Makro",
    "bilesen": "Çoklu Doymamış Yağ",
    "birim": "g",
    "hedef": "-",
    "deger": "-"
   },
   {
    "kategori": "Makro",
    "bilesen": "Karbonhidrat",
    "birim": "g",
    "hedef": "Maks 5 mg/kg/dk infüzyon hızı",
    "deger": "14.50"
   },
   {
    "kategori": "Makro",
    "bilesen": "Şekerler",
    "birim": "g",
    "hedef": "-",
    "deger": "-"
   },
   {
    "kategori": "Makro",
    "bilesen": "Polioller",
    "birim": "g",
    "hedef": "-",
    "deger": "-"
   },
   {
    "kategori": "Makro",
    "bilesen": "Lif / FOS",
    "birim": "g",
    "hedef": "10 - 20 g/gün (iskemi/şokta kontrendike)",
    "deger": "1.40"
   },
   {
    "kategori": "Makro",
    "bilesen": "Diyet Lifi",
    "birim": "g",
    "hedef": "-",
    "deger": "-"
   },
   {
    "kategori": "Makro",
    "bilesen": "FOS",
    "birim": "g",
    "hedef": "-",
    "deger": "-"
   },
   {
    "kategori": "Makro",
    "bilesen": "Tuz (NaCl)",
    "birim": "g",
    "hedef": "4 - 6 g/gün",
    "deger": "-"
   },
   {
    "kategori": "Makro",
    "bilesen": "Su / Sıvı Gereksinimi",
    "birim": "mL/gün",
    "hedef": "25 - 30 mL/kg/gün (veya 1 mL / kcal)",
    "deger": "-"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin A",
    "birim": "mcg RE",
    "hedef": "900 - 1500",
    "deger": "-"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin D3",
    "birim": "mcg",
    "hedef": "En az 25 mcg (1000 IU)",
    "deger": "-"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin E",
    "birim": "mg a-TE",
    "hedef": "En az 15",
    "deger": "-"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin K1",
    "birim": "mcg",
    "hedef": "En az 120",
    "deger": "-"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin C",
    "birim": "mg",
    "hedef": "En az 100",
    "deger": "-"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Folik Asit",
    "birim": "mcg",
    "hedef": "330 - 400 DFE",
    "deger": "-"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin B1 (Tiamin)",
    "birim": "mg",
    "hedef": "1.5 - 3.0",
    "deger": "-"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin B2 (Riboflavin)",
    "birim": "mg",
    "hedef": "En az 1.2",
    "deger": "-"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin B6 (Piridoksin)",
    "birim": "mg",
    "hedef": "En az 1.5",
    "deger": "-"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin B12",
    "birim": "mcg",
    "hedef": "En az 2.5",
    "deger": "-"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Niasin",
    "birim": "mg NE",
    "hedef": "18 - 40",
    "deger": "-"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Pantotenik Asit",
    "birim": "mg",
    "hedef": "En az 5.0",
    "deger": "-"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Biotin",
    "birim": "mcg",
    "hedef": "En az 30",
    "deger": "-"
   },
   {
    "kategori": "Elektrolit",
    "bilesen": "Sodyum (Na)",
    "birim": "mg",
    "hedef": "1500 - 3000 mg/gün (1 - 2 mmol/kg/gün)",
    "deger": "107"
   },
   {
    "kategori": "Elektrolit",
    "bilesen": "Potasyum (K)",
    "birim": "mg",
    "hedef": "2000 - 3500 mg/gün (1 - 1.5 mmol/kg/gün)",
    "deger": "150"
   },
   {
    "kategori": "Elektrolit",
    "bilesen": "Klor (Cl)",
    "birim": "mg",
    "hedef": "1 - 2 mmol/kg/gün (Na/K'ya paralel)",
    "deger": "120"
   },
   {
    "kategori": "Elektrolit",
    "bilesen": "Kalsiyum (Ca)",
    "birim": "mg",
    "hedef": "500 - 1000 mg/gün (10 - 15 mmol/gün)",
    "deger": "80"
   },
   {
    "kategori": "Elektrolit",
    "bilesen": "Fosfor (P)",
    "birim": "mg",
    "hedef": "700 - 1000 mg/gün (20 - 30 mmol/gün)",
    "deger": "72"
   },
   {
    "kategori": "Elektrolit",
    "bilesen": "Magnezyum (Mg)",
    "birim": "mg",
    "hedef": "250 - 400 mg/gün (10 - 15 mmol/gün)",
    "deger": "23"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Demir (Fe)",
    "birim": "mg",
    "hedef": "18 - 30",
    "deger": "1.2"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Çinko (Zn)",
    "birim": "mg",
    "hedef": "10 - 20",
    "deger": "1.5"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Manganez (Mn)",
    "birim": "mg",
    "hedef": "2 - 3 (maks 6)",
    "deger": "-"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Bakır (Cu)",
    "birim": "mcg",
    "hedef": "1000 - 3000",
    "deger": "-"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "İyot (I)",
    "birim": "mcg",
    "hedef": "150 - 300",
    "deger": "-"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Selenyum (Se)",
    "birim": "mcg",
    "hedef": "50 - 150",
    "deger": "-"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Krom (Cr)",
    "birim": "mcg",
    "hedef": "35 - 150",
    "deger": "-"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Molibden (Mo)",
    "birim": "mcg",
    "hedef": "50 - 250",
    "deger": "-"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Florür (F)",
    "birim": "mg",
    "hedef": "0 - 3",
    "deger": "-"
   },
   {
    "kategori": "Özel",
    "bilesen": "CaHMB",
    "birim": "g",
    "hedef": "3.0 g/gün (sarkopeni/ağır katabolizmada)",
    "deger": "-"
   },
   {
    "kategori": "Özel",
    "bilesen": "Kolin",
    "birim": "mg",
    "hedef": "400 - 550 mg/gün (Adequate Intake - AI)",
    "deger": "-"
   },
   {
    "kategori": "Özel",
    "bilesen": "Taurin",
    "birim": "mg",
    "hedef": "-",
    "deger": "-"
   },
   {
    "kategori": "Özel",
    "bilesen": "L-Karnitin",
    "birim": "mg",
    "hedef": "500 - 1000 mg/gün (diyaliz/kayıplarda)",
    "deger": "-"
   },
   {
    "kategori": "Fizikokimya",
    "bilesen": "Osmolarite",
    "birim": "mOsm/l",
    "hedef": "İzo-ozmolar (280-350) veya makul (<450-500)",
    "deger": "390"
   },
   {
    "kategori": "Fizikokimya",
    "bilesen": "Osmolalite",
    "birim": "mOsm/kg su",
    "hedef": "İzo-ozmolar (280-350)",
    "deger": "-"
   },
   {
    "kategori": "Fizikokimya",
    "bilesen": "Renal Solüt Yükü",
    "birim": "mOsm/l",
    "hedef": "300 - 600",
    "deger": "-"
   }
  ],
  "kcal": null,
  "kcal100": 113.0,
  "protein100": 6.3,
  "lif100": 1.4,
  "osmolarite": 390.0,
  "lifVar": true,
  "endikasyon": "İmmünonütrisyon; glutamin, arginin ve omega-3 ile zenginleştirilmiş, kritik hasta/cerrahi öncesi-sonrası.",
  "hedefKitle": "Erişkin",
  "form": "Tüp beslenme",
  "diyabetik": false,
  "renal": false,
  "immun": true
 },
 {
  "isim": "Impact Enteral",
  "uretici": "Nestlé Health Science",
  "veriler": [
   {
    "kategori": "Makro",
    "bilesen": "Enerji",
    "birim": "kcal",
    "hedef": "1500 kcal (Akut <48-72s: <%70; >3. gün: 20-25 kcal/kg/gün)",
    "deger": "101"
   },
   {
    "kategori": "Makro",
    "bilesen": "Enerji",
    "birim": "kJ",
    "hedef": "6276 kJ",
    "deger": "423"
   },
   {
    "kategori": "Makro",
    "bilesen": "Protein",
    "birim": "g",
    "hedef": "1.3 g/kg/gün (1.2 - 1.5; KRT/Obezitede 2.0'ye kadar)",
    "deger": "5.60"
   },
   {
    "kategori": "Makro",
    "bilesen": "Yağ",
    "birim": "g",
    "hedef": "Maks 1.5 g/kg/gün",
    "deger": "2.80"
   },
   {
    "kategori": "Makro",
    "bilesen": "Doymuş Yağ",
    "birim": "g",
    "hedef": "-",
    "deger": "-"
   },
   {
    "kategori": "Makro",
    "bilesen": "Tekli Doymamış Yağ",
    "birim": "g",
    "hedef": "-",
    "deger": "-"
   },
   {
    "kategori": "Makro",
    "bilesen": "Çoklu Doymamış Yağ",
    "birim": "g",
    "hedef": "-",
    "deger": "-"
   },
   {
    "kategori": "Makro",
    "bilesen": "Karbonhidrat",
    "birim": "g",
    "hedef": "Maks 5 mg/kg/dk infüzyon hızı",
    "deger": "13.40"
   },
   {
    "kategori": "Makro",
    "bilesen": "Şekerler",
    "birim": "g",
    "hedef": "-",
    "deger": "-"
   },
   {
    "kategori": "Makro",
    "bilesen": "Polioller",
    "birim": "g",
    "hedef": "-",
    "deger": "-"
   },
   {
    "kategori": "Makro",
    "bilesen": "Lif / FOS",
    "birim": "g",
    "hedef": "10 - 20 g/gün (iskemi/şokta kontrendike)",
    "deger": "-"
   },
   {
    "kategori": "Makro",
    "bilesen": "Diyet Lifi",
    "birim": "g",
    "hedef": "-",
    "deger": "-"
   },
   {
    "kategori": "Makro",
    "bilesen": "FOS",
    "birim": "g",
    "hedef": "-",
    "deger": "-"
   },
   {
    "kategori": "Makro",
    "bilesen": "Tuz (NaCl)",
    "birim": "g",
    "hedef": "4 - 6 g/gün",
    "deger": "-"
   },
   {
    "kategori": "Makro",
    "bilesen": "Su / Sıvı Gereksinimi",
    "birim": "mL/gün",
    "hedef": "25 - 30 mL/kg/gün (veya 1 mL / kcal)",
    "deger": "-"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin A",
    "birim": "mcg RE",
    "hedef": "900 - 1500",
    "deger": "-"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin D3",
    "birim": "mcg",
    "hedef": "En az 25 mcg (1000 IU)",
    "deger": "-"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin E",
    "birim": "mg a-TE",
    "hedef": "En az 15",
    "deger": "-"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin K1",
    "birim": "mcg",
    "hedef": "En az 120",
    "deger": "-"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin C",
    "birim": "mg",
    "hedef": "En az 100",
    "deger": "-"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Folik Asit",
    "birim": "mcg",
    "hedef": "330 - 400 DFE",
    "deger": "-"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin B1 (Tiamin)",
    "birim": "mg",
    "hedef": "1.5 - 3.0",
    "deger": "-"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin B2 (Riboflavin)",
    "birim": "mg",
    "hedef": "En az 1.2",
    "deger": "-"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin B6 (Piridoksin)",
    "birim": "mg",
    "hedef": "En az 1.5",
    "deger": "-"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin B12",
    "birim": "mcg",
    "hedef": "En az 2.5",
    "deger": "-"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Niasin",
    "birim": "mg NE",
    "hedef": "18 - 40",
    "deger": "-"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Pantotenik Asit",
    "birim": "mg",
    "hedef": "En az 5.0",
    "deger": "-"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Biotin",
    "birim": "mcg",
    "hedef": "En az 30",
    "deger": "-"
   },
   {
    "kategori": "Elektrolit",
    "bilesen": "Sodyum (Na)",
    "birim": "mg",
    "hedef": "1500 - 3000 mg/gün (1 - 2 mmol/kg/gün)",
    "deger": "107"
   },
   {
    "kategori": "Elektrolit",
    "bilesen": "Potasyum (K)",
    "birim": "mg",
    "hedef": "2000 - 3500 mg/gün (1 - 1.5 mmol/kg/gün)",
    "deger": "134"
   },
   {
    "kategori": "Elektrolit",
    "bilesen": "Klor (Cl)",
    "birim": "mg",
    "hedef": "1 - 2 mmol/kg/gün (Na/K'ya paralel)",
    "deger": "120"
   },
   {
    "kategori": "Elektrolit",
    "bilesen": "Kalsiyum (Ca)",
    "birim": "mg",
    "hedef": "500 - 1000 mg/gün (10 - 15 mmol/gün)",
    "deger": "80"
   },
   {
    "kategori": "Elektrolit",
    "bilesen": "Fosfor (P)",
    "birim": "mg",
    "hedef": "700 - 1000 mg/gün (20 - 30 mmol/gün)",
    "deger": "72"
   },
   {
    "kategori": "Elektrolit",
    "bilesen": "Magnezyum (Mg)",
    "birim": "mg",
    "hedef": "250 - 400 mg/gün (10 - 15 mmol/gün)",
    "deger": "23"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Demir (Fe)",
    "birim": "mg",
    "hedef": "18 - 30",
    "deger": "1.2"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Çinko (Zn)",
    "birim": "mg",
    "hedef": "10 - 20",
    "deger": "1.5"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Manganez (Mn)",
    "birim": "mg",
    "hedef": "2 - 3 (maks 6)",
    "deger": "-"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Bakır (Cu)",
    "birim": "mcg",
    "hedef": "1000 - 3000",
    "deger": "-"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "İyot (I)",
    "birim": "mcg",
    "hedef": "150 - 300",
    "deger": "-"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Selenyum (Se)",
    "birim": "mcg",
    "hedef": "50 - 150",
    "deger": "-"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Krom (Cr)",
    "birim": "mcg",
    "hedef": "35 - 150",
    "deger": "-"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Molibden (Mo)",
    "birim": "mcg",
    "hedef": "50 - 250",
    "deger": "-"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Florür (F)",
    "birim": "mg",
    "hedef": "0 - 3",
    "deger": "-"
   },
   {
    "kategori": "Özel",
    "bilesen": "CaHMB",
    "birim": "g",
    "hedef": "3.0 g/gün (sarkopeni/ağır katabolizmada)",
    "deger": "-"
   },
   {
    "kategori": "Özel",
    "bilesen": "Kolin",
    "birim": "mg",
    "hedef": "400 - 550 mg/gün (Adequate Intake - AI)",
    "deger": "-"
   },
   {
    "kategori": "Özel",
    "bilesen": "Taurin",
    "birim": "mg",
    "hedef": "-",
    "deger": "-"
   },
   {
    "kategori": "Özel",
    "bilesen": "L-Karnitin",
    "birim": "mg",
    "hedef": "500 - 1000 mg/gün (diyaliz/kayıplarda)",
    "deger": "-"
   },
   {
    "kategori": "Fizikokimya",
    "bilesen": "Osmolarite",
    "birim": "mOsm/l",
    "hedef": "İzo-ozmolar (280-350) veya makul (<450-500)",
    "deger": "298"
   },
   {
    "kategori": "Fizikokimya",
    "bilesen": "Osmolalite",
    "birim": "mOsm/kg su",
    "hedef": "İzo-ozmolar (280-350)",
    "deger": "-"
   },
   {
    "kategori": "Fizikokimya",
    "bilesen": "Renal Solüt Yükü",
    "birim": "mOsm/l",
    "hedef": "300 - 600",
    "deger": "-"
   }
  ],
  "kcal": null,
  "kcal100": 101.0,
  "protein100": 5.6,
  "lif100": null,
  "osmolarite": 298.0,
  "lifVar": false,
  "endikasyon": "İmmünonütrisyon; perioperatif ve kritik hasta desteği için arginin/omega-3 zenginleştirilmiş formül.",
  "hedefKitle": "Erişkin",
  "form": "Tüp beslenme",
  "diyabetik": false,
  "renal": false,
  "immun": true
 },
 {
  "isim": "Resource Protein",
  "uretici": "Nestlé Health Science",
  "veriler": [
   {
    "kategori": "Makro",
    "bilesen": "Enerji",
    "birim": "kcal",
    "hedef": "1500 kcal (Akut <48-72s: <%70; >3. gün: 20-25 kcal/kg/gün)",
    "deger": "125"
   },
   {
    "kategori": "Makro",
    "bilesen": "Enerji",
    "birim": "kJ",
    "hedef": "6276 kJ",
    "deger": "524"
   },
   {
    "kategori": "Makro",
    "bilesen": "Protein",
    "birim": "g",
    "hedef": "1.3 g/kg/gün (1.2 - 1.5; KRT/Obezitede 2.0'ye kadar)",
    "deger": "9.4"
   },
   {
    "kategori": "Makro",
    "bilesen": "Yağ",
    "birim": "g",
    "hedef": "Maks 1.5 g/kg/gün",
    "deger": "3.4"
   },
   {
    "kategori": "Makro",
    "bilesen": "Doymuş Yağ",
    "birim": "g",
    "hedef": "-",
    "deger": "0.7"
   },
   {
    "kategori": "Makro",
    "bilesen": "Tekli Doymamış Yağ",
    "birim": "g",
    "hedef": "-",
    "deger": "1.8"
   },
   {
    "kategori": "Makro",
    "bilesen": "Çoklu Doymamış Yağ",
    "birim": "g",
    "hedef": "-",
    "deger": "0.9"
   },
   {
    "kategori": "Makro",
    "bilesen": "Karbonhidrat",
    "birim": "g",
    "hedef": "Maks 5 mg/kg/dk infüzyon hızı",
    "deger": "14.0"
   },
   {
    "kategori": "Makro",
    "bilesen": "Şekerler",
    "birim": "g",
    "hedef": "-",
    "deger": "8.0"
   },
   {
    "kategori": "Makro",
    "bilesen": "Polioller",
    "birim": "g",
    "hedef": "-",
    "deger": "-"
   },
   {
    "kategori": "Makro",
    "bilesen": "Lif / FOS",
    "birim": "g",
    "hedef": "10 - 20 g/gün (iskemi/şokta kontrendike)",
    "deger": "0.5"
   },
   {
    "kategori": "Makro",
    "bilesen": "Diyet Lifi",
    "birim": "g",
    "hedef": "-",
    "deger": "-"
   },
   {
    "kategori": "Makro",
    "bilesen": "FOS",
    "birim": "g",
    "hedef": "-",
    "deger": "-"
   },
   {
    "kategori": "Makro",
    "bilesen": "Tuz (NaCl)",
    "birim": "g",
    "hedef": "4 - 6 g/gün",
    "deger": "0.20"
   },
   {
    "kategori": "Makro",
    "bilesen": "Su / Sıvı Gereksinimi",
    "birim": "mL/gün",
    "hedef": "25 - 30 mL/kg/gün (veya 1 mL / kcal)",
    "deger": "80 g/100 mL"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin A",
    "birim": "mcg RE",
    "hedef": "900 - 1500",
    "deger": "100"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin D3",
    "birim": "mcg",
    "hedef": "En az 25 mcg (1000 IU)",
    "deger": "1.25 (50 IU)"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin E",
    "birim": "mg a-TE",
    "hedef": "En az 15",
    "deger": "2.3"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin K1",
    "birim": "mcg",
    "hedef": "En az 120",
    "deger": "8.0"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin C",
    "birim": "mg",
    "hedef": "En az 100",
    "deger": "14"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Folik Asit",
    "birim": "mcg",
    "hedef": "330 - 400 DFE",
    "deger": "30"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin B1 (Tiamin)",
    "birim": "mg",
    "hedef": "1.5 - 3.0",
    "deger": "0.15"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin B2 (Riboflavin)",
    "birim": "mg",
    "hedef": "En az 1.2",
    "deger": "0.20"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin B6 (Piridoksin)",
    "birim": "mg",
    "hedef": "En az 1.5",
    "deger": "0.22"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin B12",
    "birim": "mcg",
    "hedef": "En az 2.5",
    "deger": "0.20"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Niasin",
    "birim": "mg NE",
    "hedef": "18 - 40",
    "deger": "3.1"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Pantotenik Asit",
    "birim": "mg",
    "hedef": "En az 5.0",
    "deger": "0.65"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Biotin",
    "birim": "mcg",
    "hedef": "En az 30",
    "deger": "5.0"
   },
   {
    "kategori": "Elektrolit",
    "bilesen": "Sodyum (Na)",
    "birim": "mg",
    "hedef": "1500 - 3000 mg/gün (1 - 2 mmol/kg/gün)",
    "deger": "80"
   },
   {
    "kategori": "Elektrolit",
    "bilesen": "Potasyum (K)",
    "birim": "mg",
    "hedef": "2000 - 3500 mg/gün (1 - 1.5 mmol/kg/gün)",
    "deger": "190"
   },
   {
    "kategori": "Elektrolit",
    "bilesen": "Klor (Cl)",
    "birim": "mg",
    "hedef": "1 - 2 mmol/kg/gün (Na/K'ya paralel)",
    "deger": "65"
   },
   {
    "kategori": "Elektrolit",
    "bilesen": "Kalsiyum (Ca)",
    "birim": "mg",
    "hedef": "500 - 1000 mg/gün (10 - 15 mmol/gün)",
    "deger": "120"
   },
   {
    "kategori": "Elektrolit",
    "bilesen": "Fosfor (P)",
    "birim": "mg",
    "hedef": "700 - 1000 mg/gün (20 - 30 mmol/gün)",
    "deger": "100"
   },
   {
    "kategori": "Elektrolit",
    "bilesen": "Magnezyum (Mg)",
    "birim": "mg",
    "hedef": "250 - 400 mg/gün (10 - 15 mmol/gün)",
    "deger": "23"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Demir (Fe)",
    "birim": "mg",
    "hedef": "18 - 30",
    "deger": "1.5"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Çinko (Zn)",
    "birim": "mg",
    "hedef": "10 - 20",
    "deger": "1.3"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Manganez (Mn)",
    "birim": "mg",
    "hedef": "2 - 3 (maks 6)",
    "deger": "0.34"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Bakır (Cu)",
    "birim": "mcg",
    "hedef": "1000 - 3000",
    "deger": "170"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "İyot (I)",
    "birim": "mcg",
    "hedef": "150 - 300",
    "deger": "17"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Selenyum (Se)",
    "birim": "mcg",
    "hedef": "50 - 150",
    "deger": "8.0"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Krom (Cr)",
    "birim": "mcg",
    "hedef": "35 - 150",
    "deger": "11.5"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Molibden (Mo)",
    "birim": "mcg",
    "hedef": "50 - 250",
    "deger": "11"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Florür (F)",
    "birim": "mg",
    "hedef": "0 - 3",
    "deger": "0.08"
   },
   {
    "kategori": "Özel",
    "bilesen": "CaHMB",
    "birim": "g",
    "hedef": "3.0 g/gün (sarkopeni/ağır katabolizmada)",
    "deger": "-"
   },
   {
    "kategori": "Özel",
    "bilesen": "Kolin",
    "birim": "mg",
    "hedef": "400 - 550 mg/gün (Adequate Intake - AI)",
    "deger": "-"
   },
   {
    "kategori": "Özel",
    "bilesen": "Taurin",
    "birim": "mg",
    "hedef": "-",
    "deger": "-"
   },
   {
    "kategori": "Özel",
    "bilesen": "L-Karnitin",
    "birim": "mg",
    "hedef": "500 - 1000 mg/gün (diyaliz/kayıplarda)",
    "deger": "-"
   },
   {
    "kategori": "Fizikokimya",
    "bilesen": "Osmolarite",
    "birim": "mOsm/l",
    "hedef": "İzo-ozmolar (280-350) veya makul (<450-500)",
    "deger": "450"
   },
   {
    "kategori": "Fizikokimya",
    "bilesen": "Osmolalite",
    "birim": "mOsm/kg su",
    "hedef": "İzo-ozmolar (280-350)",
    "deger": "-"
   },
   {
    "kategori": "Fizikokimya",
    "bilesen": "Renal Solüt Yükü",
    "birim": "mOsm/l",
    "hedef": "300 - 600",
    "deger": "-"
   }
  ],
  "kcal": null,
  "kcal100": 125.0,
  "protein100": 9.4,
  "lif100": 0.5,
  "osmolarite": 450.0,
  "lifVar": true,
  "endikasyon": "Yüksek proteinli, düşük hacimli, berrak/az kalıntılı oral takviye.",
  "hedefKitle": "Erişkin",
  "form": "Oral",
  "diyabetik": false,
  "renal": false,
  "immun": false
 },
 {
  "isim": "Nutrison",
  "uretici": "Nutricia",
  "veriler": [
   {
    "kategori": "Makro",
    "bilesen": "Enerji",
    "birim": "kcal",
    "hedef": "1500 kcal (Akut <48-72s: <%70; >3. gün: 20-25 kcal/kg/gün)",
    "deger": "100"
   },
   {
    "kategori": "Makro",
    "bilesen": "Enerji",
    "birim": "kJ",
    "hedef": "6276 kJ",
    "deger": "420"
   },
   {
    "kategori": "Makro",
    "bilesen": "Protein",
    "birim": "g",
    "hedef": "1.3 g/kg/gün (1.2 - 1.5; KRT/Obezitede 2.0'ye kadar)",
    "deger": "4.0"
   },
   {
    "kategori": "Makro",
    "bilesen": "Yağ",
    "birim": "g",
    "hedef": "Maks 1.5 g/kg/gün",
    "deger": "3.9"
   },
   {
    "kategori": "Makro",
    "bilesen": "Doymuş Yağ",
    "birim": "g",
    "hedef": "-",
    "deger": "1.0"
   },
   {
    "kategori": "Makro",
    "bilesen": "Tekli Doymamış Yağ",
    "birim": "g",
    "hedef": "-",
    "deger": "2.2"
   },
   {
    "kategori": "Makro",
    "bilesen": "Çoklu Doymamış Yağ",
    "birim": "g",
    "hedef": "-",
    "deger": "0.7"
   },
   {
    "kategori": "Makro",
    "bilesen": "Karbonhidrat",
    "birim": "g",
    "hedef": "Maks 5 mg/kg/dk infüzyon hızı",
    "deger": "12.3"
   },
   {
    "kategori": "Makro",
    "bilesen": "Şekerler",
    "birim": "g",
    "hedef": "-",
    "deger": "0.7"
   },
   {
    "kategori": "Makro",
    "bilesen": "Polioller",
    "birim": "g",
    "hedef": "-",
    "deger": "-"
   },
   {
    "kategori": "Makro",
    "bilesen": "Lif / FOS",
    "birim": "g",
    "hedef": "10 - 20 g/gün (iskemi/şokta kontrendike)",
    "deger": "<0.1"
   },
   {
    "kategori": "Makro",
    "bilesen": "Diyet Lifi",
    "birim": "g",
    "hedef": "-",
    "deger": "-"
   },
   {
    "kategori": "Makro",
    "bilesen": "FOS",
    "birim": "g",
    "hedef": "-",
    "deger": "-"
   },
   {
    "kategori": "Makro",
    "bilesen": "Tuz (NaCl)",
    "birim": "g",
    "hedef": "4 - 6 g/gün",
    "deger": "-"
   },
   {
    "kategori": "Makro",
    "bilesen": "Su / Sıvı Gereksinimi",
    "birim": "mL/gün",
    "hedef": "25 - 30 mL/kg/gün (veya 1 mL / kcal)",
    "deger": "85 mL/100 mL"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin A",
    "birim": "mcg RE",
    "hedef": "900 - 1500",
    "deger": "82"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin D3",
    "birim": "mcg",
    "hedef": "En az 25 mcg (1000 IU)",
    "deger": "1.0 (40 IU)"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin E",
    "birim": "mg a-TE",
    "hedef": "En az 15",
    "deger": "1.3"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin K1",
    "birim": "mcg",
    "hedef": "En az 120",
    "deger": "5.3"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin C",
    "birim": "mg",
    "hedef": "En az 100",
    "deger": "10"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Folik Asit",
    "birim": "mcg",
    "hedef": "330 - 400 DFE",
    "deger": "27"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin B1 (Tiamin)",
    "birim": "mg",
    "hedef": "1.5 - 3.0",
    "deger": "0.15"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin B2 (Riboflavin)",
    "birim": "mg",
    "hedef": "En az 1.2",
    "deger": "0.16"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin B6 (Piridoksin)",
    "birim": "mg",
    "hedef": "En az 1.5",
    "deger": "0.17"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin B12",
    "birim": "mcg",
    "hedef": "En az 2.5",
    "deger": "0.21"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Niasin",
    "birim": "mg NE",
    "hedef": "18 - 40",
    "deger": "1.8"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Pantotenik Asit",
    "birim": "mg",
    "hedef": "En az 5.0",
    "deger": "0.53"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Biotin",
    "birim": "mcg",
    "hedef": "En az 30",
    "deger": "4.0"
   },
   {
    "kategori": "Elektrolit",
    "bilesen": "Sodyum (Na)",
    "birim": "mg",
    "hedef": "1500 - 3000 mg/gün (1 - 2 mmol/kg/gün)",
    "deger": "100"
   },
   {
    "kategori": "Elektrolit",
    "bilesen": "Potasyum (K)",
    "birim": "mg",
    "hedef": "2000 - 3500 mg/gün (1 - 1.5 mmol/kg/gün)",
    "deger": "150"
   },
   {
    "kategori": "Elektrolit",
    "bilesen": "Klor (Cl)",
    "birim": "mg",
    "hedef": "1 - 2 mmol/kg/gün (Na/K'ya paralel)",
    "deger": "125"
   },
   {
    "kategori": "Elektrolit",
    "bilesen": "Kalsiyum (Ca)",
    "birim": "mg",
    "hedef": "500 - 1000 mg/gün (10 - 15 mmol/gün)",
    "deger": "80"
   },
   {
    "kategori": "Elektrolit",
    "bilesen": "Fosfor (P)",
    "birim": "mg",
    "hedef": "700 - 1000 mg/gün (20 - 30 mmol/gün)",
    "deger": "72"
   },
   {
    "kategori": "Elektrolit",
    "bilesen": "Magnezyum (Mg)",
    "birim": "mg",
    "hedef": "250 - 400 mg/gün (10 - 15 mmol/gün)",
    "deger": "23"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Demir (Fe)",
    "birim": "mg",
    "hedef": "18 - 30",
    "deger": "1.6"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Çinko (Zn)",
    "birim": "mg",
    "hedef": "10 - 20",
    "deger": "1.2"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Manganez (Mn)",
    "birim": "mg",
    "hedef": "2 - 3 (maks 6)",
    "deger": "0.33"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Bakır (Cu)",
    "birim": "mcg",
    "hedef": "1000 - 3000",
    "deger": "180"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "İyot (I)",
    "birim": "mcg",
    "hedef": "150 - 300",
    "deger": "13"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Selenyum (Se)",
    "birim": "mcg",
    "hedef": "50 - 150",
    "deger": "5.7"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Krom (Cr)",
    "birim": "mcg",
    "hedef": "35 - 150",
    "deger": "6.7"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Molibden (Mo)",
    "birim": "mcg",
    "hedef": "50 - 250",
    "deger": "10"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Florür (F)",
    "birim": "mg",
    "hedef": "0 - 3",
    "deger": "0.10"
   },
   {
    "kategori": "Özel",
    "bilesen": "CaHMB",
    "birim": "g",
    "hedef": "3.0 g/gün (sarkopeni/ağır katabolizmada)",
    "deger": "-"
   },
   {
    "kategori": "Özel",
    "bilesen": "Kolin",
    "birim": "mg",
    "hedef": "400 - 550 mg/gün (Adequate Intake - AI)",
    "deger": "37"
   },
   {
    "kategori": "Özel",
    "bilesen": "Taurin",
    "birim": "mg",
    "hedef": "-",
    "deger": "-"
   },
   {
    "kategori": "Özel",
    "bilesen": "L-Karnitin",
    "birim": "mg",
    "hedef": "500 - 1000 mg/gün (diyaliz/kayıplarda)",
    "deger": "-"
   },
   {
    "kategori": "Fizikokimya",
    "bilesen": "Osmolarite",
    "birim": "mOsm/l",
    "hedef": "İzo-ozmolar (280-350) veya makul (<450-500)",
    "deger": "255"
   },
   {
    "kategori": "Fizikokimya",
    "bilesen": "Osmolalite",
    "birim": "mOsm/kg su",
    "hedef": "İzo-ozmolar (280-350)",
    "deger": "305"
   },
   {
    "kategori": "Fizikokimya",
    "bilesen": "Renal Solüt Yükü",
    "birim": "mOsm/l",
    "hedef": "300 - 600",
    "deger": "369"
   }
  ],
  "kcal": null,
  "kcal100": 100.0,
  "protein100": 4.0,
  "lif100": 0.0,
  "osmolarite": 255.0,
  "lifVar": false,
  "endikasyon": "Standart, lifsiz, izotonik polimerik tüp beslenme formülü.",
  "hedefKitle": "Erişkin",
  "form": "Tüp beslenme",
  "diyabetik": false,
  "renal": false,
  "immun": false
 },
 {
  "isim": "Isosource Energy",
  "uretici": "Nestlé Health Science",
  "veriler": [
   {
    "kategori": "Makro",
    "bilesen": "Enerji",
    "birim": "kcal",
    "hedef": "1500 kcal (Akut <48-72s: <%70; >3. gün: 20-25 kcal/kg/gün)",
    "deger": "157 (1.6 kcal/ml)"
   },
   {
    "kategori": "Makro",
    "bilesen": "Enerji",
    "birim": "kJ",
    "hedef": "6276 kJ",
    "deger": "657"
   },
   {
    "kategori": "Makro",
    "bilesen": "Protein",
    "birim": "g",
    "hedef": "1.3 g/kg/gün (1.2 - 1.5; KRT/Obezitede 2.0'ye kadar)",
    "deger": "6.10"
   },
   {
    "kategori": "Makro",
    "bilesen": "Yağ",
    "birim": "g",
    "hedef": "Maks 1.5 g/kg/gün",
    "deger": "6.20"
   },
   {
    "kategori": "Makro",
    "bilesen": "Doymuş Yağ",
    "birim": "g",
    "hedef": "-",
    "deger": "-"
   },
   {
    "kategori": "Makro",
    "bilesen": "Tekli Doymamış Yağ",
    "birim": "g",
    "hedef": "-",
    "deger": "-"
   },
   {
    "kategori": "Makro",
    "bilesen": "Çoklu Doymamış Yağ",
    "birim": "g",
    "hedef": "-",
    "deger": "-"
   },
   {
    "kategori": "Makro",
    "bilesen": "Karbonhidrat",
    "birim": "g",
    "hedef": "Maks 5 mg/kg/dk infüzyon hızı",
    "deger": "19.30"
   },
   {
    "kategori": "Makro",
    "bilesen": "Şekerler",
    "birim": "g",
    "hedef": "-",
    "deger": "-"
   },
   {
    "kategori": "Makro",
    "bilesen": "Polioller",
    "birim": "g",
    "hedef": "-",
    "deger": "-"
   },
   {
    "kategori": "Makro",
    "bilesen": "Lif / FOS",
    "birim": "g",
    "hedef": "10 - 20 g/gün (iskemi/şokta kontrendike)",
    "deger": "-"
   },
   {
    "kategori": "Makro",
    "bilesen": "Diyet Lifi",
    "birim": "g",
    "hedef": "-",
    "deger": "-"
   },
   {
    "kategori": "Makro",
    "bilesen": "FOS",
    "birim": "g",
    "hedef": "-",
    "deger": "-"
   },
   {
    "kategori": "Makro",
    "bilesen": "Tuz (NaCl)",
    "birim": "g",
    "hedef": "4 - 6 g/gün",
    "deger": "-"
   },
   {
    "kategori": "Makro",
    "bilesen": "Su / Sıvı Gereksinimi",
    "birim": "mL/gün",
    "hedef": "25 - 30 mL/kg/gün (veya 1 mL / kcal)",
    "deger": "-"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin A",
    "birim": "mcg RE",
    "hedef": "900 - 1500",
    "deger": "-"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin D3",
    "birim": "mcg",
    "hedef": "En az 25 mcg (1000 IU)",
    "deger": "-"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin E",
    "birim": "mg a-TE",
    "hedef": "En az 15",
    "deger": "-"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin K1",
    "birim": "mcg",
    "hedef": "En az 120",
    "deger": "-"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin C",
    "birim": "mg",
    "hedef": "En az 100",
    "deger": "-"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Folik Asit",
    "birim": "mcg",
    "hedef": "330 - 400 DFE",
    "deger": "-"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin B1 (Tiamin)",
    "birim": "mg",
    "hedef": "1.5 - 3.0",
    "deger": "-"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin B2 (Riboflavin)",
    "birim": "mg",
    "hedef": "En az 1.2",
    "deger": "-"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin B6 (Piridoksin)",
    "birim": "mg",
    "hedef": "En az 1.5",
    "deger": "-"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin B12",
    "birim": "mcg",
    "hedef": "En az 2.5",
    "deger": "-"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Niasin",
    "birim": "mg NE",
    "hedef": "18 - 40",
    "deger": "-"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Pantotenik Asit",
    "birim": "mg",
    "hedef": "En az 5.0",
    "deger": "-"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Biotin",
    "birim": "mcg",
    "hedef": "En az 30",
    "deger": "-"
   },
   {
    "kategori": "Elektrolit",
    "bilesen": "Sodyum (Na)",
    "birim": "mg",
    "hedef": "1500 - 3000 mg/gün (1 - 2 mmol/kg/gün)",
    "deger": "120"
   },
   {
    "kategori": "Elektrolit",
    "bilesen": "Potasyum (K)",
    "birim": "mg",
    "hedef": "2000 - 3500 mg/gün (1 - 1.5 mmol/kg/gün)",
    "deger": "190"
   },
   {
    "kategori": "Elektrolit",
    "bilesen": "Klor (Cl)",
    "birim": "mg",
    "hedef": "1 - 2 mmol/kg/gün (Na/K'ya paralel)",
    "deger": "105"
   },
   {
    "kategori": "Elektrolit",
    "bilesen": "Kalsiyum (Ca)",
    "birim": "mg",
    "hedef": "500 - 1000 mg/gün (10 - 15 mmol/gün)",
    "deger": "110"
   },
   {
    "kategori": "Elektrolit",
    "bilesen": "Fosfor (P)",
    "birim": "mg",
    "hedef": "700 - 1000 mg/gün (20 - 30 mmol/gün)",
    "deger": "90"
   },
   {
    "kategori": "Elektrolit",
    "bilesen": "Magnezyum (Mg)",
    "birim": "mg",
    "hedef": "250 - 400 mg/gün (10 - 15 mmol/gün)",
    "deger": "18"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Demir (Fe)",
    "birim": "mg",
    "hedef": "18 - 30",
    "deger": "1.6"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Çinko (Zn)",
    "birim": "mg",
    "hedef": "10 - 20",
    "deger": "1.5"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Manganez (Mn)",
    "birim": "mg",
    "hedef": "2 - 3 (maks 6)",
    "deger": "-"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Bakır (Cu)",
    "birim": "mcg",
    "hedef": "1000 - 3000",
    "deger": "-"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "İyot (I)",
    "birim": "mcg",
    "hedef": "150 - 300",
    "deger": "-"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Selenyum (Se)",
    "birim": "mcg",
    "hedef": "50 - 150",
    "deger": "-"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Krom (Cr)",
    "birim": "mcg",
    "hedef": "35 - 150",
    "deger": "-"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Molibden (Mo)",
    "birim": "mcg",
    "hedef": "50 - 250",
    "deger": "-"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Florür (F)",
    "birim": "mg",
    "hedef": "0 - 3",
    "deger": "-"
   },
   {
    "kategori": "Özel",
    "bilesen": "CaHMB",
    "birim": "g",
    "hedef": "3.0 g/gün (sarkopeni/ağır katabolizmada)",
    "deger": "-"
   },
   {
    "kategori": "Özel",
    "bilesen": "Kolin",
    "birim": "mg",
    "hedef": "400 - 550 mg/gün (Adequate Intake - AI)",
    "deger": "-"
   },
   {
    "kategori": "Özel",
    "bilesen": "Taurin",
    "birim": "mg",
    "hedef": "-",
    "deger": "-"
   },
   {
    "kategori": "Özel",
    "bilesen": "L-Karnitin",
    "birim": "mg",
    "hedef": "500 - 1000 mg/gün (diyaliz/kayıplarda)",
    "deger": "-"
   },
   {
    "kategori": "Fizikokimya",
    "bilesen": "Osmolarite",
    "birim": "mOsm/l",
    "hedef": "İzo-ozmolar (280-350) veya makul (<450-500)",
    "deger": "382"
   },
   {
    "kategori": "Fizikokimya",
    "bilesen": "Osmolalite",
    "birim": "mOsm/kg su",
    "hedef": "İzo-ozmolar (280-350)",
    "deger": "-"
   },
   {
    "kategori": "Fizikokimya",
    "bilesen": "Renal Solüt Yükü",
    "birim": "mOsm/l",
    "hedef": "300 - 600",
    "deger": "-"
   }
  ],
  "kcal": null,
  "kcal100": 157.0,
  "protein100": 6.1,
  "lif100": null,
  "osmolarite": 382.0,
  "lifVar": false,
  "endikasyon": "Yüksek kalorili, lifsiz standart tüp beslenme formülü; sıvı kısıtlaması olan hastalar.",
  "hedefKitle": "Erişkin",
  "form": "Tüp beslenme",
  "diyabetik": false,
  "renal": false,
  "immun": false
 },
 {
  "isim": "Resource Diabet",
  "uretici": "Nestlé Health Science",
  "veriler": [
   {
    "kategori": "Makro",
    "bilesen": "Enerji",
    "birim": "kcal",
    "hedef": "1500 kcal (Akut <48-72s: <%70; >3. gün: 20-25 kcal/kg/gün)",
    "deger": "100"
   },
   {
    "kategori": "Makro",
    "bilesen": "Enerji",
    "birim": "kJ",
    "hedef": "6276 kJ",
    "deger": "418"
   },
   {
    "kategori": "Makro",
    "bilesen": "Protein",
    "birim": "g",
    "hedef": "1.3 g/kg/gün (1.2 - 1.5; KRT/Obezitede 2.0'ye kadar)",
    "deger": "7.0"
   },
   {
    "kategori": "Makro",
    "bilesen": "Yağ",
    "birim": "g",
    "hedef": "Maks 1.5 g/kg/gün",
    "deger": "2.7"
   },
   {
    "kategori": "Makro",
    "bilesen": "Doymuş Yağ",
    "birim": "g",
    "hedef": "-",
    "deger": "0.60"
   },
   {
    "kategori": "Makro",
    "bilesen": "Tekli Doymamış Yağ",
    "birim": "g",
    "hedef": "-",
    "deger": "1.4"
   },
   {
    "kategori": "Makro",
    "bilesen": "Çoklu Doymamış Yağ",
    "birim": "g",
    "hedef": "-",
    "deger": "0.60"
   },
   {
    "kategori": "Makro",
    "bilesen": "Karbonhidrat",
    "birim": "g",
    "hedef": "Maks 5 mg/kg/dk infüzyon hızı",
    "deger": "10.9"
   },
   {
    "kategori": "Makro",
    "bilesen": "Şekerler",
    "birim": "g",
    "hedef": "-",
    "deger": "1.4"
   },
   {
    "kategori": "Makro",
    "bilesen": "Polioller",
    "birim": "g",
    "hedef": "-",
    "deger": "-"
   },
   {
    "kategori": "Makro",
    "bilesen": "Lif / FOS",
    "birim": "g",
    "hedef": "10 - 20 g/gün (iskemi/şokta kontrendike)",
    "deger": "2.0"
   },
   {
    "kategori": "Makro",
    "bilesen": "Diyet Lifi",
    "birim": "g",
    "hedef": "-",
    "deger": "-"
   },
   {
    "kategori": "Makro",
    "bilesen": "FOS",
    "birim": "g",
    "hedef": "-",
    "deger": "-"
   },
   {
    "kategori": "Makro",
    "bilesen": "Tuz (NaCl)",
    "birim": "g",
    "hedef": "4 - 6 g/gün",
    "deger": "0.20"
   },
   {
    "kategori": "Makro",
    "bilesen": "Su / Sıvı Gereksinimi",
    "birim": "mL/gün",
    "hedef": "25 - 30 mL/kg/gün (veya 1 mL / kcal)",
    "deger": "85 g/100 mL"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin A",
    "birim": "mcg RE",
    "hedef": "900 - 1500",
    "deger": "65"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin D3",
    "birim": "mcg",
    "hedef": "En az 25 mcg (1000 IU)",
    "deger": "1.0 (40 IU)"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin E",
    "birim": "mg a-TE",
    "hedef": "En az 15",
    "deger": "1.5"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin K1",
    "birim": "mcg",
    "hedef": "En az 120",
    "deger": "6.0"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin C",
    "birim": "mg",
    "hedef": "En az 100",
    "deger": "8.0"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Folik Asit",
    "birim": "mcg",
    "hedef": "330 - 400 DFE",
    "deger": "20"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin B1 (Tiamin)",
    "birim": "mg",
    "hedef": "1.5 - 3.0",
    "deger": "0.12"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin B2 (Riboflavin)",
    "birim": "mg",
    "hedef": "En az 1.2",
    "deger": "0.15"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin B6 (Piridoksin)",
    "birim": "mg",
    "hedef": "En az 1.5",
    "deger": "0.20"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin B12",
    "birim": "mcg",
    "hedef": "En az 2.5",
    "deger": "0.35"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Niasin",
    "birim": "mg NE",
    "hedef": "18 - 40",
    "deger": "2.2"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Pantotenik Asit",
    "birim": "mg",
    "hedef": "En az 5.0",
    "deger": "0.50"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Biotin",
    "birim": "mcg",
    "hedef": "En az 30",
    "deger": "3.5"
   },
   {
    "kategori": "Elektrolit",
    "bilesen": "Sodyum (Na)",
    "birim": "mg",
    "hedef": "1500 - 3000 mg/gün (1 - 2 mmol/kg/gün)",
    "deger": "80"
   },
   {
    "kategori": "Elektrolit",
    "bilesen": "Potasyum (K)",
    "birim": "mg",
    "hedef": "2000 - 3500 mg/gün (1 - 1.5 mmol/kg/gün)",
    "deger": "110"
   },
   {
    "kategori": "Elektrolit",
    "bilesen": "Klor (Cl)",
    "birim": "mg",
    "hedef": "1 - 2 mmol/kg/gün (Na/K'ya paralel)",
    "deger": "80"
   },
   {
    "kategori": "Elektrolit",
    "bilesen": "Kalsiyum (Ca)",
    "birim": "mg",
    "hedef": "500 - 1000 mg/gün (10 - 15 mmol/gün)",
    "deger": "135"
   },
   {
    "kategori": "Elektrolit",
    "bilesen": "Fosfor (P)",
    "birim": "mg",
    "hedef": "700 - 1000 mg/gün (20 - 30 mmol/gün)",
    "deger": "80"
   },
   {
    "kategori": "Elektrolit",
    "bilesen": "Magnezyum (Mg)",
    "birim": "mg",
    "hedef": "250 - 400 mg/gün (10 - 15 mmol/gün)",
    "deger": "18"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Demir (Fe)",
    "birim": "mg",
    "hedef": "18 - 30",
    "deger": "1.2"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Çinko (Zn)",
    "birim": "mg",
    "hedef": "10 - 20",
    "deger": "1.1"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Manganez (Mn)",
    "birim": "mg",
    "hedef": "2 - 3 (maks 6)",
    "deger": "0.18"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Bakır (Cu)",
    "birim": "mcg",
    "hedef": "1000 - 3000",
    "deger": "100"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "İyot (I)",
    "birim": "mcg",
    "hedef": "150 - 300",
    "deger": "10"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Selenyum (Se)",
    "birim": "mcg",
    "hedef": "50 - 150",
    "deger": "5.0"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Krom (Cr)",
    "birim": "mcg",
    "hedef": "35 - 150",
    "deger": "7.0"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Molibden (Mo)",
    "birim": "mcg",
    "hedef": "50 - 250",
    "deger": "8.5"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Florür (F)",
    "birim": "mg",
    "hedef": "0 - 3",
    "deger": "0.08"
   },
   {
    "kategori": "Özel",
    "bilesen": "CaHMB",
    "birim": "g",
    "hedef": "3.0 g/gün (sarkopeni/ağır katabolizmada)",
    "deger": "-"
   },
   {
    "kategori": "Özel",
    "bilesen": "Kolin",
    "birim": "mg",
    "hedef": "400 - 550 mg/gün (Adequate Intake - AI)",
    "deger": "-"
   },
   {
    "kategori": "Özel",
    "bilesen": "Taurin",
    "birim": "mg",
    "hedef": "-",
    "deger": "-"
   },
   {
    "kategori": "Özel",
    "bilesen": "L-Karnitin",
    "birim": "mg",
    "hedef": "500 - 1000 mg/gün (diyaliz/kayıplarda)",
    "deger": "-"
   },
   {
    "kategori": "Fizikokimya",
    "bilesen": "Osmolarite",
    "birim": "mOsm/l",
    "hedef": "İzo-ozmolar (280-350) veya makul (<450-500)",
    "deger": "218"
   },
   {
    "kategori": "Fizikokimya",
    "bilesen": "Osmolalite",
    "birim": "mOsm/kg su",
    "hedef": "İzo-ozmolar (280-350)",
    "deger": "-"
   },
   {
    "kategori": "Fizikokimya",
    "bilesen": "Renal Solüt Yükü",
    "birim": "mOsm/l",
    "hedef": "300 - 600",
    "deger": "-"
   }
  ],
  "kcal": null,
  "kcal100": 100.0,
  "protein100": 7.0,
  "lif100": 2.0,
  "osmolarite": 218.0,
  "lifVar": true,
  "endikasyon": "Diyabetik hasta için standart kalorili, lifli formül.",
  "hedefKitle": "Erişkin",
  "form": "Oral / tüp",
  "diyabetik": true,
  "renal": false,
  "immun": false
 },
 {
  "isim": "Resource Energy",
  "uretici": "Nestlé Health Science",
  "veriler": [
   {
    "kategori": "Makro",
    "bilesen": "Enerji",
    "birim": "kcal",
    "hedef": "1500 kcal (Akut <48-72s: <%70; >3. gün: 20-25 kcal/kg/gün)",
    "deger": "151"
   },
   {
    "kategori": "Makro",
    "bilesen": "Enerji",
    "birim": "kJ",
    "hedef": "6276 kJ",
    "deger": "633"
   },
   {
    "kategori": "Makro",
    "bilesen": "Protein",
    "birim": "g",
    "hedef": "1.3 g/kg/gün (1.2 - 1.5; KRT/Obezitede 2.0'ye kadar)",
    "deger": "5.6"
   },
   {
    "kategori": "Makro",
    "bilesen": "Yağ",
    "birim": "g",
    "hedef": "Maks 1.5 g/kg/gün",
    "deger": "5.0"
   },
   {
    "kategori": "Makro",
    "bilesen": "Doymuş Yağ",
    "birim": "g",
    "hedef": "-",
    "deger": "0.7"
   },
   {
    "kategori": "Makro",
    "bilesen": "Tekli Doymamış Yağ",
    "birim": "g",
    "hedef": "-",
    "deger": "1.9"
   },
   {
    "kategori": "Makro",
    "bilesen": "Çoklu Doymamış Yağ",
    "birim": "g",
    "hedef": "-",
    "deger": "2.3"
   },
   {
    "kategori": "Makro",
    "bilesen": "Karbonhidrat",
    "birim": "g",
    "hedef": "Maks 5 mg/kg/dk infüzyon hızı",
    "deger": "21.0"
   },
   {
    "kategori": "Makro",
    "bilesen": "Şekerler",
    "birim": "g",
    "hedef": "-",
    "deger": "5.7"
   },
   {
    "kategori": "Makro",
    "bilesen": "Polioller",
    "birim": "g",
    "hedef": "-",
    "deger": "-"
   },
   {
    "kategori": "Makro",
    "bilesen": "Lif / FOS",
    "birim": "g",
    "hedef": "10 - 20 g/gün (iskemi/şokta kontrendike)",
    "deger": "0.5"
   },
   {
    "kategori": "Makro",
    "bilesen": "Diyet Lifi",
    "birim": "g",
    "hedef": "-",
    "deger": "-"
   },
   {
    "kategori": "Makro",
    "bilesen": "FOS",
    "birim": "g",
    "hedef": "-",
    "deger": "-"
   },
   {
    "kategori": "Makro",
    "bilesen": "Tuz (NaCl)",
    "birim": "g",
    "hedef": "4 - 6 g/gün",
    "deger": "0.16"
   },
   {
    "kategori": "Makro",
    "bilesen": "Su / Sıvı Gereksinimi",
    "birim": "mL/gün",
    "hedef": "25 - 30 mL/kg/gün (veya 1 mL / kcal)",
    "deger": "77.5 g/100 mL"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin A",
    "birim": "mcg RE",
    "hedef": "900 - 1500",
    "deger": "138"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin D3",
    "birim": "mcg",
    "hedef": "En az 25 mcg (1000 IU)",
    "deger": "1.8 (72 IU)"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin E",
    "birim": "mg a-TE",
    "hedef": "En az 15",
    "deger": "3.0"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin K1",
    "birim": "mcg",
    "hedef": "En az 120",
    "deger": "14"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin C",
    "birim": "mg",
    "hedef": "En az 100",
    "deger": "15"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Folik Asit",
    "birim": "mcg",
    "hedef": "330 - 400 DFE",
    "deger": "45"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin B1 (Tiamin)",
    "birim": "mg",
    "hedef": "1.5 - 3.0",
    "deger": "0.23"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin B2 (Riboflavin)",
    "birim": "mg",
    "hedef": "En az 1.2",
    "deger": "0.22"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin B6 (Piridoksin)",
    "birim": "mg",
    "hedef": "En az 1.5",
    "deger": "0.35"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin B12",
    "birim": "mcg",
    "hedef": "En az 2.5",
    "deger": "0.40"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Niasin",
    "birim": "mg NE",
    "hedef": "18 - 40",
    "deger": "2.1"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Pantotenik Asit",
    "birim": "mg",
    "hedef": "En az 5.0",
    "deger": "0.85"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Biotin",
    "birim": "mcg",
    "hedef": "En az 30",
    "deger": "6.3"
   },
   {
    "kategori": "Elektrolit",
    "bilesen": "Sodyum (Na)",
    "birim": "mg",
    "hedef": "1500 - 3000 mg/gün (1 - 2 mmol/kg/gün)",
    "deger": "64"
   },
   {
    "kategori": "Elektrolit",
    "bilesen": "Potasyum (K)",
    "birim": "mg",
    "hedef": "2000 - 3500 mg/gün (1 - 1.5 mmol/kg/gün)",
    "deger": "170"
   },
   {
    "kategori": "Elektrolit",
    "bilesen": "Klor (Cl)",
    "birim": "mg",
    "hedef": "1 - 2 mmol/kg/gün (Na/K'ya paralel)",
    "deger": "85"
   },
   {
    "kategori": "Elektrolit",
    "bilesen": "Kalsiyum (Ca)",
    "birim": "mg",
    "hedef": "500 - 1000 mg/gün (10 - 15 mmol/gün)",
    "deger": "80"
   },
   {
    "kategori": "Elektrolit",
    "bilesen": "Fosfor (P)",
    "birim": "mg",
    "hedef": "700 - 1000 mg/gün (20 - 30 mmol/gün)",
    "deger": "80"
   },
   {
    "kategori": "Elektrolit",
    "bilesen": "Magnezyum (Mg)",
    "birim": "mg",
    "hedef": "250 - 400 mg/gün (10 - 15 mmol/gün)",
    "deger": "28"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Demir (Fe)",
    "birim": "mg",
    "hedef": "18 - 30",
    "deger": "1.7"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Çinko (Zn)",
    "birim": "mg",
    "hedef": "10 - 20",
    "deger": "1.7"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Manganez (Mn)",
    "birim": "mg",
    "hedef": "2 - 3 (maks 6)",
    "deger": "0.35"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Bakır (Cu)",
    "birim": "mcg",
    "hedef": "1000 - 3000",
    "deger": "220"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "İyot (I)",
    "birim": "mcg",
    "hedef": "150 - 300",
    "deger": "16"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Selenyum (Se)",
    "birim": "mcg",
    "hedef": "50 - 150",
    "deger": "8.0"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Krom (Cr)",
    "birim": "mcg",
    "hedef": "35 - 150",
    "deger": "12"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Molibden (Mo)",
    "birim": "mcg",
    "hedef": "50 - 250",
    "deger": "13"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Florür (F)",
    "birim": "mg",
    "hedef": "0 - 3",
    "deger": "0.15"
   },
   {
    "kategori": "Özel",
    "bilesen": "CaHMB",
    "birim": "g",
    "hedef": "3.0 g/gün (sarkopeni/ağır katabolizmada)",
    "deger": "-"
   },
   {
    "kategori": "Özel",
    "bilesen": "Kolin",
    "birim": "mg",
    "hedef": "400 - 550 mg/gün (Adequate Intake - AI)",
    "deger": "-"
   },
   {
    "kategori": "Özel",
    "bilesen": "Taurin",
    "birim": "mg",
    "hedef": "-",
    "deger": "-"
   },
   {
    "kategori": "Özel",
    "bilesen": "L-Karnitin",
    "birim": "mg",
    "hedef": "500 - 1000 mg/gün (diyaliz/kayıplarda)",
    "deger": "-"
   },
   {
    "kategori": "Fizikokimya",
    "bilesen": "Osmolarite",
    "birim": "mOsm/l",
    "hedef": "İzo-ozmolar (280-350) veya makul (<450-500)",
    "deger": "488"
   },
   {
    "kategori": "Fizikokimya",
    "bilesen": "Osmolalite",
    "birim": "mOsm/kg su",
    "hedef": "İzo-ozmolar (280-350)",
    "deger": "-"
   },
   {
    "kategori": "Fizikokimya",
    "bilesen": "Renal Solüt Yükü",
    "birim": "mOsm/l",
    "hedef": "300 - 600",
    "deger": "-"
   }
  ],
  "kcal": null,
  "kcal100": 151.0,
  "protein100": 5.6,
  "lif100": 0.5,
  "osmolarite": 488.0,
  "lifVar": true,
  "endikasyon": "Yüksek kalorili standart oral takviye/tüp beslenme formülü.",
  "hedefKitle": "Erişkin",
  "form": "Oral / tüp",
  "diyabetik": false,
  "renal": false,
  "immun": false
 },
 {
  "isim": "Fortimel Compact Fibre",
  "uretici": "Nutricia",
  "veriler": [
   {
    "kategori": "Makro",
    "bilesen": "Enerji",
    "birim": "kcal",
    "hedef": "1500 kcal (Akut <48-72s: <%70; >3. gün: 20-25 kcal/kg/gün)",
    "deger": "240"
   },
   {
    "kategori": "Makro",
    "bilesen": "Enerji",
    "birim": "kJ",
    "hedef": "6276 kJ",
    "deger": "1005"
   },
   {
    "kategori": "Makro",
    "bilesen": "Protein",
    "birim": "g",
    "hedef": "1.3 g/kg/gün (1.2 - 1.5; KRT/Obezitede 2.0'ye kadar)",
    "deger": "9.4"
   },
   {
    "kategori": "Makro",
    "bilesen": "Yağ",
    "birim": "g",
    "hedef": "Maks 1.5 g/kg/gün",
    "deger": "10.4"
   },
   {
    "kategori": "Makro",
    "bilesen": "Doymuş Yağ",
    "birim": "g",
    "hedef": "-",
    "deger": "1.1"
   },
   {
    "kategori": "Makro",
    "bilesen": "Tekli Doymamış Yağ",
    "birim": "g",
    "hedef": "-",
    "deger": "6.3"
   },
   {
    "kategori": "Makro",
    "bilesen": "Çoklu Doymamış Yağ",
    "birim": "g",
    "hedef": "-",
    "deger": "3.1"
   },
   {
    "kategori": "Makro",
    "bilesen": "Karbonhidrat",
    "birim": "g",
    "hedef": "Maks 5 mg/kg/dk infüzyon hızı",
    "deger": "25.2"
   },
   {
    "kategori": "Makro",
    "bilesen": "Şekerler",
    "birim": "g",
    "hedef": "-",
    "deger": "13.9"
   },
   {
    "kategori": "Makro",
    "bilesen": "Polioller",
    "birim": "g",
    "hedef": "-",
    "deger": "-"
   },
   {
    "kategori": "Makro",
    "bilesen": "Lif / FOS",
    "birim": "g",
    "hedef": "10 - 20 g/gün (iskemi/şokta kontrendike)",
    "deger": "3.6"
   },
   {
    "kategori": "Makro",
    "bilesen": "Diyet Lifi",
    "birim": "g",
    "hedef": "-",
    "deger": "3.6"
   },
   {
    "kategori": "Makro",
    "bilesen": "FOS",
    "birim": "g",
    "hedef": "-",
    "deger": "-"
   },
   {
    "kategori": "Makro",
    "bilesen": "Tuz (NaCl)",
    "birim": "g",
    "hedef": "4 - 6 g/gün",
    "deger": "-"
   },
   {
    "kategori": "Makro",
    "bilesen": "Su / Sıvı Gereksinimi",
    "birim": "mL/gün",
    "hedef": "25 - 30 mL/kg/gün (veya 1 mL / kcal)",
    "deger": "-"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin A",
    "birim": "mcg RE",
    "hedef": "900 - 1500",
    "deger": "240"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin D3",
    "birim": "mcg",
    "hedef": "En az 25 mcg (1000 IU)",
    "deger": "1.8 (72 IU)"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin E",
    "birim": "mg a-TE",
    "hedef": "En az 15",
    "deger": "3.0"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin K1",
    "birim": "mcg",
    "hedef": "En az 120",
    "deger": "13"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin C",
    "birim": "mg",
    "hedef": "En az 100",
    "deger": "24"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Folik Asit",
    "birim": "mcg",
    "hedef": "330 - 400 DFE",
    "deger": "64"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin B1 (Tiamin)",
    "birim": "mg",
    "hedef": "1.5 - 3.0",
    "deger": "0.40"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin B2 (Riboflavin)",
    "birim": "mg",
    "hedef": "En az 1.2",
    "deger": "0.40"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin B6 (Piridoksin)",
    "birim": "mg",
    "hedef": "En az 1.5",
    "deger": "0.40"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin B12",
    "birim": "mcg",
    "hedef": "En az 2.5",
    "deger": "0.50"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Niasin",
    "birim": "mg NE",
    "hedef": "18 - 40",
    "deger": "4.3"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Pantotenik Asit",
    "birim": "mg",
    "hedef": "En az 5.0",
    "deger": "1.3"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Biotin",
    "birim": "mcg",
    "hedef": "En az 30",
    "deger": "9.6"
   },
   {
    "kategori": "Elektrolit",
    "bilesen": "Sodyum (Na)",
    "birim": "mg",
    "hedef": "1500 - 3000 mg/gün (1 - 2 mmol/kg/gün)",
    "deger": "83"
   },
   {
    "kategori": "Elektrolit",
    "bilesen": "Potasyum (K)",
    "birim": "mg",
    "hedef": "2000 - 3500 mg/gün (1 - 1.5 mmol/kg/gün)",
    "deger": "229"
   },
   {
    "kategori": "Elektrolit",
    "bilesen": "Klor (Cl)",
    "birim": "mg",
    "hedef": "1 - 2 mmol/kg/gün (Na/K'ya paralel)",
    "deger": "91"
   },
   {
    "kategori": "Elektrolit",
    "bilesen": "Kalsiyum (Ca)",
    "birim": "mg",
    "hedef": "500 - 1000 mg/gün (10 - 15 mmol/gün)",
    "deger": "174"
   },
   {
    "kategori": "Elektrolit",
    "bilesen": "Fosfor (P)",
    "birim": "mg",
    "hedef": "700 - 1000 mg/gün (20 - 30 mmol/gün)",
    "deger": "174"
   },
   {
    "kategori": "Elektrolit",
    "bilesen": "Magnezyum (Mg)",
    "birim": "mg",
    "hedef": "250 - 400 mg/gün (10 - 15 mmol/gün)",
    "deger": "33"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Demir (Fe)",
    "birim": "mg",
    "hedef": "18 - 30",
    "deger": "3.8"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Çinko (Zn)",
    "birim": "mg",
    "hedef": "10 - 20",
    "deger": "2.9"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Manganez (Mn)",
    "birim": "mg",
    "hedef": "2 - 3 (maks 6)",
    "deger": "0.80"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Bakır (Cu)",
    "birim": "mcg",
    "hedef": "1000 - 3000",
    "deger": "430"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "İyot (I)",
    "birim": "mcg",
    "hedef": "150 - 300",
    "deger": "32"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Selenyum (Se)",
    "birim": "mcg",
    "hedef": "50 - 150",
    "deger": "14"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Krom (Cr)",
    "birim": "mcg",
    "hedef": "35 - 150",
    "deger": "16"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Molibden (Mo)",
    "birim": "mcg",
    "hedef": "50 - 250",
    "deger": "24"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Florür (F)",
    "birim": "mg",
    "hedef": "0 - 3",
    "deger": "0.20"
   },
   {
    "kategori": "Özel",
    "bilesen": "CaHMB",
    "birim": "g",
    "hedef": "3.0 g/gün (sarkopeni/ağır katabolizmada)",
    "deger": "-"
   },
   {
    "kategori": "Özel",
    "bilesen": "Kolin",
    "birim": "mg",
    "hedef": "400 - 550 mg/gün (Adequate Intake - AI)",
    "deger": "88"
   },
   {
    "kategori": "Özel",
    "bilesen": "Taurin",
    "birim": "mg",
    "hedef": "-",
    "deger": "-"
   },
   {
    "kategori": "Özel",
    "bilesen": "L-Karnitin",
    "birim": "mg",
    "hedef": "500 - 1000 mg/gün (diyaliz/kayıplarda)",
    "deger": "-"
   },
   {
    "kategori": "Fizikokimya",
    "bilesen": "Osmolarite",
    "birim": "mOsm/l",
    "hedef": "İzo-ozmolar (280-350) veya makul (<450-500)",
    "deger": "790"
   },
   {
    "kategori": "Fizikokimya",
    "bilesen": "Osmolalite",
    "birim": "mOsm/kg su",
    "hedef": "İzo-ozmolar (280-350)",
    "deger": "1260"
   },
   {
    "kategori": "Fizikokimya",
    "bilesen": "Renal Solüt Yükü",
    "birim": "mOsm/l",
    "hedef": "300 - 600",
    "deger": "719"
   }
  ],
  "kcal": null,
  "kcal100": 240.0,
  "protein100": 9.4,
  "lif100": 3.6,
  "osmolarite": 790.0,
  "lifVar": true,
  "endikasyon": "Yüksek kalorili, yüksek proteinli, lifli, düşük hacimli kompakt oral takviye.",
  "hedefKitle": "Erişkin",
  "form": "Oral",
  "diyabetik": false,
  "renal": false,
  "immun": false
 },
 {
  "isim": "Fortimel Energy Multifibre",
  "uretici": "Nutricia",
  "veriler": [
   {
    "kategori": "Makro",
    "bilesen": "Enerji",
    "birim": "kcal",
    "hedef": "1500 kcal (Akut <48-72s: <%70; >3. gün: 20-25 kcal/kg/gün)",
    "deger": "154"
   },
   {
    "kategori": "Makro",
    "bilesen": "Enerji",
    "birim": "kJ",
    "hedef": "6276 kJ",
    "deger": "645"
   },
   {
    "kategori": "Makro",
    "bilesen": "Protein",
    "birim": "g",
    "hedef": "1.3 g/kg/gün (1.2 - 1.5; KRT/Obezitede 2.0'ye kadar)",
    "deger": "6.0"
   },
   {
    "kategori": "Makro",
    "bilesen": "Yağ",
    "birim": "g",
    "hedef": "Maks 1.5 g/kg/gün",
    "deger": "5.8"
   },
   {
    "kategori": "Makro",
    "bilesen": "Doymuş Yağ",
    "birim": "g",
    "hedef": "-",
    "deger": "0.6"
   },
   {
    "kategori": "Makro",
    "bilesen": "Tekli Doymamış Yağ",
    "birim": "g",
    "hedef": "-",
    "deger": "3.5"
   },
   {
    "kategori": "Makro",
    "bilesen": "Çoklu Doymamış Yağ",
    "birim": "g",
    "hedef": "-",
    "deger": "1.7"
   },
   {
    "kategori": "Makro",
    "bilesen": "Karbonhidrat",
    "birim": "g",
    "hedef": "Maks 5 mg/kg/dk infüzyon hızı",
    "deger": "18.4"
   },
   {
    "kategori": "Makro",
    "bilesen": "Şekerler",
    "birim": "g",
    "hedef": "-",
    "deger": "6.8"
   },
   {
    "kategori": "Makro",
    "bilesen": "Polioller",
    "birim": "g",
    "hedef": "-",
    "deger": "-"
   },
   {
    "kategori": "Makro",
    "bilesen": "Lif / FOS",
    "birim": "g",
    "hedef": "10 - 20 g/gün (iskemi/şokta kontrendike)",
    "deger": "2.2"
   },
   {
    "kategori": "Makro",
    "bilesen": "Diyet Lifi",
    "birim": "g",
    "hedef": "-",
    "deger": "-"
   },
   {
    "kategori": "Makro",
    "bilesen": "FOS",
    "birim": "g",
    "hedef": "-",
    "deger": "-"
   },
   {
    "kategori": "Makro",
    "bilesen": "Tuz (NaCl)",
    "birim": "g",
    "hedef": "4 - 6 g/gün",
    "deger": "0.22"
   },
   {
    "kategori": "Makro",
    "bilesen": "Su / Sıvı Gereksinimi",
    "birim": "mL/gün",
    "hedef": "25 - 30 mL/kg/gün (veya 1 mL / kcal)",
    "deger": "-"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin A",
    "birim": "mcg RE",
    "hedef": "900 - 1500",
    "deger": "123"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin D3",
    "birim": "mcg",
    "hedef": "En az 25 mcg (1000 IU)",
    "deger": "1.1 (44 IU)"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin E",
    "birim": "mg a-TE",
    "hedef": "En az 15",
    "deger": "1.9"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin K1",
    "birim": "mcg",
    "hedef": "En az 120",
    "deger": "8.0"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin C",
    "birim": "mg",
    "hedef": "En az 100",
    "deger": "15"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Folik Asit",
    "birim": "mcg",
    "hedef": "330 - 400 DFE",
    "deger": "40"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin B1 (Tiamin)",
    "birim": "mg",
    "hedef": "1.5 - 3.0",
    "deger": "0.23"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin B2 (Riboflavin)",
    "birim": "mg",
    "hedef": "En az 1.2",
    "deger": "0.24"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin B6 (Piridoksin)",
    "birim": "mg",
    "hedef": "En az 1.5",
    "deger": "0.26"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin B12",
    "birim": "mcg",
    "hedef": "En az 2.5",
    "deger": "0.32"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Niasin",
    "birim": "mg NE",
    "hedef": "18 - 40",
    "deger": "2.7"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Pantotenik Asit",
    "birim": "mg",
    "hedef": "En az 5.0",
    "deger": "0.80"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Biotin",
    "birim": "mcg",
    "hedef": "En az 30",
    "deger": "6.0"
   },
   {
    "kategori": "Elektrolit",
    "bilesen": "Sodyum (Na)",
    "birim": "mg",
    "hedef": "1500 - 3000 mg/gün (1 - 2 mmol/kg/gün)",
    "deger": "89"
   },
   {
    "kategori": "Elektrolit",
    "bilesen": "Potasyum (K)",
    "birim": "mg",
    "hedef": "2000 - 3500 mg/gün (1 - 1.5 mmol/kg/gün)",
    "deger": "159"
   },
   {
    "kategori": "Elektrolit",
    "bilesen": "Klor (Cl)",
    "birim": "mg",
    "hedef": "1 - 2 mmol/kg/gün (Na/K'ya paralel)",
    "deger": "86"
   },
   {
    "kategori": "Elektrolit",
    "bilesen": "Kalsiyum (Ca)",
    "birim": "mg",
    "hedef": "500 - 1000 mg/gün (10 - 15 mmol/gün)",
    "deger": "91"
   },
   {
    "kategori": "Elektrolit",
    "bilesen": "Fosfor (P)",
    "birim": "mg",
    "hedef": "700 - 1000 mg/gün (20 - 30 mmol/gün)",
    "deger": "77"
   },
   {
    "kategori": "Elektrolit",
    "bilesen": "Magnezyum (Mg)",
    "birim": "mg",
    "hedef": "250 - 400 mg/gün (10 - 15 mmol/gün)",
    "deger": "24"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Demir (Fe)",
    "birim": "mg",
    "hedef": "18 - 30",
    "deger": "2.4"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Çinko (Zn)",
    "birim": "mg",
    "hedef": "10 - 20",
    "deger": "1.8"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Manganez (Mn)",
    "birim": "mg",
    "hedef": "2 - 3 (maks 6)",
    "deger": "0.50"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Bakır (Cu)",
    "birim": "mcg",
    "hedef": "1000 - 3000",
    "deger": "270"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "İyot (I)",
    "birim": "mcg",
    "hedef": "150 - 300",
    "deger": "20"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Selenyum (Se)",
    "birim": "mcg",
    "hedef": "50 - 150",
    "deger": "8.6"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Krom (Cr)",
    "birim": "mcg",
    "hedef": "35 - 150",
    "deger": "10"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Molibden (Mo)",
    "birim": "mcg",
    "hedef": "50 - 250",
    "deger": "15"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Florür (F)",
    "birim": "mg",
    "hedef": "0 - 3",
    "deger": "0.15"
   },
   {
    "kategori": "Özel",
    "bilesen": "CaHMB",
    "birim": "g",
    "hedef": "3.0 g/gün (sarkopeni/ağır katabolizmada)",
    "deger": "-"
   },
   {
    "kategori": "Özel",
    "bilesen": "Kolin",
    "birim": "mg",
    "hedef": "400 - 550 mg/gün (Adequate Intake - AI)",
    "deger": "55"
   },
   {
    "kategori": "Özel",
    "bilesen": "Taurin",
    "birim": "mg",
    "hedef": "-",
    "deger": "-"
   },
   {
    "kategori": "Özel",
    "bilesen": "L-Karnitin",
    "birim": "mg",
    "hedef": "500 - 1000 mg/gün (diyaliz/kayıplarda)",
    "deger": "-"
   },
   {
    "kategori": "Fizikokimya",
    "bilesen": "Osmolarite",
    "birim": "mOsm/l",
    "hedef": "İzo-ozmolar (280-350) veya makul (<450-500)",
    "deger": "455"
   },
   {
    "kategori": "Fizikokimya",
    "bilesen": "Osmolalite",
    "birim": "mOsm/kg su",
    "hedef": "İzo-ozmolar (280-350)",
    "deger": "-"
   },
   {
    "kategori": "Fizikokimya",
    "bilesen": "Renal Solüt Yükü",
    "birim": "mOsm/l",
    "hedef": "300 - 600",
    "deger": "469"
   }
  ],
  "kcal": null,
  "kcal100": 154.0,
  "protein100": 6.0,
  "lif100": 2.2,
  "osmolarite": 455.0,
  "lifVar": true,
  "endikasyon": "Yüksek kalorili, çoklu lif içerikli oral beslenme takviyesi.",
  "hedefKitle": "Erişkin",
  "form": "Oral",
  "diyabetik": false,
  "renal": false,
  "immun": false
 },
 {
  "isim": "Fortini Compact Multifibre",
  "uretici": "Nutricia",
  "veriler": [
   {
    "kategori": "Makro",
    "bilesen": "Enerji",
    "birim": "kcal",
    "hedef": "1500 kcal (Akut <48-72s: <%70; >3. gün: 20-25 kcal/kg/gün)",
    "deger": "240"
   },
   {
    "kategori": "Makro",
    "bilesen": "Enerji",
    "birim": "kJ",
    "hedef": "6276 kJ",
    "deger": "1006"
   },
   {
    "kategori": "Makro",
    "bilesen": "Protein",
    "birim": "g",
    "hedef": "1.3 g/kg/gün (1.2 - 1.5; KRT/Obezitede 2.0'ye kadar)",
    "deger": "5.7"
   },
   {
    "kategori": "Makro",
    "bilesen": "Yağ",
    "birim": "g",
    "hedef": "Maks 1.5 g/kg/gün",
    "deger": "10.9"
   },
   {
    "kategori": "Makro",
    "bilesen": "Doymuş Yağ",
    "birim": "g",
    "hedef": "-",
    "deger": "1.0"
   },
   {
    "kategori": "Makro",
    "bilesen": "Tekli Doymamış Yağ",
    "birim": "g",
    "hedef": "-",
    "deger": "6.5"
   },
   {
    "kategori": "Makro",
    "bilesen": "Çoklu Doymamış Yağ",
    "birim": "g",
    "hedef": "-",
    "deger": "3.4"
   },
   {
    "kategori": "Makro",
    "bilesen": "Karbonhidrat",
    "birim": "g",
    "hedef": "Maks 5 mg/kg/dk infüzyon hızı",
    "deger": "28.5"
   },
   {
    "kategori": "Makro",
    "bilesen": "Şekerler",
    "birim": "g",
    "hedef": "-",
    "deger": "14.9"
   },
   {
    "kategori": "Makro",
    "bilesen": "Polioller",
    "birim": "g",
    "hedef": "-",
    "deger": "-"
   },
   {
    "kategori": "Makro",
    "bilesen": "Lif / FOS",
    "birim": "g",
    "hedef": "10 - 20 g/gün (iskemi/şokta kontrendike)",
    "deger": "2.4"
   },
   {
    "kategori": "Makro",
    "bilesen": "Diyet Lifi",
    "birim": "g",
    "hedef": "-",
    "deger": "-"
   },
   {
    "kategori": "Makro",
    "bilesen": "FOS",
    "birim": "g",
    "hedef": "-",
    "deger": "-"
   },
   {
    "kategori": "Makro",
    "bilesen": "Tuz (NaCl)",
    "birim": "g",
    "hedef": "4 - 6 g/gün",
    "deger": "0.22"
   },
   {
    "kategori": "Makro",
    "bilesen": "Su / Sıvı Gereksinimi",
    "birim": "mL/gün",
    "hedef": "25 - 30 mL/kg/gün (veya 1 mL / kcal)",
    "deger": "-"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin A",
    "birim": "mcg RE",
    "hedef": "900 - 1500",
    "deger": "105"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin D3",
    "birim": "mcg",
    "hedef": "En az 25 mcg (1000 IU)",
    "deger": "3.12 (124.8 IU)"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin E",
    "birim": "mg a-TE",
    "hedef": "En az 15",
    "deger": "3.12"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin K1",
    "birim": "mcg",
    "hedef": "En az 120",
    "deger": "10.5"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin C",
    "birim": "mg",
    "hedef": "En az 100",
    "deger": "24.0"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Folik Asit",
    "birim": "mcg",
    "hedef": "330 - 400 DFE",
    "deger": "43.2"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin B1 (Tiamin)",
    "birim": "mg",
    "hedef": "1.5 - 3.0",
    "deger": "0.36"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin B2 (Riboflavin)",
    "birim": "mg",
    "hedef": "En az 1.2",
    "deger": "0.38"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin B6 (Piridoksin)",
    "birim": "mg",
    "hedef": "En az 1.5",
    "deger": "0.29"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin B12",
    "birim": "mcg",
    "hedef": "En az 2.5",
    "deger": "0.41"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Niasin",
    "birim": "mg NE",
    "hedef": "18 - 40",
    "deger": "2.70"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Pantotenik Asit",
    "birim": "mg",
    "hedef": "En az 5.0",
    "deger": "0.79"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Biotin",
    "birim": "mcg",
    "hedef": "En az 30",
    "deger": "9.36"
   },
   {
    "kategori": "Elektrolit",
    "bilesen": "Sodyum (Na)",
    "birim": "mg",
    "hedef": "1500 - 3000 mg/gün (1 - 2 mmol/kg/gün)",
    "deger": "89.0"
   },
   {
    "kategori": "Elektrolit",
    "bilesen": "Potasyum (K)",
    "birim": "mg",
    "hedef": "2000 - 3500 mg/gün (1 - 1.5 mmol/kg/gün)",
    "deger": "221"
   },
   {
    "kategori": "Elektrolit",
    "bilesen": "Klor (Cl)",
    "birim": "mg",
    "hedef": "1 - 2 mmol/kg/gün (Na/K'ya paralel)",
    "deger": "89.0"
   },
   {
    "kategori": "Elektrolit",
    "bilesen": "Kalsiyum (Ca)",
    "birim": "mg",
    "hedef": "500 - 1000 mg/gün (10 - 15 mmol/gün)",
    "deger": "168"
   },
   {
    "kategori": "Elektrolit",
    "bilesen": "Fosfor (P)",
    "birim": "mg",
    "hedef": "700 - 1000 mg/gün (20 - 30 mmol/gün)",
    "deger": "153"
   },
   {
    "kategori": "Elektrolit",
    "bilesen": "Magnezyum (Mg)",
    "birim": "mg",
    "hedef": "250 - 400 mg/gün (10 - 15 mmol/gün)",
    "deger": "26.4"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Demir (Fe)",
    "birim": "mg",
    "hedef": "18 - 30",
    "deger": "2.40"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Çinko (Zn)",
    "birim": "mg",
    "hedef": "10 - 20",
    "deger": "2.40"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Manganez (Mn)",
    "birim": "mg",
    "hedef": "2 - 3 (maks 6)",
    "deger": "0.16"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Bakır (Cu)",
    "birim": "mcg",
    "hedef": "1000 - 3000",
    "deger": "180"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "İyot (I)",
    "birim": "mcg",
    "hedef": "150 - 300",
    "deger": "24.0"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Selenyum (Se)",
    "birim": "mcg",
    "hedef": "50 - 150",
    "deger": "7.50"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Krom (Cr)",
    "birim": "mcg",
    "hedef": "35 - 150",
    "deger": "6.00"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Molibden (Mo)",
    "birim": "mcg",
    "hedef": "50 - 250",
    "deger": "10.5"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Florür (F)",
    "birim": "mg",
    "hedef": "0 - 3",
    "deger": "0.17"
   },
   {
    "kategori": "Özel",
    "bilesen": "CaHMB",
    "birim": "g",
    "hedef": "3.0 g/gün (sarkopeni/ağır katabolizmada)",
    "deger": "-"
   },
   {
    "kategori": "Özel",
    "bilesen": "Kolin",
    "birim": "mg",
    "hedef": "400 - 550 mg/gün (Adequate Intake - AI)",
    "deger": "48.0"
   },
   {
    "kategori": "Özel",
    "bilesen": "Taurin",
    "birim": "mg",
    "hedef": "-",
    "deger": "18.0"
   },
   {
    "kategori": "Özel",
    "bilesen": "L-Karnitin",
    "birim": "mg",
    "hedef": "500 - 1000 mg/gün (diyaliz/kayıplarda)",
    "deger": "4.56"
   },
   {
    "kategori": "Fizikokimya",
    "bilesen": "Osmolarite",
    "birim": "mOsm/l",
    "hedef": "İzo-ozmolar (280-350) veya makul (<450-500)",
    "deger": "600"
   },
   {
    "kategori": "Fizikokimya",
    "bilesen": "Osmolalite",
    "birim": "mOsm/kg su",
    "hedef": "İzo-ozmolar (280-350)",
    "deger": "-"
   },
   {
    "kategori": "Fizikokimya",
    "bilesen": "Renal Solüt Yükü",
    "birim": "mOsm/l",
    "hedef": "300 - 600",
    "deger": "-"
   }
  ],
  "kcal": null,
  "kcal100": 240.0,
  "protein100": 5.7,
  "lif100": 2.4,
  "osmolarite": 600.0,
  "lifVar": true,
  "endikasyon": "Pediatrik hasta için yüksek kalorili, kompakt, çoklu lif içerikli beslenme takviyesi.",
  "hedefKitle": "Pediatrik",
  "form": "Oral / tüp",
  "diyabetik": false,
  "renal": false,
  "immun": false
 },
 {
  "isim": "Novasource Diabet",
  "uretici": "Nestlé Health Science",
  "veriler": [
   {
    "kategori": "Makro",
    "bilesen": "Enerji",
    "birim": "kcal",
    "hedef": "1500 kcal (Akut <48-72s: <%70; >3. gün: 20-25 kcal/kg/gün)",
    "deger": "106"
   },
   {
    "kategori": "Makro",
    "bilesen": "Enerji",
    "birim": "kJ",
    "hedef": "6276 kJ",
    "deger": "444"
   },
   {
    "kategori": "Makro",
    "bilesen": "Protein",
    "birim": "g",
    "hedef": "1.3 g/kg/gün (1.2 - 1.5; KRT/Obezitede 2.0'ye kadar)",
    "deger": "4.80"
   },
   {
    "kategori": "Makro",
    "bilesen": "Yağ",
    "birim": "g",
    "hedef": "Maks 1.5 g/kg/gün",
    "deger": "4.12"
   },
   {
    "kategori": "Makro",
    "bilesen": "Doymuş Yağ",
    "birim": "g",
    "hedef": "-",
    "deger": "-"
   },
   {
    "kategori": "Makro",
    "bilesen": "Tekli Doymamış Yağ",
    "birim": "g",
    "hedef": "-",
    "deger": "-"
   },
   {
    "kategori": "Makro",
    "bilesen": "Çoklu Doymamış Yağ",
    "birim": "g",
    "hedef": "-",
    "deger": "-"
   },
   {
    "kategori": "Makro",
    "bilesen": "Karbonhidrat",
    "birim": "g",
    "hedef": "Maks 5 mg/kg/dk infüzyon hızı",
    "deger": "11.52"
   },
   {
    "kategori": "Makro",
    "bilesen": "Şekerler",
    "birim": "g",
    "hedef": "-",
    "deger": "-"
   },
   {
    "kategori": "Makro",
    "bilesen": "Polioller",
    "birim": "g",
    "hedef": "-",
    "deger": "-"
   },
   {
    "kategori": "Makro",
    "bilesen": "Lif / FOS",
    "birim": "g",
    "hedef": "10 - 20 g/gün (iskemi/şokta kontrendike)",
    "deger": "2.00"
   },
   {
    "kategori": "Makro",
    "bilesen": "Diyet Lifi",
    "birim": "g",
    "hedef": "-",
    "deger": "-"
   },
   {
    "kategori": "Makro",
    "bilesen": "FOS",
    "birim": "g",
    "hedef": "-",
    "deger": "-"
   },
   {
    "kategori": "Makro",
    "bilesen": "Tuz (NaCl)",
    "birim": "g",
    "hedef": "4 - 6 g/gün",
    "deger": "-"
   },
   {
    "kategori": "Makro",
    "bilesen": "Su / Sıvı Gereksinimi",
    "birim": "mL/gün",
    "hedef": "25 - 30 mL/kg/gün (veya 1 mL / kcal)",
    "deger": "-"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin A",
    "birim": "mcg RE",
    "hedef": "900 - 1500",
    "deger": "-"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin D3",
    "birim": "mcg",
    "hedef": "En az 25 mcg (1000 IU)",
    "deger": "-"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin E",
    "birim": "mg a-TE",
    "hedef": "En az 15",
    "deger": "-"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin K1",
    "birim": "mcg",
    "hedef": "En az 120",
    "deger": "-"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin C",
    "birim": "mg",
    "hedef": "En az 100",
    "deger": "-"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Folik Asit",
    "birim": "mcg",
    "hedef": "330 - 400 DFE",
    "deger": "-"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin B1 (Tiamin)",
    "birim": "mg",
    "hedef": "1.5 - 3.0",
    "deger": "-"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin B2 (Riboflavin)",
    "birim": "mg",
    "hedef": "En az 1.2",
    "deger": "-"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin B6 (Piridoksin)",
    "birim": "mg",
    "hedef": "En az 1.5",
    "deger": "-"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin B12",
    "birim": "mcg",
    "hedef": "En az 2.5",
    "deger": "-"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Niasin",
    "birim": "mg NE",
    "hedef": "18 - 40",
    "deger": "-"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Pantotenik Asit",
    "birim": "mg",
    "hedef": "En az 5.0",
    "deger": "-"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Biotin",
    "birim": "mcg",
    "hedef": "En az 30",
    "deger": "-"
   },
   {
    "kategori": "Elektrolit",
    "bilesen": "Sodyum (Na)",
    "birim": "mg",
    "hedef": "1500 - 3000 mg/gün (1 - 2 mmol/kg/gün)",
    "deger": "70"
   },
   {
    "kategori": "Elektrolit",
    "bilesen": "Potasyum (K)",
    "birim": "mg",
    "hedef": "2000 - 3500 mg/gün (1 - 1.5 mmol/kg/gün)",
    "deger": "122"
   },
   {
    "kategori": "Elektrolit",
    "bilesen": "Klor (Cl)",
    "birim": "mg",
    "hedef": "1 - 2 mmol/kg/gün (Na/K'ya paralel)",
    "deger": "70"
   },
   {
    "kategori": "Elektrolit",
    "bilesen": "Kalsiyum (Ca)",
    "birim": "mg",
    "hedef": "500 - 1000 mg/gün (10 - 15 mmol/gün)",
    "deger": "95"
   },
   {
    "kategori": "Elektrolit",
    "bilesen": "Fosfor (P)",
    "birim": "mg",
    "hedef": "700 - 1000 mg/gün (20 - 30 mmol/gün)",
    "deger": "70"
   },
   {
    "kategori": "Elektrolit",
    "bilesen": "Magnezyum (Mg)",
    "birim": "mg",
    "hedef": "250 - 400 mg/gün (10 - 15 mmol/gün)",
    "deger": "17"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Demir (Fe)",
    "birim": "mg",
    "hedef": "18 - 30",
    "deger": "1.1"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Çinko (Zn)",
    "birim": "mg",
    "hedef": "10 - 20",
    "deger": "1.3"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Manganez (Mn)",
    "birim": "mg",
    "hedef": "2 - 3 (maks 6)",
    "deger": "-"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Bakır (Cu)",
    "birim": "mcg",
    "hedef": "1000 - 3000",
    "deger": "-"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "İyot (I)",
    "birim": "mcg",
    "hedef": "150 - 300",
    "deger": "-"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Selenyum (Se)",
    "birim": "mcg",
    "hedef": "50 - 150",
    "deger": "-"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Krom (Cr)",
    "birim": "mcg",
    "hedef": "35 - 150",
    "deger": "-"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Molibden (Mo)",
    "birim": "mcg",
    "hedef": "50 - 250",
    "deger": "-"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Florür (F)",
    "birim": "mg",
    "hedef": "0 - 3",
    "deger": "-"
   },
   {
    "kategori": "Özel",
    "bilesen": "CaHMB",
    "birim": "g",
    "hedef": "3.0 g/gün (sarkopeni/ağır katabolizmada)",
    "deger": "-"
   },
   {
    "kategori": "Özel",
    "bilesen": "Kolin",
    "birim": "mg",
    "hedef": "400 - 550 mg/gün (Adequate Intake - AI)",
    "deger": "-"
   },
   {
    "kategori": "Özel",
    "bilesen": "Taurin",
    "birim": "mg",
    "hedef": "-",
    "deger": "-"
   },
   {
    "kategori": "Özel",
    "bilesen": "L-Karnitin",
    "birim": "mg",
    "hedef": "500 - 1000 mg/gün (diyaliz/kayıplarda)",
    "deger": "-"
   },
   {
    "kategori": "Fizikokimya",
    "bilesen": "Osmolarite",
    "birim": "mOsm/l",
    "hedef": "İzo-ozmolar (280-350) veya makul (<450-500)",
    "deger": "318"
   },
   {
    "kategori": "Fizikokimya",
    "bilesen": "Osmolalite",
    "birim": "mOsm/kg su",
    "hedef": "İzo-ozmolar (280-350)",
    "deger": "-"
   },
   {
    "kategori": "Fizikokimya",
    "bilesen": "Renal Solüt Yükü",
    "birim": "mOsm/l",
    "hedef": "300 - 600",
    "deger": "-"
   }
  ],
  "kcal": null,
  "kcal100": 106.0,
  "protein100": 4.8,
  "lif100": 2.0,
  "osmolarite": 318.0,
  "lifVar": true,
  "endikasyon": "Diyabetik hasta için standart kalorili tüp/oral beslenme formülü.",
  "hedefKitle": "Erişkin",
  "form": "Oral / tüp",
  "diyabetik": true,
  "renal": false,
  "immun": false
 },
 {
  "isim": "Oxepa",
  "uretici": "Abbott",
  "veriler": [
   {
    "kategori": "Makro",
    "bilesen": "Enerji",
    "birim": "kcal",
    "hedef": "1500 kcal (Akut <48-72s: <%70; >3. gün: 20-25 kcal/kg/gün)",
    "deger": "152"
   },
   {
    "kategori": "Makro",
    "bilesen": "Enerji",
    "birim": "kJ",
    "hedef": "6276 kJ",
    "deger": "633"
   },
   {
    "kategori": "Makro",
    "bilesen": "Protein",
    "birim": "g",
    "hedef": "1.3 g/kg/gün (1.2 - 1.5; KRT/Obezitede 2.0'ye kadar)",
    "deger": "6.25"
   },
   {
    "kategori": "Makro",
    "bilesen": "Yağ",
    "birim": "g",
    "hedef": "Maks 1.5 g/kg/gün",
    "deger": "9.37"
   },
   {
    "kategori": "Makro",
    "bilesen": "Doymuş Yağ",
    "birim": "g",
    "hedef": "-",
    "deger": "3.1"
   },
   {
    "kategori": "Makro",
    "bilesen": "Tekli Doymamış Yağ",
    "birim": "g",
    "hedef": "-",
    "deger": "2.7"
   },
   {
    "kategori": "Makro",
    "bilesen": "Çoklu Doymamış Yağ",
    "birim": "g",
    "hedef": "-",
    "deger": "3.3"
   },
   {
    "kategori": "Makro",
    "bilesen": "Karbonhidrat",
    "birim": "g",
    "hedef": "Maks 5 mg/kg/dk infüzyon hızı",
    "deger": "10.6"
   },
   {
    "kategori": "Makro",
    "bilesen": "Şekerler",
    "birim": "g",
    "hedef": "-",
    "deger": "5.9"
   },
   {
    "kategori": "Makro",
    "bilesen": "Polioller",
    "birim": "g",
    "hedef": "-",
    "deger": "-"
   },
   {
    "kategori": "Makro",
    "bilesen": "Lif / FOS",
    "birim": "g",
    "hedef": "10 - 20 g/gün (iskemi/şokta kontrendike)",
    "deger": "-"
   },
   {
    "kategori": "Makro",
    "bilesen": "Diyet Lifi",
    "birim": "g",
    "hedef": "-",
    "deger": "-"
   },
   {
    "kategori": "Makro",
    "bilesen": "FOS",
    "birim": "g",
    "hedef": "-",
    "deger": "-"
   },
   {
    "kategori": "Makro",
    "bilesen": "Tuz (NaCl)",
    "birim": "g",
    "hedef": "4 - 6 g/gün",
    "deger": "0.33"
   },
   {
    "kategori": "Makro",
    "bilesen": "Su / Sıvı Gereksinimi",
    "birim": "mL/gün",
    "hedef": "25 - 30 mL/kg/gün (veya 1 mL / kcal)",
    "deger": "-"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin A",
    "birim": "mcg RE",
    "hedef": "900 - 1500",
    "deger": "225 (158 palmitat + 67 b-karoten)"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin D3",
    "birim": "mcg",
    "hedef": "En az 25 mcg (1000 IU)",
    "deger": "1.1 (44 IU)"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin E",
    "birim": "mg a-TE",
    "hedef": "En az 15",
    "deger": "21"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin K1",
    "birim": "mcg",
    "hedef": "En az 120",
    "deger": "10"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin C",
    "birim": "mg",
    "hedef": "En az 100",
    "deger": "84"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Folik Asit",
    "birim": "mcg",
    "hedef": "330 - 400 DFE",
    "deger": "42"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin B1 (Tiamin)",
    "birim": "mg",
    "hedef": "1.5 - 3.0",
    "deger": "0.32"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin B2 (Riboflavin)",
    "birim": "mg",
    "hedef": "En az 1.2",
    "deger": "0.36"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin B6 (Piridoksin)",
    "birim": "mg",
    "hedef": "En az 1.5",
    "deger": "0.43"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin B12",
    "birim": "mcg",
    "hedef": "En az 2.5",
    "deger": "0.60"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Niasin",
    "birim": "mg NE",
    "hedef": "18 - 40",
    "deger": "2.9"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Pantotenik Asit",
    "birim": "mg",
    "hedef": "En az 5.0",
    "deger": "1.3"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Biotin",
    "birim": "mcg",
    "hedef": "En az 30",
    "deger": "6.0"
   },
   {
    "kategori": "Elektrolit",
    "bilesen": "Sodyum (Na)",
    "birim": "mg",
    "hedef": "1500 - 3000 mg/gün (1 - 2 mmol/kg/gün)",
    "deger": "131"
   },
   {
    "kategori": "Elektrolit",
    "bilesen": "Potasyum (K)",
    "birim": "mg",
    "hedef": "2000 - 3500 mg/gün (1 - 1.5 mmol/kg/gün)",
    "deger": "196"
   },
   {
    "kategori": "Elektrolit",
    "bilesen": "Klor (Cl)",
    "birim": "mg",
    "hedef": "1 - 2 mmol/kg/gün (Na/K'ya paralel)",
    "deger": "169"
   },
   {
    "kategori": "Elektrolit",
    "bilesen": "Kalsiyum (Ca)",
    "birim": "mg",
    "hedef": "500 - 1000 mg/gün (10 - 15 mmol/gün)",
    "deger": "106"
   },
   {
    "kategori": "Elektrolit",
    "bilesen": "Fosfor (P)",
    "birim": "mg",
    "hedef": "700 - 1000 mg/gün (20 - 30 mmol/gün)",
    "deger": "100"
   },
   {
    "kategori": "Elektrolit",
    "bilesen": "Magnezyum (Mg)",
    "birim": "mg",
    "hedef": "250 - 400 mg/gün (10 - 15 mmol/gün)",
    "deger": "32"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Demir (Fe)",
    "birim": "mg",
    "hedef": "18 - 30",
    "deger": "2.0"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Çinko (Zn)",
    "birim": "mg",
    "hedef": "10 - 20",
    "deger": "1.8"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Manganez (Mn)",
    "birim": "mg",
    "hedef": "2 - 3 (maks 6)",
    "deger": "0.53"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Bakır (Cu)",
    "birim": "mcg",
    "hedef": "1000 - 3000",
    "deger": "220"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "İyot (I)",
    "birim": "mcg",
    "hedef": "150 - 300",
    "deger": "16"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Selenyum (Se)",
    "birim": "mcg",
    "hedef": "50 - 150",
    "deger": "7.7"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Krom (Cr)",
    "birim": "mcg",
    "hedef": "35 - 150",
    "deger": "13"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Molibden (Mo)",
    "birim": "mcg",
    "hedef": "50 - 250",
    "deger": "16"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Florür (F)",
    "birim": "mg",
    "hedef": "0 - 3",
    "deger": "-"
   },
   {
    "kategori": "Özel",
    "bilesen": "CaHMB",
    "birim": "g",
    "hedef": "3.0 g/gün (sarkopeni/ağır katabolizmada)",
    "deger": "-"
   },
   {
    "kategori": "Özel",
    "bilesen": "Kolin",
    "birim": "mg",
    "hedef": "400 - 550 mg/gün (Adequate Intake - AI)",
    "deger": "64"
   },
   {
    "kategori": "Özel",
    "bilesen": "Taurin",
    "birim": "mg",
    "hedef": "-",
    "deger": "32"
   },
   {
    "kategori": "Özel",
    "bilesen": "L-Karnitin",
    "birim": "mg",
    "hedef": "500 - 1000 mg/gün (diyaliz/kayıplarda)",
    "deger": "12"
   },
   {
    "kategori": "Fizikokimya",
    "bilesen": "Osmolarite",
    "birim": "mOsm/l",
    "hedef": "İzo-ozmolar (280-350) veya makul (<450-500)",
    "deger": "384"
   },
   {
    "kategori": "Fizikokimya",
    "bilesen": "Osmolalite",
    "birim": "mOsm/kg su",
    "hedef": "İzo-ozmolar (280-350)",
    "deger": "490"
   },
   {
    "kategori": "Fizikokimya",
    "bilesen": "Renal Solüt Yükü",
    "birim": "mOsm/l",
    "hedef": "300 - 600",
    "deger": "511"
   }
  ],
  "kcal": null,
  "kcal100": 152.0,
  "protein100": 6.25,
  "lif100": null,
  "osmolarite": 384.0,
  "lifVar": false,
  "endikasyon": "Solunum yetmezliği / ARDS hastası; düşük karbonhidrat-yüksek yağ, EPA/GLA zenginleştirilmiş.",
  "hedefKitle": "Erişkin",
  "form": "Tüp beslenme",
  "diyabetik": false,
  "renal": false,
  "immun": false
 },
 {
  "isim": "Fresubin Energy",
  "uretici": "Fresenius Kabi",
  "veriler": [
   {
    "kategori": "Makro",
    "bilesen": "Enerji",
    "birim": "kcal",
    "hedef": "-",
    "deger": "150"
   },
   {
    "kategori": "Makro",
    "bilesen": "Enerji",
    "birim": "kJ",
    "hedef": "-",
    "deger": "630"
   },
   {
    "kategori": "Makro",
    "bilesen": "Yağ",
    "birim": "g",
    "hedef": "Maks 1.5 g/kg/gün",
    "deger": "5.8 (%35 enerji)"
   },
   {
    "kategori": "Makro",
    "bilesen": "Doymuş Yağ",
    "birim": "g",
    "hedef": "-",
    "deger": "0.5"
   },
   {
    "kategori": "Makro",
    "bilesen": "Tekli Doymamış Yağ",
    "birim": "g",
    "hedef": "-",
    "deger": "3.7"
   },
   {
    "kategori": "Makro",
    "bilesen": "Çoklu Doymamış Yağ",
    "birim": "g",
    "hedef": "-",
    "deger": "1.6"
   },
   {
    "kategori": "Makro",
    "bilesen": "Karbonhidrat",
    "birim": "g",
    "hedef": "Maks 5 mg/kg/dk infüzyon hızı",
    "deger": "18.5 (%49.3 enerji)"
   },
   {
    "kategori": "Makro",
    "bilesen": "Şekerler",
    "birim": "g",
    "hedef": "-",
    "deger": "5.8"
   },
   {
    "kategori": "Makro",
    "bilesen": "Laktoz",
    "birim": "g",
    "hedef": "-",
    "deger": "<0.27"
   },
   {
    "kategori": "Makro",
    "bilesen": "Lif / FOS",
    "birim": "g",
    "hedef": "10 - 20 g/gün (iskemi/şokta kontrendike)",
    "deger": "0.5 (%0.7 enerji)"
   },
   {
    "kategori": "Makro",
    "bilesen": "Protein",
    "birim": "g",
    "hedef": "1.3 g/kg/gün (1.2 - 1.5; KRT/Obezitede 2.0'ye kadar)",
    "deger": "5.6 (%15 enerji)"
   },
   {
    "kategori": "Makro",
    "bilesen": "Tuz (NaCl)",
    "birim": "g",
    "hedef": "4 - 6 g/gün",
    "deger": "0.21"
   },
   {
    "kategori": "Makro",
    "bilesen": "Su / Sıvı Gereksinimi",
    "birim": "mL/gün",
    "hedef": "-",
    "deger": "78 mL/100 mL"
   },
   {
    "kategori": "Fizikokimya",
    "bilesen": "Osmolarite",
    "birim": "mOsm/l",
    "hedef": "-",
    "deger": "400"
   },
   {
    "kategori": "Fizikokimya",
    "bilesen": "Osmolalite",
    "birim": "mOsm/kg su",
    "hedef": "-",
    "deger": "515"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin A",
    "birim": "mcg RE",
    "hedef": "900 - 1500",
    "deger": "170"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Beta-Karoten",
    "birim": "mcg RE",
    "hedef": "-",
    "deger": "50"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin D3",
    "birim": "mcg",
    "hedef": "En az 25 mcg (1000 IU)",
    "deger": "2"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin E",
    "birim": "mg a-TE",
    "hedef": "En az 15",
    "deger": "3"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin K1",
    "birim": "mcg",
    "hedef": "En az 120",
    "deger": "16.7"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin B1 (Tiamin)",
    "birim": "mg",
    "hedef": "1.5 - 3.0",
    "deger": "0.23"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin B2 (Riboflavin)",
    "birim": "mg",
    "hedef": "En az 1.2",
    "deger": "0.32"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Niasin",
    "birim": "mg NE",
    "hedef": "18 - 40",
    "deger": "4 (3 mg niasin)"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin B6 (Piridoksin)",
    "birim": "mg",
    "hedef": "En az 1.5",
    "deger": "0.33"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin B12",
    "birim": "mcg",
    "hedef": "En az 2.5",
    "deger": "0.6"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Pantotenik Asit",
    "birim": "mg",
    "hedef": "En az 5.0",
    "deger": "1.2"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Biotin",
    "birim": "mcg",
    "hedef": "En az 30",
    "deger": "7.5"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Folik Asit",
    "birim": "mcg",
    "hedef": "330 - 400 DFE",
    "deger": "50"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin C",
    "birim": "mg",
    "hedef": "En az 100",
    "deger": "15"
   },
   {
    "kategori": "Özel",
    "bilesen": "Kolin",
    "birim": "mg",
    "hedef": "400 - 550 mg/gün (Adequate Intake - AI)",
    "deger": "26.7"
   },
   {
    "kategori": "Elektrolit",
    "bilesen": "Sodyum (Na)",
    "birim": "mg",
    "hedef": "1500 - 3000 mg/gün (1 - 2 mmol/kg/gün)",
    "deger": "85"
   },
   {
    "kategori": "Elektrolit",
    "bilesen": "Potasyum (K)",
    "birim": "mg",
    "hedef": "2000 - 3500 mg/gün (1 - 1.5 mmol/kg/gün)",
    "deger": "140"
   },
   {
    "kategori": "Elektrolit",
    "bilesen": "Klor (Cl)",
    "birim": "mg",
    "hedef": "1 - 2 mmol/kg/gün (Na/K'ya paralel)",
    "deger": "100"
   },
   {
    "kategori": "Elektrolit",
    "bilesen": "Kalsiyum (Ca)",
    "birim": "mg",
    "hedef": "500 - 1000 mg/gün (10 - 15 mmol/gün)",
    "deger": "130"
   },
   {
    "kategori": "Elektrolit",
    "bilesen": "Magnezyum (Mg)",
    "birim": "mg",
    "hedef": "250 - 400 mg/gün (10 - 15 mmol/gün)",
    "deger": "24"
   },
   {
    "kategori": "Elektrolit",
    "bilesen": "Fosfor (P)",
    "birim": "mg",
    "hedef": "700 - 1000 mg/gün (20 - 30 mmol/gün)",
    "deger": "85"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Demir (Fe)",
    "birim": "mg",
    "hedef": "18 - 30",
    "deger": "2"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Çinko (Zn)",
    "birim": "mg",
    "hedef": "10 - 20",
    "deger": "1.5"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Bakır (Cu)",
    "birim": "mcg",
    "hedef": "1000 - 3000",
    "deger": "300"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Manganez (Mn)",
    "birim": "mg",
    "hedef": "2 - 3 (maks 6)",
    "deger": "0.4"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "İyot (I)",
    "birim": "mcg",
    "hedef": "150 - 300",
    "deger": "30"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Florür (F)",
    "birim": "mg",
    "hedef": "0 - 3",
    "deger": "0.2"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Krom (Cr)",
    "birim": "mcg",
    "hedef": "35 - 150",
    "deger": "10"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Molibden (Mo)",
    "birim": "mcg",
    "hedef": "50 - 250",
    "deger": "15"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Selenyum (Se)",
    "birim": "mcg",
    "hedef": "50 - 150",
    "deger": "10"
   }
  ],
  "endikasyon": "Yüksek kalorili, standart polimerik oral/tüp beslenme takviyesi.",
  "hedefKitle": "Erişkin",
  "form": "Oral / tüp",
  "diyabetik": false,
  "renal": false,
  "immun": false,
  "kcal100": 150.0,
  "protein100": 5.6,
  "lif100": 0.5,
  "osmolarite": 400.0,
  "lifVar": true
 },
 {
  "isim": "Fresubin Hepa",
  "uretici": "Fresenius Kabi",
  "veriler": [
   {
    "kategori": "Makro",
    "bilesen": "Enerji",
    "birim": "kcal",
    "hedef": "-",
    "deger": "130"
   },
   {
    "kategori": "Makro",
    "bilesen": "Enerji",
    "birim": "kJ",
    "hedef": "-",
    "deger": "550"
   },
   {
    "kategori": "Makro",
    "bilesen": "Yağ",
    "birim": "g",
    "hedef": "Maks 1.5 g/kg/gün",
    "deger": "4.7 (%33 enerji)"
   },
   {
    "kategori": "Makro",
    "bilesen": "Doymuş Yağ",
    "birim": "g",
    "hedef": "-",
    "deger": "2.0"
   },
   {
    "kategori": "Makro",
    "bilesen": "MCT (Orta Zincirli Trigliserit)",
    "birim": "g",
    "hedef": "-",
    "deger": "1.7"
   },
   {
    "kategori": "Makro",
    "bilesen": "Tekli Doymamış Yağ",
    "birim": "g",
    "hedef": "-",
    "deger": "1.4"
   },
   {
    "kategori": "Makro",
    "bilesen": "Çoklu Doymamış Yağ",
    "birim": "g",
    "hedef": "-",
    "deger": "1.3"
   },
   {
    "kategori": "Makro",
    "bilesen": "Karbonhidrat",
    "birim": "g",
    "hedef": "Maks 5 mg/kg/dk infüzyon hızı",
    "deger": "17.4 (%53.5 enerji)"
   },
   {
    "kategori": "Makro",
    "bilesen": "Şekerler",
    "birim": "g",
    "hedef": "-",
    "deger": "0.7"
   },
   {
    "kategori": "Makro",
    "bilesen": "Laktoz",
    "birim": "g",
    "hedef": "-",
    "deger": "<0.01"
   },
   {
    "kategori": "Makro",
    "bilesen": "Lif / FOS",
    "birim": "g",
    "hedef": "10 - 20 g/gün (iskemi/şokta kontrendike)",
    "deger": "1.0 (%1.5 enerji)"
   },
   {
    "kategori": "Makro",
    "bilesen": "Protein",
    "birim": "g",
    "hedef": "1.3 g/kg/gün (1.2 - 1.5; KRT/Obezitede 2.0'ye kadar)",
    "deger": "4.0 (%12 enerji)"
   },
   {
    "kategori": "Özel",
    "bilesen": "Dallı Zincirli Aminoasitler (BCAA, %44)",
    "birim": "g",
    "hedef": "-",
    "deger": "1.93"
   },
   {
    "kategori": "Makro",
    "bilesen": "Tuz (NaCl)",
    "birim": "g",
    "hedef": "4 - 6 g/gün",
    "deger": "0.19"
   },
   {
    "kategori": "Makro",
    "bilesen": "Su / Sıvı Gereksinimi",
    "birim": "mL/gün",
    "hedef": "-",
    "deger": "78 mL/100 mL"
   },
   {
    "kategori": "Fizikokimya",
    "bilesen": "Osmolarite",
    "birim": "mOsm/l",
    "hedef": "-",
    "deger": "360"
   },
   {
    "kategori": "Fizikokimya",
    "bilesen": "Osmolalite",
    "birim": "mOsm/kg su",
    "hedef": "-",
    "deger": "460"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin A",
    "birim": "mcg RE",
    "hedef": "900 - 1500",
    "deger": "92"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Beta-Karoten",
    "birim": "mcg RE",
    "hedef": "-",
    "deger": "22"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin D3",
    "birim": "mcg",
    "hedef": "En az 25 mcg (1000 IU)",
    "deger": "1.0"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin E",
    "birim": "mg a-TE",
    "hedef": "En az 15",
    "deger": "1.33"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin K1",
    "birim": "mcg",
    "hedef": "En az 120",
    "deger": "6.67"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin B1 (Tiamin)",
    "birim": "mg",
    "hedef": "1.5 - 3.0",
    "deger": "0.13"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin B2 (Riboflavin)",
    "birim": "mg",
    "hedef": "En az 1.2",
    "deger": "0.17"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Niasin",
    "birim": "mg NE",
    "hedef": "18 - 40",
    "deger": "2.3 (1.6 mg niasin)"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin B6 (Piridoksin)",
    "birim": "mg",
    "hedef": "En az 1.5",
    "deger": "0.16"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin B12",
    "birim": "mcg",
    "hedef": "En az 2.5",
    "deger": "0.27"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Pantotenik Asit",
    "birim": "mg",
    "hedef": "En az 5.0",
    "deger": "0.47"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Biotin",
    "birim": "mcg",
    "hedef": "En az 30",
    "deger": "5.0"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Folik Asit",
    "birim": "mcg",
    "hedef": "330 - 400 DFE",
    "deger": "27"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin C",
    "birim": "mg",
    "hedef": "En az 100",
    "deger": "6.67"
   },
   {
    "kategori": "Özel",
    "bilesen": "Kolin",
    "birim": "mg",
    "hedef": "400 - 550 mg/gün (Adequate Intake - AI)",
    "deger": "28"
   },
   {
    "kategori": "Elektrolit",
    "bilesen": "Sodyum (Na)",
    "birim": "mg",
    "hedef": "1500 - 3000 mg/gün (1 - 2 mmol/kg/gün)",
    "deger": "75"
   },
   {
    "kategori": "Elektrolit",
    "bilesen": "Potasyum (K)",
    "birim": "mg",
    "hedef": "2000 - 3500 mg/gün (1 - 1.5 mmol/kg/gün)",
    "deger": "120"
   },
   {
    "kategori": "Elektrolit",
    "bilesen": "Klor (Cl)",
    "birim": "mg",
    "hedef": "1 - 2 mmol/kg/gün (Na/K'ya paralel)",
    "deger": "71.5"
   },
   {
    "kategori": "Elektrolit",
    "bilesen": "Kalsiyum (Ca)",
    "birim": "mg",
    "hedef": "500 - 1000 mg/gün (10 - 15 mmol/gün)",
    "deger": "80"
   },
   {
    "kategori": "Elektrolit",
    "bilesen": "Magnezyum (Mg)",
    "birim": "mg",
    "hedef": "250 - 400 mg/gün (10 - 15 mmol/gün)",
    "deger": "27"
   },
   {
    "kategori": "Elektrolit",
    "bilesen": "Fosfor (P)",
    "birim": "mg",
    "hedef": "700 - 1000 mg/gün (20 - 30 mmol/gün)",
    "deger": "53"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Demir (Fe)",
    "birim": "mg",
    "hedef": "18 - 30",
    "deger": "1.33"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Çinko (Zn)",
    "birim": "mg",
    "hedef": "10 - 20",
    "deger": "1.2"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Bakır (Cu)",
    "birim": "mcg",
    "hedef": "1000 - 3000",
    "deger": "130"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Manganez (Mn)",
    "birim": "mg",
    "hedef": "2 - 3 (maks 6)",
    "deger": "0.27"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "İyot (I)",
    "birim": "mcg",
    "hedef": "150 - 300",
    "deger": "13.3"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Florür (F)",
    "birim": "mg",
    "hedef": "0 - 3",
    "deger": "0.13"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Krom (Cr)",
    "birim": "mcg",
    "hedef": "35 - 150",
    "deger": "6.67"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Molibden (Mo)",
    "birim": "mcg",
    "hedef": "50 - 250",
    "deger": "10"
   },
   {
    "kategori": "Eser Element",
    "bilesen": "Selenyum (Se)",
    "birim": "mcg",
    "hedef": "50 - 150",
    "deger": "6.67"
   }
  ],
  "endikasyon": "Karaciğer yetmezliği/hepatik ensefalopati hastaları için BCAA ve MCT ile zenginleştirilmiş, düşük proteinli özel formül.",
  "hedefKitle": "Erişkin",
  "form": "Oral / tüp",
  "diyabetik": false,
  "renal": false,
  "immun": false,
  "kcal100": 130.0,
  "protein100": 4.0,
  "lif100": 1.0,
  "osmolarite": 360.0,
  "lifVar": true
 },
 {
  "isim": "Fresubin YoCreme",
  "uretici": "Fresenius Kabi",
  "veriler": [
   {
    "kategori": "Makro",
    "bilesen": "Enerji",
    "birim": "kcal",
    "hedef": "-",
    "deger": "150"
   },
   {
    "kategori": "Makro",
    "bilesen": "Enerji",
    "birim": "kJ",
    "hedef": "-",
    "deger": "630"
   },
   {
    "kategori": "Makro",
    "bilesen": "Yağ",
    "birim": "g",
    "hedef": "Maks 1.5 g/kg/gün",
    "deger": "4.7 (%28 enerji)"
   },
   {
    "kategori": "Makro",
    "bilesen": "Doymuş Yağ",
    "birim": "g",
    "hedef": "-",
    "deger": "0.58"
   },
   {
    "kategori": "Makro",
    "bilesen": "Tekli Doymamış Yağ",
    "birim": "g",
    "hedef": "-",
    "deger": "3.1"
   },
   {
    "kategori": "Makro",
    "bilesen": "Çoklu Doymamış Yağ",
    "birim": "g",
    "hedef": "-",
    "deger": "1.0"
   },
   {
    "kategori": "Makro",
    "bilesen": "Karbonhidrat",
    "birim": "g",
    "hedef": "Maks 5 mg/kg/dk infüzyon hızı",
    "deger": "19.3 (%51.5 enerji)"
   },
   {
    "kategori": "Makro",
    "bilesen": "Şekerler",
    "birim": "g",
    "hedef": "-",
    "deger": "17.4"
   },
   {
    "kategori": "Makro",
    "bilesen": "Laktoz",
    "birim": "g",
    "hedef": "-",
    "deger": "3.0"
   },
   {
    "kategori": "Makro",
    "bilesen": "Lif / FOS",
    "birim": "g",
    "hedef": "10 - 20 g/gün (iskemi/şokta kontrendike)",
    "deger": "0.4 (%0.5 enerji)"
   },
   {
    "kategori": "Makro",
    "bilesen": "Protein",
    "birim": "g",
    "hedef": "1.3 g/kg/gün (1.2 - 1.5; KRT/Obezitede 2.0'ye kadar)",
    "deger": "7.5 (%20 enerji)"
   },
   {
    "kategori": "Makro",
    "bilesen": "Tuz (NaCl)",
    "birim": "g",
    "hedef": "4 - 6 g/gün",
    "deger": "0.15"
   },
   {
    "kategori": "Makro",
    "bilesen": "Su / Sıvı Gereksinimi",
    "birim": "mL/gün",
    "hedef": "-",
    "deger": "64 g/100 g"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin A",
    "birim": "mcg RE",
    "hedef": "900 - 1500",
    "deger": "150"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin D3",
    "birim": "mcg",
    "hedef": "En az 25 mcg (1000 IU)",
    "deger": "3.75"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin E",
    "birim": "mg a-TE",
    "hedef": "En az 15",
    "deger": "3.75"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin K1",
    "birim": "mcg",
    "hedef": "En az 120",
    "deger": "21"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin B1 (Tiamin)",
    "birim": "mg",
    "hedef": "1.5 - 3.0",
    "deger": "0.3"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin B2 (Riboflavin)",
    "birim": "mg",
    "hedef": "En az 1.2",
    "deger": "0.4"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Niasin",
    "birim": "mg NE",
    "hedef": "18 - 40",
    "deger": "2.9 (1.5 mg niasin)"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin B6 (Piridoksin)",
    "birim": "mg",
    "hedef": "En az 1.5",
    "deger": "0.43"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin B12",
    "birim": "mcg",
    "hedef": "En az 2.5",
    "deger": "0.75"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Pantotenik Asit",
    "birim": "mg",
    "hedef": "En az 5.0",
    "deger": "1.5"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Biotin",
    "birim": "mcg",
    "hedef": "En az 30",
    "deger": "9.4"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Folik Asit",
    "birim": "mcg",
    "hedef": "330 - 400 DFE",
    "deger": "62.5"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin C",
    "birim": "mg",
    "hedef": "En az 100",
    "deger": "18.8"
   },
   {
    "kategori": "Özel",
    "bilesen": "Kolin",
    "birim": "mg",
    "hedef": "400 - 550 mg/gün (Adequate Intake - AI)",
    "deger": "32"
   }
  ],
  "endikasyon": "Kremamsı/puding kıvamında yüksek proteinli oral beslenme desteği; yutma güçlüğü (disfaji) olan hastalarda tercih edilebilir. Değerler 100 g için verilmiştir (100 ml değil).",
  "hedefKitle": "Erişkin",
  "form": "Oral (krema/puding, 100 g)",
  "diyabetik": false,
  "renal": false,
  "immun": false,
  "kcal100": 150.0,
  "protein100": 7.5,
  "lif100": 0.4,
  "osmolarite": null,
  "lifVar": true
 },
 {
  "isim": "Fresubin 2 kcal",
  "uretici": "Fresenius Kabi",
  "veriler": [
   {
    "kategori": "Makro",
    "bilesen": "Enerji",
    "birim": "kcal",
    "hedef": "-",
    "deger": "200"
   },
   {
    "kategori": "Makro",
    "bilesen": "Enerji",
    "birim": "kJ",
    "hedef": "-",
    "deger": "840"
   },
   {
    "kategori": "Makro",
    "bilesen": "Yağ",
    "birim": "g",
    "hedef": "Maks 1.5 g/kg/gün",
    "deger": "7.8 (%35 enerji)"
   },
   {
    "kategori": "Makro",
    "bilesen": "Doymuş Yağ",
    "birim": "g",
    "hedef": "-",
    "deger": "0.6"
   },
   {
    "kategori": "Makro",
    "bilesen": "Tekli Doymamış Yağ",
    "birim": "g",
    "hedef": "-",
    "deger": "5.8"
   },
   {
    "kategori": "Makro",
    "bilesen": "Çoklu Doymamış Yağ",
    "birim": "g",
    "hedef": "-",
    "deger": "1.4"
   },
   {
    "kategori": "Makro",
    "bilesen": "Karbonhidrat",
    "birim": "g",
    "hedef": "Maks 5 mg/kg/dk infüzyon hızı",
    "deger": "22.5 (%45 enerji)"
   },
   {
    "kategori": "Makro",
    "bilesen": "Şekerler",
    "birim": "g",
    "hedef": "-",
    "deger": "5.3"
   },
   {
    "kategori": "Makro",
    "bilesen": "Laktoz",
    "birim": "g",
    "hedef": "-",
    "deger": "≤0.3"
   },
   {
    "kategori": "Makro",
    "bilesen": "Lif / FOS",
    "birim": "g",
    "hedef": "10 - 20 g/gün (iskemi/şokta kontrendike)",
    "deger": "0"
   },
   {
    "kategori": "Makro",
    "bilesen": "Protein",
    "birim": "g",
    "hedef": "1.3 g/kg/gün (1.2 - 1.5; KRT/Obezitede 2.0'ye kadar)",
    "deger": "10 (%20 enerji)"
   },
   {
    "kategori": "Makro",
    "bilesen": "Su / Sıvı Gereksinimi",
    "birim": "mL/gün",
    "hedef": "-",
    "deger": "69 mL/100 mL"
   },
   {
    "kategori": "Fizikokimya",
    "bilesen": "Osmolarite",
    "birim": "mOsm/l",
    "hedef": "-",
    "deger": "600"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin A",
    "birim": "mcg RE",
    "hedef": "900 - 1500",
    "deger": "150"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Beta-Karoten",
    "birim": "mcg RE",
    "hedef": "-",
    "deger": "375"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin D3",
    "birim": "mcg",
    "hedef": "En az 25 mcg (1000 IU)",
    "deger": "2.5"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin E",
    "birim": "mg a-TE",
    "hedef": "En az 15",
    "deger": "3.75"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin K1",
    "birim": "mcg",
    "hedef": "En az 120",
    "deger": "21"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin B1 (Tiamin)",
    "birim": "mg",
    "hedef": "1.5 - 3.0",
    "deger": "0.3"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin B2 (Riboflavin)",
    "birim": "mg",
    "hedef": "En az 1.2",
    "deger": "0.4"
   }
  ],
  "endikasyon": "Sıvı kısıtlaması olan hastalar için çok yüksek kalorili (2 kcal/ml), lifsiz oral/tüp beslenme formülü.",
  "hedefKitle": "Erişkin",
  "form": "Oral / tüp",
  "diyabetik": false,
  "renal": false,
  "immun": false,
  "kcal100": 200.0,
  "protein100": 10.0,
  "lif100": 0.0,
  "osmolarite": 600.0,
  "lifVar": false
 },
 {
  "isim": "Fresubin Energy Fibre",
  "uretici": "Fresenius Kabi",
  "veriler": [
   {
    "kategori": "Makro",
    "bilesen": "Enerji",
    "birim": "kcal",
    "hedef": "-",
    "deger": "150"
   },
   {
    "kategori": "Makro",
    "bilesen": "Enerji",
    "birim": "kJ",
    "hedef": "-",
    "deger": "630"
   },
   {
    "kategori": "Makro",
    "bilesen": "Yağ",
    "birim": "g",
    "hedef": "Maks 1.5 g/kg/gün",
    "deger": "5.8 (%35 enerji)"
   },
   {
    "kategori": "Makro",
    "bilesen": "Doymuş Yağ",
    "birim": "g",
    "hedef": "-",
    "deger": "0.5"
   },
   {
    "kategori": "Makro",
    "bilesen": "Tekli Doymamış Yağ",
    "birim": "g",
    "hedef": "-",
    "deger": "3.7"
   },
   {
    "kategori": "Makro",
    "bilesen": "Çoklu Doymamış Yağ",
    "birim": "g",
    "hedef": "-",
    "deger": "1.6"
   },
   {
    "kategori": "Makro",
    "bilesen": "Karbonhidrat",
    "birim": "g",
    "hedef": "Maks 5 mg/kg/dk infüzyon hızı",
    "deger": "17.8 (%47.3 enerji)"
   },
   {
    "kategori": "Makro",
    "bilesen": "Şekerler",
    "birim": "g",
    "hedef": "-",
    "deger": "5.9"
   },
   {
    "kategori": "Makro",
    "bilesen": "Laktoz",
    "birim": "g",
    "hedef": "-",
    "deger": "<0.25"
   },
   {
    "kategori": "Makro",
    "bilesen": "Lif / FOS",
    "birim": "g",
    "hedef": "10 - 20 g/gün (iskemi/şokta kontrendike)",
    "deger": "2.0 (%2.7 enerji)"
   },
   {
    "kategori": "Makro",
    "bilesen": "Protein",
    "birim": "g",
    "hedef": "1.3 g/kg/gün (1.2 - 1.5; KRT/Obezitede 2.0'ye kadar)",
    "deger": "5.6 (%15 enerji)"
   },
   {
    "kategori": "Makro",
    "bilesen": "Tuz (NaCl)",
    "birim": "g",
    "hedef": "4 - 6 g/gün",
    "deger": "0.21"
   },
   {
    "kategori": "Makro",
    "bilesen": "Su / Sıvı Gereksinimi",
    "birim": "mL/gün",
    "hedef": "-",
    "deger": "78 mL/100 mL"
   },
   {
    "kategori": "Fizikokimya",
    "bilesen": "Osmolarite",
    "birim": "mOsm/l",
    "hedef": "-",
    "deger": "400"
   },
   {
    "kategori": "Fizikokimya",
    "bilesen": "Osmolalite",
    "birim": "mOsm/kg su",
    "hedef": "-",
    "deger": "520"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin A",
    "birim": "mcg RE",
    "hedef": "900 - 1500",
    "deger": "170"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Beta-Karoten",
    "birim": "mcg RE",
    "hedef": "-",
    "deger": "50"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin D3",
    "birim": "mcg",
    "hedef": "En az 25 mcg (1000 IU)",
    "deger": "2"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin E",
    "birim": "mg a-TE",
    "hedef": "En az 15",
    "deger": "3"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin K1",
    "birim": "mcg",
    "hedef": "En az 120",
    "deger": "16.7"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin B1 (Tiamin)",
    "birim": "mg",
    "hedef": "1.5 - 3.0",
    "deger": "0.23"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin B2 (Riboflavin)",
    "birim": "mg",
    "hedef": "En az 1.2",
    "deger": "0.32"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Niasin",
    "birim": "mg NE",
    "hedef": "18 - 40",
    "deger": "4 (3 mg niasin)"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin B6 (Piridoksin)",
    "birim": "mg",
    "hedef": "En az 1.5",
    "deger": "0.33"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Vitamin B12",
    "birim": "mcg",
    "hedef": "En az 2.5",
    "deger": "0.6"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Pantotenik Asit",
    "birim": "mg",
    "hedef": "En az 5.0",
    "deger": "1.2"
   },
   {
    "kategori": "Vitamin",
    "bilesen": "Biotin",
    "birim": "mcg",
    "hedef": "En az 30",
    "deger": "7.5"
   }
  ],
  "endikasyon": "Yüksek kalorili, çoklu lif içerikli standart oral/tüp beslenme takviyesi.",
  "hedefKitle": "Erişkin",
  "form": "Oral / tüp",
  "diyabetik": false,
  "renal": false,
  "immun": false,
  "kcal100": 150.0,
  "protein100": 5.6,
  "lif100": 2.0,
  "osmolarite": 400.0,
  "lifVar": true
 }
];

const CAT_ORDER = ["Makro","Vitamin","Elektrolit","Eser Element","Özel","Fizikokimya"];
const CAT_LABEL = {
  "Makro":"Makro besinler",
  "Vitamin":"Vitaminler",
  "Elektrolit":"Elektrolitler",
  "Eser Element":"Eser Elementler",
  "Özel":"Özel bileşenler",
  "Fizikokimya":"Fizikokimyasal özellikler"
};

const TARGETS = {
  "Yağ": {type:'max', perKg:1.5, note:'ESPEN: maks 1.5 g/kg/gün'},
  "Karbonhidrat": {type:'max', perKg:7.2, note:'ESPEN: maks 5 mg/kg/dk infüzyon hızı (≈7.2 g/kg/gün sürekli infüzyonda)'},
  "Lif / FOS": {type:'min', flat:10, note:'ESPEN: 10–20 g/gün (iskemi/şokta kontrendike)'},
  "Tuz (NaCl)": {type:'min', flat:4, note:'ESPEN: 4–6 g/gün'},
  "Vitamin A": {type:'min', flat:900, note:'ESPEN: 900–1500 mcg RE/gün'},
  "Vitamin D3": {type:'min', flat:25, note:'ESPEN: en az 25 mcg (1000 IU)/gün'},
  "Vitamin E": {type:'min', flat:15, note:'ESPEN: en az 15 mg/gün'},
  "Vitamin K1": {type:'min', flat:120, note:'ESPEN: en az 120 mcg/gün'},
  "Vitamin C": {type:'min', flat:100, note:'ESPEN: en az 100 mg/gün'},
  "Folik Asit": {type:'min', flat:330, note:'ESPEN: 330–400 mcg DFE/gün'},
  "Vitamin B1 (Tiamin)": {type:'min', flat:1.5, note:'ESPEN: 1.5–3.0 mg/gün'},
  "Vitamin B2 (Riboflavin)": {type:'min', flat:1.2, note:'ESPEN: en az 1.2 mg/gün'},
  "Vitamin B6 (Piridoksin)": {type:'min', flat:1.5, note:'ESPEN: en az 1.5 mg/gün'},
  "Vitamin B12": {type:'min', flat:2.5, note:'ESPEN: en az 2.5 mcg/gün'},
  "Niasin": {type:'min', flat:18, note:'ESPEN: 18–40 mg NE/gün'},
  "Pantotenik Asit": {type:'min', flat:5.0, note:'ESPEN: en az 5.0 mg/gün'},
  "Biotin": {type:'min', flat:30, note:'ESPEN: en az 30 mcg/gün'},
  "Sodyum (Na)": {type:'min', flat:1500, note:'ESPEN: 1500–3000 mg/gün (1–2 mmol/kg/gün)'},
  "Potasyum (K)": {type:'min', flat:2000, note:'ESPEN: 2000–3500 mg/gün (1–1.5 mmol/kg/gün)'},
  "Klor (Cl)": {type:'min', perKg:35.45, note:'ESPEN: 1–2 mmol/kg/gün (Na/K\'ya paralel)'},
  "Kalsiyum (Ca)": {type:'min', flat:500, note:'ESPEN: 500–1000 mg/gün (10–15 mmol/gün)'},
  "Fosfor (P)": {type:'min', flat:700, note:'ESPEN: 700–1000 mg/gün (20–30 mmol/gün)'},
  "Magnezyum (Mg)": {type:'min', flat:250, note:'ESPEN: 250–400 mg/gün (10–15 mmol/gün)'},
  "Demir (Fe)": {type:'min', flat:18, note:'ESPEN: 18–30 mg/gün'},
  "Çinko (Zn)": {type:'min', flat:10, note:'ESPEN: 10–20 mg/gün'},
  "Manganez (Mn)": {type:'min', flat:2, note:'ESPEN: 2–3 mg/gün (maks 6)'},
  "Bakır (Cu)": {type:'min', flat:1000, note:'ESPEN: 1000–3000 mcg/gün'},
  "İyot (I)": {type:'min', flat:150, note:'ESPEN: 150–300 mcg/gün'},
  "Selenyum (Se)": {type:'min', flat:50, note:'ESPEN: 50–150 mcg/gün'},
  "Krom (Cr)": {type:'min', flat:35, note:'ESPEN: 35–150 mcg/gün'},
  "Molibden (Mo)": {type:'min', flat:50, note:'ESPEN: 50–250 mcg/gün'},
  "CaHMB": {type:'min', flat:3.0, note:'ESPEN: 3.0 g/gün (sarkopeni/ağır katabolizmada)'},
  "Kolin": {type:'min', flat:400, note:'ESPEN: 400–550 mg/gün (yeterli alım - AI)'},
  "L-Karnitin": {type:'min', flat:500, note:'ESPEN: 500–1000 mg/gün (diyaliz/kayıplarda)'}
};

// ---- clinical scenario definitions (ESPEN referanslı) ----
// kcalMin/kcalMax: kcal/kg/gün (aksi belirtilmedikçe güncel kiloya göre)
// proMin/proMax: g/kg/gün protein
// def: varsayılan değer (aralığın neresinden başlanacağı)
const SCENARIOS = {
  "genel-servis": {
    label: "Genel servis / polimorbid",
    kcalMin:25, kcalMax:30, kcalDef:27,
    proMin:1.0, proMax:1.2, proDef:1.1,
    note: "Polimorbid dahiliye/genel servis hastası. Malnütrisyon riski veya yaşlılıkta protein hedefi 1.2–1.5 g/kg/gün'e yükseltilebilir.",
    elderlyToggle: true, elderlyProMin:1.2, elderlyProMax:1.5, elderlyProDef:1.35
  },
  "yb-postakut": {
    label: "YB — standart kritik hasta (medikal/cerrahi)",
    kcalMin:25, kcalMax:30, kcalDef:27,
    proMin:1.3, proMax:1.3, proDef:1.3,
    note: "Enerji hedefi 25–30 kcal/kg/gün, protein 1.3 g/kg/gün (kademeli olarak ulaşılır)."
  },
  "yb-travma": {
    label: "YB — travma / majör cerrahi / açık karın / yanık",
    kcalMin:25, kcalMax:30, kcalDef:27,
    proMin:1.5, proMax:2.0, proDef:1.75,
    note: "Yüksek nitrojen ve doku kaybı nedeniyle protein hedefi belirgin yüksektir (1.5–2.0 g/kg/gün)."
  },
  "yb-obez": {
    label: "YB — obez kritik hasta",
    isObese: true,
    note: "BMI 30–40: enerji 11–14 kcal/kg (güncel kilo) veya 22–25 kcal/kg (ideal kilo); protein 2.0 g/kg (ideal kilo). BMI >40: protein 2.5 g/kg (ideal kilo), hipokalorik yaklaşım sürdürülür."
  },
  "renal-aki": {
    label: "Kritik hasta + AKI (diyaliz almıyor)",
    kcalMin:20, kcalMax:25, kcalDef:22,
    proMin:1.0, proMax:1.3, proDef:1.15,
    note: "Akut dönemde 20–25 kcal/kg/gün, tolere edildikçe 25–30 kcal/kg/gün'e çıkılabilir. Protein 1.0 g/kg ile başlanıp kademeli 1.3 g/kg'a çıkılır - KRT başlangıcını geciktirmek için protein ASLA kısıtlanmaz."
  },
  "renal-crrt": {
    label: "Kritik hasta + CRRT / SLED",
    kcalMin:25, kcalMax:30, kcalDef:27,
    proMin:1.5, proMax:1.7, proDef:1.6,
    note: "Diyalizattan gelen sitrat/glukoz kalorisi göz önünde bulundurulmalıdır. Filtre ile aminoasit kaybı nedeniyle yüksek protein (1.5–1.7 g/kg/gün) şarttır.",
    highProteinDemand: true
  },
  "renal-ihd": {
    label: "Kritik hasta + intermittan HD",
    kcalMin:25, kcalMax:30, kcalDef:27,
    proMin:1.3, proMax:1.5, proDef:1.4,
    note: "İntermittan hemodiyaliz alan kritik hastada enerji 25–30 kcal/kg/gün, protein 1.3–1.5 g/kg/gün hedeflenir."
  },
  "kby-stabil": {
    label: "Servis / stabil KBY (diyalizsiz)",
    kcalMin:30, kcalMax:35, kcalDef:32,
    proMin:0.6, proMax:0.8, proDef:0.7,
    note: "Metabolik stres olmayan stabil kronik böbrek yetmezliğinde düşük protein diyeti korunur (0.6–0.8 g/kg/gün)."
  },
  "kby-hd-stabil": {
    label: "Stabil KBY + kronik hemodiyaliz",
    kcalMin:30, kcalMax:35, kcalDef:32,
    proMin:1.2, proMax:1.2, proDef:1.2,
    proOpen: true,
    note: "Stabil kronik hemodiyaliz hastasında protein kaybını karşılamak için en az 1.2 g/kg/gün protein hedeflenir."
  }
};
