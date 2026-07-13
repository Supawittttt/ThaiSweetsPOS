import type { NavItem, OrderItem, Product, ScreenTab } from '../types/pos';

export const img = {
  staff: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDFFUs0xbaMxA64X7WpEHJ0zgYSEBy1t4xGvrwWvAaHND3iR_n2QfqnTUHwSSxmM2VXQoxgXiGxGjMv2j9iQeYiEePZ4tjOpvO-FJT92HYD4DCmkIyR3ZA61jTe2J_0oqPvsY_uQifQ0Sv4SZEsalpUZlljyMwyaUzultecr-R6ea7x962IwfiKQATwP1UQ6RjurUKu-3dyU8ANnXwB6RhFmZgvdt_HzTstZnFcTE8IIAccWtrPLUER',
  manager: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDLQBkWlqtKBL9Sm5-E_V0eqUUjbGzWImX_12FrpUcshHAg53s3d2EtcEJ3D-TsKWchmX9X3RMb3hvwksAOa6HXiYA5c1_h9o3vyEm4lfMdryRtCQS-lCuUB9ftI1Vnkoa3b8IpoC5O4C1pr25tpqV8Oz0nREJvVc1qKi9r3zAUQt-ZTpoZgD7vOEfW48XOCU7rNorMb37ymRzdiKeQKddetFpeMCzYZn3O5-zOgSbaf2OitUFyZVrd',
  mango: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCK6S-Hxtz-BpzvnSoqy1l5ZASpH80OIlAelDMOCpsitrjaxf5LaLLDzyFavRZv24tOyzzdVmMPNJ_ExJdm_TgvfqJhT251azMx_v0TiqKvCteOl5gGRdE8VokknUAjri8LHAVC0Nu8NkIWBc2nZ4PcTvdtn_fX0qydoVbStQFgyVGy-kuBUgvnTg6ScEbESSYJhjitvnvO-zzYkukx2qk0ucqlrW1r7XTXSbYbEdyuxXxKfxKvbo_p',
  thongYip: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBFZzrzfjUFuW8bYwH1MBxfRJfoQyEOMx_Sf7vfyMFVj0_YOpnbxc4_NkAU1RMfMHeGz4onL_w6EkFcZFVy87HhlrlorUjNgv9OBOXOCGrRK2mAD0AVT2ttwV5O4Xov9nNFZI7Y0TY1ArKjrd5Wx_VFKssbcOGtMHCUPsSsAcX_KTOZc_bXnHMf7J9MrJYEaw0dd5yG_5PgICNnF61_EQzR-UxThk_dpSI11JlCN_QbfRrmDVNtnC0J',
  lukChup: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA4JqyVpyhVBguFSLlKWtbczdT2OIPRlHPf66e_DGjjxwsNWYYDbS40t9IAwOdkVaCEv8F1MQaWvGejiyqMNfK_-tCKT3Kt92MbS15McmaI0iGuhTw0YAax5N_vINAiix3yjkz6J6AGU9r0s1m9EtmrD55fARfiYGHW8aJtxvT3omvuhlStfJJafa9Zp9AuB2eYnvBtabwc-IEs5j3aCpk3COljAyMPINLptR4WkgMiPZRxcm7CGYpD',
  buaLoy: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCp3bVV5-Zu3I0d4dY51UphgvZ3E0dcbj03fXtiZqunNznXc-qAepLMMjdbbjAS4S7bOrhmI5Q-Q88JAByeeHPPhHKl3j1OUDm6TS7gcdA9_vgbMncvb39p98FHaBs7p9Spc5ZJCvV8r3FJqNqI2p8Hx6lu3amczkKlFB2L4QWnvI2M8iIOrKfDzfejkX9G8i2OLtOB5mnVcT0_yCc5ZslIobTr4fn6Svr1tZCQtJhG9MsYzD8Y76_R',
  khanom: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBlQVAYHG8jRWugEXMZ3p6nms-S7hqF4-yVlBLrM_1xi7D76GcJmoS6RI_seo3WUG_Nngj4gX59CKwY2IFTK8SF9ewSTNARUoDk6TbUf_rjmvl06i8jPsXDAVc4jIwwm1tRXLEnDk8EYAYP2UpBgebqeF5IqWBV2sIia_JGFBx5Gueh312CZQm4Eha-Y8ME3DcBZ_Yo6iN2roDfp9EtOnm0pB2R2ecSwE6B4MKWIPtcxA7ym940TZUs',
  tea: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAI4JFyoEYGJWOrEV13gtGfvdKWC10gede3Y_P5ZzqsT43vW46-pILuDqsDTOyZEWuKzZIy6MXLNgB1HN3OjffmY772YnFNa7MvhxB-S8ldYtlRF1l836a6px7_mQcJcijb-X3ERYQh3QC4RjKz_Zz06EmNZZ9CSiHflaqR88fRVJSparbZJ4TaeiE5iVbkeEw889HJ8ueck1pjMdsFPlr5kJ0IJPjymifMyXtYceUfKWIm0N8oAIPf',
  lodChong: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCzoPKoFWsk7qK_Qv6CBi__YlDLOI8b7oH008ZDVCJAHSqusS-_IwoWsLnapuYQZEmo2AOyRdBUhwPLZiXXS7OUN5S5uYM1woAE_iPHqsEp3HVqjsbo1hIt5m8q9R7C7mcw7mmMsgsKwMLLRdn1oKliIoZ3kCpGdbmZso0R9_bV11oo-TQO5b7Ee9ERl6Eu4pl-Nsv7mOPt6zJKX42Dr6bJ-XJIf81YsIau_OXXWryCSQyJ6seZij1z',
  rubies: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDJSivYOmZNL2D6UMse4OUUETlKCl48gRiITtFLbgGdqZsLPSxOQrNAvpJlMUdz6hugFq150ppnLqU5_C-AN-wEXpxttGY6C_dl6M1BsuFfuIJpF1HVxe89SWfblj4j1uwsH2gi1sBXW3ksonGlUC8Gg0vhu73wLATgVYEYmFk5tmloXgzHWjefddUinv_0cfSmbiJL5yFN_-wfyUg1JXkeHzYjgQWDYR4tJclwnT4QDVDsUI1FNO_R'
} as const;

