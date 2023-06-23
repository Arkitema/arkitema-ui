import { ArkitemaAppBarProps } from '../src/arkitemaAppBar/arkitemaAppBar'
export const appBarMock = {
  navItems: [
    { link: '/projects/acfa456f-6628-4c0d-a0c8-1a53b1a46785/settings', title: 'Settings' },
    { link: '/projects/acfa456f-6628-4c0d-a0c8-1a53b1a46785/assemblies', title: 'Assemblies' },
    { link: '/projects/acfa456f-6628-4c0d-a0c8-1a53b1a46785/members', title: 'Members' },
    { link: '/projects/acfa456f-6628-4c0d-a0c8-1a53b1a46785/inventory', title: 'Inventory' },
  ],
  logoProps: {
    link: '/projects/acfa456f-6628-4c0d-a0c8-1a53b1a46785',
    title: 'My Project',
  },
  showPageLinks: true,
}

const appBarProps: ArkitemaAppBarProps = {
  ...appBarMock,
}
