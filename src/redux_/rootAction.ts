import { Actions as CurrenciesActions } from './currencies';
import { Actions as LayoutActions } from './layout';
import { Actions as PricesActions } from './prices';
import { Actions as ChartsActions } from './charts';
import { Actions as RefreshActions } from './refresh';
import { Actions as WalletActions } from './wallet';

export type RootAction =
    | CurrenciesActions
    | LayoutActions
    | PricesActions
    | ChartsActions
    | RefreshActions
    | WalletActions;
