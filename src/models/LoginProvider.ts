/* tslint:disable */
/* eslint-disable */
/**
 * Tribufu API
 * REST API to access Tribufu services.
 *
 * The version of the OpenAPI document: 1.1.0
 * Contact: contact@tribufu.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * 
 * @export
 */
export const LoginProvider = {
    Steam: 'steam',
    Epic: 'epic',
    Discord: 'discord',
    Microsoft: 'microsoft',
    Playstation: 'playstation',
    Google: 'google',
    Apple: 'apple'
} as const;
export type LoginProvider = typeof LoginProvider[keyof typeof LoginProvider];


export function instanceOfLoginProvider(value: any): boolean {
    for (const key in LoginProvider) {
        if (Object.prototype.hasOwnProperty.call(LoginProvider, key)) {
            if (LoginProvider[key as keyof typeof LoginProvider] === value) {
                return true;
            }
        }
    }
    return false;
}

export function LoginProviderFromJSON(json: any): LoginProvider {
    return LoginProviderFromJSONTyped(json, false);
}

export function LoginProviderFromJSONTyped(json: any, ignoreDiscriminator: boolean): LoginProvider {
    return json as LoginProvider;
}

export function LoginProviderToJSON(value?: LoginProvider | null): any {
    return value as any;
}

export function LoginProviderToJSONTyped(value: any, ignoreDiscriminator: boolean): LoginProvider {
    return value as LoginProvider;
}

