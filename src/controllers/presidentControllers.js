const President = require('../models/presidentModel')

exports.createInfo = async (req, res) => {
  try {
    const presidentsData = [
      {
        name: "Juan José",
        lastName: "Flores y Aramburu",
        startingPeriod: "13-05-1830",
        finalPeriod: "10-09-1835",
        politicalParty: "Conservador",
        description: "Juan José Flores fue el primer presidente del Ecuador, nacido en Venezuela en 1800 y fallecido en 1864. Jugó un papel fundamental en la separación de Ecuador de la Gran Colombia y en la consolidación del estado ecuatoriano en sus primeros años de independencia."
      },
      {
        name: "Vicente Rocafuerte",
        lastName: "Rodríguez de Bejarano",
        startingPeriod: "18-01-1835",
        finalPeriod: "31-01-1839",
        politicalParty: "Liberal",
        description: "Vicente Rocafuerte fue un destacado político y presidente ecuatoriano, nacido el 1 de mayo de 1783 en Guayaquil y fallecido el 16 de mayo de 1847 en Lima, Perú. Fue presidente de Ecuador en dos ocasiones: primero en 1834 y luego en 1839. Rocafuerte es recordado por su liderazgo en la promoción de la educación, la libertad de prensa y la modernización del país durante su mandato. Su legado incluye contribuciones significativas a la consolidación de la identidad nacional ecuatoriana y a la promoción de los derechos civiles y políticos."
      }
    ]
    const createdPresidents = await President.insertMany(presidentsData);
    res.status(201).json(createdPresidents)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

exports.getInfo = async (req, res) => {
  try {
    const presidentInfo = await President.find()
    if (!presidentInfo) {
      return res.status(404).json({ message: 'Información no encontrada' })
    }
    res.json(presidentInfo)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}