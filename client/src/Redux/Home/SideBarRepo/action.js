import {SIDE_REPOS} from './actionTypes';
import {REPO_USER} from "./actionTypes";
export const getSideRepos = (data) => {
    return {
        type : SIDE_REPOS,
        payload : data
    }
}

export const getRepoUser = (user) => {
    return {
        type : REPO_USER,
        payload : user
    }
}