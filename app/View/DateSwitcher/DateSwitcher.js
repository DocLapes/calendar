import {createViewModel} from "~/View/DateSwitcher/DateSwitcher-view-model";

export function onNavigatingTo(args)
{
    const page = args.object;
    page.bindingContext = createViewModel(page);
}
