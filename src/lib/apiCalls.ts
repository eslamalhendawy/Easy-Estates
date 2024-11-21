import axios from "axios";
const baseURL = "https://easyestate.codepeak.live/api/v1";

interface ApiResponse<T> {
  data: T;
}

export const postData = async <T>(url: string, data: T): Promise<ApiResponse<T>> => {
  let result: ApiResponse<T> | Error = { data: null as unknown as T };
  await axios
    .post<ApiResponse<any>>(
      baseURL + url,
      data
      //   {
      //   headers: {
      //     Authorization: `Bearer ${token}`,
      //   },
      // }
    )
    .then((response) => {
      result = response.data;
    })
    .catch((error) => {
      result = error;
    });
  return result;
};

interface GetDataResponse<T> {
  data: T;
}

export const getData = async <T>(url: string, token: string): Promise<GetDataResponse<T>> => {
  let result: GetDataResponse<T> = { data: null as unknown as T };
  await axios
    .get<GetDataResponse<T>>(baseURL + url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      result = response.data;
    })
    .catch((error) => {
      result = error;
    });
  return result;
};

interface PutDataResponse<T> {
  data: T;
}

export const putData = async <T>(url: string, data: any, token: string): Promise<PutDataResponse<T>> => {
  let result: PutDataResponse<T> = { data: null as unknown as T };
  await axios
    .put<PutDataResponse<T>>(baseURL + url, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      result = response.data;
    })
    .catch((error) => {
      result = error;
    });
  return result;
};

interface DeleteDataResponse<T> {
  data: T;
}

export const deleteData = async <T>(url: string, token: string): Promise<DeleteDataResponse<T>> => {
  let result: DeleteDataResponse<T> = { data: null as unknown as T };
  await axios
    .delete<DeleteDataResponse<T>>(baseURL + url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      result = response.data;
    })
    .catch((error) => {
      result = error;
    });
  return result;
};
