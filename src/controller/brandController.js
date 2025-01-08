const BrandService = require('../services/brandService');

   const getUniqueBrands = async(req, res) => {
    try {
      const brands = await BrandService.getUniqueBrands();
      // console.log(brands);
      return res.status(200).json({
        success: true,
        message: 'Successfully fetched the unique articles with eans',
        data: brands,
        error: {}
      });
      
    } catch (error) {
      if (error.message === "No brands found in the database") {
        return res.status(404).json({
            success: false,
            message: 'Something went wrong',
            data: {},
            error: error.message
          });
        } else {
            return res.status(404).json({
                success: false,
                message: 'Something went wrong',
                data: {},
                error: error.message
              });
            }
        }
    }


module.exports = {
    getUniqueBrands
}
