import Api from "./Api";

export interface GetMenuResponse {
  name: string;
  img: string;
  children: subMenu[];
}

export interface subMenu {
  name: string;
  categories: string[];
}

export async function getMenu(): Promise<GetMenuResponse> {
  const { data } = await Api.get<GetMenuResponse>({
    path: `/menu`
  });

  return data;
}
