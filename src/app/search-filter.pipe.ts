import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchfilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(menu: any[], searchText: string): any[] {
    if (!searchText) {
      return menu;
    }
    return menu.filter(category =>
      category.items.some((item: { name: string; }) =>
        item.name.toLowerCase().includes(searchText.toLowerCase())
      )
    );
  }
}
