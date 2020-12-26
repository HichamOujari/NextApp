export default (req, res) =>{
    const {query:{id}}= req;

    res.send({YOUrId: id});



}