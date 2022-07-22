import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { githubActions } from "../store/github/gitgub.api";


const action = {
    ...githubActions
}

export const useActions =()=>{
    const dispatch = useDispatch()
    return bindActionCreators(action, dispatch)
}