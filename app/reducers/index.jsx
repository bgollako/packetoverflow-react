let searchTextReducer = (state='', action) => {
    switch(action.type){
        case 'CHANGE_SEARCH_TEXT':
            return action.searchText;
        default:
            return state;
    }
};

let todoReducer = (state=[], action) => {
    switch(action.type){
        case 'ADD_TODO_ITEM':
            return [
                ...state,
                action.item
            ];
        case 'REMOVE_TODO_ITEM':
            return state.filter(todo=> todo.id != action.item.id);
        default:
            return state;
    }
};

let mapReducer =(state = {isFetching : false, url:undefined },action) => {
    switch(action.type){
        case 'START_LOCATION_FETCH':
            return {
                isFetching: true,
                url: undefined
            };
        case 'COMPLETE_LOCATION_FETCH':
            return {
                isFetching: false,
                url: action.url
            };
        default:
            return state;
    }
};

export let userStateReducer = (state={status:'loggedOut',message:'' },action)=>{
    switch(action.type){
        case 'LOGGING_IN':
            return {
                    status:'loggingIn',
                    message:action.message
            };
        case 'LOGGED_IN':
            return {
                    status:'loggedIn',
                    message:action.message
            };
        case 'LOGGED_OUT':
            return {
                    status:'loggedOut',
                    message:action.message
            };
        case 'LOGGING_OUT':
            return {
                status:'loggingOut',
                message:action.message
            };
        default:
            return  {
                status:'loggedOut',
                message: undefined
            };
    }
};

export let questionsRefreshReducer = (state ={ status:'END_REFRESH', questions: [] },action)=>{
    switch (action.type){
        case 'BEGIN_REFRESH':
            return { status:'BEGIN_REFRESH',
                     questions: []
            };
        case 'END_REFRESH':
            let initQuestions = [];
            if(action.questions){
                if(action.questions.length > 0){
                    initQuestions = action.questions.map(question=>question);
                }
            }
            return {
                status: 'END_REFRESH',
                questions: initQuestions
            };
        case 'ERROR_REFRESH':
            return {
                status: 'ERROR_REFRESH',
                questions:[]
            };
        default:
            return{
                status:'',
                questions:[]
            };
    }
};

export let questionPostReducer = (state ={status:'',message:''},action)=>{
    switch (action.type){
        case 'POSTING_QUESTION':
            return { status:'POSTING_QUESTION',
                     message: action.message
            };
        case 'POSTED_QUESTION':
            return {
                status: 'POSTED_QUESTION',
                message: action.message
            };
        case 'ERROR_ON_POST':
            return {
                status: 'ERROR_ON_POST',
                message:action.message
            };
        default:
            return{
                status:'',
                questions:[]
            };
    }
};

export let getQuestionDetailsReducer = (state ={status:'',message:''},action)=>{
    switch (action.type){
        case 'BEGIN_GET_QUESTION_DETAILS':
            return { status:'BEGIN_GET_QUESTION_DETAILS',
                     message: action.message,
                     question:[]
            };
        case 'COMPLETE_GET_QUESTION_DETAILS':
            return {
                status: 'COMPLETE_GET_QUESTION_DETAILS',
                message: action.message,
                question: (action.question?action.question.map(t=>t):[])
            };
        case 'ERROR_ON_GET_QUESTION_DETAILS':
            return {
                status: 'ERROR_ON_GET_QUESTION_DETAILS',
                message:action.message,
                question:[]
            };
        default:
            return{
                status:'',
                questions:[]
            };
    }
};

export let getSearchQuestionStateReducer = (state ={status:'',message:''},action)=>{
    switch (action.type){
        case 'BEGIN_SEARCH_QUESTION':
            return { status:'BEGIN_SEARCH_QUESTION',
                     message: action.message,
                     questions:[]
            };
        case 'COMPLETE_SEARCH_QUESTION':
            return {
                status: 'COMPLETE_SEARCH_QUESTION',
                message: action.message,
                questions: (action.questions?action.questions.map(t=>t):[])
            };
        case 'ERROR_ON_SEARCH_QUESTION':
            return {
                status: 'ERROR_ON_SEARCH_QUESTION',
                message:action.message,
                questions:[]
            };
        default:
            return{
                status:'',
                message:'',
                questions:[]
            };
    }
};

export let getPostQuestionStateReducer = (state ={status:'',message:''},action)=>{
    switch (action.type){
        case 'BEGIN_POST_ANSWER':
            return { status:'BEGIN_POST_ANSWER',
                     message: '',
                     question:[]
            };
        case 'COMPLETE_POST_ANSWER':
            return {
                status: 'COMPLETE_POST_ANSWER',
                message: '',
                question: (action.question?action.question.map(t=>t):[])
            };
        case 'ERROR_POST_ANSWER':
            return {
                status: 'ERROR_POST_ANSWER',
                message:action.message,
                question:[]
            };
        default:
            return{
                status:'',
                message:'',
                questions:[]
            };
    }
};

export let getEditAnswerStateReducer = (state ={status:'',message:''},action)=>{
    switch (action.type){
        case 'BEGIN_EDIT_QUESTION':
            return { status:'BEGIN_EDIT_QUESTION',
                     message: '',
                     question:[]
            };
        case 'COMPLETE_EDIT_QUESTION':
            return {
                status: 'COMPLETE_EDIT_QUESTION',
                message: '',
                question: (action.question?action.question.map(t=>t):[])
            };
        case 'ERROR_ON_EDIT_QUESTION':
            return {
                status: 'ERROR_ON_EDIT_QUESTION',
                message:action.message,
                question:[]
            };
        default:
            return{
                status:'',
                message:'',
                question:[]
            };
    }
};

export let getPostAnswerStateReducer = (state = {status:'',message:''},action)=>{
    switch (action.type){
        case 'BEGIN_POST_ANSWER':
            return { status:'BEGIN_POST_ANSWER',
                     message: '',
                     question:[]
            };
        case 'COMPLETE_POST_ANSWER':
            return {
                status: 'COMPLETE_POST_ANSWER',
                message: '',
                question: (action.question?action.question.map(t=>t):[])
            };
        case 'ERROR_POST_ANSWER':
            return {
                status: 'ERROR_POST_ANSWER',
                message:action.message,
                question:[]
            };
        default:
            return{
                status:'',
                message:'',
                question:[]
            };
    }
};

export let getActiveUsersStateReducer = (state = {status:'',message:'',users:[]},action)=>{
    switch (action.type){
        case 'BEGIN_GET_ACTIVE_USERS':
            return { status:'BEGIN_GET_ACTIVE_USERS',
                     message: '',
                     users:[]
            };
        case 'COMPLETE_GET_ACTIVE_USERS':
            return {
                status: 'COMPLETE_GET_ACTIVE_USERS',
                message: '',
                users: (action.users?action.users.map(t=>t):[])
            };
        case 'ERROR_ON_GET_ACTIVE_USERS':
            return {
                status: 'ERROR_ON_GET_ACTIVE_USERS',
                message:action.message,
                users:[]
            };
        default:
            return{
                status:'',
                message:'',
                users:[]
            };
    }
};
