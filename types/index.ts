// 菜单类型
export interface MenuItem {
  index: number;
  key: string;
  class: string;
  id: string;
  title: string;
  url?: string;
}

// 公共布局传递参数类型
export interface LayoutProps {
  changeHeaderStyle: (key?: string) => void;
  setMenuActive: (val?: string) => void;
}

// 新闻详情传递参数类型
export interface NewsDetailProps {
  id: string | string[] | undefined;
  url: string;
}
