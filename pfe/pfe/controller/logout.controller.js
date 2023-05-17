
function logoutUser(req,res){
    return res 
       .clearcookie("access_token")
       .staus(200)
       .json({ message: "successfully logged out"});

}
module.exports = {
    logoutUser,
}