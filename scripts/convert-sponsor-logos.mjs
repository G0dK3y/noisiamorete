import sharp from "sharp"
import { readFileSync, existsSync } from "node:fs"
import { join, dirname } from "node:path"
import { fileURLToPath } from "node:url"

const __dirname = dirname(fileURLToPath(import.meta.url))
const SRC = join(__dirname, "..", "public", "images", "sponsors", "_real")
const OUT = join(__dirname, "..", "public", "images", "sponsors")

// source file in _real/  ->  output id (becomes <id>.webp)
const MAP = {
  // Sponsor originali (versione reale 2000x2000)
  "danny-kaye.png": "danny-kaye",
  "pompi.png": "pompi",
  "grossi-immobiliare.png": "grossi-immobiliare",
  "fulcro-bistrot.png": "fulcro-bistrot",
  "onav.png": "onav",
  "theatrike.png": "theatrike",
  "city-wellness.png": "city-wellness",
  "atelier-movimento.png": "atelier-movimento",
  "chipia.png": "chipia",
  "manitas.png": "manitas",
  "giungi.png": "giungi",
  // Nuovi
  "aitologo_hu.png": "aito",
  "amb_francesce_in_italia_logo.jpg": "ambasciata-francia",
  "anc_logo.jpg": "anc",
  "Assemblea_Regionale_Siciliana.png": "assemblea-regionale-siciliana",
  "athletica_vaticana_logo.png": "athletica-vaticana",
  "baskin_logo.png": "baskin",
  "centro_città_holiday_apartament_logo.png": "centro-citta-holiday",
  "Ciampino-Stemma.svg.png": "comune-ciampino",
  "city_sport_club_logo.jpg": "city-sport-club",
  "comitato_paraolimpico_lazio_logo.png": "comitato-paralimpico-lazio",
  "coni_logo.png": "coni",
  "croce_rossa_italiana_logo.webp": "croce-rossa-italiana",
  "csv_lazio_centro_di_servizio_per_il_volontariato_logo.jpg": "csv-lazio",
  "dem_supermercati_logo.png": "dem-supermercati",
  "enac_logo.gif": "enac",
  "etica_e_autismo_aps_logo.png": "etica-e-autismo",
  "fab_logo.jpg": "fab",
  "Fantasia_&_bellezza_logo.jpeg": "fantasia-e-bellezza",
  "federazione_pugilistica_logo.webp": "federazione-pugilistica",
  "fisdir_logo.jpg": "fisdir",
  "fitet_logo.jpg": "fitet",
  "fondazione_the_bridge.webp": "fondazione-the-bridge",
  "green_light_logo.png": "green-light",
  "jsax_logo.jpg": "jsax",
  "la_banca_delle_visite_logo.png": "la-banca-delle-visite",
  "la_voce_e_le_parole_aps_logo.jpeg": "la-voce-e-le-parole",
  "LOGO-ROSSO-DICASTERIUM-CULTURA_EDUCATIONE.jpg": "dicastero-cultura-educazione",
  "marino_logo.png": "comune-marino",
  "mc_donald_logo.jpg": "mcdonalds",
  "mexico_logo.webp": "mexico",
  "municipio_vi_logo.jpg": "municipio-vi-roma",
  "occupiamocene_aps_logo.jpeg": "occupiamocene",
  "panificio_briciole_di_piazza_logo.jpeg": "panificio-briciole-di-piazza",
  "parrocchia_gesu_divino_operaio_ciampino.jpg": "parrocchia-gesu-divino-operaio",
  "regione_lazio_logo.png": "regione-lazio",
  "RiarEtEco_logo.png": "riareteco",
  "sport_e_salute_logo.png": "sport-e-salute",
  "spqc_logo.jpg": "spqc",
  "ssd_alice_city_logo.png": "ssd-alice-city",
  "tacchi_e_sapori_restaurant_logo.jpg": "tacchi-e-sapori",
  "tenuta_mosaico_logo.jpg": "tenuta-mosaico",
  "udicon_logo.png": "udicon",
  "unione_invalidi_civili_logo.png": "unione-invalidi-civili",
  "via_francigena_logo.png": "via-francigena",
  "vigili_del_fuoco_logo.jpg": "vigili-del-fuoco",
  "vita_via_est_logo.jpeg": "vita-via-est",
}

const MAX = 600 // px sul lato più lungo

let ok = 0
const errors = []
for (const [src, id] of Object.entries(MAP)) {
  const srcPath = join(SRC, src)
  if (!existsSync(srcPath)) {
    errors.push(`MANCANTE: ${src}`)
    continue
  }
  const outPath = join(OUT, `${id}.webp`)
  try {
    const input = readFileSync(srcPath)
    await sharp(input, { animated: false })
      .resize(MAX, MAX, { fit: "inside", withoutEnlargement: true })
      .webp({ quality: 82, alphaQuality: 100, effort: 5 })
      .toFile(outPath)
    ok++
  } catch (e) {
    errors.push(`ERRORE ${src}: ${e.message}`)
  }
}

console.log(`Convertiti: ${ok}/${Object.keys(MAP).length}`)
if (errors.length) console.log("Problemi:\n" + errors.join("\n"))
