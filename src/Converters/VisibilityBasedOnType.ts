﻿module Fayde.Controls {
    export class VisibilityBasedOnType implements Fayde.Data.IValueConverter {
        private _TrueValue: Fayde.Visibility = Fayde.Visibility.Collapsed;
        private _FalseValue: Fayde.Visibility = Fayde.Visibility.Visible;

        public get TrueValue(): Fayde.Visibility { return this._TrueValue; }
        public set TrueValue(value: Fayde.Visibility) { this._TrueValue = value; }

        public get FalseValue(): Fayde.Visibility { return this._FalseValue; }
        public set FalseValue(value: Fayde.Visibility) { this._FalseValue = value; }

        Convert(value: any, targetType: IType, parameter: any, culture: any): any {
            if (!value) return this._FalseValue;
             var item: QueryConditionItemType;         
             item = value;
             console.log("item  :" + value);
            return item == QueryConditionItemType.Condition ? this._TrueValue : this._FalseValue;

         //   return <boolean>value ? this._TrueValue : this._FalseValue;
        }

        ConvertBack(value: any, targetType: IType, parameter: any, culture: any): any {
            return <Fayde.Visibility>value === Fayde.Visibility.Collapsed;
        }
    }
}