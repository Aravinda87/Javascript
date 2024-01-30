import React from "react";

const UserContext = React.createContext('raji')

const Userprovider = UserContext.Provider
const UserConsumer = UserContext.Consumer

export { UserConsumer , Userprovider }