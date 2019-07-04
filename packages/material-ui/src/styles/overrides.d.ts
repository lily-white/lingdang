import { StyleRules } from './withStyles';

import { AppBarClassKey } from '../AppBar';
import { AvatarClassKey } from '../Avatar';
import { BackdropClassKey } from '../Backdrop';
import { BadgeClassKey } from '../Badge';
import { BottomNavigationActionClassKey } from '../BottomNavigationAction';
import { BottomNavigationClassKey } from '../BottomNavigation';
import { BreadcrumbsClassKey } from '../Breadcrumbs';
import { ButtonBaseClassKey } from '../ButtonBase';
import { ButtonClassKey } from '../Button';
import { ButtonGroupClassKey } from '../ButtonGroup';
import { CardActionAreaClassKey } from '../CardActionArea';
import { CardActionsClassKey } from '../CardActions';
import { CardClassKey } from '../Card';
import { CardContentClassKey } from '../CardContent';
import { CardHeaderClassKey } from '../CardHeader';
import { CardMediaClassKey } from '../CardMedia';
import { CheckboxClassKey } from '../Checkbox';
import { ChipClassKey } from '../Chip';
import { CircularProgressClassKey } from '../CircularProgress';
import { CollapseClassKey } from '../Collapse';
import { CssBaselineClassKey } from '../CssBaseline';
import { DialogActionsClassKey } from '../DialogActions';
import { DialogClassKey } from '../Dialog';
import { DialogContentClassKey } from '../DialogContent';
import { DialogContentTextClassKey } from '../DialogContentText';
import { DialogTitleClassKey } from '../DialogTitle';
import { DividerClassKey } from '../Divider';
import { DrawerClassKey } from '../Drawer';
import { ExpansionPanelActionsClassKey } from '../ExpansionPanelActions';
import { ExpansionPanelClassKey } from '../ExpansionPanel';
import { ExpansionPanelDetailsClassKey } from '../ExpansionPanelDetails';
import { ExpansionPanelSummaryClassKey } from '../ExpansionPanelSummary';
import { FabClassKey } from '../Fab';
import { FilledInputClassKey } from '../FilledInput';
import { FormControlClassKey } from '../FormControl';
import { FormControlLabelClassKey } from '../FormControlLabel';
import { FormGroupClassKey } from '../FormGroup';
import { FormHelperTextClassKey } from '../FormHelperText';
import { FormLabelClassKey } from '../FormLabel';
import { GridClassKey } from '../Grid';
import { GridListClassKey } from '../GridList';
import { GridListTileBarClassKey } from '../GridListTileBar';
import { GridListTileClassKey } from '../GridListTile';
import { IconButtonClassKey } from '../IconButton';
import { IconClassKey } from '../Icon';
import { InputAdornmentClassKey } from '../InputAdornment';
import { InputBaseClassKey } from '../InputBase';
import { InputClassKey } from '../Input';
import { InputLabelClassKey } from '../InputLabel';
import { LinearProgressClassKey } from '../LinearProgress';
import { LinkClassKey } from '../Link';
import { ListClassKey } from '../List';
import { ListItemAvatarClassKey } from '../ListItemAvatar';
import { ListItemClassKey } from '../ListItem';
import { ListItemIconClassKey } from '../ListItemIcon';
import { ListItemSecondaryActionClassKey } from '../ListItemSecondaryAction';
import { ListItemTextClassKey } from '../ListItemText';
import { ListSubheaderClassKey } from '../ListSubheader';
import { MenuClassKey } from '../Menu';
import { MenuItemClassKey } from '../MenuItem';
import { MobileStepperClassKey } from '../MobileStepper';
import { ModalClassKey } from '../Modal';
import { NativeSelectClassKey } from '../NativeSelect';
import { OutlinedInputClassKey } from '../OutlinedInput';
import { PaperClassKey } from '../Paper';
import { PopoverClassKey } from '../Popover';
import { RadioClassKey } from '../Radio';
import { SelectClassKey } from '../Select';
import { SliderClassKey } from '../Slider';
import { SnackbarClassKey } from '../Snackbar';
import { SnackbarContentClassKey } from '../SnackbarContent';
import { StepButtonClasskey } from '../StepButton';
import { StepClasskey } from '../Step';
import { StepConnectorClasskey } from '../StepConnector';
import { StepContentClasskey } from '../StepContent';
import { StepIconClasskey } from '../StepIcon';
import { StepLabelClasskey } from '../StepLabel';
import { StepperClasskey } from '../Stepper';
import { SvgIconClassKey } from '../SvgIcon';
import { SwitchClassKey } from '../Switch';
import { TabClassKey } from '../Tab';
import { TableBodyClassKey } from '../TableBody';
import { TableCellClassKey } from '../TableCell';
import { TableClassKey } from '../Table';
import { TableFooterClassKey } from '../TableFooter';
import { TableHeadClassKey } from '../TableHead';
import { TablePaginationClassKey } from '../TablePagination';
import { TableRowClassKey } from '../TableRow';
import { TableSortLabelClassKey } from '../TableSortLabel';
import { TabsClassKey } from '../Tabs';
import { TextFieldClassKey } from '../TextField';
import { ToolbarClassKey } from '../Toolbar';
import { TooltipClassKey } from '../Tooltip';
import { TouchRippleClassKey } from '../ButtonBase/TouchRipple';
import { TypographyClassKey } from '../Typography';