export const navItems: NavItem[] = [
  ['dashboard', 'Dashboard', 'dashboard'],
  ['inventory_2', 'Inventory', 'inventory'],
  ['group', 'Members', 'members'],
  ['analytics', 'Reports', 'reports'],
  ['settings', 'Settings', 'settings']
];

export const screenTabs: ScreenTab[] = [
  ['login', 'Login'],
  ['storefront', 'Storefront'],
  ['summary', 'Summary'],
  ['dashboard', 'Dashboard'],
  ['inventory', 'Inventory'],
  ['members', 'Members'],
  ['register', 'Register'],
  ['reports', 'Reports'],
  ['roles', 'Roles'],
  ['settings', 'Settings'],
  ['success', 'Receipt']
];

export const products: Product[] = [
  { name: 'Thong Yip', subtitle: 'Pinched Gold Egg Yolks', price: '฿ 45.00', img: img.thongYip },
  { name: 'Khao Niao Mamuang', subtitle: 'Mango Sticky Rice', price: '฿ 120.00', img: img.mango },
  { name: 'Luk Chup', subtitle: 'Miniature Fruit Pastes', price: '฿ 85.00', img: img.lukChup },
  { name: 'Bua Loy', subtitle: 'Taro Balls in Coconut', price: '฿ 60.00', img: img.buaLoy },
  { name: 'Khanom Chan', subtitle: 'Pandan Layer Sweet', price: '฿ 50.00', img: img.khanom },
  { name: 'Signature Thai Tea', subtitle: 'Iced with Cream', price: '฿ 75.00', img: img.tea }
];

export const starterOrder: OrderItem[] = [
  { name: 'Khao Niao Mamuang', note: 'Extra Coconut Milk', qty: 1, price: 120 },
  { name: 'Luk Chup', note: 'Gift Box Presentation', qty: 2, price: 85 },
  { name: 'Signature Thai Tea', note: 'Less Sweet', qty: 1, price: 75 }
];
