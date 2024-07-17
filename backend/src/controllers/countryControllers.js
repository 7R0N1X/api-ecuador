const Country = require('../models/countryModel')

exports.createInfo = async (req, res) => {
  try {
    const ecuadorInfo = new Country({
      name: "Ecuador",
      description: "Ecuador, oficialmente la República del Ecuador, es un país situado en la región noroccidental de América del Sur. Limita al norte con Colombia, al este y al sur con Perú, y al oeste con el océano Pacífico. Su territorio incluye las Islas Galápagos en el océano Pacífico, a unos 1,000 kilómetros (620 millas) al oeste de la parte continental. Ecuador tiene una superficie de 283,561 kilómetros cuadrados (109,484 millas cuadradas) y una población de aproximadamente 18 millones de personas. Su capital es Quito, y la ciudad más grande es Guayaquil. Ecuador es conocido por su rica biodiversidad, su herencia indígena, y sus paisajes que varían desde la selva amazónica hasta los Andes y la costa del Pacífico. El idioma oficial es el español, aunque también se hablan varios idiomas indígenas, incluyendo el quichua y el shuar. La cultura ecuatoriana es una mezcla de tradiciones indígenas, africanas y europeas, que se refleja en su música, danza, arte y gastronomía.",
      capital: "Quito",
      surface: 283561,
      population: 18000000,
      languages: ["Español", "Quechua", "Shuar"],
      timeZone: "UTC-5",
      currency: "Dólar estadounidense",
      currencyCode: "USD",
      currencySymbol: "$",
      isoCode: ["EC", "ECU", "218"],
      phonePrefix: "+593",
      subRegion: "América del Sur",
      region: "Americas",
      borders: ["Colombia", "Perú", "Océano Pacífico"],
      flag: `${req.protocol}://${req.get('host')}/public/country/flag/ecuador.svg`,
      shield: `${req.protocol}://${req.get('host')}/public/country/shield/ecuador.svg`
    });
    await ecuadorInfo.save()
    res.status(201).json(ecuadorInfo)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
};

exports.getInfo = async (req, res) => {
  try {
    const ecuadorInfo = await Country.findOne({ name: "Ecuador" })
    if (!ecuadorInfo) {
      return res.status(404).json({ message: 'Información no encontrada' })
    }
    res.json(ecuadorInfo)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}