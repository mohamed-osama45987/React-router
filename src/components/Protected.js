

const Protected = ({ children, isAuth }) => {

    // backend auth

    if (isAuth === true) {
        return children
    }



    return <h1>You are not authorized to go to this page</h1>


}

export default Protected