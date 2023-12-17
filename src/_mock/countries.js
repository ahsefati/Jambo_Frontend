const countries = [
    {
        "name": "Select Your Country",
        "countryCode": "CC",
        "countryCodeAlpha3": "CCC",
        "phone": "-",
        "currency": "RRR",
        "stateProvinces": [
          {
            "name": "Select Your State"
          },
        ]
    },
    {
      "name": "Andorra",
      "countryCode": "AD",
      "countryCodeAlpha3": "AND",
      "phone": "376",
      "currency": "EUR",
      "stateProvinces": [
        {
          "name": "Sant Julià de Loria"
        },
        {
          "name": "Ordino"
        },
        {
          "name": "La Massana"
        },
        {
          "name": "Encamp"
        },
        {
          "name": "Canillo"
        },
        {
          "name": "Andorra la Vella"
        },
        {
          "name": "Escaldes-Engordany"
        }
      ]
    },
    {
      "name": "United Arab Emirates",
      "countryCode": "AE",
      "countryCodeAlpha3": "ARE",
      "phone": "971",
      "currency": "AED",
      "stateProvinces": [
        {
          "name": "Imārat Umm al Qaywayn"
        },
        {
          "name": "Raʼs al Khaymah"
        },
        {
          "name": "Dubai"
        },
        {
          "name": "Sharjah"
        },
        {
          "name": "Fujairah"
        },
        {
          "name": "Ajman"
        },
        {
          "name": "Abu Dhabi"
        }
      ]
    },
    {
      "name": "Afghanistan",
      "countryCode": "AF",
      "countryCodeAlpha3": "AFG",
      "phone": "93",
      "currency": "AFN",
      "stateProvinces": [
        {
          "name": "Zabul"
        },
        {
          "name": "Vardak"
        },
        {
          "name": "Takhar"
        },
        {
          "name": "Sar-e Pol"
        },
        {
          "name": "Samangan"
        },
        {
          "name": "Parwan"
        },
        {
          "name": "Paktika"
        },
        {
          "name": "Paktia"
        },
        {
          "name": "Oruzgan"
        },
        {
          "name": "Nimroz"
        },
        {
          "name": "Nangarhar"
        },
        {
          "name": "Logar"
        },
        {
          "name": "Laghman"
        },
        {
          "name": "Kunduz"
        },
        {
          "name": "Kunar"
        },
        {
          "name": "Kapisa"
        },
        {
          "name": "Kandahar"
        },
        {
          "name": "Kabul"
        },
        {
          "name": "Jowzjan"
        },
        {
          "name": "Herat"
        },
        {
          "name": "Helmand"
        },
        {
          "name": "Ghowr"
        },
        {
          "name": "Ghazni"
        },
        {
          "name": "Faryab"
        },
        {
          "name": "Farah"
        },
        {
          "name": "Bamyan"
        },
        {
          "name": "Balkh"
        },
        {
          "name": "Baghlan"
        },
        {
          "name": "Badghis"
        },
        {
          "name": "Badakhshan"
        },
        {
          "name": "Khowst"
        },
        {
          "name": "Nuristan"
        },
        {
          "name": "Daykundi"
        },
        {
          "name": "Panjshir"
        }
      ]
    },
    {
      "name": "Antigua and Barbuda",
      "countryCode": "AG",
      "countryCodeAlpha3": "ATG",
      "phone": "+1-268",
      "currency": "XCD",
      "stateProvinces": [
        {
          "name": "Saint Philip"
        },
        {
          "name": "Saint Peter"
        },
        {
          "name": "Saint Paul"
        },
        {
          "name": "Saint Mary"
        },
        {
          "name": "Saint John"
        },
        {
          "name": "Saint George"
        },
        {
          "name": "Redonda"
        },
        {
          "name": "Barbuda"
        }
      ]
    },
    {
      "name": "Anguilla",
      "countryCode": "AI",
      "countryCodeAlpha3": "AIA",
      "phone": "+1-264",
      "currency": "XCD",
      "stateProvinces": [
        {
          "name": "Blowing Point"
        },
        {
          "name": "Sandy Ground"
        },
        {
          "name": "Sandy Hill"
        },
        {
          "name": "The Valley"
        },
        {
          "name": "East End"
        },
        {
          "name": "North Hill"
        },
        {
          "name": "West End"
        },
        {
          "name": "South Hill"
        },
        {
          "name": "The Quarter"
        },
        {
          "name": "North Side"
        },
        {
          "name": "Island Harbour"
        },
        {
          "name": "George Hill"
        },
        {
          "name": "Stoney Ground"
        },
        {
          "name": "The Farrington"
        }
      ]
    },
    {
      "name": "Albania",
      "countryCode": "AL",
      "countryCodeAlpha3": "ALB",
      "phone": "355",
      "currency": "ALL",
      "stateProvinces": [
        {
          "name": "Berat"
        },
        {
          "name": "Dibër"
        },
        {
          "name": "Elbasan"
        },
        {
          "name": "Gjirokastër"
        },
        {
          "name": "Korçë"
        },
        {
          "name": "Kukës"
        },
        {
          "name": "Durrës"
        },
        {
          "name": "Fier"
        },
        {
          "name": "Lezhë"
        },
        {
          "name": "Shkodër"
        },
        {
          "name": "Tirana"
        },
        {
          "name": "Vlorë"
        }
      ]
    },
    {
      "name": "Armenia",
      "countryCode": "AM",
      "countryCodeAlpha3": "ARM",
      "phone": "374",
      "currency": "AMD",
      "stateProvinces": [
        {
          "name": "Ararat"
        },
        {
          "name": "Syunik"
        },
        {
          "name": "Vayots Dzor"
        },
        {
          "name": "Yerevan"
        },
        {
          "name": "Aragatsotn"
        },
        {
          "name": "Armavir"
        },
        {
          "name": "Gegharkunik"
        },
        {
          "name": "Kotayk"
        },
        {
          "name": "Lori"
        },
        {
          "name": "Shirak"
        },
        {
          "name": "Tavush"
        }
      ]
    },
    {
      "name": "Angola",
      "countryCode": "AO",
      "countryCodeAlpha3": "AGO",
      "phone": "244",
      "currency": "AOA",
      "stateProvinces": [
        {
          "name": "Lunda Sul"
        },
        {
          "name": "Luanda Norte"
        },
        {
          "name": "Moxico"
        },
        {
          "name": "Cuando Cobango"
        },
        {
          "name": "Zaire"
        },
        {
          "name": "Uíge"
        },
        {
          "name": "Malanje"
        },
        {
          "name": "Luanda"
        },
        {
          "name": "Cuanza Norte"
        },
        {
          "name": "Cabinda"
        },
        {
          "name": "Bengo"
        },
        {
          "name": "Namibe"
        },
        {
          "name": "Huíla"
        },
        {
          "name": "Huambo"
        },
        {
          "name": "Cunene"
        },
        {
          "name": "Kwanza Sul"
        },
        {
          "name": "Bíe"
        },
        {
          "name": "Benguela"
        }
      ]
    },
    {
      "name": "Argentina",
      "countryCode": "AR",
      "countryCodeAlpha3": "ARG",
      "phone": "54",
      "currency": "ARS",
      "stateProvinces": [
        {
          "name": "Misiones"
        },
        {
          "name": "Formosa"
        },
        {
          "name": "Buenos Aires F.D."
        },
        {
          "name": "Entre Rios"
        },
        {
          "name": "Corrientes"
        },
        {
          "name": "Buenos Aires"
        },
        {
          "name": "Tucuman"
        },
        {
          "name": "Tierra del Fuego"
        },
        {
          "name": "Santiago del Estero"
        },
        {
          "name": "Santa Fe"
        },
        {
          "name": "Santa Cruz"
        },
        {
          "name": "San Luis"
        },
        {
          "name": "San Juan"
        },
        {
          "name": "Salta"
        },
        {
          "name": "Rio Negro"
        },
        {
          "name": "Neuquen"
        },
        {
          "name": "Mendoza"
        },
        {
          "name": "La Rioja"
        },
        {
          "name": "La Pampa"
        },
        {
          "name": "Jujuy"
        },
        {
          "name": "Cordoba"
        },
        {
          "name": "Chubut"
        },
        {
          "name": "Chaco"
        },
        {
          "name": "Catamarca"
        }
      ]
    },
    {
      "name": "American Samoa",
      "countryCode": "AS",
      "countryCodeAlpha3": "ASM",
      "phone": "+1-684",
      "currency": "USD",
      "stateProvinces": [
        {
          "name": "Western District"
        },
        {
          "name": "Swains Island"
        },
        {
          "name": "Eastern District"
        },
        {
          "name": "Manu'a"
        },
        {
          "name": "Rose Island"
        }
      ]
    },
    {
      "name": "Austria",
      "countryCode": "AT",
      "countryCodeAlpha3": "AUT",
      "phone": "43",
      "currency": "EUR",
      "stateProvinces": [
        {
          "name": "Vienna"
        },
        {
          "name": "Vorarlberg"
        },
        {
          "name": "Tyrol"
        },
        {
          "name": "Styria"
        },
        {
          "name": "Salzburg"
        },
        {
          "name": "Upper Austria"
        },
        {
          "name": "Lower Austria"
        },
        {
          "name": "Carinthia"
        },
        {
          "name": "Burgenland"
        }
      ]
    },
    {
      "name": "Australia",
      "countryCode": "AU",
      "countryCodeAlpha3": "AUS",
      "phone": "61",
      "currency": "AUD",
      "stateProvinces": [
        {
          "name": "Western Australia"
        },
        {
          "name": "South Australia"
        },
        {
          "name": "Northern Territory"
        },
        {
          "name": "Victoria"
        },
        {
          "name": "Tasmania"
        },
        {
          "name": "Queensland"
        },
        {
          "name": "New South Wales"
        },
        {
          "name": "Australian Capital Territory"
        }
      ]
    },
    {
      "name": "Aland Islands",
      "countryCode": "AX",
      "countryCodeAlpha3": "ALA",
      "phone": "+358-18",
      "currency": "EUR",
      "stateProvinces": [
        {
          "name": "Mariehamns stad"
        },
        {
          "name": "Ålands landsbygd"
        },
        {
          "name": "Ålands skärgård"
        }
      ]
    },
    {
      "name": "Azerbaijan",
      "countryCode": "AZ",
      "countryCodeAlpha3": "AZE",
      "phone": "994",
      "currency": "AZN",
      "stateProvinces": [
        {
          "name": "Beyləqan"
        },
        {
          "name": "Zǝngilan"
        },
        {
          "name": "Yardımlı"
        },
        {
          "name": "Shusha"
        },
        {
          "name": "Salyan"
        },
        {
          "name": "Sabirabad"
        },
        {
          "name": "Saatlı"
        },
        {
          "name": "Bilǝsuvar"
        },
        {
          "name": "Neftçala"
        },
        {
          "name": "Nakhichevan"
        },
        {
          "name": "Masally"
        },
        {
          "name": "Lerik"
        },
        {
          "name": "Lənkəran"
        },
        {
          "name": "Laçın"
        },
        {
          "name": "Qubadlı"
        },
        {
          "name": "İmişli"
        },
        {
          "name": "Füzuli"
        },
        {
          "name": "Jabrayil"
        },
        {
          "name": "Jalilabad"
        },
        {
          "name": "Astara"
        },
        {
          "name": "Xocalı"
        },
        {
          "name": "Ağcabǝdi"
        },
        {
          "name": "Ağdam"
        },
        {
          "name": "Shirvan"
        },
        {
          "name": "Lankaran Sahari"
        },
        {
          "name": "Shusha City"
        },
        {
          "name": "Tǝrtǝr"
        },
        {
          "name": "Xankǝndi"
        },
        {
          "name": "Khojavend"
        },
        {
          "name": "Zərdab"
        },
        {
          "name": "Zaqatala"
        },
        {
          "name": "Yevlax"
        },
        {
          "name": "Oğuz"
        },
        {
          "name": "Ucar"
        },
        {
          "name": "Tovuz"
        },
        {
          "name": "Şamaxı"
        },
        {
          "name": "Shaki"
        },
        {
          "name": "Şǝmkir"
        },
        {
          "name": "Kürdǝmir"
        },
        {
          "name": "Qǝbǝlǝ"
        },
        {
          "name": "Qusar"
        },
        {
          "name": "Quba"
        },
        {
          "name": "Goygol Rayon"
        },
        {
          "name": "Xaçmaz"
        },
        {
          "name": "Kalbajar"
        },
        {
          "name": "Qazax"
        },
        {
          "name": "Goranboy"
        },
        {
          "name": "Qax"
        },
        {
          "name": "İsmayıllı"
        },
        {
          "name": "Göyçay"
        },
        {
          "name": "Shabran"
        },
        {
          "name": "Daşkǝsǝn"
        },
        {
          "name": "Balakǝn"
        },
        {
          "name": "Barda"
        },
        {
          "name": "Baki"
        },
        {
          "name": "Abşeron"
        },
        {
          "name": "Ağsu"
        },
        {
          "name": "Ağdaş"
        },
        {
          "name": "Gǝdǝbǝy"
        },
        {
          "name": "Ağstafa"
        },
        {
          "name": "Gǝncǝ"
        },
        {
          "name": "Mingǝcevir"
        },
        {
          "name": "Naftalan"
        },
        {
          "name": "Qobustan"
        },
        {
          "name": "Samux"
        },
        {
          "name": "Shaki City"
        },
        {
          "name": "Siyǝzǝn"
        },
        {
          "name": "Sumqayit"
        },
        {
          "name": "Xızı"
        },
        {
          "name": "Yevlax City"
        },
        {
          "name": "Hacıqabul"
        }
      ]
    },
    {
      "name": "Bosnia and Herzegovina",
      "countryCode": "BA",
      "countryCodeAlpha3": "BIH",
      "phone": "387",
      "currency": "BAM",
      "stateProvinces": [
        {
          "name": "Federation of B&H"
        },
        {
          "name": "Srpska"
        },
        {
          "name": "Brčko"
        }
      ]
    },
    {
      "name": "Barbados",
      "countryCode": "BB",
      "countryCodeAlpha3": "BRB",
      "phone": "+1-246",
      "currency": "BBD",
      "stateProvinces": [
        {
          "name": "Saint Thomas"
        },
        {
          "name": "Saint Philip"
        },
        {
          "name": "Saint Peter"
        },
        {
          "name": "Saint Michael"
        },
        {
          "name": "Saint Lucy"
        },
        {
          "name": "Saint Joseph"
        },
        {
          "name": "Saint John"
        },
        {
          "name": "Saint James"
        },
        {
          "name": "Saint George"
        },
        {
          "name": "Saint Andrew"
        },
        {
          "name": "Christ Church"
        }
      ]
    },
    {
      "name": "Bangladesh",
      "countryCode": "BD",
      "countryCodeAlpha3": "BGD",
      "phone": "880",
      "currency": "BDT",
      "stateProvinces": [
        {
          "name": "Rajshahi Division"
        },
        {
          "name": "Dhaka"
        },
        {
          "name": "Chittagong"
        },
        {
          "name": "Khulna"
        },
        {
          "name": "Barisāl"
        },
        {
          "name": "Sylhet"
        },
        {
          "name": "Rangpur Division"
        },
        {
          "name": "Mymensingh Division"
        }
      ]
    },
    {
      "name": "Belgium",
      "countryCode": "BE",
      "countryCodeAlpha3": "BEL",
      "phone": "32",
      "currency": "EUR",
      "stateProvinces": [
        {
          "name": "Brussels Capital"
        },
        {
          "name": "Wallonia"
        },
        {
          "name": "Flanders"
        }
      ]
    },
    {
      "name": "Burkina Faso",
      "countryCode": "BF",
      "countryCodeAlpha3": "BFA",
      "phone": "226",
      "currency": "XOF",
      "stateProvinces": [
        {
          "name": "Boucle du Mouhoun"
        },
        {
          "name": "Cascades"
        },
        {
          "name": "Centre"
        },
        {
          "name": "Centre-Est"
        },
        {
          "name": "Centre-Nord"
        },
        {
          "name": "Centre-Ouest"
        },
        {
          "name": "Centre-Sud"
        },
        {
          "name": "Est"
        },
        {
          "name": "Hauts-Bassins"
        },
        {
          "name": "Nord"
        },
        {
          "name": "Plateau-Central"
        },
        {
          "name": "Sahel"
        },
        {
          "name": "Sud-Ouest"
        }
      ]
    },
    {
      "name": "Bulgaria",
      "countryCode": "BG",
      "countryCodeAlpha3": "BGR",
      "phone": "359",
      "currency": "BGN",
      "stateProvinces": [
        {
          "name": "Razgrad"
        },
        {
          "name": "Montana"
        },
        {
          "name": "Vratsa"
        },
        {
          "name": "Varna"
        },
        {
          "name": "Dobrich"
        },
        {
          "name": "Sofia"
        },
        {
          "name": "Ruse"
        },
        {
          "name": "Plovdiv"
        },
        {
          "name": "Pleven"
        },
        {
          "name": "Pernik"
        },
        {
          "name": "Pazardzhik"
        },
        {
          "name": "Lovech"
        },
        {
          "name": "Haskovo"
        },
        {
          "name": "Sofia-Capital"
        },
        {
          "name": "Burgas"
        },
        {
          "name": "Blagoevgrad"
        },
        {
          "name": "Gabrovo"
        },
        {
          "name": "Kardzhali"
        },
        {
          "name": "Kyustendil"
        },
        {
          "name": "Shumen"
        },
        {
          "name": "Silistra"
        },
        {
          "name": "Sliven"
        },
        {
          "name": "Smolyan"
        },
        {
          "name": "Stara Zagora"
        },
        {
          "name": "Targovishte"
        },
        {
          "name": "Veliko Tarnovo"
        },
        {
          "name": "Vidin"
        },
        {
          "name": "Yambol"
        }
      ]
    },
    {
      "name": "Bahrain",
      "countryCode": "BH",
      "countryCodeAlpha3": "BHR",
      "phone": "973",
      "currency": "BHD",
      "stateProvinces": [
        {
          "name": "Muharraq"
        },
        {
          "name": "Manama"
        },
        {
          "name": "Southern Governorate"
        },
        {
          "name": "Northern"
        }
      ]
    },
    {
      "name": "Burundi",
      "countryCode": "BI",
      "countryCodeAlpha3": "BDI",
      "phone": "257",
      "currency": "BIF",
      "stateProvinces": [
        {
          "name": "Makamba"
        },
        {
          "name": "Bururi"
        },
        {
          "name": "Muramvya"
        },
        {
          "name": "Gitega"
        },
        {
          "name": "Ruyigi"
        },
        {
          "name": "Cankuzo"
        },
        {
          "name": "Karuzi"
        },
        {
          "name": "Bubanza"
        },
        {
          "name": "Cibitoke"
        },
        {
          "name": "Ngozi"
        },
        {
          "name": "Kayanza"
        },
        {
          "name": "Muyinga"
        },
        {
          "name": "Kirundo"
        },
        {
          "name": "Rutana"
        },
        {
          "name": "Mwaro"
        },
        {
          "name": "Bujumbura Mairie"
        },
        {
          "name": "Bujumbura Rural"
        },
        {
          "name": "Rumonge"
        }
      ]
    },
    {
      "name": "Benin",
      "countryCode": "BJ",
      "countryCodeAlpha3": "BEN",
      "phone": "229",
      "currency": "XOF",
      "stateProvinces": [
        {
          "name": "Zou"
        },
        {
          "name": "Ouémé"
        },
        {
          "name": "Mono"
        },
        {
          "name": "Borgou"
        },
        {
          "name": "Atlantique"
        },
        {
          "name": "Atakora"
        },
        {
          "name": "Alibori"
        },
        {
          "name": "Collines"
        },
        {
          "name": "Kouffo"
        },
        {
          "name": "Donga"
        },
        {
          "name": "Littoral"
        },
        {
          "name": "Plateau"
        }
      ]
    },
    {
      "name": "Bermuda",
      "countryCode": "BM",
      "countryCodeAlpha3": "BMU",
      "phone": "+1-441",
      "currency": "BMD",
      "stateProvinces": [
        {
          "name": "Warwick"
        },
        {
          "name": "Southampton"
        },
        {
          "name": "Smithʼs"
        },
        {
          "name": "Sandys"
        },
        {
          "name": "Saint Georgeʼs"
        },
        {
          "name": "Saint George"
        },
        {
          "name": "Pembroke"
        },
        {
          "name": "Paget"
        },
        {
          "name": "Hamilton"
        },
        {
          "name": "Hamilton city"
        },
        {
          "name": "Devonshire"
        }
      ]
    },
    {
      "name": "Brunei",
      "countryCode": "BN",
      "countryCodeAlpha3": "BRN",
      "phone": "673",
      "currency": "BND",
      "stateProvinces": [
        {
          "name": "Tutong"
        },
        {
          "name": "Temburong"
        },
        {
          "name": "Brunei-Muara District"
        },
        {
          "name": "Belait"
        }
      ]
    },
    {
      "name": "Bolivia",
      "countryCode": "BO",
      "countryCodeAlpha3": "BOL",
      "phone": "591",
      "currency": "BOB",
      "stateProvinces": [
        {
          "name": "Tarija"
        },
        {
          "name": "Santa Cruz"
        },
        {
          "name": "Potosí"
        },
        {
          "name": "Pando"
        },
        {
          "name": "Oruro"
        },
        {
          "name": "La Paz"
        },
        {
          "name": "Cochabamba"
        },
        {
          "name": "Chuquisaca"
        },
        {
          "name": "El Beni"
        }
      ]
    },
    {
      "name": "Bonaire, Saint Eustatius and Saba",
      "countryCode": "BQ",
      "countryCodeAlpha3": "BES",
      "phone": "599",
      "currency": "USD",
      "stateProvinces": [
        {
          "name": "Bonaire"
        },
        {
          "name": "Saba"
        },
        {
          "name": "Sint Eustatius"
        }
      ]
    },
    {
      "name": "Brazil",
      "countryCode": "BR",
      "countryCodeAlpha3": "BRA",
      "phone": "55",
      "currency": "BRL",
      "stateProvinces": [
        {
          "name": "Rio Grande do Norte"
        },
        {
          "name": "Piauí"
        },
        {
          "name": "Pernambuco"
        },
        {
          "name": "Paraíba"
        },
        {
          "name": "Pará"
        },
        {
          "name": "Maranhão"
        },
        {
          "name": "Ceará"
        },
        {
          "name": "Amapá"
        },
        {
          "name": "Alagoas"
        },
        {
          "name": "Sergipe"
        },
        {
          "name": "São Paulo"
        },
        {
          "name": "Santa Catarina"
        },
        {
          "name": "Rio Grande do Sul"
        },
        {
          "name": "Rio de Janeiro"
        },
        {
          "name": "Paraná"
        },
        {
          "name": "Minas Gerais"
        },
        {
          "name": "Mato Grosso do Sul"
        },
        {
          "name": "Mato Grosso"
        },
        {
          "name": "Goiás"
        },
        {
          "name": "Federal District"
        },
        {
          "name": "Espírito Santo"
        },
        {
          "name": "Bahia"
        },
        {
          "name": "Tocantins"
        },
        {
          "name": "Roraima"
        },
        {
          "name": "Amazonas"
        },
        {
          "name": "Acre"
        },
        {
          "name": "Rondônia"
        }
      ]
    },
    {
      "name": "Bahamas",
      "countryCode": "BS",
      "countryCodeAlpha3": "BHS",
      "phone": "+1-242",
      "currency": "BSD",
      "stateProvinces": [
        {
          "name": "San Salvador"
        },
        {
          "name": "Ragged Island"
        },
        {
          "name": "Berry Islands"
        },
        {
          "name": "New Providence"
        },
        {
          "name": "Mayaguana"
        },
        {
          "name": "Long Island"
        },
        {
          "name": "Inagua"
        },
        {
          "name": "Harbour Island"
        },
        {
          "name": "Freeport"
        },
        {
          "name": "Exuma"
        },
        {
          "name": "Cat Island"
        },
        {
          "name": "Bimini"
        },
        {
          "name": "Acklins"
        },
        {
          "name": "Black Point"
        },
        {
          "name": "Central Abaco"
        },
        {
          "name": "Central Andros"
        },
        {
          "name": "Central Eleuthera"
        },
        {
          "name": "Crooked Island and Long Cay"
        },
        {
          "name": "East Grand Bahama"
        },
        {
          "name": "Grand Cay"
        },
        {
          "name": "Hope Town"
        },
        {
          "name": "Mangrove Cay"
        },
        {
          "name": "Moore’s Island"
        },
        {
          "name": "North Abaco"
        },
        {
          "name": "North Andros"
        },
        {
          "name": "North Eleuthera"
        },
        {
          "name": "Rum Cay"
        },
        {
          "name": "South Abaco"
        },
        {
          "name": "South Andros"
        },
        {
          "name": "South Eleuthera"
        },
        {
          "name": "Spanish Wells"
        },
        {
          "name": "West Grand Bahama"
        }
      ]
    },
    {
      "name": "Bhutan",
      "countryCode": "BT",
      "countryCodeAlpha3": "BTN",
      "phone": "975",
      "currency": "BTN",
      "stateProvinces": [
        {
          "name": "Bumthang"
        },
        {
          "name": "Chukha"
        },
        {
          "name": "Dagana"
        },
        {
          "name": "Chirang"
        },
        {
          "name": "Geylegphug"
        },
        {
          "name": "Haa"
        },
        {
          "name": "Lhuntse"
        },
        {
          "name": "Mongar"
        },
        {
          "name": "Paro"
        },
        {
          "name": "Pemagatshel"
        },
        {
          "name": "Punakha"
        },
        {
          "name": "Samchi"
        },
        {
          "name": "Samdrup Jongkhar"
        },
        {
          "name": "Shemgang"
        },
        {
          "name": "Tashigang"
        },
        {
          "name": "Thimphu"
        },
        {
          "name": "Tongsa"
        },
        {
          "name": "Wangdi Phodrang"
        },
        {
          "name": "Gasa"
        },
        {
          "name": "Trashi Yangste"
        }
      ]
    },
    {
      "name": "Botswana",
      "countryCode": "BW",
      "countryCodeAlpha3": "BWA",
      "phone": "267",
      "currency": "BWP",
      "stateProvinces": [
        {
          "name": "Ngwaketsi"
        },
        {
          "name": "South-East"
        },
        {
          "name": "North-East"
        },
        {
          "name": "North-West"
        },
        {
          "name": "Kweneng"
        },
        {
          "name": "Kgatleng"
        },
        {
          "name": "Kgalagadi"
        },
        {
          "name": "Ghanzi"
        },
        {
          "name": "Chobe"
        },
        {
          "name": "Central"
        },
        {
          "name": "City of Francistown"
        },
        {
          "name": "Gaborone"
        },
        {
          "name": "Jwaneng"
        },
        {
          "name": "Lobatse"
        },
        {
          "name": "Selibe Phikwe"
        },
        {
          "name": "Sowa Town"
        }
      ]
    },
    {
      "name": "Belarus",
      "countryCode": "BY",
      "countryCodeAlpha3": "BLR",
      "phone": "375",
      "currency": "BYN",
      "stateProvinces": [
        {
          "name": "Vitebsk"
        },
        {
          "name": "Mogilev"
        },
        {
          "name": "Minsk"
        },
        {
          "name": "Minsk City"
        },
        {
          "name": "Grodnenskaya"
        },
        {
          "name": "Gomel Oblast"
        },
        {
          "name": "Brest"
        }
      ]
    },
    {
      "name": "Belize",
      "countryCode": "BZ",
      "countryCodeAlpha3": "BLZ",
      "phone": "501",
      "currency": "BZD",
      "stateProvinces": [
        {
          "name": "Toledo"
        },
        {
          "name": "Southern District"
        },
        {
          "name": "Orange Walk"
        },
        {
          "name": "Corozal"
        },
        {
          "name": "Cayo"
        },
        {
          "name": "Belize"
        }
      ]
    },
    {
      "name": "Canada",
      "countryCode": "CA",
      "countryCodeAlpha3": "CAN",
      "phone": "1",
      "currency": "CAD",
      "stateProvinces": [
        {
          "name": "Alberta"
        },
        {
          "name": "British Columbia"
        },
        {
          "name": "Manitoba"
        },
        {
          "name": "New Brunswick"
        },
        {
          "name": "Northwest Territories"
        },
        {
          "name": "Nova Scotia"
        },
        {
          "name": "Nunavut"
        },
        {
          "name": "Ontario"
        },
        {
          "name": "Prince Edward Island"
        },
        {
          "name": "Quebec"
        },
        {
          "name": "Saskatchewan"
        },
        {
          "name": "Yukon"
        },
        {
          "name": "Newfoundland and Labrador"
        }
      ]
    },
    {
      "name": "Democratic Republic of the Congo",
      "countryCode": "CD",
      "countryCodeAlpha3": "COD",
      "phone": "243",
      "currency": "CDF",
      "stateProvinces": [
        {
          "name": "Tshuapa"
        },
        {
          "name": "Tshopo"
        },
        {
          "name": "Tanganyika"
        },
        {
          "name": "South Kivu"
        },
        {
          "name": "Sankuru"
        },
        {
          "name": "Nord Kivu"
        },
        {
          "name": "Mongala"
        },
        {
          "name": "Maniema"
        },
        {
          "name": "Kasai-Central"
        },
        {
          "name": "Kasaï-Oriental"
        },
        {
          "name": "Kasai"
        },
        {
          "name": "Ituri"
        },
        {
          "name": "Haut-Uele"
        },
        {
          "name": "Haut-Lomami"
        },
        {
          "name": "Équateur"
        },
        {
          "name": "Bas-Uele"
        },
        {
          "name": "Lualaba"
        },
        {
          "name": "Mai-Ndombe"
        },
        {
          "name": "Kwilu"
        },
        {
          "name": "Kwango"
        },
        {
          "name": "Kinshasa"
        },
        {
          "name": "Bas-Congo"
        },
        {
          "name": "Haut-Katanga"
        },
        {
          "name": "Lomami"
        },
        {
          "name": "Nord-Ubangi"
        },
        {
          "name": "Sud-Ubangi"
        }
      ]
    },
    {
      "name": "Central African Republic",
      "countryCode": "CF",
      "countryCodeAlpha3": "CAF",
      "phone": "236",
      "currency": "XAF",
      "stateProvinces": [
        {
          "name": "Vakaga"
        },
        {
          "name": "Ouaka"
        },
        {
          "name": "Mbomou"
        },
        {
          "name": "Haut-Mbomou"
        },
        {
          "name": "Haute-Kotto"
        },
        {
          "name": "Basse-Kotto"
        },
        {
          "name": "Bamingui-Bangoran"
        },
        {
          "name": "Sangha-Mbaéré"
        },
        {
          "name": "Ouham-Pendé"
        },
        {
          "name": "Ouham"
        },
        {
          "name": "Ombella-M'Poko"
        },
        {
          "name": "Nana-Mambéré"
        },
        {
          "name": "Lobaye"
        },
        {
          "name": "Kémo"
        },
        {
          "name": "Mambéré-Kadéï"
        },
        {
          "name": "Nana-Grébizi"
        },
        {
          "name": "Bangui"
        }
      ]
    },
    {
      "name": "Republic of the Congo",
      "countryCode": "CG",
      "countryCodeAlpha3": "COG",
      "phone": "242",
      "currency": "XAF",
      "stateProvinces": [
        {
          "name": "Sangha"
        },
        {
          "name": "Pool"
        },
        {
          "name": "Plateaux"
        },
        {
          "name": "Niari"
        },
        {
          "name": "Likouala"
        },
        {
          "name": "Lékoumou"
        },
        {
          "name": "Kouilou"
        },
        {
          "name": "Cuvette"
        },
        {
          "name": "Bouenza"
        },
        {
          "name": "Brazzaville"
        },
        {
          "name": "Cuvette-Ouest"
        },
        {
          "name": "Pointe-Noire"
        }
      ]
    },
    {
      "name": "Switzerland",
      "countryCode": "CH",
      "countryCodeAlpha3": "CHE",
      "phone": "41",
      "currency": "CHF",
      "stateProvinces": [
        {
          "name": "Zurich"
        },
        {
          "name": "Zug"
        },
        {
          "name": "Vaud"
        },
        {
          "name": "Valais"
        },
        {
          "name": "Uri"
        },
        {
          "name": "Ticino"
        },
        {
          "name": "Thurgau"
        },
        {
          "name": "Solothurn"
        },
        {
          "name": "Schwyz"
        },
        {
          "name": "Schaffhausen"
        },
        {
          "name": "Saint Gallen"
        },
        {
          "name": "Obwalden"
        },
        {
          "name": "Nidwalden"
        },
        {
          "name": "Neuchâtel"
        },
        {
          "name": "Lucerne"
        },
        {
          "name": "Jura"
        },
        {
          "name": "Grisons"
        },
        {
          "name": "Glarus"
        },
        {
          "name": "Geneva"
        },
        {
          "name": "Fribourg"
        },
        {
          "name": "Bern"
        },
        {
          "name": "Basel-City"
        },
        {
          "name": "Basel-Landschaft"
        },
        {
          "name": "Appenzell Ausserrhoden"
        },
        {
          "name": "Appenzell Innerrhoden"
        },
        {
          "name": "Aargau"
        }
      ]
    },
    {
      "name": "Ivory Coast",
      "countryCode": "CI",
      "countryCodeAlpha3": "CIV",
      "phone": "225",
      "currency": "XOF",
      "stateProvinces": [
        {
          "name": "Yamoussoukro"
        },
        {
          "name": "Bas-Sassandra"
        },
        {
          "name": "Comoé"
        },
        {
          "name": "Denguélé"
        },
        {
          "name": "Gôh-Djiboua"
        },
        {
          "name": "Lacs"
        },
        {
          "name": "Lagunes"
        },
        {
          "name": "Montagnes"
        },
        {
          "name": "Sassandra-Marahoué"
        },
        {
          "name": "Savanes"
        },
        {
          "name": "Vallée du Bandama"
        },
        {
          "name": "Woroba"
        },
        {
          "name": "Zanzan"
        },
        {
          "name": "Abidjan"
        }
      ]
    },
    {
      "name": "Cook Islands",
      "countryCode": "CK",
      "countryCodeAlpha3": "COK",
      "phone": "682",
      "currency": "NZD",
      "stateProvinces": [
        {
          "name": "Aitutaki"
        },
        {
          "name": "Atiu"
        },
        {
          "name": "Mangaia"
        },
        {
          "name": "Manihiki"
        },
        {
          "name": "Ma'uke"
        },
        {
          "name": "Mitiaro"
        },
        {
          "name": "Palmerston"
        },
        {
          "name": "Penrhyn"
        },
        {
          "name": "Pukapuka"
        },
        {
          "name": "Rakahanga"
        },
        {
          "name": "Rarotonga"
        }
      ]
    },
    {
      "name": "Chile",
      "countryCode": "CL",
      "countryCodeAlpha3": "CHL",
      "phone": "56",
      "currency": "CLP",
      "stateProvinces": [
        {
          "name": "Valparaíso"
        },
        {
          "name": "Tarapacá"
        },
        {
          "name": "Santiago Metropolitan"
        },
        {
          "name": "Maule Region"
        },
        {
          "name": "Los Lagos Region"
        },
        {
          "name": "O'Higgins Region"
        },
        {
          "name": "Coquimbo Region"
        },
        {
          "name": "Biobío"
        },
        {
          "name": "Atacama"
        },
        {
          "name": "Araucanía"
        },
        {
          "name": "Antofagasta"
        },
        {
          "name": "Aysén"
        },
        {
          "name": "Region of Magallanes"
        },
        {
          "name": "Arica y Parinacota"
        },
        {
          "name": "Los Ríos Region"
        },
        {
          "name": "Ñuble"
        }
      ]
    },
    {
      "name": "Cameroon",
      "countryCode": "CM",
      "countryCodeAlpha3": "CMR",
      "phone": "237",
      "currency": "XAF",
      "stateProvinces": [
        {
          "name": "South-West"
        },
        {
          "name": "South"
        },
        {
          "name": "West"
        },
        {
          "name": "North-West"
        },
        {
          "name": "North"
        },
        {
          "name": "Littoral"
        },
        {
          "name": "Far North"
        },
        {
          "name": "East"
        },
        {
          "name": "Centre"
        },
        {
          "name": "Adamaoua"
        }
      ]
    },
    {
      "name": "China",
      "countryCode": "CN",
      "countryCodeAlpha3": "CHN",
      "phone": "86",
      "currency": "CNY",
      "stateProvinces": [
        {
          "name": "Tibet"
        },
        {
          "name": "Qinghai"
        },
        {
          "name": "Xinjiang"
        },
        {
          "name": "Zhejiang"
        },
        {
          "name": "Yunnan"
        },
        {
          "name": "Tianjin"
        },
        {
          "name": "Sichuan"
        },
        {
          "name": "Shanxi"
        },
        {
          "name": "Shanghai"
        },
        {
          "name": "Shandong"
        },
        {
          "name": "Shaanxi"
        },
        {
          "name": "Ningxia Hui Autonomous Region"
        },
        {
          "name": "Jiangxi"
        },
        {
          "name": "Jiangsu"
        },
        {
          "name": "Hunan"
        },
        {
          "name": "Hubei"
        },
        {
          "name": "Henan"
        },
        {
          "name": "Hebei"
        },
        {
          "name": "Hainan"
        },
        {
          "name": "Guizhou"
        },
        {
          "name": "Guangxi"
        },
        {
          "name": "Guangdong"
        },
        {
          "name": "Gansu"
        },
        {
          "name": "Fujian"
        },
        {
          "name": "Chongqing"
        },
        {
          "name": "Anhui"
        },
        {
          "name": "Inner Mongolia"
        },
        {
          "name": "Liaoning"
        },
        {
          "name": "Jilin"
        },
        {
          "name": "Heilongjiang"
        },
        {
          "name": "Beijing"
        }
      ]
    },
    {
      "name": "Colombia",
      "countryCode": "CO",
      "countryCodeAlpha3": "COL",
      "phone": "57",
      "currency": "COP",
      "stateProvinces": [
        {
          "name": "Vichada"
        },
        {
          "name": "Vaupés"
        },
        {
          "name": "Valle del Cauca"
        },
        {
          "name": "Tolima"
        },
        {
          "name": "Sucre"
        },
        {
          "name": "Santander"
        },
        {
          "name": "San Andres y Providencia"
        },
        {
          "name": "Risaralda"
        },
        {
          "name": "Quindío"
        },
        {
          "name": "Putumayo"
        },
        {
          "name": "Norte de Santander"
        },
        {
          "name": "Nariño"
        },
        {
          "name": "Meta"
        },
        {
          "name": "Magdalena"
        },
        {
          "name": "La Guajira"
        },
        {
          "name": "Huila"
        },
        {
          "name": "Guaviare"
        },
        {
          "name": "Guainía"
        },
        {
          "name": "Cundinamarca"
        },
        {
          "name": "Córdoba"
        },
        {
          "name": "Chocó"
        },
        {
          "name": "Cesar"
        },
        {
          "name": "Cauca"
        },
        {
          "name": "Casanare"
        },
        {
          "name": "Caquetá"
        },
        {
          "name": "Caldas"
        },
        {
          "name": "Boyacá"
        },
        {
          "name": "Bolívar"
        },
        {
          "name": "Bogota D.C."
        },
        {
          "name": "Atlántico"
        },
        {
          "name": "Departamento de Arauca"
        },
        {
          "name": "Antioquia"
        },
        {
          "name": "Amazonas"
        }
      ]
    },
    {
      "name": "Costa Rica",
      "countryCode": "CR",
      "countryCodeAlpha3": "CRI",
      "phone": "506",
      "currency": "CRC",
      "stateProvinces": [
        {
          "name": "San José"
        },
        {
          "name": "Puntarenas"
        },
        {
          "name": "Limón"
        },
        {
          "name": "Heredia"
        },
        {
          "name": "Guanacaste"
        },
        {
          "name": "Cartago"
        },
        {
          "name": "Alajuela"
        }
      ]
    },
    {
      "name": "Cuba",
      "countryCode": "CU",
      "countryCodeAlpha3": "CUB",
      "phone": "53",
      "currency": "CUP",
      "stateProvinces": [
        {
          "name": "Villa Clara"
        },
        {
          "name": "Santiago de Cuba"
        },
        {
          "name": "Sancti Spíritus"
        },
        {
          "name": "Pinar del Río"
        },
        {
          "name": "Matanzas"
        },
        {
          "name": "Las Tunas"
        },
        {
          "name": "Isla de la Juventud"
        },
        {
          "name": "Holguín"
        },
        {
          "name": "Guantánamo"
        },
        {
          "name": "Granma"
        },
        {
          "name": "Havana"
        },
        {
          "name": "Cienfuegos"
        },
        {
          "name": "Ciego de Ávila"
        },
        {
          "name": "Camagüey"
        },
        {
          "name": "Artemisa"
        },
        {
          "name": "Mayabeque"
        }
      ]
    },
    {
      "name": "Cabo Verde",
      "countryCode": "CV",
      "countryCodeAlpha3": "CPV",
      "phone": "238",
      "currency": "CVE",
      "stateProvinces": [
        {
          "name": "Tarrafal"
        },
        {
          "name": "São Vicente"
        },
        {
          "name": "Santa Catarina"
        },
        {
          "name": "Sal"
        },
        {
          "name": "Ribeira Grande"
        },
        {
          "name": "Praia"
        },
        {
          "name": "Paul"
        },
        {
          "name": "Maio"
        },
        {
          "name": "Brava"
        },
        {
          "name": "Boa Vista"
        },
        {
          "name": "Mosteiros"
        },
        {
          "name": "Santa Cruz"
        },
        {
          "name": "São Domingos"
        },
        {
          "name": "São Filipe"
        },
        {
          "name": "São Miguel"
        },
        {
          "name": "Porto Novo"
        },
        {
          "name": "Ribeira Brava"
        },
        {
          "name": "Santa Catarina do Fogo"
        },
        {
          "name": "São Salvador do Mundo"
        },
        {
          "name": "Tarrafal de São Nicolau"
        },
        {
          "name": "São Lourenço dos Órgãos"
        },
        {
          "name": "Ribeira Grande de Santiago"
        }
      ]
    },
    {
      "name": "Cyprus",
      "countryCode": "CY",
      "countryCodeAlpha3": "CYP",
      "phone": "357",
      "currency": "EUR",
      "stateProvinces": [
        {
          "name": "Pafos"
        },
        {
          "name": "Nicosia"
        },
        {
          "name": "Limassol"
        },
        {
          "name": "Larnaka"
        },
        {
          "name": "Keryneia"
        },
        {
          "name": "Ammochostos"
        }
      ]
    },
    {
      "name": "Czechia",
      "countryCode": "CZ",
      "countryCodeAlpha3": "CZE",
      "phone": "420",
      "currency": "CZK",
      "stateProvinces": [
        {
          "name": "Hlavní město Praha"
        },
        {
          "name": "South Moravian"
        },
        {
          "name": "Jihočeský kraj"
        },
        {
          "name": "Vysočina"
        },
        {
          "name": "Karlovarský kraj"
        },
        {
          "name": "Královéhradecký kraj"
        },
        {
          "name": "Liberecký kraj"
        },
        {
          "name": "Olomoucký"
        },
        {
          "name": "Moravskoslezský"
        },
        {
          "name": "Pardubický"
        },
        {
          "name": "Plzeňský kraj"
        },
        {
          "name": "Central Bohemia"
        },
        {
          "name": "Ústecký kraj"
        },
        {
          "name": "Zlín"
        }
      ]
    },
    {
      "name": "Germany",
      "countryCode": "DE",
      "countryCodeAlpha3": "DEU",
      "phone": "49",
      "currency": "EUR",
      "stateProvinces": [
        {
          "name": "Thuringia"
        },
        {
          "name": "Schleswig-Holstein"
        },
        {
          "name": "Saxony-Anhalt"
        },
        {
          "name": "Saxony"
        },
        {
          "name": "Saarland"
        },
        {
          "name": "Rheinland-Pfalz"
        },
        {
          "name": "North Rhine-Westphalia"
        },
        {
          "name": "Lower Saxony"
        },
        {
          "name": "Mecklenburg-Vorpommern"
        },
        {
          "name": "Hesse"
        },
        {
          "name": "Hamburg"
        },
        {
          "name": "Bremen"
        },
        {
          "name": "Brandenburg"
        },
        {
          "name": "Berlin"
        },
        {
          "name": "Bavaria"
        },
        {
          "name": "Baden-Wurttemberg"
        }
      ]
    },
    {
      "name": "Djibouti",
      "countryCode": "DJ",
      "countryCodeAlpha3": "DJI",
      "phone": "253",
      "currency": "DJF",
      "stateProvinces": [
        {
          "name": "Tadjourah"
        },
        {
          "name": "Obock"
        },
        {
          "name": "Djibouti"
        },
        {
          "name": "Dikhil"
        },
        {
          "name": "Ali Sabieh"
        },
        {
          "name": "Arta"
        }
      ]
    },
    {
      "name": "Denmark",
      "countryCode": "DK",
      "countryCodeAlpha3": "DNK",
      "phone": "45",
      "currency": "DKK",
      "stateProvinces": [
        {
          "name": "Capital Region"
        },
        {
          "name": "Central Jutland"
        },
        {
          "name": "North Denmark"
        },
        {
          "name": "Zealand"
        },
        {
          "name": "South Denmark"
        }
      ]
    },
    {
      "name": "Dominica",
      "countryCode": "DM",
      "countryCodeAlpha3": "DMA",
      "phone": "+1-767",
      "currency": "XCD",
      "stateProvinces": [
        {
          "name": "Saint Peter"
        },
        {
          "name": "Saint Paul"
        },
        {
          "name": "Saint Patrick"
        },
        {
          "name": "Saint Mark"
        },
        {
          "name": "Saint Luke"
        },
        {
          "name": "Saint Joseph"
        },
        {
          "name": "Saint John"
        },
        {
          "name": "Saint George"
        },
        {
          "name": "Saint David"
        },
        {
          "name": "Saint Andrew"
        }
      ]
    },
    {
      "name": "Dominican Republic",
      "countryCode": "DO",
      "countryCodeAlpha3": "DOM",
      "phone": "+1-809 and 1-829",
      "currency": "DOP",
      "stateProvinces": [
        {
          "name": "Valverde"
        },
        {
          "name": "Santiago Rodríguez"
        },
        {
          "name": "Santiago"
        },
        {
          "name": "San Pedro de Macorís"
        },
        {
          "name": "San Juan"
        },
        {
          "name": "San Cristóbal"
        },
        {
          "name": "Sánchez Ramírez"
        },
        {
          "name": "Samaná"
        },
        {
          "name": "Hermanas Mirabal"
        },
        {
          "name": "Puerto Plata"
        },
        {
          "name": "Peravia"
        },
        {
          "name": "Pedernales"
        },
        {
          "name": "Nacional"
        },
        {
          "name": "Monte Plata"
        },
        {
          "name": "Monte Cristi"
        },
        {
          "name": "Monseñor Nouel"
        },
        {
          "name": "María Trinidad Sánchez"
        },
        {
          "name": "La Vega"
        },
        {
          "name": "La Romana"
        },
        {
          "name": "La Altagracia"
        },
        {
          "name": "Independencia"
        },
        {
          "name": "Hato Mayor"
        },
        {
          "name": "Espaillat"
        },
        {
          "name": "El Seíbo"
        },
        {
          "name": "Elías Piña"
        },
        {
          "name": "Duarte"
        },
        {
          "name": "Dajabón"
        },
        {
          "name": "Barahona"
        },
        {
          "name": "Baoruco"
        },
        {
          "name": "Azua"
        },
        {
          "name": "San José de Ocoa"
        },
        {
          "name": "Santo Domingo"
        }
      ]
    },
    {
      "name": "Algeria",
      "countryCode": "DZ",
      "countryCodeAlpha3": "DZA",
      "phone": "213",
      "currency": "DZD",
      "stateProvinces": [
        {
          "name": "Tlemcen"
        },
        {
          "name": "Tizi Ouzou"
        },
        {
          "name": "Tissemsilt"
        },
        {
          "name": "Tipaza"
        },
        {
          "name": "Tindouf"
        },
        {
          "name": "Tiaret"
        },
        {
          "name": "Tébessa"
        },
        {
          "name": "Tamanrasset"
        },
        {
          "name": "Souk Ahras"
        },
        {
          "name": "Skikda"
        },
        {
          "name": "Sidi Bel Abbès"
        },
        {
          "name": "Sétif"
        },
        {
          "name": "Saida"
        },
        {
          "name": "Relizane"
        },
        {
          "name": "Oum el Bouaghi"
        },
        {
          "name": "Ouargla"
        },
        {
          "name": "Oran"
        },
        {
          "name": "Naama"
        },
        {
          "name": "M'Sila"
        },
        {
          "name": "Mostaganem"
        },
        {
          "name": "Mila"
        },
        {
          "name": "Medea"
        },
        {
          "name": "Mascara"
        },
        {
          "name": "Laghouat"
        },
        {
          "name": "Khenchela"
        },
        {
          "name": "Jijel"
        },
        {
          "name": "Illizi"
        },
        {
          "name": "Guelma"
        },
        {
          "name": "Ghardaia"
        },
        {
          "name": "El Tarf"
        },
        {
          "name": "El Oued"
        },
        {
          "name": "El Bayadh"
        },
        {
          "name": "Djelfa"
        },
        {
          "name": "Constantine"
        },
        {
          "name": "Chlef"
        },
        {
          "name": "Boumerdes"
        },
        {
          "name": "Bouira"
        },
        {
          "name": "Bordj Bou Arréridj"
        },
        {
          "name": "Blida"
        },
        {
          "name": "Biskra"
        },
        {
          "name": "Béjaïa"
        },
        {
          "name": "Béchar"
        },
        {
          "name": "Batna"
        },
        {
          "name": "Annaba"
        },
        {
          "name": "Algiers"
        },
        {
          "name": "Aïn Témouchent"
        },
        {
          "name": "Aïn Defla"
        },
        {
          "name": "Adrar"
        },
        {
          "name": "Bordj Badji Mokhtar"
        },
        {
          "name": "Timimoun"
        },
        {
          "name": "Beni Abbes"
        },
        {
          "name": "In Guezzam"
        },
        {
          "name": "In Salah"
        },
        {
          "name": "Djanet"
        },
        {
          "name": "El Menia"
        },
        {
          "name": "Touggourt"
        },
        {
          "name": "El Mghair"
        },
        {
          "name": "Ouled Djellal"
        }
      ]
    },
    {
      "name": "Ecuador",
      "countryCode": "EC",
      "countryCodeAlpha3": "ECU",
      "phone": "593",
      "currency": "USD",
      "stateProvinces": [
        {
          "name": "Zamora-Chinchipe"
        },
        {
          "name": "Tungurahua"
        },
        {
          "name": "Pichincha"
        },
        {
          "name": "Pastaza"
        },
        {
          "name": "Napo"
        },
        {
          "name": "Morona-Santiago"
        },
        {
          "name": "Manabí"
        },
        {
          "name": "Los Ríos"
        },
        {
          "name": "Loja"
        },
        {
          "name": "Imbabura"
        },
        {
          "name": "Guayas"
        },
        {
          "name": "Galápagos"
        },
        {
          "name": "Esmeraldas"
        },
        {
          "name": "El Oro"
        },
        {
          "name": "Cotopaxi"
        },
        {
          "name": "Chimborazo"
        },
        {
          "name": "Carchi"
        },
        {
          "name": "Cañar"
        },
        {
          "name": "Bolívar"
        },
        {
          "name": "Azuay"
        },
        {
          "name": "Sucumbios"
        },
        {
          "name": "Orellana"
        },
        {
          "name": "Santo Domingo de los Tsáchilas"
        },
        {
          "name": "Santa Elena"
        }
      ]
    },
    {
      "name": "Estonia",
      "countryCode": "EE",
      "countryCodeAlpha3": "EST",
      "phone": "372",
      "currency": "EUR",
      "stateProvinces": [
        {
          "name": "Võrumaa"
        },
        {
          "name": "Viljandimaa"
        },
        {
          "name": "Valgamaa"
        },
        {
          "name": "Tartu"
        },
        {
          "name": "Saare"
        },
        {
          "name": "Raplamaa"
        },
        {
          "name": "Põlvamaa"
        },
        {
          "name": "Pärnumaa"
        },
        {
          "name": "Lääne-Virumaa"
        },
        {
          "name": "Lääne"
        },
        {
          "name": "Jõgevamaa"
        },
        {
          "name": "Järvamaa"
        },
        {
          "name": "Ida-Virumaa"
        },
        {
          "name": "Hiiumaa"
        },
        {
          "name": "Harjumaa"
        }
      ]
    },
    {
      "name": "Egypt",
      "countryCode": "EG",
      "countryCodeAlpha3": "EGY",
      "phone": "20",
      "currency": "EGP",
      "stateProvinces": [
        {
          "name": "Sohag"
        },
        {
          "name": "North Sinai"
        },
        {
          "name": "Qena"
        },
        {
          "name": "Matruh"
        },
        {
          "name": "Kafr el-Sheikh"
        },
        {
          "name": "South Sinai"
        },
        {
          "name": "Damietta"
        },
        {
          "name": "Port Said"
        },
        {
          "name": "Beni Suweif"
        },
        {
          "name": "Asyut"
        },
        {
          "name": "Aswan"
        },
        {
          "name": "Suez"
        },
        {
          "name": "Sharqia"
        },
        {
          "name": "New Valley"
        },
        {
          "name": "Qalyubia"
        },
        {
          "name": "Cairo"
        },
        {
          "name": "Minya"
        },
        {
          "name": "Monufia"
        },
        {
          "name": "Giza"
        },
        {
          "name": "Ismailia"
        },
        {
          "name": "Alexandria"
        },
        {
          "name": "Gharbia"
        },
        {
          "name": "Faiyum"
        },
        {
          "name": "Beheira"
        },
        {
          "name": "Red Sea"
        },
        {
          "name": "Dakahlia"
        },
        {
          "name": "Luxor"
        }
      ]
    },
    {
      "name": "Eritrea",
      "countryCode": "ER",
      "countryCodeAlpha3": "ERI",
      "phone": "291",
      "currency": "ERN",
      "stateProvinces": [
        {
          "name": "Anseba"
        },
        {
          "name": "Debub"
        },
        {
          "name": "Southern Red Sea"
        },
        {
          "name": "Gash-Barka"
        },
        {
          "name": "Maekel"
        },
        {
          "name": "Northern Red Sea"
        }
      ]
    },
    {
      "name": "Spain",
      "countryCode": "ES",
      "countryCodeAlpha3": "ESP",
      "phone": "34",
      "currency": "EUR",
      "stateProvinces": [
        {
          "name": "Murcia"
        },
        {
          "name": "Ceuta"
        },
        {
          "name": "Balearic Islands"
        },
        {
          "name": "Andalusia"
        },
        {
          "name": "Canary Islands"
        },
        {
          "name": "Castille-La Mancha"
        },
        {
          "name": "Extremadura"
        },
        {
          "name": "Valencia"
        },
        {
          "name": "Asturias"
        },
        {
          "name": "Navarre"
        },
        {
          "name": "Madrid"
        },
        {
          "name": "La Rioja"
        },
        {
          "name": "Cantabria"
        },
        {
          "name": "Aragon"
        },
        {
          "name": "Castille and León"
        },
        {
          "name": "Catalonia"
        },
        {
          "name": "Galicia"
        },
        {
          "name": "Basque Country"
        },
        {
          "name": "Melilla"
        }
      ]
    },
    {
      "name": "Ethiopia",
      "countryCode": "ET",
      "countryCodeAlpha3": "ETH",
      "phone": "251",
      "currency": "ETB",
      "stateProvinces": [
        {
          "name": "Addis Ababa"
        },
        {
          "name": "Āfar"
        },
        {
          "name": "Amhara"
        },
        {
          "name": "Bīnshangul Gumuz"
        },
        {
          "name": "Dire Dawa"
        },
        {
          "name": "Gambela"
        },
        {
          "name": "Harari"
        },
        {
          "name": "Oromiya"
        },
        {
          "name": "Somali"
        },
        {
          "name": "Tigray"
        },
        {
          "name": "SNNPR"
        }
      ]
    },
    {
      "name": "Finland",
      "countryCode": "FI",
      "countryCodeAlpha3": "FIN",
      "phone": "358",
      "currency": "EUR",
      "stateProvinces": [
        {
          "name": "Lapland"
        },
        {
          "name": "Kainuu"
        },
        {
          "name": "North Ostrobothnia"
        },
        {
          "name": "Central Ostrobothnia"
        },
        {
          "name": "Ostrobothnia"
        },
        {
          "name": "South Ostrobothnia"
        },
        {
          "name": "Central Finland"
        },
        {
          "name": "North Karelia"
        },
        {
          "name": "North Savo"
        },
        {
          "name": "South Savo"
        },
        {
          "name": "South Karelia"
        },
        {
          "name": "Kymenlaakso"
        },
        {
          "name": "Pirkanmaa"
        },
        {
          "name": "Kanta-Häme"
        },
        {
          "name": "Southwest Finland"
        },
        {
          "name": "Uusimaa"
        },
        {
          "name": "Paijat-Hame"
        },
        {
          "name": "Satakunta"
        }
      ]
    },
    {
      "name": "Fiji",
      "countryCode": "FJ",
      "countryCodeAlpha3": "FJI",
      "phone": "679",
      "currency": "FJD",
      "stateProvinces": [
        {
          "name": "Western"
        },
        {
          "name": "Northern"
        },
        {
          "name": "Central"
        },
        {
          "name": "Eastern"
        },
        {
          "name": "Rotuma"
        }
      ]
    },
    {
      "name": "Micronesia",
      "countryCode": "FM",
      "countryCodeAlpha3": "FSM",
      "phone": "691",
      "currency": "USD",
      "stateProvinces": [
        {
          "name": "Yap"
        },
        {
          "name": "Pohnpei"
        },
        {
          "name": "Kosrae"
        },
        {
          "name": "Chuuk"
        }
      ]
    },
    {
      "name": "Faroe Islands",
      "countryCode": "FO",
      "countryCodeAlpha3": "FRO",
      "phone": "298",
      "currency": "DKK",
      "stateProvinces": [
        {
          "name": "Vágar"
        },
        {
          "name": "Suðuroy"
        },
        {
          "name": "Streymoy"
        },
        {
          "name": "Sandoy"
        },
        {
          "name": "Norðoyar"
        },
        {
          "name": "Eysturoy"
        }
      ]
    },
    {
      "name": "France",
      "countryCode": "FR",
      "countryCodeAlpha3": "FRA",
      "phone": "33",
      "currency": "EUR",
      "stateProvinces": [
        {
          "name": "Provence-Alpes-Côte d'Azur"
        },
        {
          "name": "Pays de la Loire"
        },
        {
          "name": "Île-de-France"
        },
        {
          "name": "Corsica"
        },
        {
          "name": "Centre"
        },
        {
          "name": "Brittany"
        },
        {
          "name": "Bourgogne-Franche-Comté"
        },
        {
          "name": "Nouvelle-Aquitaine"
        },
        {
          "name": "Normandy"
        },
        {
          "name": "Grand Est"
        },
        {
          "name": "Occitanie"
        },
        {
          "name": "Hauts-de-France"
        },
        {
          "name": "Auvergne-Rhône-Alpes"
        }
      ]
    },
    {
      "name": "Gabon",
      "countryCode": "GA",
      "countryCodeAlpha3": "GAB",
      "phone": "241",
      "currency": "XAF",
      "stateProvinces": [
        {
          "name": "Woleu-Ntem"
        },
        {
          "name": "Ogooué-Maritime"
        },
        {
          "name": "Ogooué-Lolo"
        },
        {
          "name": "Ogooué-Ivindo"
        },
        {
          "name": "Nyanga"
        },
        {
          "name": "Ngouni"
        },
        {
          "name": "Moyen-Ogooué"
        },
        {
          "name": "Haut-Ogooué"
        },
        {
          "name": "Estuaire"
        }
      ]
    },
    {
      "name": "United Kingdom",
      "countryCode": "GB",
      "countryCodeAlpha3": "GBR",
      "phone": "44",
      "currency": "GBP",
      "stateProvinces": [
        {
          "name": "Wales"
        },
        {
          "name": "Scotland"
        },
        {
          "name": "Northern Ireland"
        },
        {
          "name": "England"
        }
      ]
    },
    {
      "name": "Grenada",
      "countryCode": "GD",
      "countryCodeAlpha3": "GRD",
      "phone": "+1-473",
      "currency": "XCD",
      "stateProvinces": [
        {
          "name": "Saint Patrick"
        },
        {
          "name": "Saint Mark"
        },
        {
          "name": "Saint John"
        },
        {
          "name": "Saint George"
        },
        {
          "name": "Saint David"
        },
        {
          "name": "Saint Andrew"
        },
        {
          "name": "Carriacou and Petite Martinique"
        }
      ]
    },
    {
      "name": "Georgia",
      "countryCode": "GE",
      "countryCodeAlpha3": "GEO",
      "phone": "995",
      "currency": "GEL",
      "stateProvinces": [
        {
          "name": "T'bilisi"
        },
        {
          "name": "Achara"
        },
        {
          "name": "Kvemo Kartli"
        },
        {
          "name": "Kakheti"
        },
        {
          "name": "Guria"
        },
        {
          "name": "Imereti"
        },
        {
          "name": "Shida Kartli"
        },
        {
          "name": "Mtskheta-Mtianeti"
        },
        {
          "name": "Racha-Lechkhumi and Kvemo Svaneti"
        },
        {
          "name": "Samegrelo and Zemo Svaneti"
        },
        {
          "name": "Samtskhe-Javakheti"
        },
        {
          "name": "Abkhazia"
        }
      ]
    },
    {
      "name": "French Guiana",
      "countryCode": "GF",
      "countryCodeAlpha3": "GUF",
      "phone": "594",
      "currency": "EUR",
      "stateProvinces": [
        {
          "name": "Guyane"
        }
      ]
    },
    {
      "name": "Guernsey",
      "countryCode": "GG",
      "countryCodeAlpha3": "GGY",
      "phone": "+44-1481",
      "currency": "GBP",
      "stateProvinces": [
        {
          "name": "St Pierre du Bois"
        },
        {
          "name": "Torteval"
        },
        {
          "name": "Saint Saviour"
        },
        {
          "name": "Forest"
        },
        {
          "name": "St Martin"
        },
        {
          "name": "Saint Andrew"
        },
        {
          "name": "St Peter Port"
        },
        {
          "name": "Castel"
        },
        {
          "name": "Vale"
        },
        {
          "name": "St Sampson"
        },
        {
          "name": "Alderney"
        }
      ]
    },
    {
      "name": "Ghana",
      "countryCode": "GH",
      "countryCodeAlpha3": "GHA",
      "phone": "233",
      "currency": "GHS",
      "stateProvinces": [
        {
          "name": "Western"
        },
        {
          "name": "Volta"
        },
        {
          "name": "Upper West"
        },
        {
          "name": "Upper East"
        },
        {
          "name": "Northern"
        },
        {
          "name": "Greater Accra"
        },
        {
          "name": "Eastern"
        },
        {
          "name": "Central"
        },
        {
          "name": "Ashanti"
        },
        {
          "name": "Bono"
        },
        {
          "name": "Oti"
        },
        {
          "name": "North East"
        },
        {
          "name": "Ahafo"
        },
        {
          "name": "Bono East"
        },
        {
          "name": "Savannah"
        },
        {
          "name": "Western North"
        }
      ]
    },
    {
      "name": "Greenland",
      "countryCode": "GL",
      "countryCodeAlpha3": "GRL",
      "phone": "299",
      "currency": "DKK",
      "stateProvinces": [
        {
          "name": "Kujalleq"
        },
        {
          "name": "Qeqqata"
        },
        {
          "name": "Sermersooq"
        },
        {
          "name": "Qeqertalik"
        },
        {
          "name": "Avannaata"
        }
      ]
    },
    {
      "name": "Gambia",
      "countryCode": "GM",
      "countryCodeAlpha3": "GMB",
      "phone": "220",
      "currency": "GMD",
      "stateProvinces": [
        {
          "name": "Western"
        },
        {
          "name": "Upper River"
        },
        {
          "name": "North Bank"
        },
        {
          "name": "Central River"
        },
        {
          "name": "Lower River"
        },
        {
          "name": "Banjul"
        }
      ]
    },
    {
      "name": "Guinea",
      "countryCode": "GN",
      "countryCodeAlpha3": "GIN",
      "phone": "224",
      "currency": "GNF",
      "stateProvinces": [
        {
          "name": "Conakry"
        },
        {
          "name": "Boke"
        },
        {
          "name": "Faranah"
        },
        {
          "name": "Kankan"
        },
        {
          "name": "Kindia"
        },
        {
          "name": "Labe"
        },
        {
          "name": "Mamou"
        },
        {
          "name": "Nzerekore"
        }
      ]
    },
    {
      "name": "Guadeloupe",
      "countryCode": "GP",
      "countryCodeAlpha3": "GLP",
      "phone": "590",
      "currency": "EUR",
      "stateProvinces": [
        {
          "name": "Guadeloupe"
        }
      ]
    },
    {
      "name": "Equatorial Guinea",
      "countryCode": "GQ",
      "countryCodeAlpha3": "GNQ",
      "phone": "240",
      "currency": "XAF",
      "stateProvinces": [
        {
          "name": "Annobon"
        },
        {
          "name": "Bioko Norte"
        },
        {
          "name": "Bioko Sur"
        },
        {
          "name": "Centro Sur"
        },
        {
          "name": "Kié-Ntem"
        },
        {
          "name": "Litoral"
        },
        {
          "name": "Wele-Nzas"
        },
        {
          "name": "Djibloho"
        }
      ]
    },
    {
      "name": "Greece",
      "countryCode": "GR",
      "countryCodeAlpha3": "GRC",
      "phone": "30",
      "currency": "EUR",
      "stateProvinces": [
        {
          "name": "Mount Athos"
        },
        {
          "name": "Attica"
        },
        {
          "name": "Central Greece"
        },
        {
          "name": "Central Macedonia"
        },
        {
          "name": "Crete"
        },
        {
          "name": "East Macedonia and Thrace"
        },
        {
          "name": "Epirus"
        },
        {
          "name": "Ionian Islands"
        },
        {
          "name": "North Aegean"
        },
        {
          "name": "Peloponnese"
        },
        {
          "name": "South Aegean"
        },
        {
          "name": "Thessaly"
        },
        {
          "name": "West Greece"
        },
        {
          "name": "West Macedonia"
        }
      ]
    },
    {
      "name": "Guatemala",
      "countryCode": "GT",
      "countryCodeAlpha3": "GTM",
      "phone": "502",
      "currency": "GTQ",
      "stateProvinces": [
        {
          "name": "Zacapa Department"
        },
        {
          "name": "Totonicapán Department"
        },
        {
          "name": "Suchitepeque"
        },
        {
          "name": "Sololá Department"
        },
        {
          "name": "Santa Rosa Department"
        },
        {
          "name": "San Marcos Department"
        },
        {
          "name": "Sacatepéquez Department"
        },
        {
          "name": "Retalhuleu"
        },
        {
          "name": "Quiché Department"
        },
        {
          "name": "Quetzaltenango Department"
        },
        {
          "name": "Petén Department"
        },
        {
          "name": "Jutiapa"
        },
        {
          "name": "Jalapa"
        },
        {
          "name": "Izabal Department"
        },
        {
          "name": "Huehuetenango"
        },
        {
          "name": "Guatemala Department"
        },
        {
          "name": "Escuintla"
        },
        {
          "name": "El Progreso Department"
        },
        {
          "name": "Chiquimula Department"
        },
        {
          "name": "Chimaltenango Department"
        },
        {
          "name": "Zacapa Department"
        },
        {
          "name": "Alta Verapaz Department"
        }
      ]
    },
    {
      "name": "Guam",
      "countryCode": "GU",
      "countryCodeAlpha3": "GUM",
      "phone": "+1-671",
      "currency": "USD",
      "stateProvinces": [
        {
          "name": "Piti"
        },
        {
          "name": "Santa Rita"
        },
        {
          "name": "Sinajana"
        },
        {
          "name": "Talofofo"
        },
        {
          "name": "Tamuning"
        },
        {
          "name": "Umatac"
        },
        {
          "name": "Yigo"
        },
        {
          "name": "Yona"
        },
        {
          "name": "Merizo"
        },
        {
          "name": "Mangilao"
        },
        {
          "name": "Agana Heights"
        },
        {
          "name": "Chalan Pago-Ordot"
        },
        {
          "name": "Asan"
        },
        {
          "name": "Agat"
        },
        {
          "name": "Dededo"
        },
        {
          "name": "Barrigada"
        },
        {
          "name": "Hagatna"
        },
        {
          "name": "Inarajan"
        },
        {
          "name": "Mongmong-Toto-Maite"
        }
      ]
    },
    {
      "name": "Guinea-Bissau",
      "countryCode": "GW",
      "countryCodeAlpha3": "GNB",
      "phone": "245",
      "currency": "XOF",
      "stateProvinces": [
        {
          "name": "Tombali"
        },
        {
          "name": "Quinara"
        },
        {
          "name": "Oio"
        },
        {
          "name": "Gabú"
        },
        {
          "name": "Cacheu"
        },
        {
          "name": "Bolama"
        },
        {
          "name": "Bissau"
        },
        {
          "name": "Biombo"
        },
        {
          "name": "Bafatá"
        }
      ]
    },
    {
      "name": "Guyana",
      "countryCode": "GY",
      "countryCodeAlpha3": "GUY",
      "phone": "592",
      "currency": "GYD",
      "stateProvinces": [
        {
          "name": "Upper Takutu-Upper Essequibo"
        },
        {
          "name": "Upper Demerara-Berbice"
        },
        {
          "name": "Potaro-Siparuni"
        },
        {
          "name": "Pomeroon-Supenaam"
        },
        {
          "name": "Mahaica-Berbice"
        },
        {
          "name": "Essequibo Islands-West Demerara"
        },
        {
          "name": "East Berbice-Corentyne"
        },
        {
          "name": "Demerara-Mahaica"
        },
        {
          "name": "Cuyuni-Mazaruni"
        },
        {
          "name": "Barima-Waini"
        }
      ]
    },
    {
      "name": "Hong Kong",
      "countryCode": "HK",
      "countryCodeAlpha3": "HKG",
      "phone": "852",
      "currency": "HKD",
      "stateProvinces": [
        {
          "name": "Yuen Long"
        },
        {
          "name": "Tsuen Wan"
        },
        {
          "name": "Tai Po"
        },
        {
          "name": "Sai Kung"
        },
        {
          "name": "Islands"
        },
        {
          "name": "Central and Western"
        },
        {
          "name": "Wan Chai"
        },
        {
          "name": "Eastern"
        },
        {
          "name": "Southern"
        },
        {
          "name": "Yau Tsim Mong"
        },
        {
          "name": "Sham Shui Po"
        },
        {
          "name": "Kowloon City"
        },
        {
          "name": "Wong Tai Sin"
        },
        {
          "name": "Kwun Tong"
        },
        {
          "name": "Kwai Tsing"
        },
        {
          "name": "Tuen Mun"
        },
        {
          "name": "North"
        },
        {
          "name": "Sha Tin"
        }
      ]
    },
    {
      "name": "Honduras",
      "countryCode": "HN",
      "countryCodeAlpha3": "HND",
      "phone": "504",
      "currency": "HNL",
      "stateProvinces": [
        {
          "name": "Yoro"
        },
        {
          "name": "Valle"
        },
        {
          "name": "Santa Bárbara"
        },
        {
          "name": "Olancho"
        },
        {
          "name": "Ocotepeque"
        },
        {
          "name": "Lempira"
        },
        {
          "name": "La Paz"
        },
        {
          "name": "Bay Islands"
        },
        {
          "name": "Intibucá"
        },
        {
          "name": "Gracias a Dios"
        },
        {
          "name": "Francisco Morazán"
        },
        {
          "name": "El Paraíso"
        },
        {
          "name": "Cortés"
        },
        {
          "name": "Copán"
        },
        {
          "name": "Comayagua"
        },
        {
          "name": "Colón"
        },
        {
          "name": "Choluteca"
        },
        {
          "name": "Atlántida"
        }
      ]
    },
    {
      "name": "Croatia",
      "countryCode": "HR",
      "countryCodeAlpha3": "HRV",
      "phone": "385",
      "currency": "HRK",
      "stateProvinces": [
        {
          "name": "Bjelovarsko-Bilogorska"
        },
        {
          "name": "Slavonski Brod-Posavina"
        },
        {
          "name": "Dubrovačko-Neretvanska"
        },
        {
          "name": "Istria"
        },
        {
          "name": "Karlovačka"
        },
        {
          "name": "Koprivničko-Križevačka"
        },
        {
          "name": "Krapinsko-Zagorska"
        },
        {
          "name": "Ličko-Senjska"
        },
        {
          "name": "Međimurska"
        },
        {
          "name": "Osječko-Baranjska"
        },
        {
          "name": "Požeško-Slavonska"
        },
        {
          "name": "Primorsko-Goranska"
        },
        {
          "name": "Šibensko-Kniniska"
        },
        {
          "name": "Sisačko-Moslavačka"
        },
        {
          "name": "Split-Dalmatia"
        },
        {
          "name": "Varaždinska"
        },
        {
          "name": "Vukovar-Sirmium"
        },
        {
          "name": "Zadarska"
        },
        {
          "name": "Zagrebačka"
        },
        {
          "name": "City of Zagreb"
        },
        {
          "name": "Virovitičk-Podravska"
        }
      ]
    },
    {
      "name": "Haiti",
      "countryCode": "HT",
      "countryCodeAlpha3": "HTI",
      "phone": "509",
      "currency": "HTG",
      "stateProvinces": [
        {
          "name": "Sud-Est"
        },
        {
          "name": "Sud"
        },
        {
          "name": "Ouest"
        },
        {
          "name": "Nord-Ouest"
        },
        {
          "name": "Nord-Est"
        },
        {
          "name": "Nord"
        },
        {
          "name": "GrandʼAnse"
        },
        {
          "name": "Centre"
        },
        {
          "name": "Artibonite"
        },
        {
          "name": "Nippes"
        }
      ]
    },
    {
      "name": "Hungary",
      "countryCode": "HU",
      "countryCodeAlpha3": "HUN",
      "phone": "36",
      "currency": "HUF",
      "stateProvinces": [
        {
          "name": "Szabolcs-Szatmár-Bereg"
        },
        {
          "name": "Jász-Nagykun-Szolnok"
        },
        {
          "name": "Heves"
        },
        {
          "name": "Hajdú-Bihar"
        },
        {
          "name": "Csongrád"
        },
        {
          "name": "Borsod-Abaúj-Zemplén"
        },
        {
          "name": "Bekes County"
        },
        {
          "name": "Zala"
        },
        {
          "name": "Veszprém"
        },
        {
          "name": "Vas"
        },
        {
          "name": "Tolna"
        },
        {
          "name": "Somogy"
        },
        {
          "name": "Pest"
        },
        {
          "name": "Nógrád"
        },
        {
          "name": "Komárom-Esztergom"
        },
        {
          "name": "Győr-Moson-Sopron"
        },
        {
          "name": "Fejér"
        },
        {
          "name": "Budapest"
        },
        {
          "name": "Baranya"
        },
        {
          "name": "Bács-Kiskun"
        }
      ]
    },
    {
      "name": "Indonesia",
      "countryCode": "ID",
      "countryCodeAlpha3": "IDN",
      "phone": "62",
      "currency": "IDR",
      "stateProvinces": [
        {
          "name": "North Sumatra"
        },
        {
          "name": "Aceh"
        },
        {
          "name": "Yogyakarta"
        },
        {
          "name": "South Sumatra"
        },
        {
          "name": "West Sumatra"
        },
        {
          "name": "North Sulawesi"
        },
        {
          "name": "Southeast Sulawesi"
        },
        {
          "name": "Central Sulawesi"
        },
        {
          "name": "South Sulawesi"
        },
        {
          "name": "Riau"
        },
        {
          "name": "East Nusa Tenggara"
        },
        {
          "name": "West Nusa Tenggara"
        },
        {
          "name": "Maluku"
        },
        {
          "name": "Lampung"
        },
        {
          "name": "East Kalimantan"
        },
        {
          "name": "Central Kalimantan"
        },
        {
          "name": "South Kalimantan"
        },
        {
          "name": "West Kalimantan"
        },
        {
          "name": "East Java"
        },
        {
          "name": "Central Java"
        },
        {
          "name": "West Java"
        },
        {
          "name": "Jambi"
        },
        {
          "name": "Jakarta"
        },
        {
          "name": "Papua"
        },
        {
          "name": "Bengkulu"
        },
        {
          "name": "Bali"
        },
        {
          "name": "Banten"
        },
        {
          "name": "Gorontalo"
        },
        {
          "name": "Bangka–Belitung Islands"
        },
        {
          "name": "North Maluku"
        },
        {
          "name": "West Papua"
        },
        {
          "name": "West Sulawesi"
        },
        {
          "name": "Riau Islands"
        },
        {
          "name": "North Kalimantan"
        },
        {
          "name": "Southwest Papua"
        },
        {
          "name": "Central Papua"
        },
        {
          "name": "Highland Papua"
        },
        {
          "name": "South Papua"
        }
      ]
    },
    {
      "name": "Ireland",
      "countryCode": "IE",
      "countryCodeAlpha3": "IRL",
      "phone": "353",
      "currency": "EUR",
      "stateProvinces": [
        {
          "name": "Connacht"
        },
        {
          "name": "Leinster"
        },
        {
          "name": "Munster"
        },
        {
          "name": "Ulster"
        }
      ]
    },
    {
      "name": "Israel",
      "countryCode": "IL",
      "countryCodeAlpha3": "ISR",
      "phone": "972",
      "currency": "ILS",
      "stateProvinces": [
        {
          "name": "Jerusalem"
        },
        {
          "name": "Tel Aviv"
        },
        {
          "name": "Haifa"
        },
        {
          "name": "Northern District"
        },
        {
          "name": "Central District"
        },
        {
          "name": "Southern District"
        },
        {
          "name": "Judea and Samaria Area"
        }
      ]
    },
    {
      "name": "Isle of Man",
      "countryCode": "IM",
      "countryCodeAlpha3": "IMN",
      "phone": "+44-1624",
      "currency": "GBP",
      "stateProvinces": [
        {
          "name": "Andreas"
        },
        {
          "name": "Arbory"
        },
        {
          "name": "Ballaugh"
        },
        {
          "name": "Braddan"
        },
        {
          "name": "Bride"
        },
        {
          "name": "Castletown"
        },
        {
          "name": "Douglas"
        },
        {
          "name": "German"
        },
        {
          "name": "Jurby"
        },
        {
          "name": "Laxey"
        },
        {
          "name": "Lezayre"
        },
        {
          "name": "Lonan"
        },
        {
          "name": "Malew"
        },
        {
          "name": "Marown"
        },
        {
          "name": "Maughold"
        },
        {
          "name": "Michael"
        },
        {
          "name": "Onchan"
        },
        {
          "name": "Patrick"
        },
        {
          "name": "Peel"
        },
        {
          "name": "Port Erin"
        },
        {
          "name": "Port St Mary"
        },
        {
          "name": "Ramsey"
        },
        {
          "name": "Rushen"
        },
        {
          "name": "Santon"
        }
      ]
    },
    {
      "name": "India",
      "countryCode": "IN",
      "countryCodeAlpha3": "IND",
      "phone": "91",
      "currency": "INR",
      "stateProvinces": [
        {
          "name": "West Bengal"
        },
        {
          "name": "Uttar Pradesh"
        },
        {
          "name": "Tripura"
        },
        {
          "name": "Telangana"
        },
        {
          "name": "Tamil Nadu"
        },
        {
          "name": "Sikkim"
        },
        {
          "name": "Rajasthan"
        },
        {
          "name": "Punjab"
        },
        {
          "name": "Puducherry"
        },
        {
          "name": "Odisha"
        },
        {
          "name": "Nagaland"
        },
        {
          "name": "Mizoram"
        },
        {
          "name": "Meghalaya"
        },
        {
          "name": "Manipur"
        },
        {
          "name": "Maharashtra"
        },
        {
          "name": "Madhya Pradesh"
        },
        {
          "name": "Laccadives"
        },
        {
          "name": "Kerala"
        },
        {
          "name": "Karnataka"
        },
        {
          "name": "Jammu and Kashmir"
        },
        {
          "name": "Himachal Pradesh"
        },
        {
          "name": "Haryana"
        },
        {
          "name": "Gujarat"
        },
        {
          "name": "Goa"
        },
        {
          "name": "Delhi"
        },
        {
          "name": "Chandigarh"
        },
        {
          "name": "Bihar"
        },
        {
          "name": "Assam"
        },
        {
          "name": "Arunachal Pradesh"
        },
        {
          "name": "Andhra Pradesh"
        },
        {
          "name": "Andaman and Nicobar"
        },
        {
          "name": "Chhattisgarh"
        },
        {
          "name": "Jharkhand"
        },
        {
          "name": "Uttarakhand"
        },
        {
          "name": "Ladakh"
        },
        {
          "name": "Dadra and Nagar Haveli and Daman and Diu"
        }
      ]
    },
    {
      "name": "Iraq",
      "countryCode": "IQ",
      "countryCodeAlpha3": "IRQ",
      "phone": "964",
      "currency": "IQD",
      "stateProvinces": [
        {
          "name": "Basra"
        },
        {
          "name": "Wāsiţ"
        },
        {
          "name": "Salah ad Din"
        },
        {
          "name": "Nineveh"
        },
        {
          "name": "Maysan"
        },
        {
          "name": "Karbalāʼ"
        },
        {
          "name": "Arbīl"
        },
        {
          "name": "Diyālá"
        },
        {
          "name": "Dhi Qar"
        },
        {
          "name": "Duhok"
        },
        {
          "name": "Baghdad"
        },
        {
          "name": "Bābil"
        },
        {
          "name": "Kirkuk"
        },
        {
          "name": "Sulaymaniyah"
        },
        {
          "name": "An Najaf"
        },
        {
          "name": "Al Qādisīyah"
        },
        {
          "name": "Al Muthanná"
        },
        {
          "name": "Al Anbar"
        },
        {
          "name": "Halabja Governorate"
        }
      ]
    },
    {
      "name": "Iran",
      "countryCode": "IR",
      "countryCodeAlpha3": "IRN",
      "phone": "98",
      "currency": "IRR",
      "stateProvinces": [
        {
          "name": "Tehran"
        },
        {
          "name": "Zanjan"
        },
        {
          "name": "Yazd"
        },
        {
          "name": "Semnan"
        },
        {
          "name": "Māzandarān"
        },
        {
          "name": "Markazi"
        },
        {
          "name": "Lorestan Province"
        },
        {
          "name": "Kordestān"
        },
        {
          "name": "Kohgiluyeh and Boyer-Ahmad"
        },
        {
          "name": "Khuzestan"
        },
        {
          "name": "Kermānshāh"
        },
        {
          "name": "Kerman"
        },
        {
          "name": "Ilam Province"
        },
        {
          "name": "Hormozgan"
        },
        {
          "name": "Hamadān"
        },
        {
          "name": "Gīlān"
        },
        {
          "name": "Fars"
        },
        {
          "name": "Chaharmahal and Bakhtiari"
        },
        {
          "name": "Bushehr"
        },
        {
          "name": "East Azerbaijan"
        },
        {
          "name": "West Azerbaijan"
        },
        {
          "name": "Ardabīl"
        },
        {
          "name": "Isfahan"
        },
        {
          "name": "Golestan"
        },
        {
          "name": "Qazvīn"
        },
        {
          "name": "Qom"
        },
        {
          "name": "Sistan and Baluchestan"
        },
        {
          "name": "South Khorasan Province"
        },
        {
          "name": "Razavi Khorasan"
        },
        {
          "name": "North Khorasan"
        },
        {
          "name": "Alborz Province"
        }
      ]
    },
    {
      "name": "Iceland",
      "countryCode": "IS",
      "countryCodeAlpha3": "ISL",
      "phone": "354",
      "currency": "ISK",
      "stateProvinces": [
        {
          "name": "Northwest"
        },
        {
          "name": "Northeast"
        },
        {
          "name": "East"
        },
        {
          "name": "South"
        },
        {
          "name": "Capital Region"
        },
        {
          "name": "Southern Peninsula"
        },
        {
          "name": "West"
        },
        {
          "name": "Westfjords"
        }
      ]
    },
    {
      "name": "Italy",
      "countryCode": "IT",
      "countryCodeAlpha3": "ITA",
      "phone": "39",
      "currency": "EUR",
      "stateProvinces": [
        {
          "name": "Sicily"
        },
        {
          "name": "Sardinia"
        },
        {
          "name": "Calabria"
        },
        {
          "name": "Veneto"
        },
        {
          "name": "Aosta Valley"
        },
        {
          "name": "Umbria"
        },
        {
          "name": "Trentino-Alto Adige"
        },
        {
          "name": "Tuscany"
        },
        {
          "name": "Apulia"
        },
        {
          "name": "Piedmont"
        },
        {
          "name": "Molise"
        },
        {
          "name": "The Marches"
        },
        {
          "name": "Lombardy"
        },
        {
          "name": "Liguria"
        },
        {
          "name": "Lazio"
        },
        {
          "name": "Friuli Venezia Giulia"
        },
        {
          "name": "Emilia-Romagna"
        },
        {
          "name": "Campania"
        },
        {
          "name": "Basilicate"
        },
        {
          "name": "Abruzzo"
        }
      ]
    },
    {
      "name": "Jersey",
      "countryCode": "JE",
      "countryCodeAlpha3": "JEY",
      "phone": "+44-1534",
      "currency": "GBP",
      "stateProvinces": [
        {
          "name": "St Clement"
        },
        {
          "name": "St Saviour"
        },
        {
          "name": "St. Brelade"
        },
        {
          "name": "Grouville"
        },
        {
          "name": "St Mary"
        },
        {
          "name": "St Lawrence"
        },
        {
          "name": "St Peter"
        },
        {
          "name": "St Ouen"
        },
        {
          "name": "St John"
        },
        {
          "name": "Trinity"
        },
        {
          "name": "St Martîn"
        },
        {
          "name": "St Helier"
        }
      ]
    },
    {
      "name": "Jamaica",
      "countryCode": "JM",
      "countryCodeAlpha3": "JAM",
      "phone": "+1-876",
      "currency": "JMD",
      "stateProvinces": [
        {
          "name": "Westmoreland"
        },
        {
          "name": "Trelawny"
        },
        {
          "name": "St. Thomas"
        },
        {
          "name": "St. Mary"
        },
        {
          "name": "St. James"
        },
        {
          "name": "St. Elizabeth"
        },
        {
          "name": "Saint Catherine"
        },
        {
          "name": "St Ann"
        },
        {
          "name": "St. Andrew"
        },
        {
          "name": "Portland"
        },
        {
          "name": "Manchester"
        },
        {
          "name": "Kingston"
        },
        {
          "name": "Hanover"
        },
        {
          "name": "Clarendon"
        }
      ]
    },
    {
      "name": "Jordan",
      "countryCode": "JO",
      "countryCodeAlpha3": "JOR",
      "phone": "962",
      "currency": "JOD",
      "stateProvinces": [
        {
          "name": "Ma’an"
        },
        {
          "name": "Irbid"
        },
        {
          "name": "Zarqa"
        },
        {
          "name": "Tafielah"
        },
        {
          "name": "Amman"
        },
        {
          "name": "Mafraq"
        },
        {
          "name": "Karak"
        },
        {
          "name": "Balqa"
        },
        {
          "name": "Ajlun"
        },
        {
          "name": "Jerash"
        },
        {
          "name": "Aqaba"
        },
        {
          "name": "Madaba"
        }
      ]
    },
    {
      "name": "Japan",
      "countryCode": "JP",
      "countryCodeAlpha3": "JPN",
      "phone": "81",
      "currency": "JPY",
      "stateProvinces": [
        {
          "name": "Yamanashi"
        },
        {
          "name": "Yamaguchi"
        },
        {
          "name": "Wakayama"
        },
        {
          "name": "Toyama"
        },
        {
          "name": "Tottori"
        },
        {
          "name": "Tokyo"
        },
        {
          "name": "Tokushima"
        },
        {
          "name": "Tochigi"
        },
        {
          "name": "Shizuoka"
        },
        {
          "name": "Shimane"
        },
        {
          "name": "Shiga"
        },
        {
          "name": "Saitama"
        },
        {
          "name": "Saga"
        },
        {
          "name": "Ōsaka"
        },
        {
          "name": "Okinawa"
        },
        {
          "name": "Okayama"
        },
        {
          "name": "Oita"
        },
        {
          "name": "Niigata"
        },
        {
          "name": "Nara"
        },
        {
          "name": "Nagasaki"
        },
        {
          "name": "Nagano"
        },
        {
          "name": "Miyazaki"
        },
        {
          "name": "Mie"
        },
        {
          "name": "Kyoto"
        },
        {
          "name": "Kumamoto"
        },
        {
          "name": "Kochi"
        },
        {
          "name": "Kanagawa"
        },
        {
          "name": "Kagoshima"
        },
        {
          "name": "Kagawa"
        },
        {
          "name": "Ishikawa"
        },
        {
          "name": "Hyōgo"
        },
        {
          "name": "Hiroshima"
        },
        {
          "name": "Gunma"
        },
        {
          "name": "Gifu"
        },
        {
          "name": "Fukuoka"
        },
        {
          "name": "Fukui"
        },
        {
          "name": "Ehime"
        },
        {
          "name": "Aichi"
        },
        {
          "name": "Yamagata"
        },
        {
          "name": "Miyagi"
        },
        {
          "name": "Iwate"
        },
        {
          "name": "Ibaraki"
        },
        {
          "name": "Fukushima"
        },
        {
          "name": "Chiba"
        },
        {
          "name": "Akita"
        },
        {
          "name": "Hokkaido"
        },
        {
          "name": "Aomori"
        }
      ]
    },
    {
      "name": "Kenya",
      "countryCode": "KE",
      "countryCodeAlpha3": "KEN",
      "phone": "254",
      "currency": "KES",
      "stateProvinces": [
        {
          "name": "West Pokot"
        },
        {
          "name": "Wajir"
        },
        {
          "name": "Uasin Gishu"
        },
        {
          "name": "Turkana"
        },
        {
          "name": "Trans Nzoia"
        },
        {
          "name": "Tharaka - Nithi"
        },
        {
          "name": "Tana River"
        },
        {
          "name": "Siaya"
        },
        {
          "name": "Samburu"
        },
        {
          "name": "Nairobi Area"
        },
        {
          "name": "Murang'A"
        },
        {
          "name": "Mombasa"
        },
        {
          "name": "Meru"
        },
        {
          "name": "Marsabit"
        },
        {
          "name": "Mandera"
        },
        {
          "name": "Laikipia"
        },
        {
          "name": "Kwale"
        },
        {
          "name": "Kitui"
        },
        {
          "name": "Kisumu"
        },
        {
          "name": "Kisii"
        },
        {
          "name": "Kirinyaga"
        },
        {
          "name": "Kilifi"
        },
        {
          "name": "Kiambu"
        },
        {
          "name": "Kericho"
        },
        {
          "name": "Kakamega"
        },
        {
          "name": "Isiolo"
        },
        {
          "name": "Garissa"
        },
        {
          "name": "Embu"
        },
        {
          "name": "Busia"
        },
        {
          "name": "Bungoma"
        },
        {
          "name": "Baringo"
        },
        {
          "name": "Nyandarua"
        },
        {
          "name": "Vihiga"
        },
        {
          "name": "Lamu"
        },
        {
          "name": "Machakos"
        },
        {
          "name": "Makueni"
        },
        {
          "name": "Elegeyo-Marakwet"
        },
        {
          "name": "Taita Taveta"
        },
        {
          "name": "Kajiado"
        },
        {
          "name": "Nyeri"
        },
        {
          "name": "Homa Bay"
        },
        {
          "name": "Bomet"
        },
        {
          "name": "Migori"
        },
        {
          "name": "Nakuru"
        },
        {
          "name": "Narok"
        },
        {
          "name": "Nyamira"
        },
        {
          "name": "Nandi"
        }
      ]
    },
    {
      "name": "Kyrgyzstan",
      "countryCode": "KG",
      "countryCodeAlpha3": "KGZ",
      "phone": "996",
      "currency": "KGS",
      "stateProvinces": [
        {
          "name": "Osh"
        },
        {
          "name": "Batken"
        },
        {
          "name": "Talas"
        },
        {
          "name": "Naryn"
        },
        {
          "name": "Issyk-Kul"
        },
        {
          "name": "Bishkek"
        },
        {
          "name": "Jalal-Abad"
        },
        {
          "name": "Chüy"
        },
        {
          "name": "Osh City"
        }
      ]
    },
    {
      "name": "Cambodia",
      "countryCode": "KH",
      "countryCodeAlpha3": "KHM",
      "phone": "855",
      "currency": "KHR",
      "stateProvinces": [
        {
          "name": "Pursat"
        },
        {
          "name": "Battambang"
        },
        {
          "name": "Takeo"
        },
        {
          "name": "Svay Rieng"
        },
        {
          "name": "Stung Treng"
        },
        {
          "name": "Ŏtâr Méanchey"
        },
        {
          "name": "Siem Reap"
        },
        {
          "name": "Ratanakiri"
        },
        {
          "name": "Prey Veng"
        },
        {
          "name": "Preah Vihear"
        },
        {
          "name": "Phnom Penh"
        },
        {
          "name": "Pailin"
        },
        {
          "name": "Mondolkiri"
        },
        {
          "name": "Kratie"
        },
        {
          "name": "Kep"
        },
        {
          "name": "Koh Kong"
        },
        {
          "name": "Kandal"
        },
        {
          "name": "Kampot"
        },
        {
          "name": "Kampong Thom"
        },
        {
          "name": "Kampong Speu"
        },
        {
          "name": "Kampong Chhnang"
        },
        {
          "name": "Kampong Cham"
        },
        {
          "name": "Preah Sihanouk"
        },
        {
          "name": "Banteay Meanchey"
        },
        {
          "name": "Tboung Khmum"
        }
      ]
    },
    {
      "name": "Kiribati",
      "countryCode": "KI",
      "countryCodeAlpha3": "KIR",
      "phone": "686",
      "currency": "AUD",
      "stateProvinces": [
        {
          "name": "Gilbert Islands"
        },
        {
          "name": "Line Islands"
        },
        {
          "name": "Phoenix Islands"
        }
      ]
    },
    {
      "name": "Comoros",
      "countryCode": "KM",
      "countryCodeAlpha3": "COM",
      "phone": "269",
      "currency": "KMF",
      "stateProvinces": [
        {
          "name": "Mohéli"
        },
        {
          "name": "Grande Comore"
        },
        {
          "name": "Anjouan"
        }
      ]
    },
    {
      "name": "Saint Kitts and Nevis",
      "countryCode": "KN",
      "countryCodeAlpha3": "KNA",
      "phone": "+1-869",
      "currency": "XCD",
      "stateProvinces": [
        {
          "name": "Trinity Palmetto Point"
        },
        {
          "name": "Middle Island"
        },
        {
          "name": "Saint Thomas Lowland"
        },
        {
          "name": "Saint Peter Basseterre"
        },
        {
          "name": "Saint Paul Charlestown"
        },
        {
          "name": "Saint Paul Capesterre"
        },
        {
          "name": "Saint Mary Cayon"
        },
        {
          "name": "Saint John Figtree"
        },
        {
          "name": "Saint John Capesterre"
        },
        {
          "name": "Saint James Windwa"
        },
        {
          "name": "Saint George Gingerland"
        },
        {
          "name": "Saint George Basseterre"
        },
        {
          "name": "Saint Anne Sandy Point"
        },
        {
          "name": "Christ Church Nichola Town"
        }
      ]
    },
    {
      "name": "North Korea",
      "countryCode": "KP",
      "countryCodeAlpha3": "PRK",
      "phone": "850",
      "currency": "KPW",
      "stateProvinces": [
        {
          "name": "Pyongyang"
        },
        {
          "name": "South Pyongan"
        },
        {
          "name": "P'yŏngan-bukto"
        },
        {
          "name": "Kangwŏn-do"
        },
        {
          "name": "Hwanghae-namdo"
        },
        {
          "name": "Hwanghae-bukto"
        },
        {
          "name": "Hamgyŏng-namdo"
        },
        {
          "name": "Yanggang-do"
        },
        {
          "name": "Hambuk"
        },
        {
          "name": "Chagang-do"
        },
        {
          "name": "Rason"
        }
      ]
    },
    {
      "name": "South Korea",
      "countryCode": "KR",
      "countryCodeAlpha3": "KOR",
      "phone": "82",
      "currency": "KRW",
      "stateProvinces": [
        {
          "name": "Ulsan"
        },
        {
          "name": "Daejeon"
        },
        {
          "name": "Daegu"
        },
        {
          "name": "Seoul"
        },
        {
          "name": "Busan"
        },
        {
          "name": "Gyeongsangbuk-do"
        },
        {
          "name": "Gyeonggi-do"
        },
        {
          "name": "Gwangju"
        },
        {
          "name": "Gangwon-do"
        },
        {
          "name": "Incheon"
        },
        {
          "name": "Chungcheongnam-do"
        },
        {
          "name": "North Chungcheong"
        },
        {
          "name": "Jeollanam-do"
        },
        {
          "name": "Jeollabuk-do"
        },
        {
          "name": "Jeju-do"
        },
        {
          "name": "Gyeongsangnam-do"
        },
        {
          "name": "Sejong-si"
        }
      ]
    },
    {
      "name": "Kosovo",
      "countryCode": "XK",
      "countryCodeAlpha3": "XKX",
      "phone": "",
      "currency": "EUR",
      "stateProvinces": [
        {
          "name": "Ferizaj"
        },
        {
          "name": "Gjakova"
        },
        {
          "name": "Gjilan"
        },
        {
          "name": "Mitrovica"
        },
        {
          "name": "Pec"
        },
        {
          "name": "Pristina"
        },
        {
          "name": "Prizren"
        }
      ]
    },
    {
      "name": "Kuwait",
      "countryCode": "KW",
      "countryCodeAlpha3": "KWT",
      "phone": "965",
      "currency": "KWD",
      "stateProvinces": [
        {
          "name": "Hawalli"
        },
        {
          "name": "Al Asimah"
        },
        {
          "name": "Al Jahrāʼ"
        },
        {
          "name": "Al Farwaniyah"
        },
        {
          "name": "Al Aḩmadī"
        },
        {
          "name": "Mubārak al Kabīr"
        }
      ]
    },
    {
      "name": "Cayman Islands",
      "countryCode": "KY",
      "countryCodeAlpha3": "CYM",
      "phone": "+1-345",
      "currency": "KYD",
      "stateProvinces": [
        {
          "name": "George Town"
        },
        {
          "name": "West Bay"
        },
        {
          "name": "Bodden Town"
        },
        {
          "name": "North Side"
        },
        {
          "name": "East End"
        },
        {
          "name": "Sister Island"
        }
      ]
    },
    {
      "name": "Kazakhstan",
      "countryCode": "KZ",
      "countryCodeAlpha3": "KAZ",
      "phone": "7",
      "currency": "KZT",
      "stateProvinces": [
        {
          "name": "Batys Qazaqstan"
        },
        {
          "name": "Mangghystaū"
        },
        {
          "name": "Atyraū"
        },
        {
          "name": "Aqtöbe"
        },
        {
          "name": "East Kazakhstan"
        },
        {
          "name": "Aqmola"
        },
        {
          "name": "North Kazakhstan"
        },
        {
          "name": "Pavlodar Region"
        },
        {
          "name": "Qyzylorda"
        },
        {
          "name": "Qostanay"
        },
        {
          "name": "Karaganda"
        },
        {
          "name": "Zhambyl"
        },
        {
          "name": "South Kazakhstan"
        },
        {
          "name": "Almaty"
        },
        {
          "name": "Almaty Oblysy"
        },
        {
          "name": "Shymkent"
        },
        {
          "name": "Baikonur"
        },
        {
          "name": "Astana"
        }
      ]
    },
    {
      "name": "Laos",
      "countryCode": "LA",
      "countryCodeAlpha3": "LAO",
      "phone": "856",
      "currency": "LAK",
      "stateProvinces": [
        {
          "name": "Xiangkhoang"
        },
        {
          "name": "Xiagnabouli"
        },
        {
          "name": "Vientiane"
        },
        {
          "name": "Savannahkhét"
        },
        {
          "name": "Salavan"
        },
        {
          "name": "Phôngsali"
        },
        {
          "name": "Oudômxai"
        },
        {
          "name": "Louangphabang"
        },
        {
          "name": "Loungnamtha"
        },
        {
          "name": "Khammouan"
        },
        {
          "name": "Houaphan"
        },
        {
          "name": "Champasak"
        },
        {
          "name": "Attapu"
        },
        {
          "name": "Xékong"
        },
        {
          "name": "Bokeo"
        },
        {
          "name": "Bolikhamsai"
        },
        {
          "name": "Vientiane Prefecture"
        },
        {
          "name": "Xaisomboun"
        }
      ]
    },
    {
      "name": "Lebanon",
      "countryCode": "LB",
      "countryCodeAlpha3": "LBN",
      "phone": "961",
      "currency": "LBP",
      "stateProvinces": [
        {
          "name": "Mont-Liban"
        },
        {
          "name": "Beyrouth"
        },
        {
          "name": "Liban-Nord"
        },
        {
          "name": "South Governorate"
        },
        {
          "name": "Béqaa"
        },
        {
          "name": "Nabatîyé"
        },
        {
          "name": "Aakkâr"
        },
        {
          "name": "Baalbek-Hermel"
        }
      ]
    },
    {
      "name": "Saint Lucia",
      "countryCode": "LC",
      "countryCodeAlpha3": "LCA",
      "phone": "+1-758",
      "currency": "XCD",
      "stateProvinces": [
        {
          "name": "Vieux-Fort"
        },
        {
          "name": "Soufrière"
        },
        {
          "name": "Micoud"
        },
        {
          "name": "Laborie"
        },
        {
          "name": "Gros-Islet"
        },
        {
          "name": "Dennery"
        },
        {
          "name": "Choiseul"
        },
        {
          "name": "Castries"
        },
        {
          "name": "Anse-la-Raye"
        },
        {
          "name": "Canaries"
        }
      ]
    },
    {
      "name": "Liechtenstein",
      "countryCode": "LI",
      "countryCodeAlpha3": "LIE",
      "phone": "423",
      "currency": "CHF",
      "stateProvinces": [
        {
          "name": "Vaduz"
        },
        {
          "name": "Triesenberg"
        },
        {
          "name": "Triesen"
        },
        {
          "name": "Schellenberg"
        },
        {
          "name": "Schaan"
        },
        {
          "name": "Ruggell"
        },
        {
          "name": "Planken"
        },
        {
          "name": "Mauren"
        },
        {
          "name": "Gamprin"
        },
        {
          "name": "Eschen"
        },
        {
          "name": "Balzers"
        }
      ]
    },
    {
      "name": "Sri Lanka",
      "countryCode": "LK",
      "countryCodeAlpha3": "LKA",
      "phone": "94",
      "currency": "LKR",
      "stateProvinces": [
        {
          "name": "Western"
        },
        {
          "name": "Uva"
        },
        {
          "name": "Southern"
        },
        {
          "name": "Sabaragamuwa"
        },
        {
          "name": "North Western"
        },
        {
          "name": "North Central"
        },
        {
          "name": "Central"
        },
        {
          "name": "Northern Province"
        },
        {
          "name": "Eastern Province"
        }
      ]
    },
    {
      "name": "Liberia",
      "countryCode": "LR",
      "countryCodeAlpha3": "LBR",
      "phone": "231",
      "currency": "LRD",
      "stateProvinces": [
        {
          "name": "Sinoe"
        },
        {
          "name": "Nimba"
        },
        {
          "name": "Montserrado"
        },
        {
          "name": "Maryland"
        },
        {
          "name": "Lofa"
        },
        {
          "name": "Grand Gedeh"
        },
        {
          "name": "Grand Cape Mount"
        },
        {
          "name": "Grand Bassa"
        },
        {
          "name": "Bong"
        },
        {
          "name": "Bomi"
        },
        {
          "name": "Grand Kru"
        },
        {
          "name": "Margibi"
        },
        {
          "name": "River Cess"
        },
        {
          "name": "Gbarpolu"
        },
        {
          "name": "River Gee"
        }
      ]
    },
    {
      "name": "Lesotho",
      "countryCode": "LS",
      "countryCodeAlpha3": "LSO",
      "phone": "266",
      "currency": "LSL",
      "stateProvinces": [
        {
          "name": "Thaba-Tseka"
        },
        {
          "name": "Quthing"
        },
        {
          "name": "Qachaʼs Nek"
        },
        {
          "name": "Mokhotlong"
        },
        {
          "name": "Mohaleʼs Hoek"
        },
        {
          "name": "Maseru"
        },
        {
          "name": "Mafeteng"
        },
        {
          "name": "Leribe"
        },
        {
          "name": "Butha-Buthe"
        },
        {
          "name": "Berea"
        }
      ]
    },
    {
      "name": "Lithuania",
      "countryCode": "LT",
      "countryCodeAlpha3": "LTU",
      "phone": "370",
      "currency": "EUR",
      "stateProvinces": [
        {
          "name": "Alytus"
        },
        {
          "name": "Kaunas"
        },
        {
          "name": "Klaipėda County"
        },
        {
          "name": "Marijampolė County"
        },
        {
          "name": "Panevėžys"
        },
        {
          "name": "Siauliai"
        },
        {
          "name": "Tauragė County"
        },
        {
          "name": "Telsiai"
        },
        {
          "name": "Utena"
        },
        {
          "name": "Vilnius"
        }
      ]
    },
    {
      "name": "Luxembourg",
      "countryCode": "LU",
      "countryCodeAlpha3": "LUX",
      "phone": "352",
      "currency": "EUR",
      "stateProvinces": [
        {
          "name": "Wiltz"
        },
        {
          "name": "Vianden"
        },
        {
          "name": "Remich"
        },
        {
          "name": "Redange"
        },
        {
          "name": "Mersch"
        },
        {
          "name": "Luxembourg"
        },
        {
          "name": "Grevenmacher"
        },
        {
          "name": "Esch-sur-Alzette"
        },
        {
          "name": "Echternach"
        },
        {
          "name": "Diekirch"
        },
        {
          "name": "Clervaux"
        },
        {
          "name": "Capellen"
        }
      ]
    },
    {
      "name": "Latvia",
      "countryCode": "LV",
      "countryCodeAlpha3": "LVA",
      "phone": "371",
      "currency": "EUR",
      "stateProvinces": [
        {
          "name": "Ventspils Rajons"
        },
        {
          "name": "Ventspils"
        },
        {
          "name": "Valmiera"
        },
        {
          "name": "Valka"
        },
        {
          "name": "Tukuma novads"
        },
        {
          "name": "Talsi Municipality"
        },
        {
          "name": "Saldus Rajons"
        },
        {
          "name": "Riga"
        },
        {
          "name": "Rēzeknes Novads"
        },
        {
          "name": "Rēzekne"
        },
        {
          "name": "Preiļu novads"
        },
        {
          "name": "Ogre"
        },
        {
          "name": "Madona Municipality"
        },
        {
          "name": "Ludzas novads"
        },
        {
          "name": "Limbažu novads"
        },
        {
          "name": "Liepāja"
        },
        {
          "name": "Kuldīgas novads"
        },
        {
          "name": "Krāslavas novads"
        },
        {
          "name": "Jūrmala"
        },
        {
          "name": "Jelgavas novads"
        },
        {
          "name": "Jelgava"
        },
        {
          "name": "Jēkabpils Municipality"
        },
        {
          "name": "Gulbenes novads"
        },
        {
          "name": "Dobeles novads"
        },
        {
          "name": "Daugavpils"
        },
        {
          "name": "Cēsu Rajons"
        },
        {
          "name": "Bauskas Rajons"
        },
        {
          "name": "Balvu Novads"
        },
        {
          "name": "Alūksnes Novads"
        },
        {
          "name": "Aizkraukles novads"
        },
        {
          "name": "Mārupe"
        },
        {
          "name": "Olaine"
        },
        {
          "name": "Ķekava"
        },
        {
          "name": "Salaspils"
        },
        {
          "name": "Ādaži"
        },
        {
          "name": "Līvāni"
        },
        {
          "name": "Varakļāni"
        },
        {
          "name": "Ropažu"
        },
        {
          "name": "Sigulda"
        },
        {
          "name": "Saulkrastu"
        },
        {
          "name": "Smiltene"
        },
        {
          "name": "South Kurzeme Municipality"
        },
        {
          "name": "Augšdaugava Municipality"
        }
      ]
    },
    {
      "name": "Libya",
      "countryCode": "LY",
      "countryCodeAlpha3": "LBY",
      "phone": "218",
      "currency": "LYD",
      "stateProvinces": [
        {
          "name": "Darnah"
        },
        {
          "name": "Banghāzī"
        },
        {
          "name": "Al Marj"
        },
        {
          "name": "Al Kufrah"
        },
        {
          "name": "Al Jabal al Akhḑar"
        },
        {
          "name": "Tripoli"
        },
        {
          "name": "Surt"
        },
        {
          "name": "Sabhā"
        },
        {
          "name": "Nālūt"
        },
        {
          "name": "Murzuq"
        },
        {
          "name": "Mişrātah"
        },
        {
          "name": "Ghāt"
        },
        {
          "name": "Az Zāwiyah"
        },
        {
          "name": "Ash Shāţiʼ"
        },
        {
          "name": "Al Jufrah"
        },
        {
          "name": "An Nuqāţ al Khams"
        },
        {
          "name": "Al Buţnān"
        },
        {
          "name": "Jabal al Gharbi"
        },
        {
          "name": "Al Jafārah"
        },
        {
          "name": "Al Marqab"
        },
        {
          "name": "Al Wāḩāt"
        },
        {
          "name": "Wādī al Ḩayāt"
        }
      ]
    },
    {
      "name": "Morocco",
      "countryCode": "MA",
      "countryCodeAlpha3": "MAR",
      "phone": "212",
      "currency": "MAD",
      "stateProvinces": [
        {
          "name": "Tanger-Tetouan-Al Hoceima"
        },
        {
          "name": "Oriental"
        },
        {
          "name": "Fès-Meknès"
        },
        {
          "name": "Rabat-Salé-Kénitra"
        },
        {
          "name": "Béni Mellal-Khénifra"
        },
        {
          "name": "Casablanca-Settat"
        },
        {
          "name": "Marrakesh-Safi"
        },
        {
          "name": "Drâa-Tafilalet"
        },
        {
          "name": "Souss-Massa"
        },
        {
          "name": "Guelmim-Oued Noun"
        },
        {
          "name": "Laâyoune-Sakia El Hamra"
        },
        {
          "name": "Dakhla-Oued Ed-Dahab"
        }
      ]
    },
    {
      "name": "Monaco",
      "countryCode": "MC",
      "countryCodeAlpha3": "MCO",
      "phone": "377",
      "currency": "EUR",
      "stateProvinces": [
        {
          "name": "Municipality of Monaco"
        }
      ]
    },
    {
      "name": "Moldova",
      "countryCode": "MD",
      "countryCodeAlpha3": "MDA",
      "phone": "373",
      "currency": "MDL",
      "stateProvinces": [
        {
          "name": "Raionul Edineţ"
        },
        {
          "name": "Ungheni"
        },
        {
          "name": "Teleneşti"
        },
        {
          "name": "Taraclia"
        },
        {
          "name": "Ştefan-Vodă"
        },
        {
          "name": "Strășeni"
        },
        {
          "name": "Raionul Soroca"
        },
        {
          "name": "Rîşcani"
        },
        {
          "name": "Rezina"
        },
        {
          "name": "Orhei"
        },
        {
          "name": "Raionul Ocniţa"
        },
        {
          "name": "Anenii Noi"
        },
        {
          "name": "Nisporeni"
        },
        {
          "name": "Leova"
        },
        {
          "name": "Sîngerei"
        },
        {
          "name": "Criuleni"
        },
        {
          "name": "Ialoveni"
        },
        {
          "name": "Chișinău Municipality"
        },
        {
          "name": "Căuşeni"
        },
        {
          "name": "Cantemir"
        },
        {
          "name": "Călăraşi"
        },
        {
          "name": "Cahul"
        },
        {
          "name": "Glodeni"
        },
        {
          "name": "Floreşti"
        },
        {
          "name": "Fălești"
        },
        {
          "name": "Dubăsari"
        },
        {
          "name": "Drochia"
        },
        {
          "name": "Donduşeni"
        },
        {
          "name": "Cimişlia"
        },
        {
          "name": "Briceni"
        },
        {
          "name": "Basarabeasca"
        },
        {
          "name": "Hînceşti"
        },
        {
          "name": "Şoldăneşti"
        },
        {
          "name": "Transnistria"
        },
        {
          "name": "Găgăuzia"
        },
        {
          "name": "Bender Municipality"
        },
        {
          "name": "Bălţi"
        }
      ]
    },
    {
      "name": "Montenegro",
      "countryCode": "ME",
      "countryCodeAlpha3": "MNE",
      "phone": "382",
      "currency": "EUR",
      "stateProvinces": [
        {
          "name": "Rožaje Municipality"
        },
        {
          "name": "Opština Žabljak"
        },
        {
          "name": "Ulcinj"
        },
        {
          "name": "Tivat"
        },
        {
          "name": "Podgorica"
        },
        {
          "name": "Opština Šavnik"
        },
        {
          "name": "Opština Plužine"
        },
        {
          "name": "Pljevlja"
        },
        {
          "name": "Opština Plav"
        },
        {
          "name": "Opština Nikšić"
        },
        {
          "name": "Mojkovac"
        },
        {
          "name": "Kotor"
        },
        {
          "name": "Opština Kolašin"
        },
        {
          "name": "Berane"
        },
        {
          "name": "Herceg Novi"
        },
        {
          "name": "Danilovgrad"
        },
        {
          "name": "Cetinje"
        },
        {
          "name": "Budva"
        },
        {
          "name": "Bijelo Polje"
        },
        {
          "name": "Bar"
        },
        {
          "name": "Andrijevica"
        },
        {
          "name": "Gusinje"
        },
        {
          "name": "Petnjica"
        },
        {
          "name": "Tuzi"
        }
      ]
    },
    {
      "name": "Madagascar",
      "countryCode": "MG",
      "countryCodeAlpha3": "MDG",
      "phone": "261",
      "currency": "MGA",
      "stateProvinces": [
        {
          "name": "Diana"
        },
        {
          "name": "Sava"
        },
        {
          "name": "Sofia"
        },
        {
          "name": "Analanjirofo"
        },
        {
          "name": "Boeny"
        },
        {
          "name": "Betsiboka"
        },
        {
          "name": "Alaotra Mangoro"
        },
        {
          "name": "Melaky"
        },
        {
          "name": "Bongolava"
        },
        {
          "name": "Vakinankaratra"
        },
        {
          "name": "Itasy"
        },
        {
          "name": "Analamanga"
        },
        {
          "name": "Atsinanana"
        },
        {
          "name": "Menabe"
        },
        {
          "name": "Amoron'i Mania"
        },
        {
          "name": "Upper Matsiatra"
        },
        {
          "name": "Ihorombe"
        },
        {
          "name": "Atsimo-Atsinanana"
        },
        {
          "name": "Anosy"
        },
        {
          "name": "Androy"
        },
        {
          "name": "Atsimo-Andrefana"
        },
        {
          "name": "Fitovinany Region"
        },
        {
          "name": "Vatovavy Region"
        }
      ]
    },
    {
      "name": "Marshall Islands",
      "countryCode": "MH",
      "countryCodeAlpha3": "MHL",
      "phone": "692",
      "currency": "USD",
      "stateProvinces": [
        {
          "name": "Ailinginae Atoll"
        },
        {
          "name": "Ailinglaplap Atoll"
        },
        {
          "name": "Ailuk Atoll"
        },
        {
          "name": "Arno Atoll"
        },
        {
          "name": "Aur Atoll"
        },
        {
          "name": "Bikar Atoll"
        },
        {
          "name": "Bikini Atoll"
        },
        {
          "name": "Ebon Atoll"
        },
        {
          "name": "Enewetak Atoll"
        },
        {
          "name": "Erikub Atoll"
        },
        {
          "name": "Jaluit Atoll"
        },
        {
          "name": "Kwajalein Atoll"
        },
        {
          "name": "Lae Atoll"
        },
        {
          "name": "Likiep Atoll"
        },
        {
          "name": "Majuro Atoll"
        },
        {
          "name": "Maloelap Atoll"
        },
        {
          "name": "Mili Atoll"
        },
        {
          "name": "Namdrik Atoll"
        },
        {
          "name": "Namu Atoll"
        },
        {
          "name": "Rongelap Atoll"
        },
        {
          "name": "Rongrik Atoll"
        },
        {
          "name": "Taka Atoll"
        },
        {
          "name": "Bokak Atoll"
        },
        {
          "name": "Ujae Atoll"
        },
        {
          "name": "Ujelang"
        },
        {
          "name": "Utrik Atoll"
        },
        {
          "name": "Wotho Atoll"
        },
        {
          "name": "Wotje Atoll"
        },
        {
          "name": "Jabat Island"
        },
        {
          "name": "Jemo Island"
        },
        {
          "name": "Kili Island"
        },
        {
          "name": "Lib Island"
        },
        {
          "name": "Mejit Island"
        }
      ]
    },
    {
      "name": "North Macedonia",
      "countryCode": "MK",
      "countryCodeAlpha3": "MKD",
      "phone": "389",
      "currency": "MKD",
      "stateProvinces": [
        {
          "name": "Valandovo"
        },
        {
          "name": "Resen"
        },
        {
          "name": "Kratovo"
        },
        {
          "name": "Pehchevo"
        },
        {
          "name": "Novo Selo"
        },
        {
          "name": "Bosilovo"
        },
        {
          "name": "Vasilevo"
        },
        {
          "name": "Dojran"
        },
        {
          "name": "Bogdanci"
        },
        {
          "name": "Konche"
        },
        {
          "name": "Makedonska Kamenica"
        },
        {
          "name": "Zrnovci"
        },
        {
          "name": "Karbinci"
        },
        {
          "name": "Demir Kapija"
        },
        {
          "name": "Rosoman"
        },
        {
          "name": "Gradsko"
        },
        {
          "name": "Lozovo"
        },
        {
          "name": "Češinovo-Obleševo"
        },
        {
          "name": "Novaci"
        },
        {
          "name": "Berovo"
        },
        {
          "name": "Bitola"
        },
        {
          "name": "Mogila"
        },
        {
          "name": "Arachinovo"
        },
        {
          "name": "Bogovinje"
        },
        {
          "name": "Brvenica"
        },
        {
          "name": "Chashka"
        },
        {
          "name": "Centar Zhupa"
        },
        {
          "name": "Chucher Sandevo"
        },
        {
          "name": "Debar"
        },
        {
          "name": "Delchevo"
        },
        {
          "name": "Demir Hisar"
        },
        {
          "name": "Dolneni"
        },
        {
          "name": "Gevgelija"
        },
        {
          "name": "Gostivar"
        },
        {
          "name": "Ilinden"
        },
        {
          "name": "Jegunovce"
        },
        {
          "name": "Kavadarci"
        },
        {
          "name": "Kichevo"
        },
        {
          "name": "Kochani"
        },
        {
          "name": "Kriva Palanka"
        },
        {
          "name": "Krivogashtani"
        },
        {
          "name": "Krushevo"
        },
        {
          "name": "Kumanovo"
        },
        {
          "name": "Lipkovo"
        },
        {
          "name": "Makedonski Brod"
        },
        {
          "name": "Negotino"
        },
        {
          "name": "Ohrid"
        },
        {
          "name": "Petrovec"
        },
        {
          "name": "Plasnica"
        },
        {
          "name": "Prilep"
        },
        {
          "name": "Probishtip"
        },
        {
          "name": "Radovish"
        },
        {
          "name": "Rankovce"
        },
        {
          "name": "Mavrovo and Rostuša"
        },
        {
          "name": "Sopište"
        },
        {
          "name": "Staro Nagorichane"
        },
        {
          "name": "Shtip"
        },
        {
          "name": "Struga"
        },
        {
          "name": "Strumica"
        },
        {
          "name": "Studenichani"
        },
        {
          "name": "Sveti Nikole"
        },
        {
          "name": "Tearce"
        },
        {
          "name": "Tetovo"
        },
        {
          "name": "Veles"
        },
        {
          "name": "Vevchani"
        },
        {
          "name": "Vinica"
        },
        {
          "name": "Vrapchishte"
        },
        {
          "name": "Zelenikovo"
        },
        {
          "name": "Zhelino"
        },
        {
          "name": "Debarca"
        },
        {
          "name": "Grad Skopje"
        }
      ]
    },
    {
      "name": "Mali",
      "countryCode": "ML",
      "countryCodeAlpha3": "MLI",
      "phone": "223",
      "currency": "XOF",
      "stateProvinces": [
        {
          "name": "Tombouctou"
        },
        {
          "name": "Sikasso"
        },
        {
          "name": "Ségou"
        },
        {
          "name": "Mopti"
        },
        {
          "name": "Koulikoro"
        },
        {
          "name": "Kayes"
        },
        {
          "name": "Gao"
        },
        {
          "name": "Bamako"
        },
        {
          "name": "Kidal"
        },
        {
          "name": "Taoudénit"
        },
        {
          "name": "Ménaka"
        }
      ]
    },
    {
      "name": "Myanmar",
      "countryCode": "MM",
      "countryCodeAlpha3": "MMR",
      "phone": "95",
      "currency": "MMK",
      "stateProvinces": [
        {
          "name": "Tanintharyi"
        },
        {
          "name": "Shan"
        },
        {
          "name": "Sagain"
        },
        {
          "name": "Yangon"
        },
        {
          "name": "Rakhine"
        },
        {
          "name": "Bago"
        },
        {
          "name": "Mon"
        },
        {
          "name": "Mandalay"
        },
        {
          "name": "Magway"
        },
        {
          "name": "Kayah"
        },
        {
          "name": "Kayin"
        },
        {
          "name": "Kachin"
        },
        {
          "name": "Ayeyarwady"
        },
        {
          "name": "Chin"
        },
        {
          "name": "Nay Pyi Taw"
        }
      ]
    },
    {
      "name": "Mongolia",
      "countryCode": "MN",
      "countryCodeAlpha3": "MNG",
      "phone": "976",
      "currency": "MNT",
      "stateProvinces": [
        {
          "name": "Uvs"
        },
        {
          "name": "Hovd"
        },
        {
          "name": "Govĭ-Altay"
        },
        {
          "name": "Dzabkhan"
        },
        {
          "name": "Bayan-Ölgiy"
        },
        {
          "name": "Bayanhongor"
        },
        {
          "name": "Ulaanbaatar"
        },
        {
          "name": "Central Aimak"
        },
        {
          "name": "Sühbaatar"
        },
        {
          "name": "Selenge"
        },
        {
          "name": "Övörhangay"
        },
        {
          "name": "Ömnögovĭ"
        },
        {
          "name": "Hövsgöl"
        },
        {
          "name": "Hentiy"
        },
        {
          "name": "Middle Govĭ"
        },
        {
          "name": "East Gobi Aymag"
        },
        {
          "name": "East Aimak"
        },
        {
          "name": "Bulgan"
        },
        {
          "name": "Arhangay"
        },
        {
          "name": "Darhan Uul"
        },
        {
          "name": "Govĭ-Sumber"
        },
        {
          "name": "Orhon"
        }
      ]
    },
    {
      "name": "Macao",
      "countryCode": "MO",
      "countryCodeAlpha3": "MAC",
      "phone": "853",
      "currency": "MOP",
      "stateProvinces": [
        {
          "name": "Nossa Senhora de Fátima"
        },
        {
          "name": "Santo António"
        },
        {
          "name": "São Lázaro"
        },
        {
          "name": "Sé"
        },
        {
          "name": "São Lourenço"
        },
        {
          "name": "Nossa Senhora do Carmo"
        },
        {
          "name": "Cotai"
        },
        {
          "name": "São Francisco Xavier"
        }
      ]
    },
    {
      "name": "Northern Mariana Islands",
      "countryCode": "MP",
      "countryCodeAlpha3": "MNP",
      "phone": "+1-670",
      "currency": "USD",
      "stateProvinces": [
        {
          "name": "Rota"
        },
        {
          "name": "Saipan"
        },
        {
          "name": "Tinian"
        },
        {
          "name": "Northern Islands"
        }
      ]
    },
    {
      "name": "Martinique",
      "countryCode": "MQ",
      "countryCodeAlpha3": "MTQ",
      "phone": "596",
      "currency": "EUR",
      "stateProvinces": [
        {
          "name": "Martinique"
        }
      ]
    },
    {
      "name": "Mauritania",
      "countryCode": "MR",
      "countryCodeAlpha3": "MRT",
      "phone": "222",
      "currency": "MRU",
      "stateProvinces": [
        {
          "name": "Trarza"
        },
        {
          "name": "Tiris Zemmour"
        },
        {
          "name": "Tagant"
        },
        {
          "name": "Inchiri"
        },
        {
          "name": "Hodh El Gharbi"
        },
        {
          "name": "Hodh Ech Chargi"
        },
        {
          "name": "Guidimaka"
        },
        {
          "name": "Gorgol"
        },
        {
          "name": "Dakhlet Nouadhibou"
        },
        {
          "name": "Brakna"
        },
        {
          "name": "Assaba"
        },
        {
          "name": "Adrar"
        },
        {
          "name": "Nouakchott Ouest"
        },
        {
          "name": "Nouakchott Nord"
        },
        {
          "name": "Nouakchott Sud"
        }
      ]
    },
    {
      "name": "Montserrat",
      "countryCode": "MS",
      "countryCodeAlpha3": "MSR",
      "phone": "+1-664",
      "currency": "XCD",
      "stateProvinces": [
        {
          "name": "Saint Peter"
        },
        {
          "name": "Saint Georges"
        },
        {
          "name": "Saint Anthony"
        }
      ]
    },
    {
      "name": "Malta",
      "countryCode": "MT",
      "countryCodeAlpha3": "MLT",
      "phone": "356",
      "currency": "EUR",
      "stateProvinces": [
        {
          "name": "Attard"
        },
        {
          "name": "Balzan"
        },
        {
          "name": "Il-Birgu"
        },
        {
          "name": "Birkirkara"
        },
        {
          "name": "Birżebbuġa"
        },
        {
          "name": "Bormla"
        },
        {
          "name": "Dingli"
        },
        {
          "name": "Il-Fgura"
        },
        {
          "name": "Floriana"
        },
        {
          "name": "Il-Fontana"
        },
        {
          "name": "Għajnsielem"
        },
        {
          "name": "L-Għarb"
        },
        {
          "name": "Ħal Għargħur"
        },
        {
          "name": "L-Għasri"
        },
        {
          "name": "Ħal Għaxaq"
        },
        {
          "name": "Il-Gudja"
        },
        {
          "name": "Il-Gżira"
        },
        {
          "name": "Il-Ħamrun"
        },
        {
          "name": "L-Iklin"
        },
        {
          "name": "L-Imdina"
        },
        {
          "name": "L-Imġarr"
        },
        {
          "name": "L-Imqabba"
        },
        {
          "name": "L-Imsida"
        },
        {
          "name": "Mtarfa"
        },
        {
          "name": "Senglea"
        },
        {
          "name": "Il-Kalkara"
        },
        {
          "name": "Ta’ Kerċem"
        },
        {
          "name": "Kirkop"
        },
        {
          "name": "Lija"
        },
        {
          "name": "Luqa"
        },
        {
          "name": "Il-Marsa"
        },
        {
          "name": "Marsaskala"
        },
        {
          "name": "Marsaxlokk"
        },
        {
          "name": "Il-Mellieħa"
        },
        {
          "name": "Il-Mosta"
        },
        {
          "name": "Il-Munxar"
        },
        {
          "name": "In-Nadur"
        },
        {
          "name": "In-Naxxar"
        },
        {
          "name": "Paola"
        },
        {
          "name": "Pembroke"
        },
        {
          "name": "Tal-Pietà"
        },
        {
          "name": "Il-Qala"
        },
        {
          "name": "Qormi"
        },
        {
          "name": "Il-Qrendi"
        },
        {
          "name": "Ir-Rabat"
        },
        {
          "name": "Victoria"
        },
        {
          "name": "Safi"
        },
        {
          "name": "Saint John"
        },
        {
          "name": "Saint Julian"
        },
        {
          "name": "Saint Lawrence"
        },
        {
          "name": "Saint Lucia"
        },
        {
          "name": "Saint Paul’s Bay"
        },
        {
          "name": "Saint Venera"
        },
        {
          "name": "Sannat"
        },
        {
          "name": "Is-Siġġiewi"
        },
        {
          "name": "Tas-Sliema"
        },
        {
          "name": "Is-Swieqi"
        },
        {
          "name": "Tarxien"
        },
        {
          "name": "Ta’ Xbiex"
        },
        {
          "name": "Ix-Xagħra"
        },
        {
          "name": "Ix-Xewkija"
        },
        {
          "name": "Ix-Xgħajra"
        },
        {
          "name": "Ħaż-Żabbar"
        },
        {
          "name": "Ħaż-Żebbuġ"
        },
        {
          "name": "Iż-Żebbuġ"
        },
        {
          "name": "Iż-Żejtun"
        },
        {
          "name": "Iż-Żurrieq"
        },
        {
          "name": "Valletta"
        }
      ]
    },
    {
      "name": "Mauritius",
      "countryCode": "MU",
      "countryCodeAlpha3": "MUS",
      "phone": "230",
      "currency": "MUR",
      "stateProvinces": [
        {
          "name": "Agalega Islands"
        },
        {
          "name": "Savanne"
        },
        {
          "name": "Rivière du Rempart"
        },
        {
          "name": "Port Louis"
        },
        {
          "name": "Plaines Wilhems"
        },
        {
          "name": "Pamplemousses"
        },
        {
          "name": "Moka"
        },
        {
          "name": "Grand Port"
        },
        {
          "name": "Flacq"
        },
        {
          "name": "Black River"
        },
        {
          "name": "Cargados Carajos"
        },
        {
          "name": "Rodrigues"
        }
      ]
    },
    {
      "name": "Maldives",
      "countryCode": "MV",
      "countryCodeAlpha3": "MDV",
      "phone": "960",
      "currency": "MVR",
      "stateProvinces": [
        {
          "name": "Vaavu Atholhu"
        },
        {
          "name": "Thaa Atholhu"
        },
        {
          "name": "Shaviyani Atholhu"
        },
        {
          "name": "Seenu"
        },
        {
          "name": "Raa Atoll"
        },
        {
          "name": "Noonu Atoll"
        },
        {
          "name": "Gnyaviyani Atoll"
        },
        {
          "name": "Meemu Atholhu"
        },
        {
          "name": "Faadhippolhu Atoll"
        },
        {
          "name": "Laamu"
        },
        {
          "name": "Kaafu Atoll"
        },
        {
          "name": "Haa Dhaalu Atholhu"
        },
        {
          "name": "Haa Alifu Atholhu"
        },
        {
          "name": "Gaafu Dhaalu Atoll"
        },
        {
          "name": "Gaafu Alif Atoll"
        },
        {
          "name": "Faafu Atholhu"
        },
        {
          "name": "Dhaalu Atholhu"
        },
        {
          "name": "Baa Atholhu"
        },
        {
          "name": "Northern Ari Atoll"
        },
        {
          "name": "Male"
        },
        {
          "name": "Southern Ari Atoll"
        }
      ]
    },
    {
      "name": "Malawi",
      "countryCode": "MW",
      "countryCodeAlpha3": "MWI",
      "phone": "265",
      "currency": "MWK",
      "stateProvinces": [
        {
          "name": "Southern Region"
        },
        {
          "name": "Northern Region"
        },
        {
          "name": "Central Region"
        }
      ]
    },
    {
      "name": "Mexico",
      "countryCode": "MX",
      "countryCodeAlpha3": "MEX",
      "phone": "52",
      "currency": "MXN",
      "stateProvinces": [
        {
          "name": "Yucatán"
        },
        {
          "name": "Veracruz"
        },
        {
          "name": "Tlaxcala"
        },
        {
          "name": "Tamaulipas"
        },
        {
          "name": "Tabasco"
        },
        {
          "name": "Quintana Roo"
        },
        {
          "name": "Querétaro"
        },
        {
          "name": "Puebla"
        },
        {
          "name": "Oaxaca"
        },
        {
          "name": "Nuevo León"
        },
        {
          "name": "Morelos"
        },
        {
          "name": "México"
        },
        {
          "name": "Hidalgo"
        },
        {
          "name": "Guerrero"
        },
        {
          "name": "Mexico City"
        },
        {
          "name": "Chiapas"
        },
        {
          "name": "Campeche"
        },
        {
          "name": "Zacatecas"
        },
        {
          "name": "Sonora"
        },
        {
          "name": "Sinaloa"
        },
        {
          "name": "San Luis Potosí"
        },
        {
          "name": "Nayarit"
        },
        {
          "name": "Michoacán"
        },
        {
          "name": "Jalisco"
        },
        {
          "name": "Guanajuato"
        },
        {
          "name": "Durango"
        },
        {
          "name": "Colima"
        },
        {
          "name": "Coahuila"
        },
        {
          "name": "Chihuahua"
        },
        {
          "name": "Baja California Sur"
        },
        {
          "name": "Baja California"
        },
        {
          "name": "Aguascalientes"
        }
      ]
    },
    {
      "name": "Malaysia",
      "countryCode": "MY",
      "countryCodeAlpha3": "MYS",
      "phone": "60",
      "currency": "MYR",
      "stateProvinces": [
        {
          "name": "Melaka"
        },
        {
          "name": "Terengganu"
        },
        {
          "name": "Selangor"
        },
        {
          "name": "Sarawak"
        },
        {
          "name": "Sabah"
        },
        {
          "name": "Perlis"
        },
        {
          "name": "Perak"
        },
        {
          "name": "Pahang"
        },
        {
          "name": "Negeri Sembilan"
        },
        {
          "name": "Kelantan"
        },
        {
          "name": "Kuala Lumpur"
        },
        {
          "name": "Penang"
        },
        {
          "name": "Kedah"
        },
        {
          "name": "Johor"
        },
        {
          "name": "Labuan"
        },
        {
          "name": "Putrajaya"
        }
      ]
    },
    {
      "name": "Mozambique",
      "countryCode": "MZ",
      "countryCodeAlpha3": "MOZ",
      "phone": "258",
      "currency": "MZN",
      "stateProvinces": [
        {
          "name": "Zambézia"
        },
        {
          "name": "Tete"
        },
        {
          "name": "Sofala"
        },
        {
          "name": "Niassa"
        },
        {
          "name": "Nampula"
        },
        {
          "name": "Maputo Province"
        },
        {
          "name": "Manica"
        },
        {
          "name": "Inhambane"
        },
        {
          "name": "Gaza"
        },
        {
          "name": "Cabo Delgado"
        },
        {
          "name": "Maputo City"
        }
      ]
    },
    {
      "name": "Namibia",
      "countryCode": "NA",
      "countryCodeAlpha3": "NAM",
      "phone": "264",
      "currency": "NAD",
      "stateProvinces": [
        {
          "name": "Zambezi"
        },
        {
          "name": "Khomas"
        },
        {
          "name": "Erongo"
        },
        {
          "name": "Hardap"
        },
        {
          "name": "Karas"
        },
        {
          "name": "Kunene"
        },
        {
          "name": "Ohangwena"
        },
        {
          "name": "Omaheke"
        },
        {
          "name": "Omusati"
        },
        {
          "name": "Oshana"
        },
        {
          "name": "Oshikoto"
        },
        {
          "name": "Otjozondjupa"
        },
        {
          "name": "Kavango East"
        },
        {
          "name": "Kavango West"
        }
      ]
    },
    {
      "name": "New Caledonia",
      "countryCode": "NC",
      "countryCodeAlpha3": "NCL",
      "phone": "687",
      "currency": "XPF",
      "stateProvinces": [
        {
          "name": "South Province"
        },
        {
          "name": "North Province"
        },
        {
          "name": "Loyalty Islands"
        }
      ]
    },
    {
      "name": "Niger",
      "countryCode": "NE",
      "countryCodeAlpha3": "NER",
      "phone": "227",
      "currency": "XOF",
      "stateProvinces": [
        {
          "name": "Zinder"
        },
        {
          "name": "Tahoua"
        },
        {
          "name": "Maradi"
        },
        {
          "name": "Dosso"
        },
        {
          "name": "Diffa"
        },
        {
          "name": "Agadez"
        },
        {
          "name": "Tillabéri"
        },
        {
          "name": "Niamey"
        }
      ]
    },
    {
      "name": "Nigeria",
      "countryCode": "NG",
      "countryCodeAlpha3": "NGA",
      "phone": "234",
      "currency": "NGN",
      "stateProvinces": [
        {
          "name": "Sokoto"
        },
        {
          "name": "Rivers"
        },
        {
          "name": "Plateau"
        },
        {
          "name": "Oyo"
        },
        {
          "name": "Ondo"
        },
        {
          "name": "Ogun"
        },
        {
          "name": "Niger"
        },
        {
          "name": "Lagos"
        },
        {
          "name": "Kwara"
        },
        {
          "name": "Katsina"
        },
        {
          "name": "Kano"
        },
        {
          "name": "Kaduna"
        },
        {
          "name": "Imo"
        },
        {
          "name": "Cross River"
        },
        {
          "name": "Borno"
        },
        {
          "name": "Benue"
        },
        {
          "name": "Bauchi"
        },
        {
          "name": "Anambra"
        },
        {
          "name": "Akwa Ibom"
        },
        {
          "name": "FCT"
        },
        {
          "name": "Abia"
        },
        {
          "name": "Delta"
        },
        {
          "name": "Adamawa"
        },
        {
          "name": "Edo"
        },
        {
          "name": "Enugu"
        },
        {
          "name": "Jigawa"
        },
        {
          "name": "Bayelsa"
        },
        {
          "name": "Ebonyi"
        },
        {
          "name": "Ekiti"
        },
        {
          "name": "Gombe"
        },
        {
          "name": "Nassarawa"
        },
        {
          "name": "Zamfara"
        },
        {
          "name": "Kebbi"
        },
        {
          "name": "Kogi"
        },
        {
          "name": "Osun"
        },
        {
          "name": "Taraba"
        },
        {
          "name": "Yobe"
        }
      ]
    },
    {
      "name": "Nicaragua",
      "countryCode": "NI",
      "countryCodeAlpha3": "NIC",
      "phone": "505",
      "currency": "NIO",
      "stateProvinces": [
        {
          "name": "Rivas"
        },
        {
          "name": "Río San Juan Department"
        },
        {
          "name": "Nueva Segovia Department"
        },
        {
          "name": "Matagalpa Department"
        },
        {
          "name": "Masaya Department"
        },
        {
          "name": "Managua Department"
        },
        {
          "name": "Madriz Department"
        },
        {
          "name": "León Department"
        },
        {
          "name": "Jinotega Department"
        },
        {
          "name": "Granada Department"
        },
        {
          "name": "Estelí Department"
        },
        {
          "name": "Chontales Department"
        },
        {
          "name": "Chinandega"
        },
        {
          "name": "Carazo Department"
        },
        {
          "name": "Boaco Department"
        },
        {
          "name": "North Caribbean Coast"
        },
        {
          "name": "South Caribbean Coast"
        }
      ]
    },
    {
      "name": "Netherlands",
      "countryCode": "NL",
      "countryCodeAlpha3": "NLD",
      "phone": "31",
      "currency": "EUR",
      "stateProvinces": [
        {
          "name": "South Holland"
        },
        {
          "name": "Zeeland"
        },
        {
          "name": "Utrecht"
        },
        {
          "name": "Overijssel"
        },
        {
          "name": "North Holland"
        },
        {
          "name": "North Brabant"
        },
        {
          "name": "Limburg"
        },
        {
          "name": "Groningen"
        },
        {
          "name": "Gelderland"
        },
        {
          "name": "Friesland"
        },
        {
          "name": "Drenthe"
        },
        {
          "name": "Flevoland"
        }
      ]
    },
    {
      "name": "Norway",
      "countryCode": "NO",
      "countryCodeAlpha3": "NOR",
      "phone": "47",
      "currency": "NOK",
      "stateProvinces": [
        {
          "name": "Rogaland"
        },
        {
          "name": "Oslo"
        },
        {
          "name": "Nordland"
        },
        {
          "name": "Møre og Romsdal"
        },
        {
          "name": "Trøndelag"
        },
        {
          "name": "Viken"
        },
        {
          "name": "Agder"
        },
        {
          "name": "Troms og Finnmark"
        },
        {
          "name": "Innlandet"
        },
        {
          "name": "Vestfold og Telemark"
        },
        {
          "name": "Vestland"
        }
      ]
    },
    {
      "name": "Nepal",
      "countryCode": "NP",
      "countryCodeAlpha3": "NPL",
      "phone": "977",
      "currency": "NPR",
      "stateProvinces": [
        {
          "name": "Province 1"
        },
        {
          "name": "Province 2"
        },
        {
          "name": "Bagmati Province"
        },
        {
          "name": "Province 4"
        },
        {
          "name": "Lumbini Province"
        },
        {
          "name": "Karnali Pradesh"
        },
        {
          "name": "Sudurpashchim Pradesh"
        }
      ]
    },
    {
      "name": "Nauru",
      "countryCode": "NR",
      "countryCodeAlpha3": "NRU",
      "phone": "674",
      "currency": "AUD",
      "stateProvinces": [
        {
          "name": "Yaren"
        },
        {
          "name": "Uaboe"
        },
        {
          "name": "Nibok"
        },
        {
          "name": "Meneng"
        },
        {
          "name": "Ijuw"
        },
        {
          "name": "Ewa"
        },
        {
          "name": "Denigomodu"
        },
        {
          "name": "Buada"
        },
        {
          "name": "Boe"
        },
        {
          "name": "Baiti"
        },
        {
          "name": "Anibare"
        },
        {
          "name": "Anetan"
        },
        {
          "name": "Anabar"
        },
        {
          "name": "Aiwo"
        }
      ]
    },
    {
      "name": "New Zealand",
      "countryCode": "NZ",
      "countryCodeAlpha3": "NZL",
      "phone": "64",
      "currency": "NZD",
      "stateProvinces": [
        {
          "name": "Wellington"
        },
        {
          "name": "Manawatu-Wanganui"
        },
        {
          "name": "Waikato"
        },
        {
          "name": "Tasman"
        },
        {
          "name": "Taranaki"
        },
        {
          "name": "Southland"
        },
        {
          "name": "Bay of Plenty"
        },
        {
          "name": "Northland"
        },
        {
          "name": "Marlborough"
        },
        {
          "name": "Hawke's Bay"
        },
        {
          "name": "Gisborne"
        },
        {
          "name": "Canterbury"
        },
        {
          "name": "Auckland"
        },
        {
          "name": "Chatham Islands"
        },
        {
          "name": "Nelson"
        },
        {
          "name": "Otago"
        },
        {
          "name": "West Coast"
        }
      ]
    },
    {
      "name": "Oman",
      "countryCode": "OM",
      "countryCodeAlpha3": "OMN",
      "phone": "968",
      "currency": "OMR",
      "stateProvinces": [
        {
          "name": "Ad Dakhiliyah"
        },
        {
          "name": "Al Batinah South"
        },
        {
          "name": "Al Wusta Governorate"
        },
        {
          "name": "Southeastern Governorate"
        },
        {
          "name": "Ad Dhahirah"
        },
        {
          "name": "Muscat"
        },
        {
          "name": "Musandam Governorate"
        },
        {
          "name": "Dhofar"
        },
        {
          "name": "Al Buraimi"
        },
        {
          "name": "Northeastern Governorate"
        },
        {
          "name": "Al Batinah North"
        }
      ]
    },
    {
      "name": "Panama",
      "countryCode": "PA",
      "countryCodeAlpha3": "PAN",
      "phone": "507",
      "currency": "PAB",
      "stateProvinces": [
        {
          "name": "Veraguas"
        },
        {
          "name": "Guna Yala"
        },
        {
          "name": "Panamá"
        },
        {
          "name": "Los Santos"
        },
        {
          "name": "Herrera"
        },
        {
          "name": "Darién"
        },
        {
          "name": "Colón"
        },
        {
          "name": "Coclé"
        },
        {
          "name": "Chiriquí Province"
        },
        {
          "name": "Bocas del Toro Province"
        },
        {
          "name": "Emberá"
        },
        {
          "name": "Ngöbe-Buglé"
        },
        {
          "name": "Panamá Oeste Province"
        }
      ]
    },
    {
      "name": "Peru",
      "countryCode": "PE",
      "countryCodeAlpha3": "PER",
      "phone": "51",
      "currency": "PEN",
      "stateProvinces": [
        {
          "name": "Ucayali"
        },
        {
          "name": "Tumbes"
        },
        {
          "name": "San Martín"
        },
        {
          "name": "Piura"
        },
        {
          "name": "Loreto"
        },
        {
          "name": "Lambayeque"
        },
        {
          "name": "La Libertad"
        },
        {
          "name": "Huanuco"
        },
        {
          "name": "Cajamarca"
        },
        {
          "name": "Ancash"
        },
        {
          "name": "Amazonas"
        },
        {
          "name": "Tacna"
        },
        {
          "name": "Puno"
        },
        {
          "name": "Pasco"
        },
        {
          "name": "Moquegua"
        },
        {
          "name": "Madre de Dios"
        },
        {
          "name": "Lima"
        },
        {
          "name": "Lima region"
        },
        {
          "name": "Junin"
        },
        {
          "name": "Ica"
        },
        {
          "name": "Huancavelica"
        },
        {
          "name": "Cusco"
        },
        {
          "name": "Callao"
        },
        {
          "name": "Ayacucho"
        },
        {
          "name": "Arequipa"
        },
        {
          "name": "Apurímac"
        }
      ]
    },
    {
      "name": "French Polynesia",
      "countryCode": "PF",
      "countryCodeAlpha3": "PYF",
      "phone": "689",
      "currency": "XPF",
      "stateProvinces": [
        {
          "name": "Îles Marquises"
        },
        {
          "name": "Îles Tuamotu-Gambier"
        },
        {
          "name": "Leeward Islands"
        },
        {
          "name": "Îles du Vent"
        },
        {
          "name": "Îles Australes"
        }
      ]
    },
    {
      "name": "Papua New Guinea",
      "countryCode": "PG",
      "countryCodeAlpha3": "PNG",
      "phone": "675",
      "currency": "PGK",
      "stateProvinces": [
        {
          "name": "West New Britain"
        },
        {
          "name": "Western Province"
        },
        {
          "name": "Western Highlands"
        },
        {
          "name": "Southern Highlands"
        },
        {
          "name": "Sandaun"
        },
        {
          "name": "Bougainville"
        },
        {
          "name": "Northern Province"
        },
        {
          "name": "New Ireland"
        },
        {
          "name": "National Capital"
        },
        {
          "name": "Morobe"
        },
        {
          "name": "Manus"
        },
        {
          "name": "Madang"
        },
        {
          "name": "Gulf"
        },
        {
          "name": "Enga"
        },
        {
          "name": "East Sepik"
        },
        {
          "name": "East New Britain"
        },
        {
          "name": "Eastern Highlands"
        },
        {
          "name": "Chimbu"
        },
        {
          "name": "Milne Bay"
        },
        {
          "name": "Central Province"
        },
        {
          "name": "Hela"
        },
        {
          "name": "Jiwaka"
        }
      ]
    },
    {
      "name": "Philippines",
      "countryCode": "PH",
      "countryCodeAlpha3": "PHL",
      "phone": "63",
      "currency": "PHP",
      "stateProvinces": [
        {
          "name": "Autonomous Region in Muslim Mindanao"
        },
        {
          "name": "Northern Mindanao"
        },
        {
          "name": "Mimaropa"
        },
        {
          "name": "Cagayan Valley"
        },
        {
          "name": "Soccsksargen"
        },
        {
          "name": "Caraga"
        },
        {
          "name": "Cordillera"
        },
        {
          "name": "Ilocos"
        },
        {
          "name": "Calabarzon"
        },
        {
          "name": "Western Visayas"
        },
        {
          "name": "Central Luzon"
        },
        {
          "name": "Central Visayas"
        },
        {
          "name": "Eastern Visayas"
        },
        {
          "name": "Zamboanga Peninsula"
        },
        {
          "name": "Davao"
        },
        {
          "name": "Bicol"
        },
        {
          "name": "Metro Manila"
        }
      ]
    },
    {
      "name": "Pakistan",
      "countryCode": "PK",
      "countryCodeAlpha3": "PAK",
      "phone": "92",
      "currency": "PKR",
      "stateProvinces": [
        {
          "name": "Islamabad"
        },
        {
          "name": "Sindh"
        },
        {
          "name": "Punjab"
        },
        {
          "name": "Khyber Pakhtunkhwa"
        },
        {
          "name": "Gilgit-Baltistan"
        },
        {
          "name": "Balochistan"
        },
        {
          "name": "Azad Kashmir"
        }
      ]
    },
    {
      "name": "Poland",
      "countryCode": "PL",
      "countryCodeAlpha3": "POL",
      "phone": "48",
      "currency": "PLN",
      "stateProvinces": [
        {
          "name": "Lublin"
        },
        {
          "name": "Lesser Poland"
        },
        {
          "name": "Mazovia"
        },
        {
          "name": "Subcarpathia"
        },
        {
          "name": "Podlasie"
        },
        {
          "name": "Świętokrzyskie"
        },
        {
          "name": "Warmia-Masuria"
        },
        {
          "name": "Lower Silesia"
        },
        {
          "name": "Łódź Voivodeship"
        },
        {
          "name": "Lubusz"
        },
        {
          "name": "Opole Voivodeship"
        },
        {
          "name": "Pomerania"
        },
        {
          "name": "Silesia"
        },
        {
          "name": "Greater Poland"
        },
        {
          "name": "West Pomerania"
        },
        {
          "name": "Kujawsko-Pomorskie"
        }
      ]
    },
    {
      "name": "Saint Pierre and Miquelon",
      "countryCode": "PM",
      "countryCodeAlpha3": "SPM",
      "phone": "508",
      "currency": "EUR",
      "stateProvinces": [
        {
          "name": "Saint-Pierre"
        },
        {
          "name": "Miquelon-Langlade"
        }
      ]
    },
    {
      "name": "Puerto Rico",
      "countryCode": "PR",
      "countryCodeAlpha3": "PRI",
      "phone": "+1-787 and 1-939",
      "currency": "USD",
      "stateProvinces": [
        {
          "name": "Adjuntas"
        },
        {
          "name": "Aguada"
        },
        {
          "name": "Aguadilla"
        },
        {
          "name": "Aguas Buenas"
        },
        {
          "name": "Aibonito"
        },
        {
          "name": "Añasco"
        },
        {
          "name": "Arecibo"
        },
        {
          "name": "Arroyo"
        },
        {
          "name": "Barceloneta"
        },
        {
          "name": "Barranquitas"
        },
        {
          "name": "Bayamón"
        },
        {
          "name": "Cabo Rojo"
        },
        {
          "name": "Caguas"
        },
        {
          "name": "Camuy"
        },
        {
          "name": "Canóvanas"
        },
        {
          "name": "Carolina"
        },
        {
          "name": "Cataño"
        },
        {
          "name": "Cayey"
        },
        {
          "name": "Ceiba"
        },
        {
          "name": "Ciales"
        },
        {
          "name": "Cidra"
        },
        {
          "name": "Coamo"
        },
        {
          "name": "Comerío"
        },
        {
          "name": "Corozal"
        },
        {
          "name": "Culebra"
        },
        {
          "name": "Dorado"
        },
        {
          "name": "Fajardo"
        },
        {
          "name": "Florida"
        },
        {
          "name": "Guánica"
        },
        {
          "name": "Guayama"
        },
        {
          "name": "Guayanilla"
        },
        {
          "name": "Guaynabo"
        },
        {
          "name": "Gurabo"
        },
        {
          "name": "Hatillo"
        },
        {
          "name": "Hormigueros"
        },
        {
          "name": "Humacao"
        },
        {
          "name": "Isabela"
        },
        {
          "name": "Jayuya"
        },
        {
          "name": "Juana Díaz"
        },
        {
          "name": "Juncos"
        },
        {
          "name": "Lajas"
        },
        {
          "name": "Lares"
        },
        {
          "name": "Las Marías"
        },
        {
          "name": "Las Piedras"
        },
        {
          "name": "Loíza"
        },
        {
          "name": "Luquillo"
        },
        {
          "name": "Manatí"
        },
        {
          "name": "Maricao"
        },
        {
          "name": "Maunabo"
        },
        {
          "name": "Mayagüez"
        },
        {
          "name": "Moca"
        },
        {
          "name": "Morovis"
        },
        {
          "name": "Naguabo"
        },
        {
          "name": "Naranjito"
        },
        {
          "name": "Orocovis"
        },
        {
          "name": "Patillas"
        },
        {
          "name": "Peñuelas"
        },
        {
          "name": "Ponce"
        },
        {
          "name": "Rincón"
        },
        {
          "name": "Quebradillas"
        },
        {
          "name": "Río Grande"
        },
        {
          "name": "Sabana Grande"
        },
        {
          "name": "Salinas"
        },
        {
          "name": "San Germán"
        },
        {
          "name": "San Juan"
        },
        {
          "name": "San Lorenzo"
        },
        {
          "name": "San Sebastián"
        },
        {
          "name": "Santa Isabel"
        },
        {
          "name": "Toa Alta"
        },
        {
          "name": "Toa Baja"
        },
        {
          "name": "Trujillo Alto"
        },
        {
          "name": "Utuado"
        },
        {
          "name": "Vega Alta"
        },
        {
          "name": "Vega Baja"
        },
        {
          "name": "Villalba"
        },
        {
          "name": "Yabucoa"
        },
        {
          "name": "Yauco"
        },
        {
          "name": "Vieques"
        }
      ]
    },
    {
      "name": "Palestinian Territory",
      "countryCode": "PS",
      "countryCodeAlpha3": "PSE",
      "phone": "970",
      "currency": "ILS",
      "stateProvinces": [
        {
          "name": "Gaza Strip"
        },
        {
          "name": "West Bank"
        }
      ]
    },
    {
      "name": "Portugal",
      "countryCode": "PT",
      "countryCodeAlpha3": "PRT",
      "phone": "351",
      "currency": "EUR",
      "stateProvinces": [
        {
          "name": "District of Setúbal"
        },
        {
          "name": "Santarém"
        },
        {
          "name": "Portalegre"
        },
        {
          "name": "Lisbon"
        },
        {
          "name": "Leiria"
        },
        {
          "name": "Faro"
        },
        {
          "name": "Évora"
        },
        {
          "name": "Castelo Branco"
        },
        {
          "name": "Beja"
        },
        {
          "name": "Madeira"
        },
        {
          "name": "Viseu"
        },
        {
          "name": "Vila Real"
        },
        {
          "name": "Viana do Castelo"
        },
        {
          "name": "Porto"
        },
        {
          "name": "Guarda"
        },
        {
          "name": "Coimbra"
        },
        {
          "name": "Bragança"
        },
        {
          "name": "Braga"
        },
        {
          "name": "Aveiro"
        },
        {
          "name": "Azores"
        }
      ]
    },
    {
      "name": "Palau",
      "countryCode": "PW",
      "countryCodeAlpha3": "PLW",
      "phone": "680",
      "currency": "USD",
      "stateProvinces": [
        {
          "name": "Ngatpang"
        },
        {
          "name": "Sonsorol"
        },
        {
          "name": "Kayangel"
        },
        {
          "name": "Hatohobei"
        },
        {
          "name": "Aimeliik"
        },
        {
          "name": "Airai"
        },
        {
          "name": "Angaur"
        },
        {
          "name": "Koror"
        },
        {
          "name": "Melekeok"
        },
        {
          "name": "Ngaraard"
        },
        {
          "name": "Ngchesar"
        },
        {
          "name": "Ngarchelong"
        },
        {
          "name": "Ngardmau"
        },
        {
          "name": "Ngaremlengui"
        },
        {
          "name": "Ngiwal"
        },
        {
          "name": "Peleliu"
        }
      ]
    },
    {
      "name": "Paraguay",
      "countryCode": "PY",
      "countryCodeAlpha3": "PRY",
      "phone": "595",
      "currency": "PYG",
      "stateProvinces": [
        {
          "name": "San Pedro"
        },
        {
          "name": "Presidente Hayes"
        },
        {
          "name": "Paraguarí"
        },
        {
          "name": "Ñeembucú"
        },
        {
          "name": "Misiones"
        },
        {
          "name": "Itapúa"
        },
        {
          "name": "Guairá"
        },
        {
          "name": "Cordillera"
        },
        {
          "name": "Concepción"
        },
        {
          "name": "Central"
        },
        {
          "name": "Canindeyú"
        },
        {
          "name": "Caazapá"
        },
        {
          "name": "Caaguazú"
        },
        {
          "name": "Amambay"
        },
        {
          "name": "Alto Paraná"
        },
        {
          "name": "Alto Paraguay"
        },
        {
          "name": "Asunción"
        },
        {
          "name": "Boquerón"
        }
      ]
    },
    {
      "name": "Qatar",
      "countryCode": "QA",
      "countryCodeAlpha3": "QAT",
      "phone": "974",
      "currency": "QAR",
      "stateProvinces": [
        {
          "name": "Madīnat ash Shamāl"
        },
        {
          "name": "Al Khor"
        },
        {
          "name": "Baladīyat Umm Şalāl"
        },
        {
          "name": "Baladīyat ar Rayyān"
        },
        {
          "name": "Baladīyat ad Dawḩah"
        },
        {
          "name": "Al Wakrah"
        },
        {
          "name": "Baladīyat az̧ Z̧a‘āyin"
        },
        {
          "name": "Al-Shahaniya"
        }
      ]
    },
    {
      "name": "Reunion",
      "countryCode": "RE",
      "countryCodeAlpha3": "REU",
      "phone": "262",
      "currency": "EUR",
      "stateProvinces": [
        {
          "name": "Réunion"
        }
      ]
    },
    {
      "name": "Romania",
      "countryCode": "RO",
      "countryCodeAlpha3": "ROU",
      "phone": "40",
      "currency": "RON",
      "stateProvinces": [
        {
          "name": "Vrancea"
        },
        {
          "name": "Vâlcea"
        },
        {
          "name": "Vaslui"
        },
        {
          "name": "Tulcea"
        },
        {
          "name": "Timiș"
        },
        {
          "name": "Teleorman"
        },
        {
          "name": "Suceava"
        },
        {
          "name": "Sibiu"
        },
        {
          "name": "Satu Mare"
        },
        {
          "name": "Sălaj"
        },
        {
          "name": "Prahova"
        },
        {
          "name": "Olt"
        },
        {
          "name": "Neamț"
        },
        {
          "name": "Mureș"
        },
        {
          "name": "Mehedinți"
        },
        {
          "name": "Maramureş"
        },
        {
          "name": "Iași"
        },
        {
          "name": "Ialomița"
        },
        {
          "name": "Hunedoara"
        },
        {
          "name": "Harghita"
        },
        {
          "name": "Gorj"
        },
        {
          "name": "Giurgiu"
        },
        {
          "name": "Galați"
        },
        {
          "name": "Dolj"
        },
        {
          "name": "Dâmbovița"
        },
        {
          "name": "Covasna"
        },
        {
          "name": "Constanța"
        },
        {
          "name": "Cluj"
        },
        {
          "name": "Caraș-Severin"
        },
        {
          "name": "Călărași"
        },
        {
          "name": "Buzău"
        },
        {
          "name": "București"
        },
        {
          "name": "Brașov"
        },
        {
          "name": "Brăila"
        },
        {
          "name": "Botoșani"
        },
        {
          "name": "Bistrița-Năsăud"
        },
        {
          "name": "Bihor"
        },
        {
          "name": "Bacău"
        },
        {
          "name": "Arges"
        },
        {
          "name": "Arad"
        },
        {
          "name": "Alba"
        },
        {
          "name": "Ilfov"
        }
      ]
    },
    {
      "name": "Serbia",
      "countryCode": "RS",
      "countryCodeAlpha3": "SRB",
      "phone": "381",
      "currency": "RSD",
      "stateProvinces": [
        {
          "name": "Vojvodina"
        },
        {
          "name": "Central Serbia"
        }
      ]
    },
    {
      "name": "Russia",
      "countryCode": "RU",
      "countryCodeAlpha3": "RUS",
      "phone": "7",
      "currency": "RUB",
      "stateProvinces": [
        {
          "name": "Yaroslavl Oblast"
        },
        {
          "name": "Voronezh Oblast"
        },
        {
          "name": "Vologda Oblast"
        },
        {
          "name": "Volgograd Oblast"
        },
        {
          "name": "Ulyanovsk"
        },
        {
          "name": "Udmurtiya Republic"
        },
        {
          "name": "Tver Oblast"
        },
        {
          "name": "Tula Oblast"
        },
        {
          "name": "Tatarstan Republic"
        },
        {
          "name": "Tambov Oblast"
        },
        {
          "name": "Stavropol Kray"
        },
        {
          "name": "Smolensk Oblast"
        },
        {
          "name": "Saratov Oblast"
        },
        {
          "name": "Samara Oblast"
        },
        {
          "name": "Ryazan Oblast"
        },
        {
          "name": "Rostov"
        },
        {
          "name": "Pskov Oblast"
        },
        {
          "name": "Perm Krai"
        },
        {
          "name": "Penza Oblast"
        },
        {
          "name": "Oryol oblast"
        },
        {
          "name": "Orenburg Oblast"
        },
        {
          "name": "Novgorod Oblast"
        },
        {
          "name": "North Ossetia–Alania"
        },
        {
          "name": "Nenets"
        },
        {
          "name": "Murmansk"
        },
        {
          "name": "Moscow"
        },
        {
          "name": "Moscow Oblast"
        },
        {
          "name": "Mordoviya Republic"
        },
        {
          "name": "Mariy-El Republic"
        },
        {
          "name": "Lipetsk Oblast"
        },
        {
          "name": "Leningradskaya Oblast'"
        },
        {
          "name": "St.-Petersburg"
        },
        {
          "name": "Kursk Oblast"
        },
        {
          "name": "Krasnodar Krai"
        },
        {
          "name": "Kostroma Oblast"
        },
        {
          "name": "Komi"
        },
        {
          "name": "Kirov Oblast"
        },
        {
          "name": "Karelia"
        },
        {
          "name": "Karachayevo-Cherkesiya Republic"
        },
        {
          "name": "Kaluga Oblast"
        },
        {
          "name": "Kalmykiya Republic"
        },
        {
          "name": "Kaliningrad Oblast"
        },
        {
          "name": "Kabardino-Balkariya Republic"
        },
        {
          "name": "Ivanovo Oblast"
        },
        {
          "name": "Ingushetiya Republic"
        },
        {
          "name": "Nizhny Novgorod Oblast"
        },
        {
          "name": "Dagestan"
        },
        {
          "name": "Chuvashia"
        },
        {
          "name": "Chechnya"
        },
        {
          "name": "Bryansk Oblast"
        },
        {
          "name": "Belgorod Oblast"
        },
        {
          "name": "Bashkortostan Republic"
        },
        {
          "name": "Astrakhan Oblast"
        },
        {
          "name": "Arkhangelskaya"
        },
        {
          "name": "Adygeya Republic"
        },
        {
          "name": "Vladimir Oblast"
        },
        {
          "name": "Yamalo-Nenets"
        },
        {
          "name": "Tyumen Oblast"
        },
        {
          "name": "Republic of Tyva"
        },
        {
          "name": "Tomsk Oblast"
        },
        {
          "name": "Sverdlovsk Oblast"
        },
        {
          "name": "Omsk Oblast"
        },
        {
          "name": "Novosibirsk Oblast"
        },
        {
          "name": "Kurgan Oblast"
        },
        {
          "name": "Krasnoyarsk Krai"
        },
        {
          "name": "Khanty-Mansia"
        },
        {
          "name": "Khakasiya Republic"
        },
        {
          "name": "Kuzbass"
        },
        {
          "name": "Altai"
        },
        {
          "name": "Chelyabinsk"
        },
        {
          "name": "Altai Krai"
        },
        {
          "name": "Sakha"
        },
        {
          "name": "Primorye"
        },
        {
          "name": "Khabarovsk"
        },
        {
          "name": "Irkutsk Oblast"
        },
        {
          "name": "Jewish Autonomous Oblast"
        },
        {
          "name": "Amur Oblast"
        },
        {
          "name": "Buryatiya Republic"
        },
        {
          "name": "Sakhalin Oblast"
        },
        {
          "name": "Magadan Oblast"
        },
        {
          "name": "Kamchatka"
        },
        {
          "name": "Chukotka"
        },
        {
          "name": "Zabaykalskiy (Transbaikal) Kray"
        }
      ]
    },
    {
      "name": "Rwanda",
      "countryCode": "RW",
      "countryCodeAlpha3": "RWA",
      "phone": "250",
      "currency": "RWF",
      "stateProvinces": [
        {
          "name": "Eastern Province"
        },
        {
          "name": "Kigali"
        },
        {
          "name": "Northern Province"
        },
        {
          "name": "Western Province"
        },
        {
          "name": "Southern Province"
        }
      ]
    },
    {
      "name": "Saudi Arabia",
      "countryCode": "SA",
      "countryCodeAlpha3": "SAU",
      "phone": "966",
      "currency": "SAR",
      "stateProvinces": [
        {
          "name": "Tabuk Region"
        },
        {
          "name": "Najran Region"
        },
        {
          "name": "Mecca Region"
        },
        {
          "name": "Jazan Region"
        },
        {
          "name": "Ha'il Region"
        },
        {
          "name": "'Asir Region"
        },
        {
          "name": "Eastern Province"
        },
        {
          "name": "Riyadh Region"
        },
        {
          "name": "Al-Qassim Region"
        },
        {
          "name": "Medina Region"
        },
        {
          "name": "Al Jawf Region"
        },
        {
          "name": "Northern Borders Region"
        },
        {
          "name": "Al Bahah Region"
        }
      ]
    },
    {
      "name": "Solomon Islands",
      "countryCode": "SB",
      "countryCodeAlpha3": "SLB",
      "phone": "677",
      "currency": "SBD",
      "stateProvinces": [
        {
          "name": "Western Province"
        },
        {
          "name": "Malaita"
        },
        {
          "name": "Isabel"
        },
        {
          "name": "Guadalcanal"
        },
        {
          "name": "Central Province"
        },
        {
          "name": "Temotu"
        },
        {
          "name": "Makira"
        },
        {
          "name": "Choiseul"
        },
        {
          "name": "Rennell and Bellona"
        },
        {
          "name": "Honiara"
        }
      ]
    },
    {
      "name": "Seychelles",
      "countryCode": "SC",
      "countryCodeAlpha3": "SYC",
      "phone": "248",
      "currency": "SCR",
      "stateProvinces": [
        {
          "name": "Takamaka"
        },
        {
          "name": "Saint Louis"
        },
        {
          "name": "Port Glaud"
        },
        {
          "name": "Pointe Larue"
        },
        {
          "name": "Plaisance"
        },
        {
          "name": "Mont Fleuri"
        },
        {
          "name": "Mont Buxton"
        },
        {
          "name": "English River"
        },
        {
          "name": "La Digue"
        },
        {
          "name": "Grand Anse Mahe"
        },
        {
          "name": "Grand Anse Praslin"
        },
        {
          "name": "Glacis"
        },
        {
          "name": "Cascade"
        },
        {
          "name": "Bel Ombre"
        },
        {
          "name": "Bel Air"
        },
        {
          "name": "Beau Vallon"
        },
        {
          "name": "Baie Sainte Anne"
        },
        {
          "name": "Baie Lazare"
        },
        {
          "name": "Anse Royale"
        },
        {
          "name": "Anse Etoile"
        },
        {
          "name": "Anse Boileau"
        },
        {
          "name": "Anse-aux-Pins"
        },
        {
          "name": "Les Mamelles"
        },
        {
          "name": "Roche Caiman"
        },
        {
          "name": "Au Cap"
        },
        {
          "name": "Outer Islands"
        },
        {
          "name": "Ile Perseverance I"
        },
        {
          "name": "Ile Perseverance II"
        }
      ]
    },
    {
      "name": "Sudan",
      "countryCode": "SD",
      "countryCodeAlpha3": "SDN",
      "phone": "249",
      "currency": "SDG",
      "stateProvinces": [
        {
          "name": "Northern State"
        },
        {
          "name": "Khartoum"
        },
        {
          "name": "Red Sea"
        },
        {
          "name": "Al Jazīrah"
        },
        {
          "name": "Al Qaḑārif"
        },
        {
          "name": "White Nile"
        },
        {
          "name": "Blue Nile"
        },
        {
          "name": "Western Darfur"
        },
        {
          "name": "West Kordofan State"
        },
        {
          "name": "Southern Darfur"
        },
        {
          "name": "Southern Kordofan"
        },
        {
          "name": "Kassala"
        },
        {
          "name": "River Nile"
        },
        {
          "name": "Northern Darfur"
        },
        {
          "name": "North Kordofan"
        },
        {
          "name": "Sinnār"
        },
        {
          "name": "Eastern Darfur"
        },
        {
          "name": "Central Darfur"
        }
      ]
    },
    {
      "name": "South Sudan",
      "countryCode": "SS",
      "countryCodeAlpha3": "SSD",
      "phone": "211",
      "currency": "SSP",
      "stateProvinces": [
        {
          "name": "Upper Nile"
        },
        {
          "name": "Lakes"
        },
        {
          "name": "Unity"
        },
        {
          "name": "Central Equatoria"
        },
        {
          "name": "Western Equatoria"
        },
        {
          "name": "Western Bahr al Ghazal"
        },
        {
          "name": "Jonglei"
        },
        {
          "name": "Northern Bahr al Ghazal"
        },
        {
          "name": "Eastern Equatoria"
        },
        {
          "name": "Warrap"
        }
      ]
    },
    {
      "name": "Sweden",
      "countryCode": "SE",
      "countryCodeAlpha3": "SWE",
      "phone": "46",
      "currency": "SEK",
      "stateProvinces": [
        {
          "name": "Norrbotten"
        },
        {
          "name": "Västmanland"
        },
        {
          "name": "Västernorrland"
        },
        {
          "name": "Västerbotten"
        },
        {
          "name": "Värmland"
        },
        {
          "name": "Uppsala"
        },
        {
          "name": "Stockholm"
        },
        {
          "name": "Södermanland"
        },
        {
          "name": "Östergötland"
        },
        {
          "name": "Örebro"
        },
        {
          "name": "Kronoberg"
        },
        {
          "name": "Dalarna"
        },
        {
          "name": "Kalmar"
        },
        {
          "name": "Jönköping"
        },
        {
          "name": "Jämtland"
        },
        {
          "name": "Halland"
        },
        {
          "name": "Gotland"
        },
        {
          "name": "Gävleborg"
        },
        {
          "name": "Blekinge"
        },
        {
          "name": "Skåne"
        },
        {
          "name": "Västra Götaland"
        }
      ]
    },
    {
      "name": "Saint Helena",
      "countryCode": "SH",
      "countryCodeAlpha3": "SHN",
      "phone": "290",
      "currency": "SHP",
      "stateProvinces": [
        {
          "name": "Ascension"
        },
        {
          "name": "Tristan da Cunha"
        },
        {
          "name": "Saint Helena"
        }
      ]
    },
    {
      "name": "Slovenia",
      "countryCode": "SI",
      "countryCodeAlpha3": "SVN",
      "phone": "386",
      "currency": "EUR",
      "stateProvinces": [
        {
          "name": "Žalec"
        },
        {
          "name": "Zagorje ob Savi"
        },
        {
          "name": "Vrhnika"
        },
        {
          "name": "Tržič"
        },
        {
          "name": "Trebnje"
        },
        {
          "name": "Trbovlje"
        },
        {
          "name": "Tolmin"
        },
        {
          "name": "Velenje"
        },
        {
          "name": "Šmarje pri Jelšah"
        },
        {
          "name": "Slovenska Konjice"
        },
        {
          "name": "Slovenska Bistrica"
        },
        {
          "name": "Slovenj Gradec"
        },
        {
          "name": "Škofja Loka"
        },
        {
          "name": "Sežana"
        },
        {
          "name": "Sevnica"
        },
        {
          "name": "Sentjur"
        },
        {
          "name": "Ribnica"
        },
        {
          "name": "Radovljica"
        },
        {
          "name": "Radlje ob Dravi"
        },
        {
          "name": "Ptuj"
        },
        {
          "name": "Postojna"
        },
        {
          "name": "Piran-Pirano"
        },
        {
          "name": "Ormož"
        },
        {
          "name": "Novo Mesto"
        },
        {
          "name": "Nova Gorica"
        },
        {
          "name": "Murska Sobota"
        },
        {
          "name": "Mozirje"
        },
        {
          "name": "Metlika"
        },
        {
          "name": "Maribor"
        },
        {
          "name": "Logatec"
        },
        {
          "name": "Ljutomer"
        },
        {
          "name": "Litija"
        },
        {
          "name": "Lenart"
        },
        {
          "name": "Laško"
        },
        {
          "name": "Krško"
        },
        {
          "name": "Kranj"
        },
        {
          "name": "Koper-Capodistria"
        },
        {
          "name": "Kočevje"
        },
        {
          "name": "Kamnik"
        },
        {
          "name": "Jesenice"
        },
        {
          "name": "Izola-Isola"
        },
        {
          "name": "Ilirska Bistrica"
        },
        {
          "name": "Idrija"
        },
        {
          "name": "Hrastnik"
        },
        {
          "name": "Grosuplje"
        },
        {
          "name": "Gornja Radgona"
        },
        {
          "name": "Dravograd"
        },
        {
          "name": "Domžale"
        },
        {
          "name": "Črnomelj"
        },
        {
          "name": "Cerknica"
        },
        {
          "name": "Celje"
        },
        {
          "name": "Brežice"
        },
        {
          "name": "Ajdovščina"
        },
        {
          "name": "Hrpelje-Kozina"
        },
        {
          "name": "Divača"
        },
        {
          "name": "Pivka"
        },
        {
          "name": "Loška Dolina"
        },
        {
          "name": "Loški Potok"
        },
        {
          "name": "Osilnica"
        },
        {
          "name": "Velike Lašče"
        },
        {
          "name": "Škofljica"
        },
        {
          "name": "Ig"
        },
        {
          "name": "Brezovica"
        },
        {
          "name": "Borovnica"
        },
        {
          "name": "Vipava"
        },
        {
          "name": "Komen"
        },
        {
          "name": "Miren-Kostanjevica"
        },
        {
          "name": "Brda"
        },
        {
          "name": "Kanal"
        },
        {
          "name": "Žiri"
        },
        {
          "name": "Cerkno"
        },
        {
          "name": "Železniki"
        },
        {
          "name": "Gorenja Vas-Poljane"
        },
        {
          "name": "Dobrova-Horjul-Polhov Gradec"
        },
        {
          "name": "Kobarid"
        },
        {
          "name": "Bovec"
        },
        {
          "name": "Bohinj"
        },
        {
          "name": "Bled"
        },
        {
          "name": "Naklo"
        },
        {
          "name": "Kranjska Gora"
        },
        {
          "name": "Preddvor"
        },
        {
          "name": "Cerklje na Gorenjskem"
        },
        {
          "name": "Šenčur"
        },
        {
          "name": "Vodice"
        },
        {
          "name": "Medvode"
        },
        {
          "name": "Mengeš"
        },
        {
          "name": "Dol pri Ljubljani"
        },
        {
          "name": "Moravče"
        },
        {
          "name": "Gornji Grad"
        },
        {
          "name": "Luče"
        },
        {
          "name": "Ravne na Koroškem"
        },
        {
          "name": "Mežica"
        },
        {
          "name": "Muta"
        },
        {
          "name": "Vuzenica"
        },
        {
          "name": "Črna na Koroškem"
        },
        {
          "name": "Ljubno"
        },
        {
          "name": "Šoštanj"
        },
        {
          "name": "Šmartno ob Paki"
        },
        {
          "name": "Lukovica"
        },
        {
          "name": "Radeče"
        },
        {
          "name": "Ivančna Gorica"
        },
        {
          "name": "Dobrepolje"
        },
        {
          "name": "Semič"
        },
        {
          "name": "Šentjernej"
        },
        {
          "name": "Škocjan"
        },
        {
          "name": "Štore"
        },
        {
          "name": "Vojnik"
        },
        {
          "name": "Vitanje"
        },
        {
          "name": "Zreče"
        },
        {
          "name": "Mislinja"
        },
        {
          "name": "Ruše"
        },
        {
          "name": "Kungota"
        },
        {
          "name": "Šentilj"
        },
        {
          "name": "Pesnica"
        },
        {
          "name": "Duplek"
        },
        {
          "name": "Rače-Fram"
        },
        {
          "name": "Starše"
        },
        {
          "name": "Kidričevo"
        },
        {
          "name": "Majšperk"
        },
        {
          "name": "Videm"
        },
        {
          "name": "Rogaška Slatina"
        },
        {
          "name": "Rogatec"
        },
        {
          "name": "Podčetrtek"
        },
        {
          "name": "Kozje"
        },
        {
          "name": "Gorišnica"
        },
        {
          "name": "Zavrč"
        },
        {
          "name": "Dornava"
        },
        {
          "name": "Juršinci"
        },
        {
          "name": "Sveti Jurij"
        },
        {
          "name": "Radenci"
        },
        {
          "name": "Puconci"
        },
        {
          "name": "Rogašovci"
        },
        {
          "name": "Kuzma"
        },
        {
          "name": "Gornji Petrovci"
        },
        {
          "name": "Moravske Toplice"
        },
        {
          "name": "Kobilje"
        },
        {
          "name": "Beltinci"
        },
        {
          "name": "Turnišče"
        },
        {
          "name": "Odranci"
        },
        {
          "name": "Črenšovci"
        },
        {
          "name": "Nazarje"
        },
        {
          "name": "Ljubljana"
        },
        {
          "name": "Žirovnica"
        },
        {
          "name": "Jezersko"
        },
        {
          "name": "Solčava"
        },
        {
          "name": "Komenda"
        },
        {
          "name": "Horjul"
        },
        {
          "name": "Šempeter-Vrtojba"
        },
        {
          "name": "Bloke"
        },
        {
          "name": "Sodražica"
        },
        {
          "name": "Trzin"
        },
        {
          "name": "Prevalje"
        },
        {
          "name": "Vransko"
        },
        {
          "name": "Tabor"
        },
        {
          "name": "Braslovče"
        },
        {
          "name": "Polzela"
        },
        {
          "name": "Prebold"
        },
        {
          "name": "Kostel"
        },
        {
          "name": "Žužemberk"
        },
        {
          "name": "Dolenjske Toplice"
        },
        {
          "name": "Mirna Peč"
        },
        {
          "name": "Bistrica ob Sotli"
        },
        {
          "name": "Dobje"
        },
        {
          "name": "Dobrna"
        },
        {
          "name": "Oplotnica"
        },
        {
          "name": "Podvelka"
        },
        {
          "name": "Ribnica na Pohorju"
        },
        {
          "name": "Lovrenc na Pohorju"
        },
        {
          "name": "Selnica ob Dravi"
        },
        {
          "name": "Hoče-Slivnica"
        },
        {
          "name": "Miklavž na Dravskem Polju"
        },
        {
          "name": "Hajdina"
        },
        {
          "name": "Žetale"
        },
        {
          "name": "Podlehnik"
        },
        {
          "name": "Markovci"
        },
        {
          "name": "Destrnik"
        },
        {
          "name": "Trnovska Vas"
        },
        {
          "name": "Sveti Andraž v Slovenskih Goricah"
        },
        {
          "name": "Cerkvenjak"
        },
        {
          "name": "Benedikt"
        },
        {
          "name": "Sveta Ana"
        },
        {
          "name": "Križevci"
        },
        {
          "name": "Veržej"
        },
        {
          "name": "Velika Polana"
        },
        {
          "name": "Lendava-Lendva"
        },
        {
          "name": "Dobrovnik-Dobronak"
        },
        {
          "name": "Tišina"
        },
        {
          "name": "Cankova"
        },
        {
          "name": "Grad"
        },
        {
          "name": "Hodoš-Hodos"
        },
        {
          "name": "Razkrižje"
        },
        {
          "name": "Šmartno pri Litiji"
        },
        {
          "name": "Šalovci"
        },
        {
          "name": "Apače"
        },
        {
          "name": "Cirkulane"
        },
        {
          "name": "Kostanjevica na Krki"
        },
        {
          "name": "Log–Dragomer"
        },
        {
          "name": "Makole"
        },
        {
          "name": "Mokronog-Trebelno"
        },
        {
          "name": "Poljčane"
        },
        {
          "name": "Rečica ob Savinji"
        },
        {
          "name": "Renče-Vogrsko"
        },
        {
          "name": "Središče ob Dravi"
        },
        {
          "name": "Straža"
        },
        {
          "name": "Sv. Trojica v Slov. Goricah"
        },
        {
          "name": "Sveti Tomaž"
        },
        {
          "name": "Šentrupert"
        },
        {
          "name": "Šmarješke Toplice"
        },
        {
          "name": "Sveti Jurij v Slovenskih Goricah"
        },
        {
          "name": "Gorje"
        },
        {
          "name": "Ankaran"
        },
        {
          "name": "Mirna"
        }
      ]
    },
    {
      "name": "Svalbard and Jan Mayen",
      "countryCode": "SJ",
      "countryCodeAlpha3": "SJM",
      "phone": "47",
      "currency": "NOK",
      "stateProvinces": [
        {
          "name": "Jan Mayen"
        },
        {
          "name": "Svalbard"
        }
      ]
    },
    {
      "name": "Slovakia",
      "countryCode": "SK",
      "countryCodeAlpha3": "SVK",
      "phone": "421",
      "currency": "EUR",
      "stateProvinces": [
        {
          "name": "Košický kraj"
        },
        {
          "name": "Prešovský kraj"
        },
        {
          "name": "Žilinský kraj"
        },
        {
          "name": "Banskobystrický kraj"
        },
        {
          "name": "Bratislavský Kraj"
        },
        {
          "name": "Nitriansky kraj"
        },
        {
          "name": "Trenčiansky kraj"
        },
        {
          "name": "Trnava"
        }
      ]
    },
    {
      "name": "Sierra Leone",
      "countryCode": "SL",
      "countryCodeAlpha3": "SLE",
      "phone": "232",
      "currency": "SLL",
      "stateProvinces": [
        {
          "name": "Western Area"
        },
        {
          "name": "Southern Province"
        },
        {
          "name": "Northern Province"
        },
        {
          "name": "Eastern Province"
        },
        {
          "name": "North West"
        }
      ]
    },
    {
      "name": "San Marino",
      "countryCode": "SM",
      "countryCodeAlpha3": "SMR",
      "phone": "378",
      "currency": "EUR",
      "stateProvinces": [
        {
          "name": "Serravalle"
        },
        {
          "name": "Chiesanuova"
        },
        {
          "name": "San Marino"
        },
        {
          "name": "Acquaviva"
        },
        {
          "name": "Borgo Maggiore"
        },
        {
          "name": "Domagnano"
        },
        {
          "name": "Faetano"
        },
        {
          "name": "Fiorentino"
        },
        {
          "name": "Montegiardino"
        }
      ]
    },
    {
      "name": "Senegal",
      "countryCode": "SN",
      "countryCodeAlpha3": "SEN",
      "phone": "221",
      "currency": "XOF",
      "stateProvinces": [
        {
          "name": "Ziguinchor"
        },
        {
          "name": "Thiès"
        },
        {
          "name": "Tambacounda"
        },
        {
          "name": "Saint-Louis"
        },
        {
          "name": "Matam"
        },
        {
          "name": "Louga"
        },
        {
          "name": "Kolda"
        },
        {
          "name": "Kaolack"
        },
        {
          "name": "Fatick"
        },
        {
          "name": "Diourbel"
        },
        {
          "name": "Dakar"
        },
        {
          "name": "Kaffrine"
        },
        {
          "name": "Kédougou"
        },
        {
          "name": "Sédhiou"
        }
      ]
    },
    {
      "name": "Somalia",
      "countryCode": "SO",
      "countryCodeAlpha3": "SOM",
      "phone": "252",
      "currency": "SOS",
      "stateProvinces": [
        {
          "name": "Woqooyi Galbeed"
        },
        {
          "name": "Togdheer"
        },
        {
          "name": "Lower Shabeelle"
        },
        {
          "name": "Middle Shabele"
        },
        {
          "name": "Sanaag"
        },
        {
          "name": "Nugaal"
        },
        {
          "name": "Mudug"
        },
        {
          "name": "Lower Juba"
        },
        {
          "name": "Middle Juba"
        },
        {
          "name": "Hiiraan"
        },
        {
          "name": "Gedo"
        },
        {
          "name": "Galguduud"
        },
        {
          "name": "Bay"
        },
        {
          "name": "Bari"
        },
        {
          "name": "Banaadir"
        },
        {
          "name": "Bakool"
        },
        {
          "name": "Awdal"
        },
        {
          "name": "Sool"
        }
      ]
    },
    {
      "name": "Suriname",
      "countryCode": "SR",
      "countryCodeAlpha3": "SUR",
      "phone": "597",
      "currency": "SRD",
      "stateProvinces": [
        {
          "name": "Wanica"
        },
        {
          "name": "Sipaliwini"
        },
        {
          "name": "Saramacca"
        },
        {
          "name": "Paramaribo"
        },
        {
          "name": "Para"
        },
        {
          "name": "Nickerie"
        },
        {
          "name": "Marowijne"
        },
        {
          "name": "Coronie"
        },
        {
          "name": "Commewijne"
        },
        {
          "name": "Brokopondo"
        }
      ]
    },
    {
      "name": "Sao Tome and Principe",
      "countryCode": "ST",
      "countryCodeAlpha3": "STP",
      "phone": "239",
      "currency": "STN",
      "stateProvinces": [
        {
          "name": "São Tomé Island"
        },
        {
          "name": "Príncipe"
        }
      ]
    },
    {
      "name": "El Salvador",
      "countryCode": "SV",
      "countryCodeAlpha3": "SLV",
      "phone": "503",
      "currency": "USD",
      "stateProvinces": [
        {
          "name": "Usulután"
        },
        {
          "name": "Sonsonate"
        },
        {
          "name": "San Vicente"
        },
        {
          "name": "Santa Ana"
        },
        {
          "name": "San Salvador"
        },
        {
          "name": "San Miguel"
        },
        {
          "name": "Morazán"
        },
        {
          "name": "La Unión"
        },
        {
          "name": "La Paz"
        },
        {
          "name": "La Libertad"
        },
        {
          "name": "Cuscatlán"
        },
        {
          "name": "Chalatenango"
        },
        {
          "name": "Cabañas"
        },
        {
          "name": "Ahuachapán"
        }
      ]
    },
    {
      "name": "Syria",
      "countryCode": "SY",
      "countryCodeAlpha3": "SYR",
      "phone": "963",
      "currency": "SYP",
      "stateProvinces": [
        {
          "name": "Tartus"
        },
        {
          "name": "Dimashq"
        },
        {
          "name": "Idlib"
        },
        {
          "name": "Homs"
        },
        {
          "name": "Hama"
        },
        {
          "name": "Aleppo"
        },
        {
          "name": "Rif-dimashq"
        },
        {
          "name": "Deir ez-Zor"
        },
        {
          "name": "Daraa"
        },
        {
          "name": "As-Suwayda"
        },
        {
          "name": "Ar-Raqqah"
        },
        {
          "name": "Quneitra"
        },
        {
          "name": "Latakia"
        },
        {
          "name": "Al-Hasakah"
        }
      ]
    },
    {
      "name": "Eswatini",
      "countryCode": "SZ",
      "countryCodeAlpha3": "SWZ",
      "phone": "268",
      "currency": "SZL",
      "stateProvinces": [
        {
          "name": "Shiselweni"
        },
        {
          "name": "Manzini"
        },
        {
          "name": "Lubombo"
        },
        {
          "name": "Hhohho"
        }
      ]
    },
    {
      "name": "Chad",
      "countryCode": "TD",
      "countryCodeAlpha3": "TCD",
      "phone": "235",
      "currency": "XAF",
      "stateProvinces": [
        {
          "name": "Salamat"
        },
        {
          "name": "Ouadaï"
        },
        {
          "name": "Wadi Fira"
        },
        {
          "name": "Tandjilé"
        },
        {
          "name": "Moyen-Chari"
        },
        {
          "name": "Mayo-Kebbi Est"
        },
        {
          "name": "Logone Oriental"
        },
        {
          "name": "Logone Occidental"
        },
        {
          "name": "Lac"
        },
        {
          "name": "Kanem"
        },
        {
          "name": "Guéra"
        },
        {
          "name": "Chari-Baguirmi"
        },
        {
          "name": "Batha"
        },
        {
          "name": "Borkou"
        },
        {
          "name": "Hadjer-Lamis"
        },
        {
          "name": "Mandoul"
        },
        {
          "name": "Mayo-Kebbi Ouest"
        },
        {
          "name": "N’Djaména"
        },
        {
          "name": "Barh el Gazel"
        },
        {
          "name": "Sila"
        },
        {
          "name": "Tibesti"
        },
        {
          "name": "Ennedi-Ouest"
        },
        {
          "name": "Ennedi-Est"
        }
      ]
    },
    {
      "name": "French Southern Territories",
      "countryCode": "TF",
      "countryCodeAlpha3": "ATF",
      "phone": "",
      "currency": "EUR",
      "stateProvinces": [
        {
          "name": "Crozet"
        },
        {
          "name": "Kerguelen"
        },
        {
          "name": "Saint-Paul-et-Amsterdam"
        },
        {
          "name": "Îles Éparses"
        },
        {
          "name": "Terre-Adélie"
        }
      ]
    },
    {
      "name": "Togo",
      "countryCode": "TG",
      "countryCodeAlpha3": "TGO",
      "phone": "228",
      "currency": "XOF",
      "stateProvinces": [
        {
          "name": "Savanes"
        },
        {
          "name": "Plateaux"
        },
        {
          "name": "Maritime"
        },
        {
          "name": "Centrale"
        },
        {
          "name": "Kara"
        }
      ]
    },
    {
      "name": "Thailand",
      "countryCode": "TH",
      "countryCodeAlpha3": "THA",
      "phone": "66",
      "currency": "THB",
      "stateProvinces": [
        {
          "name": "Uthai Thani"
        },
        {
          "name": "Trang"
        },
        {
          "name": "Tak"
        },
        {
          "name": "Surat Thani"
        },
        {
          "name": "Sukhothai"
        },
        {
          "name": "Ratchaburi"
        },
        {
          "name": "Ranong"
        },
        {
          "name": "Prachuap Khiri Khan"
        },
        {
          "name": "Phuket"
        },
        {
          "name": "Phetchaburi"
        },
        {
          "name": "Phang Nga"
        },
        {
          "name": "Mae Hong Son"
        },
        {
          "name": "Lamphun"
        },
        {
          "name": "Lampang"
        },
        {
          "name": "Krabi"
        },
        {
          "name": "Kanchanaburi"
        },
        {
          "name": "Kamphaeng Phet"
        },
        {
          "name": "Chumphon"
        },
        {
          "name": "Chiang Rai"
        },
        {
          "name": "Chiang Mai"
        },
        {
          "name": "Yasothon"
        },
        {
          "name": "Yala"
        },
        {
          "name": "Uttaradit"
        },
        {
          "name": "Trat"
        },
        {
          "name": "Surin"
        },
        {
          "name": "Suphanburi"
        },
        {
          "name": "Songkhla"
        },
        {
          "name": "Si Sa Ket"
        },
        {
          "name": "Sing Buri"
        },
        {
          "name": "Satun"
        },
        {
          "name": "Saraburi"
        },
        {
          "name": "Samut Songkhram"
        },
        {
          "name": "Samut Sakhon"
        },
        {
          "name": "Samut Prakan"
        },
        {
          "name": "Sakon Nakhon"
        },
        {
          "name": "Roi Et"
        },
        {
          "name": "Rayong"
        },
        {
          "name": "Phra Nakhon Si Ayutthaya"
        },
        {
          "name": "Phrae"
        },
        {
          "name": "Phitsanulok"
        },
        {
          "name": "Phichit"
        },
        {
          "name": "Phetchabun"
        },
        {
          "name": "Phayao"
        },
        {
          "name": "Phatthalung"
        },
        {
          "name": "Pattani"
        },
        {
          "name": "Pathum Thani"
        },
        {
          "name": "Nonthaburi"
        },
        {
          "name": "Nong Khai"
        },
        {
          "name": "Narathiwat"
        },
        {
          "name": "Nan"
        },
        {
          "name": "Nakhon Si Thammarat"
        },
        {
          "name": "Nakhon Sawan"
        },
        {
          "name": "Nakhon Ratchasima"
        },
        {
          "name": "Nakhon Phanom"
        },
        {
          "name": "Nakhon Pathom"
        },
        {
          "name": "Nakhon Nayok"
        },
        {
          "name": "Mukdahan"
        },
        {
          "name": "Maha Sarakham"
        },
        {
          "name": "Lopburi"
        },
        {
          "name": "Loei"
        },
        {
          "name": "Bangkok"
        },
        {
          "name": "Khon Kaen"
        },
        {
          "name": "Kalasin"
        },
        {
          "name": "Chon Buri"
        },
        {
          "name": "Chanthaburi"
        },
        {
          "name": "Chaiyaphum"
        },
        {
          "name": "Chai Nat"
        },
        {
          "name": "Chachoengsao"
        },
        {
          "name": "Buriram"
        },
        {
          "name": "Ang Thong"
        },
        {
          "name": "Udon Thani"
        },
        {
          "name": "Prachin Buri"
        },
        {
          "name": "Ubon Ratchathani"
        },
        {
          "name": "Amnat Charoen"
        },
        {
          "name": "Nong Bua Lam Phu"
        },
        {
          "name": "Sa Kaeo"
        },
        {
          "name": "Bueng Kan"
        }
      ]
    },
    {
      "name": "Tajikistan",
      "countryCode": "TJ",
      "countryCodeAlpha3": "TJK",
      "phone": "992",
      "currency": "TJS",
      "stateProvinces": [
        {
          "name": "Sughd"
        },
        {
          "name": "Gorno-Badakhshan"
        },
        {
          "name": "Khatlon"
        },
        {
          "name": "Republican Subordination"
        },
        {
          "name": "Dushanbe"
        }
      ]
    },
    {
      "name": "Tokelau",
      "countryCode": "TK",
      "countryCodeAlpha3": "TKL",
      "phone": "690",
      "currency": "NZD",
      "stateProvinces": [
        {
          "name": "Nukunonu"
        },
        {
          "name": "Fakaofo"
        },
        {
          "name": "Atafu"
        }
      ]
    },
    {
      "name": "Timor Leste",
      "countryCode": "TL",
      "countryCodeAlpha3": "TLS",
      "phone": "670",
      "currency": "USD",
      "stateProvinces": [
        {
          "name": "Viqueque"
        },
        {
          "name": "Manufahi"
        },
        {
          "name": "Manatuto"
        },
        {
          "name": "Liquiçá"
        },
        {
          "name": "Lautém"
        },
        {
          "name": "Cova Lima"
        },
        {
          "name": "Ermera"
        },
        {
          "name": "Díli"
        },
        {
          "name": "Bobonaro"
        },
        {
          "name": "Baucau"
        },
        {
          "name": "Oecusse"
        },
        {
          "name": "Ainaro"
        },
        {
          "name": "Aileu"
        }
      ]
    },
    {
      "name": "Turkmenistan",
      "countryCode": "TM",
      "countryCodeAlpha3": "TKM",
      "phone": "993",
      "currency": "TMT",
      "stateProvinces": [
        {
          "name": "Balkan"
        },
        {
          "name": "Ahal"
        },
        {
          "name": "Ashgabat"
        },
        {
          "name": "Daşoguz"
        },
        {
          "name": "Mary"
        },
        {
          "name": "Lebap"
        }
      ]
    },
    {
      "name": "Tunisia",
      "countryCode": "TN",
      "countryCodeAlpha3": "TUN",
      "phone": "216",
      "currency": "TND",
      "stateProvinces": [
        {
          "name": "Zaghwān"
        },
        {
          "name": "Tūnis"
        },
        {
          "name": "Tawzar"
        },
        {
          "name": "Tataouine"
        },
        {
          "name": "Sūsah"
        },
        {
          "name": "Silyānah"
        },
        {
          "name": "Sīdī Bū Zayd"
        },
        {
          "name": "Şafāqis"
        },
        {
          "name": "Qibilī"
        },
        {
          "name": "Gafsa"
        },
        {
          "name": "Qābis"
        },
        {
          "name": "Nābul"
        },
        {
          "name": "Madanīn"
        },
        {
          "name": "Jundūbah"
        },
        {
          "name": "Bin ‘Arūs"
        },
        {
          "name": "Banzart"
        },
        {
          "name": "Bājah"
        },
        {
          "name": "Ariana"
        },
        {
          "name": "Kairouan"
        },
        {
          "name": "Al Qaşrayn"
        },
        {
          "name": "Al Munastīr"
        },
        {
          "name": "Al Mahdīyah"
        },
        {
          "name": "Kef"
        },
        {
          "name": "Manouba"
        }
      ]
    },
    {
      "name": "Tonga",
      "countryCode": "TO",
      "countryCodeAlpha3": "TON",
      "phone": "676",
      "currency": "TOP",
      "stateProvinces": [
        {
          "name": "Vava‘u"
        },
        {
          "name": "Tongatapu"
        },
        {
          "name": "Ha‘apai"
        },
        {
          "name": "ʻEua"
        },
        {
          "name": "Niuas"
        }
      ]
    },
    {
      "name": "Turkey",
      "countryCode": "TR",
      "countryCodeAlpha3": "TUR",
      "phone": "90",
      "currency": "TRY",
      "stateProvinces": [
        {
          "name": "Yozgat"
        },
        {
          "name": "Van"
        },
        {
          "name": "Uşak"
        },
        {
          "name": "Şanlıurfa"
        },
        {
          "name": "Tunceli"
        },
        {
          "name": "Sivas"
        },
        {
          "name": "Siirt"
        },
        {
          "name": "Niğde"
        },
        {
          "name": "Nevşehir"
        },
        {
          "name": "Muş"
        },
        {
          "name": "Muğla"
        },
        {
          "name": "Mardin"
        },
        {
          "name": "Manisa"
        },
        {
          "name": "Malatya"
        },
        {
          "name": "Kütahya"
        },
        {
          "name": "Konya"
        },
        {
          "name": "Kırşehir"
        },
        {
          "name": "Kayseri"
        },
        {
          "name": "Kahramanmaraş"
        },
        {
          "name": "İzmir"
        },
        {
          "name": "Isparta"
        },
        {
          "name": "Mersin"
        },
        {
          "name": "Hatay"
        },
        {
          "name": "Hakkâri"
        },
        {
          "name": "Gaziantep"
        },
        {
          "name": "Eskişehir"
        },
        {
          "name": "Erzurum"
        },
        {
          "name": "Erzincan"
        },
        {
          "name": "Elazığ"
        },
        {
          "name": "Diyarbakır"
        },
        {
          "name": "Denizli"
        },
        {
          "name": "Burdur"
        },
        {
          "name": "Bitlis"
        },
        {
          "name": "Bingöl"
        },
        {
          "name": "Bilecik"
        },
        {
          "name": "Balıkesir"
        },
        {
          "name": "Aydın"
        },
        {
          "name": "Antalya"
        },
        {
          "name": "Ankara"
        },
        {
          "name": "Ağrı"
        },
        {
          "name": "Afyonkarahisar"
        },
        {
          "name": "Adıyaman"
        },
        {
          "name": "Adana"
        },
        {
          "name": "Osmaniye"
        },
        {
          "name": "Iğdır"
        },
        {
          "name": "Aksaray"
        },
        {
          "name": "Batman"
        },
        {
          "name": "Karaman"
        },
        {
          "name": "Kırıkkale"
        },
        {
          "name": "Şırnak"
        },
        {
          "name": "Kilis"
        },
        {
          "name": "Zonguldak"
        },
        {
          "name": "Trabzon"
        },
        {
          "name": "Tokat"
        },
        {
          "name": "Tekirdağ"
        },
        {
          "name": "Sinop"
        },
        {
          "name": "Samsun"
        },
        {
          "name": "Sakarya"
        },
        {
          "name": "Rize"
        },
        {
          "name": "Ordu"
        },
        {
          "name": "Kocaeli"
        },
        {
          "name": "Kırklareli"
        },
        {
          "name": "Kastamonu"
        },
        {
          "name": "Kars"
        },
        {
          "name": "Istanbul"
        },
        {
          "name": "Gümüşhane"
        },
        {
          "name": "Giresun"
        },
        {
          "name": "Edirne"
        },
        {
          "name": "Çorum"
        },
        {
          "name": "Çankırı"
        },
        {
          "name": "Canakkale"
        },
        {
          "name": "Bursa"
        },
        {
          "name": "Bolu"
        },
        {
          "name": "Artvin"
        },
        {
          "name": "Amasya"
        },
        {
          "name": "Bartın"
        },
        {
          "name": "Karabük"
        },
        {
          "name": "Yalova"
        },
        {
          "name": "Ardahan"
        },
        {
          "name": "Bayburt"
        },
        {
          "name": "Düzce"
        }
      ]
    },
    {
      "name": "Trinidad and Tobago",
      "countryCode": "TT",
      "countryCodeAlpha3": "TTO",
      "phone": "+1-868",
      "currency": "TTD",
      "stateProvinces": [
        {
          "name": "Tobago"
        },
        {
          "name": "San Fernando"
        },
        {
          "name": "Port of Spain"
        },
        {
          "name": "Mayaro"
        },
        {
          "name": "Borough of Arima"
        },
        {
          "name": "Chaguanas"
        },
        {
          "name": "Couva-Tabaquite-Talparo"
        },
        {
          "name": "Diego Martin"
        },
        {
          "name": "Penal/Debe"
        },
        {
          "name": "Princes Town"
        },
        {
          "name": "Point Fortin"
        },
        {
          "name": "Sangre Grande"
        },
        {
          "name": "Siparia"
        },
        {
          "name": "San Juan/Laventille"
        },
        {
          "name": "Tunapuna/Piarco"
        }
      ]
    },
    {
      "name": "Tuvalu",
      "countryCode": "TV",
      "countryCodeAlpha3": "TUV",
      "phone": "688",
      "currency": "AUD",
      "stateProvinces": [
        {
          "name": "Nui"
        },
        {
          "name": "Nanumea"
        },
        {
          "name": "Funafuti"
        },
        {
          "name": "Niutao"
        },
        {
          "name": "Nanumanga"
        },
        {
          "name": "Vaitupu"
        },
        {
          "name": "Nukufetau"
        },
        {
          "name": "Nukulaelae"
        }
      ]
    },
    {
      "name": "Taiwan",
      "countryCode": "TW",
      "countryCodeAlpha3": "TWN",
      "phone": "886",
      "currency": "TWD",
      "stateProvinces": [
        {
          "name": "Fukien"
        },
        {
          "name": "Takao"
        },
        {
          "name": "Taipei"
        },
        {
          "name": "Taiwan"
        }
      ]
    },
    {
      "name": "Tanzania",
      "countryCode": "TZ",
      "countryCodeAlpha3": "TZA",
      "phone": "255",
      "currency": "TZS",
      "stateProvinces": [
        {
          "name": "Kagera"
        },
        {
          "name": "Zanzibar Urban/West"
        },
        {
          "name": "Zanzibar North"
        },
        {
          "name": "Zanzibar Central/South"
        },
        {
          "name": "Tanga"
        },
        {
          "name": "Tabora"
        },
        {
          "name": "Singida"
        },
        {
          "name": "Shinyanga"
        },
        {
          "name": "Rukwa"
        },
        {
          "name": "Pwani"
        },
        {
          "name": "Pemba South"
        },
        {
          "name": "Pemba North"
        },
        {
          "name": "Mwanza"
        },
        {
          "name": "Morogoro"
        },
        {
          "name": "Mbeya"
        },
        {
          "name": "Mara"
        },
        {
          "name": "Lindi"
        },
        {
          "name": "Kilimanjaro"
        },
        {
          "name": "Kigoma"
        },
        {
          "name": "Iringa"
        },
        {
          "name": "Dodoma"
        },
        {
          "name": "Dar es Salaam"
        },
        {
          "name": "Arusha"
        },
        {
          "name": "Manyara"
        },
        {
          "name": "Ruvuma"
        },
        {
          "name": "Mtwara"
        },
        {
          "name": "Simiyu"
        },
        {
          "name": "Geita"
        },
        {
          "name": "Katavi"
        },
        {
          "name": "Njombe"
        },
        {
          "name": "Songwe"
        }
      ]
    },
    {
      "name": "Ukraine",
      "countryCode": "UA",
      "countryCodeAlpha3": "UKR",
      "phone": "380",
      "currency": "UAH",
      "stateProvinces": [
        {
          "name": "Zhytomyr"
        },
        {
          "name": "Zaporizhzhia"
        },
        {
          "name": "Transcarpathia"
        },
        {
          "name": "Volyn"
        },
        {
          "name": "Vinnytsia"
        },
        {
          "name": "Ternopil"
        },
        {
          "name": "Sumy"
        },
        {
          "name": "Sevastopol City"
        },
        {
          "name": "Rivne"
        },
        {
          "name": "Poltava"
        },
        {
          "name": "Odessa"
        },
        {
          "name": "Mykolaiv"
        },
        {
          "name": "Lviv"
        },
        {
          "name": "Luhansk"
        },
        {
          "name": "Kiev"
        },
        {
          "name": "Kyiv City"
        },
        {
          "name": "Crimea"
        },
        {
          "name": "Kirovohrad"
        },
        {
          "name": "Khmelnytskyi"
        },
        {
          "name": "Kherson"
        },
        {
          "name": "Kharkiv"
        },
        {
          "name": "Ivano-Frankivsk"
        },
        {
          "name": "Donetsk"
        },
        {
          "name": "Dnipropetrovsk"
        },
        {
          "name": "Chernivtsi"
        },
        {
          "name": "Chernihiv"
        },
        {
          "name": "Cherkasy"
        }
      ]
    },
    {
      "name": "Uganda",
      "countryCode": "UG",
      "countryCodeAlpha3": "UGA",
      "phone": "256",
      "currency": "UGX",
      "stateProvinces": [
        {
          "name": "Central Region"
        },
        {
          "name": "Eastern Region"
        },
        {
          "name": "Northern Region"
        },
        {
          "name": "Western Region"
        }
      ]
    },
    {
      "name": "United States Minor Outlying Islands",
      "countryCode": "UM",
      "countryCodeAlpha3": "UMI",
      "phone": "1",
      "currency": "USD",
      "stateProvinces": [
        {
          "name": "Wake Island"
        },
        {
          "name": "Navassa Island"
        },
        {
          "name": "Baker Island"
        },
        {
          "name": "Howland Island"
        },
        {
          "name": "Jarvis Island"
        },
        {
          "name": "Johnston Atoll"
        },
        {
          "name": "Kingman Reef"
        },
        {
          "name": "Midway Islands"
        },
        {
          "name": "Palmyra Atoll"
        }
      ]
    },
    {
      "name": "United States",
      "countryCode": "US",
      "countryCodeAlpha3": "USA",
      "phone": "1",
      "currency": "USD",
      "stateProvinces": [
        {
          "name": "Arkansas"
        },
        {
          "name": "Washington, D.C."
        },
        {
          "name": "Delaware"
        },
        {
          "name": "Florida"
        },
        {
          "name": "Georgia"
        },
        {
          "name": "Kansas"
        },
        {
          "name": "Louisiana"
        },
        {
          "name": "Maryland"
        },
        {
          "name": "Missouri"
        },
        {
          "name": "Mississippi"
        },
        {
          "name": "North Carolina"
        },
        {
          "name": "Oklahoma"
        },
        {
          "name": "South Carolina"
        },
        {
          "name": "Tennessee"
        },
        {
          "name": "Texas"
        },
        {
          "name": "West Virginia"
        },
        {
          "name": "Alabama"
        },
        {
          "name": "Connecticut"
        },
        {
          "name": "Iowa"
        },
        {
          "name": "Illinois"
        },
        {
          "name": "Indiana"
        },
        {
          "name": "Maine"
        },
        {
          "name": "Michigan"
        },
        {
          "name": "Minnesota"
        },
        {
          "name": "Nebraska"
        },
        {
          "name": "New Hampshire"
        },
        {
          "name": "New Jersey"
        },
        {
          "name": "New York"
        },
        {
          "name": "Ohio"
        },
        {
          "name": "Rhode Island"
        },
        {
          "name": "Vermont"
        },
        {
          "name": "Wisconsin"
        },
        {
          "name": "California"
        },
        {
          "name": "Colorado"
        },
        {
          "name": "New Mexico"
        },
        {
          "name": "Nevada"
        },
        {
          "name": "Utah"
        },
        {
          "name": "Arizona"
        },
        {
          "name": "Idaho"
        },
        {
          "name": "Montana"
        },
        {
          "name": "North Dakota"
        },
        {
          "name": "Oregon"
        },
        {
          "name": "South Dakota"
        },
        {
          "name": "Washington"
        },
        {
          "name": "Wyoming"
        },
        {
          "name": "Hawaii"
        },
        {
          "name": "Alaska"
        },
        {
          "name": "Kentucky"
        },
        {
          "name": "Massachusetts"
        },
        {
          "name": "Pennsylvania"
        },
        {
          "name": "Virginia"
        }
      ]
    },
    {
      "name": "Uruguay",
      "countryCode": "UY",
      "countryCodeAlpha3": "URY",
      "phone": "598",
      "currency": "UYU",
      "stateProvinces": [
        {
          "name": "Treinta y Tres"
        },
        {
          "name": "Tacuarembó"
        },
        {
          "name": "Soriano"
        },
        {
          "name": "San José"
        },
        {
          "name": "Salto"
        },
        {
          "name": "Rocha"
        },
        {
          "name": "Rivera"
        },
        {
          "name": "Río Negro"
        },
        {
          "name": "Paysandú"
        },
        {
          "name": "Montevideo"
        },
        {
          "name": "Maldonado"
        },
        {
          "name": "Lavalleja"
        },
        {
          "name": "Florida"
        },
        {
          "name": "Flores"
        },
        {
          "name": "Durazno"
        },
        {
          "name": "Colonia"
        },
        {
          "name": "Cerro Largo"
        },
        {
          "name": "Canelones"
        },
        {
          "name": "Artigas"
        }
      ]
    },
    {
      "name": "Uzbekistan",
      "countryCode": "UZ",
      "countryCodeAlpha3": "UZB",
      "phone": "998",
      "currency": "UZS",
      "stateProvinces": [
        {
          "name": "Karakalpakstan"
        },
        {
          "name": "Surxondaryo"
        },
        {
          "name": "Samarqand"
        },
        {
          "name": "Qashqadaryo"
        },
        {
          "name": "Bukhara"
        },
        {
          "name": "Toshkent"
        },
        {
          "name": "Tashkent"
        },
        {
          "name": "Sirdaryo Region"
        },
        {
          "name": "Navoiy"
        },
        {
          "name": "Namangan"
        },
        {
          "name": "Xorazm"
        },
        {
          "name": "Jizzax"
        },
        {
          "name": "Fergana"
        },
        {
          "name": "Andijon"
        }
      ]
    },
    {
      "name": "Saint Vincent and the Grenadines",
      "countryCode": "VC",
      "countryCodeAlpha3": "VCT",
      "phone": "+1-784",
      "currency": "XCD",
      "stateProvinces": [
        {
          "name": "Saint Patrick"
        },
        {
          "name": "Saint George"
        },
        {
          "name": "Saint David"
        },
        {
          "name": "Saint Andrew"
        },
        {
          "name": "Grenadines"
        },
        {
          "name": "Charlotte"
        }
      ]
    },
    {
      "name": "Venezuela",
      "countryCode": "VE",
      "countryCodeAlpha3": "VEN",
      "phone": "58",
      "currency": "VES",
      "stateProvinces": [
        {
          "name": "Zulia"
        },
        {
          "name": "Yaracuy"
        },
        {
          "name": "Trujillo"
        },
        {
          "name": "Táchira"
        },
        {
          "name": "Sucre"
        },
        {
          "name": "Portuguesa"
        },
        {
          "name": "Nueva Esparta"
        },
        {
          "name": "Monagas"
        },
        {
          "name": "Miranda"
        },
        {
          "name": "Mérida"
        },
        {
          "name": "Lara"
        },
        {
          "name": "Guárico"
        },
        {
          "name": "Dependencias Federales"
        },
        {
          "name": "Distrito Federal"
        },
        {
          "name": "Falcón"
        },
        {
          "name": "Delta Amacuro"
        },
        {
          "name": "Cojedes"
        },
        {
          "name": "Carabobo"
        },
        {
          "name": "Bolívar"
        },
        {
          "name": "Barinas"
        },
        {
          "name": "Aragua"
        },
        {
          "name": "Apure"
        },
        {
          "name": "Anzoátegui"
        },
        {
          "name": "Amazonas"
        },
        {
          "name": "Vargas"
        }
      ]
    },
    {
      "name": "U.S. Virgin Islands",
      "countryCode": "VI",
      "countryCodeAlpha3": "VIR",
      "phone": "+1-340",
      "currency": "USD",
      "stateProvinces": [
        {
          "name": "Saint Croix Island"
        },
        {
          "name": "Saint John Island"
        },
        {
          "name": "Saint Thomas Island"
        }
      ]
    },
    {
      "name": "Vietnam",
      "countryCode": "VN",
      "countryCodeAlpha3": "VNM",
      "phone": "84",
      "currency": "VND",
      "stateProvinces": [
        {
          "name": "Nghệ An"
        },
        {
          "name": "Ninh Bình"
        },
        {
          "name": "Ninh Thuận"
        },
        {
          "name": "Sóc Trăng"
        },
        {
          "name": "Trà Vinh"
        },
        {
          "name": "Tuyên Quang"
        },
        {
          "name": "Vĩnh Long"
        },
        {
          "name": "Yên Bái"
        },
        {
          "name": "Lào Cai"
        },
        {
          "name": "Tiền Giang"
        },
        {
          "name": "Thừa Thiên-Huế"
        },
        {
          "name": "Kon Tum"
        },
        {
          "name": "Thanh Hóa"
        },
        {
          "name": "Thái Bình"
        },
        {
          "name": "Tây Ninh Province"
        },
        {
          "name": "Sơn La"
        },
        {
          "name": "Quảng Trị"
        },
        {
          "name": "Quảng Ninh"
        },
        {
          "name": "Quảng Ngãi Province"
        },
        {
          "name": "Quảng Bình"
        },
        {
          "name": "Phú Yên"
        },
        {
          "name": "Hòa Bình"
        },
        {
          "name": "Long An"
        },
        {
          "name": "Lạng Sơn"
        },
        {
          "name": "Lâm Đồng"
        },
        {
          "name": "Lai Châu"
        },
        {
          "name": "Kiến Giang"
        },
        {
          "name": "Khánh Hòa"
        },
        {
          "name": "Ho Chi Minh"
        },
        {
          "name": "Hà Tĩnh"
        },
        {
          "name": "Hà Giang"
        },
        {
          "name": "Gia Lai"
        },
        {
          "name": "Hanoi"
        },
        {
          "name": "Can Tho"
        },
        {
          "name": "Haiphong"
        },
        {
          "name": "Bình Thuận"
        },
        {
          "name": "Đồng Tháp"
        },
        {
          "name": "Đồng Nai"
        },
        {
          "name": "Đắk Lắk"
        },
        {
          "name": "Bà Rịa-Vũng Tàu"
        },
        {
          "name": "Cao Bằng"
        },
        {
          "name": "Bình Định"
        },
        {
          "name": "Bến Tre"
        },
        {
          "name": "An Giang"
        },
        {
          "name": "Ðắk Nông"
        },
        {
          "name": "Ðiện Biên"
        },
        {
          "name": "Bắc Ninh"
        },
        {
          "name": "Bắc Giang"
        },
        {
          "name": "Da Nang"
        },
        {
          "name": "Bình Dương"
        },
        {
          "name": "Bình Phước"
        },
        {
          "name": "Thái Nguyên"
        },
        {
          "name": "Quảng Nam"
        },
        {
          "name": "Phú Thọ"
        },
        {
          "name": "Nam Định"
        },
        {
          "name": "Hà Nam"
        },
        {
          "name": "Bắc Kạn"
        },
        {
          "name": "Bạc Liêu"
        },
        {
          "name": "Cà Mau"
        },
        {
          "name": "Hải Dương"
        },
        {
          "name": "Hưng Yên"
        },
        {
          "name": "Vĩnh Phúc"
        },
        {
          "name": "Hậu Giang"
        }
      ]
    },
    {
      "name": "Vanuatu",
      "countryCode": "VU",
      "countryCodeAlpha3": "VUT",
      "phone": "678",
      "currency": "VUV",
      "stateProvinces": [
        {
          "name": "Tafea"
        },
        {
          "name": "Sanma"
        },
        {
          "name": "Torba"
        },
        {
          "name": "Malampa"
        },
        {
          "name": "Penama"
        },
        {
          "name": "Shefa"
        }
      ]
    },
    {
      "name": "Wallis and Futuna",
      "countryCode": "WF",
      "countryCodeAlpha3": "WLF",
      "phone": "681",
      "currency": "XPF",
      "stateProvinces": [
        {
          "name": "Uvea"
        },
        {
          "name": "Sigave"
        },
        {
          "name": "Alo"
        }
      ]
    },
    {
      "name": "Samoa",
      "countryCode": "WS",
      "countryCodeAlpha3": "WSM",
      "phone": "685",
      "currency": "WST",
      "stateProvinces": [
        {
          "name": "Vaisigano"
        },
        {
          "name": "Va‘a-o-Fonoti"
        },
        {
          "name": "Tuamasaga"
        },
        {
          "name": "Satupa‘itea"
        },
        {
          "name": "Palauli"
        },
        {
          "name": "Gagaifomauga"
        },
        {
          "name": "Gaga‘emauga"
        },
        {
          "name": "Fa‘asaleleaga"
        },
        {
          "name": "Atua"
        },
        {
          "name": "Aiga-i-le-Tai"
        },
        {
          "name": "A'ana"
        }
      ]
    },
    {
      "name": "Yemen",
      "countryCode": "YE",
      "countryCodeAlpha3": "YEM",
      "phone": "967",
      "currency": "YER",
      "stateProvinces": [
        {
          "name": "Ta‘izz"
        },
        {
          "name": "Shabwah"
        },
        {
          "name": "Sanaa"
        },
        {
          "name": "Şa‘dah"
        },
        {
          "name": "Raymah"
        },
        {
          "name": "Ma’rib"
        },
        {
          "name": "Al Maḩwīt"
        },
        {
          "name": "Al Jawf"
        },
        {
          "name": "Muhafazat Hadramaout"
        },
        {
          "name": "Dhamār"
        },
        {
          "name": "Al Mahrah"
        },
        {
          "name": "Al Hudaydah"
        },
        {
          "name": "Al Bayda"
        },
        {
          "name": "Aden"
        },
        {
          "name": "Abyan"
        },
        {
          "name": "Aḑ Ḑāli‘"
        },
        {
          "name": "Omran"
        },
        {
          "name": "Ḩajjah"
        },
        {
          "name": "Ibb"
        },
        {
          "name": "Laḩij"
        },
        {
          "name": "Amanat Alasimah"
        },
        {
          "name": "Soqatra"
        }
      ]
    },
    {
      "name": "Mayotte",
      "countryCode": "YT",
      "countryCodeAlpha3": "MYT",
      "phone": "262",
      "currency": "EUR",
      "stateProvinces": [
        {
          "name": "Acoua"
        },
        {
          "name": "Bandraboua"
        },
        {
          "name": "Bandrele"
        },
        {
          "name": "Bouéni"
        },
        {
          "name": "Chiconi"
        },
        {
          "name": "Chirongui"
        },
        {
          "name": "Dembeni"
        },
        {
          "name": "Dzaoudzi"
        },
        {
          "name": "Kani-Kéli"
        },
        {
          "name": "Koungou"
        },
        {
          "name": "Mamoudzou"
        },
        {
          "name": "Mtsamboro"
        },
        {
          "name": "M'Tsangamouji"
        },
        {
          "name": "Ouangani"
        },
        {
          "name": "Pamandzi"
        },
        {
          "name": "Sada"
        },
        {
          "name": "Tsingoni"
        }
      ]
    },
    {
      "name": "South Africa",
      "countryCode": "ZA",
      "countryCodeAlpha3": "ZAF",
      "phone": "27",
      "currency": "ZAR",
      "stateProvinces": [
        {
          "name": "Orange Free State"
        },
        {
          "name": "KwaZulu-Natal"
        },
        {
          "name": "Eastern Cape"
        },
        {
          "name": "Gauteng"
        },
        {
          "name": "Mpumalanga"
        },
        {
          "name": "Northern Cape"
        },
        {
          "name": "Limpopo"
        },
        {
          "name": "North-West"
        },
        {
          "name": "Western Cape"
        }
      ]
    },
    {
      "name": "Zambia",
      "countryCode": "ZM",
      "countryCodeAlpha3": "ZMB",
      "phone": "260",
      "currency": "ZMW",
      "stateProvinces": [
        {
          "name": "Western"
        },
        {
          "name": "Southern"
        },
        {
          "name": "North-Western"
        },
        {
          "name": "Northern"
        },
        {
          "name": "Lusaka"
        },
        {
          "name": "Luapula"
        },
        {
          "name": "Eastern"
        },
        {
          "name": "Copperbelt"
        },
        {
          "name": "Central"
        },
        {
          "name": "Muchinga"
        }
      ]
    },
    {
      "name": "Zimbabwe",
      "countryCode": "ZW",
      "countryCodeAlpha3": "ZWE",
      "phone": "263",
      "currency": "ZWL",
      "stateProvinces": [
        {
          "name": "Midlands"
        },
        {
          "name": "Matabeleland South"
        },
        {
          "name": "Matabeleland North"
        },
        {
          "name": "Masvingo"
        },
        {
          "name": "Mashonaland West"
        },
        {
          "name": "Mashonaland East"
        },
        {
          "name": "Mashonaland Central"
        },
        {
          "name": "Manicaland"
        },
        {
          "name": "Bulawayo"
        },
        {
          "name": "Harare"
        }
      ]
    },
  ]


export default countries