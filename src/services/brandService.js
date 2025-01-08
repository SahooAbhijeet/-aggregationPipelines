const BrandRepository = require('../repository/brandRepository');


  const getUniqueBrands = async() => {
    const result = await BrandRepository.getBrandsWithEanCount();
    if (!result.length) {
      throw new Error("No brands found in the database");
    }
    return result;
  }


module.exports = {
    getUniqueBrands
}