export type Overrides = {
  [Name in keyof ComponentNameToClassKey]?: Partial<StyleRules<ComponentNameToClassKey[Name]>>
};

export interface ComponentNameToClassKey {
  MuiAppBar: AppBarClassKey;
  MuiAvatar: AvatarClassKey;
  MuiBackdrop: BackdropClassKey;
  MuiBadge: BadgeClassKey;
  MuiBottomNavigation: BottomNavigationClassKey;
  MuiBottomNavigationAction: BottomNavigationActionClassKey;
  MuiBreadcrumbs: BreadcrumbsClassKey;
  MuiButton: ButtonClassKey;
  MuiButtonBase: ButtonBaseClassKey;
  MuiButtonGroup: ButtonGroupClassKey;
  MuiCard: CardClassKey;
  MuiCardActionArea: CardActionAreaClassKey;
  MuiCardActions: CardActionsClassKey;
  MuiCardContent: CardContentClassKey;
  MuiCardHeader: CardHeaderClassKey;
  MuiCardMedia: CardMediaClassKey;
  MuiCheckbox: CheckboxClassKey;
  MuiChip: ChipClassKey;
  MuiCircularProgress: CircularProgressClassKey;
  MuiCollapse: CollapseClassKey;
  MuiCssBaseline: CssBaselineClassKey;
  MuiDialog: DialogClassKey;
  MuiDialogActions: DialogActionsClassKey;
  MuiDialogContent: DialogContentClassKey;
  MuiDialogContentText: DialogContentTextClassKey;
  MuiDialogTitle: DialogTitleClassKey;
  MuiDivider: DividerClassKey;
  MuiDrawer: DrawerClassKey;
  MuiExpansionPanel: ExpansionPanelClassKey;
  MuiExpansionPanelActions: ExpansionPanelActionsClassKey;
  MuiExpansionPanelDetails: ExpansionPanelDetailsClassKey;
  MuiExpansionPanelSummary: ExpansionPanelSummaryClassKey;
  MuiFab: FabClassKey;
  MuiFilledInput: FilledInputClassKey;
  MuiFormControl: FormControlClassKey;
  MuiFormControlLabel: FormControlLabelClassKey;
  MuiFormGroup: FormGroupClassKey;
  MuiFormHelperText: FormHelperTextClassKey;
  MuiFormLabel: FormLabelClassKey;
  MuiGrid: GridClassKey;
  MuiGridList: GridListClassKey;
  MuiGridListTile: GridListTileClassKey;
  MuiGridListTileBar: GridListTileBarClassKey;
  MuiIcon: IconClassKey;
  MuiIconButton: IconButtonClassKey;
  MuiInput: InputClassKey;
  MuiInputAdornment: InputAdornmentClassKey;
  MuiInputBase: InputBaseClassKey;
  MuiInputLabel: InputLabelClassKey;
  MuiLinearProgress: LinearProgressClassKey;
  MuiLink: LinkClassKey;
  MuiList: ListClassKey;
  MuiListItem: ListItemClassKey;
  MuiListItemAvatar: ListItemAvatarClassKey;
  MuiListItemIcon: ListItemIconClassKey;
  MuiListItemSecondaryAction: ListItemSecondaryActionClassKey;
  MuiListItemText: ListItemTextClassKey;
  MuiListSubheader: ListSubheaderClassKey;
  MuiMenu: MenuClassKey;
  MuiMenuItem: MenuItemClassKey;
  MuiMobileStepper: MobileStepperClassKey;
  MuiModal: ModalClassKey;
  MuiNativeSelect: NativeSelectClassKey;
  MuiOutlinedInput: OutlinedInputClassKey;
  MuiPaper: PaperClassKey;
  MuiPopover: PopoverClassKey;
  MuiRadio: RadioClassKey;
  MuiSelect: SelectClassKey;
  MuiSlider: SliderClassKey;
  MuiSnackbar: SnackbarClassKey;
  MuiSnackbarContent: SnackbarContentClassKey;
  MuiStep: StepClasskey;
  MuiStepButton: StepButtonClasskey;
  MuiStepConnector: StepConnectorClasskey;
  MuiStepContent: StepContentClasskey;
  MuiStepIcon: StepIconClasskey;
  MuiStepLabel: StepLabelClasskey;
  MuiStepper: StepperClasskey;
  MuiSvgIcon: SvgIconClassKey;
  MuiSwitch: SwitchClassKey;
  MuiTab: TabClassKey;
  MuiTable: TableClassKey;
  MuiTableBody: TableBodyClassKey;
  MuiTableCell: TableCellClassKey;
  MuiTableFooter: TableFooterClassKey;
  MuiTableHead: TableHeadClassKey;
  MuiTablePagination: TablePaginationClassKey;
  MuiTableRow: TableRowClassKey;
  MuiTableSortLabel: TableSortLabelClassKey;
  MuiTabs: TabsClassKey;
  MuiTextField: TextFieldClassKey;
  MuiToolbar: ToolbarClassKey;
  MuiTooltip: TooltipClassKey;
  MuiTouchRipple: TouchRippleClassKey;
  MuiTypography: TypographyClassKey;
}
