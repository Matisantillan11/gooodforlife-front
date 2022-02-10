

export default function Reducer (state = {

  status: 0,
  message: '',
  data: {},
  fetching: false,
	fetched: false,
	error: null,

}, action: {
	type: string,
	payload: any
}) {

  switch (action.type) {

    case 'LOGIN_PENDING': {

      return { 
        ...state, 
        fetching: true 
      };

    }
  
    case 'LOGIN_REJECTED': { 

      return { 
        ...state, 
        fetching: false, 
        fetched: true,
        status: action?.payload?.response?.data?.status || 500,
        data: [],
        message: action?.payload?.response?.data?.message || '',
        error: action?.payload?.response?.data?.error || ''
      };

    }
  
    case 'LOGIN_FULFILLED':{
      let token: string = action.payload?.data?.result?.token?.token || null
      let userId: string = action.payload?.data?.result?.user?._id || null
      let sessionId: string = action.payload?.data?.result?.session?._id || null

      let token_id = 'token';
      let user_id = 'user_id';
      let session_id = 'session_id ';

     /*  store(token_id , token)
      store(user_id , userId)
      store(session_id , sessionId) */
      
      return {
        ...state,
        fetching: false,
        fetched: true,
        error: null,
        status: action.payload.data.status,
        message: action.payload.data.message,
        data: action.payload.data.result
      };

    }
    case 'ET_BECA_PENDING': {

      return { 
        ...state, 
        fetching: true 
      };

    }
  
    case 'ET_BECA_REJECTED': { 

      return { 
        ...state, 
        fetching: false, 
        fetched: true,
        status: action?.payload?.response?.data?.status || 500,
        data: [],
        message: action?.payload?.response?.data?.message || '',
        error: action?.payload?.response?.data?.error || ''
      };

    }
  
    case 'ET_BECA_FULFILLED':{
      
      return {
        ...state,
        fetching: false,
        fetched: true,
        error: null,
        status: action.payload.data.status,
        message: action.payload.data.message,
        data: action.payload.data.result
      };

    }


    case 'REINTENTAR_LOGIN':{
      
      return {
        ...state,
        fetching: false,
        fetched: false,
        status: 0,
        message: '',
        data: {}
      };

    }
  
    case 'E': {
      throw new Error('Este error se manejo asi!' + ' login' + 'Reducer.js');
    }

    default: { break; }
  }

  return state;
}
