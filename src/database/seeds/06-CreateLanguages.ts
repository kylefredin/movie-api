import { Factory, Seeder } from "typeorm-seeding";
import { Connection } from "typeorm";

class CreateLanguages implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection
      .createQueryRunner()
      .query(
        "INSERT INTO `language` (id,code,name) VALUES (24574,'en','English'),(24575,'sv','svenska'),(24576,'de','Deutsch'),(24577,'xx','No Language'),(24578,'ja','u65e5u672cu8a9e'),(24579,'fr','Franu00e7ais'),(24580,'es','Espau00f1ol'),(24581,'ar','u0627u0644u0639u0631u0628u064au0629'),(24582,'la','Latin'),(24583,'km',''),(24584,'vi','Tiu1ebfng Viu1ec7t'),(24585,'tr','Tu00fcrku00e7e'),(24586,'el','u03b5u03bbu03bbu03b7u03bdu03b9u03bau03ac'),(24587,'zh','u666eu901au8bdd'),(24588,'ru','Pu0443u0441u0441u043au0438u0439'),(24589,'ga','Gaeilge'),(24590,'cn','u5e7fu5ddeu8bdd / u5ee3u5ddeu8a71'),(24591,'hu','Magyar'),(24592,'he','u05e2u05b4u05d1u05b0u05e8u05b4u05d9u05ea'),(24593,'ne',''),(24594,'si',''),(24595,'it','Italiano'),(24596,'nl','Nederlands'),(24597,'fi','suomi'),(24598,'pt','Portuguu00eas'),(24599,'gd',''),(24600,'fa','u0641u0627u0631u0633u06cc'),(24601,'ur','u0627u0631u062fu0648'),(24602,'da','Dansk'),(24603,'th','u0e20u0e32u0e29u0e32u0e44u0e17u0e22'),(24604,'no','Norsk'),(24605,'sq','shqip'),(24606,'pl','Polski'),(24607,'is','u00cdslenska'),(24608,'tl',''),(24609,'pa','u0a2au0a70u0a1cu0a3eu0a2cu0a40'),(24610,'hi','u0939u093fu0928u094du0926u0940'),(24611,'kk','u049bu0430u0437u0430u049b'),(24612,'bg','u0431u044au043bu0433u0430u0440u0441u043au0438 u0435u0437u0438u043a'),(24613,'sw','Kiswahili'),(24614,'ro','Romu00e2nu0103'),(24615,'ko','ud55cuad6duc5b4/uc870uc120ub9d0'),(24616,'cs','u010cesku00fd'),(24617,'sk','Slovenu010dina'),(24618,'mi',''),(24619,'eo','Esperanto'),(24620,'so','Somali'),(24621,'af','Afrikaans'),(24622,'xh',''),(24623,'zu','isiZulu'),(24624,'yi',''),(24625,'ca','Catalu00e0'),(24626,'sr','Srpski'),(24627,'sa',''),(24628,'uk','u0423u043au0440u0430u0457u043du0441u044cu043au0438u0439'),(24629,'hr','Hrvatski'),(24630,'gl','Galego'),(24631,'sh',''),(24632,'co',''),(24633,'kw',''),(24634,'bo',''),(24635,'bs','Bosanski'),(24636,'ps','u067eu069au062au0648'),(24637,'iu',''),(24638,'hy',''),(24639,'am',''),(24640,'ce',''),(24641,'et','Eesti'),(24642,'ku',''),(24643,'nv',''),(24644,'mn',''),(24645,'to',''),(24646,'bn','u09acu09beu0982u09b2u09be'),(24647,'ny',''),(24648,'st',''),(24649,'dz',''),(24650,'cy','Cymraeg'),(24651,'wo','Wolof'),(24652,'ka','u10e5u10d0u10e0u10d7u10e3u10dau10d8'),(24653,'br',''),(24654,'ta','u0ba4u0baeu0bbfu0bb4u0bcd'),(24655,'id','Bahasa indonesia'),(24656,'ml',''),(24657,'te','u0c24u0c46u0c32u0c41u0c17u0c41'),(24658,'ky','??????'),(24659,'bm','Bamanankan'),(24660,'sl','Slovenu0161u010dina'),(24701,'nb','Unknown')"
      );
  }
}

export default CreateLanguages;

export { CreateLanguages };
