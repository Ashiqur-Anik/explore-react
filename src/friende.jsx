export default function friende({friende}){
    const {name,email} = friende
    return(
        <div className="box">
            <h2>Name : {name}</h2>
            <h2>Email : {email}</h2>
        </div>
    )
}