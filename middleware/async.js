const AsyncWrapper = (calllback)=> {
    return async(req, res, next) => {
       try{ 
        await calllback(req, res, next )
       } catch (error){
        next(error)
       }
    }
}



module.exports = AsyncWrapper