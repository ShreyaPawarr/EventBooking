const User= ()=> {
    return(
        <div className="flex flex-row justify-center items-center gap-2 border-black border-2 rounded-full px-4 py-2">
            <img className="rounded-full" width="30" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80" alt="Profile Pic"/>
            <h3 className="text-lg">Bhakhtavar</h3>
        </div>
    );
}

export default User;