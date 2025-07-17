
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model MarcaVeiculo
 * 
 */
export type MarcaVeiculo = $Result.DefaultSelection<Prisma.$MarcaVeiculoPayload>
/**
 * Model ModeloVeiculo
 * 
 */
export type ModeloVeiculo = $Result.DefaultSelection<Prisma.$ModeloVeiculoPayload>
/**
 * Model TipoServico
 * 
 */
export type TipoServico = $Result.DefaultSelection<Prisma.$TipoServicoPayload>
/**
 * Model Cliente
 * 
 */
export type Cliente = $Result.DefaultSelection<Prisma.$ClientePayload>
/**
 * Model Veiculo
 * 
 */
export type Veiculo = $Result.DefaultSelection<Prisma.$VeiculoPayload>
/**
 * Model OrdemServico
 * 
 */
export type OrdemServico = $Result.DefaultSelection<Prisma.$OrdemServicoPayload>
/**
 * Model ItemServico
 * 
 */
export type ItemServico = $Result.DefaultSelection<Prisma.$ItemServicoPayload>
/**
 * Model ItemPeca
 * 
 */
export type ItemPeca = $Result.DefaultSelection<Prisma.$ItemPecaPayload>
/**
 * Model Peca
 * 
 */
export type Peca = $Result.DefaultSelection<Prisma.$PecaPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.marcaVeiculo`: Exposes CRUD operations for the **MarcaVeiculo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MarcaVeiculos
    * const marcaVeiculos = await prisma.marcaVeiculo.findMany()
    * ```
    */
  get marcaVeiculo(): Prisma.MarcaVeiculoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.modeloVeiculo`: Exposes CRUD operations for the **ModeloVeiculo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ModeloVeiculos
    * const modeloVeiculos = await prisma.modeloVeiculo.findMany()
    * ```
    */
  get modeloVeiculo(): Prisma.ModeloVeiculoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tipoServico`: Exposes CRUD operations for the **TipoServico** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TipoServicos
    * const tipoServicos = await prisma.tipoServico.findMany()
    * ```
    */
  get tipoServico(): Prisma.TipoServicoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cliente`: Exposes CRUD operations for the **Cliente** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clientes
    * const clientes = await prisma.cliente.findMany()
    * ```
    */
  get cliente(): Prisma.ClienteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.veiculo`: Exposes CRUD operations for the **Veiculo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Veiculos
    * const veiculos = await prisma.veiculo.findMany()
    * ```
    */
  get veiculo(): Prisma.VeiculoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ordemServico`: Exposes CRUD operations for the **OrdemServico** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrdemServicos
    * const ordemServicos = await prisma.ordemServico.findMany()
    * ```
    */
  get ordemServico(): Prisma.OrdemServicoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.itemServico`: Exposes CRUD operations for the **ItemServico** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ItemServicos
    * const itemServicos = await prisma.itemServico.findMany()
    * ```
    */
  get itemServico(): Prisma.ItemServicoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.itemPeca`: Exposes CRUD operations for the **ItemPeca** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ItemPecas
    * const itemPecas = await prisma.itemPeca.findMany()
    * ```
    */
  get itemPeca(): Prisma.ItemPecaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.peca`: Exposes CRUD operations for the **Peca** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pecas
    * const pecas = await prisma.peca.findMany()
    * ```
    */
  get peca(): Prisma.PecaDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    MarcaVeiculo: 'MarcaVeiculo',
    ModeloVeiculo: 'ModeloVeiculo',
    TipoServico: 'TipoServico',
    Cliente: 'Cliente',
    Veiculo: 'Veiculo',
    OrdemServico: 'OrdemServico',
    ItemServico: 'ItemServico',
    ItemPeca: 'ItemPeca',
    Peca: 'Peca'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "marcaVeiculo" | "modeloVeiculo" | "tipoServico" | "cliente" | "veiculo" | "ordemServico" | "itemServico" | "itemPeca" | "peca"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      MarcaVeiculo: {
        payload: Prisma.$MarcaVeiculoPayload<ExtArgs>
        fields: Prisma.MarcaVeiculoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MarcaVeiculoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarcaVeiculoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MarcaVeiculoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarcaVeiculoPayload>
          }
          findFirst: {
            args: Prisma.MarcaVeiculoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarcaVeiculoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MarcaVeiculoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarcaVeiculoPayload>
          }
          findMany: {
            args: Prisma.MarcaVeiculoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarcaVeiculoPayload>[]
          }
          create: {
            args: Prisma.MarcaVeiculoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarcaVeiculoPayload>
          }
          createMany: {
            args: Prisma.MarcaVeiculoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MarcaVeiculoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarcaVeiculoPayload>[]
          }
          delete: {
            args: Prisma.MarcaVeiculoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarcaVeiculoPayload>
          }
          update: {
            args: Prisma.MarcaVeiculoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarcaVeiculoPayload>
          }
          deleteMany: {
            args: Prisma.MarcaVeiculoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MarcaVeiculoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MarcaVeiculoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarcaVeiculoPayload>[]
          }
          upsert: {
            args: Prisma.MarcaVeiculoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarcaVeiculoPayload>
          }
          aggregate: {
            args: Prisma.MarcaVeiculoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMarcaVeiculo>
          }
          groupBy: {
            args: Prisma.MarcaVeiculoGroupByArgs<ExtArgs>
            result: $Utils.Optional<MarcaVeiculoGroupByOutputType>[]
          }
          count: {
            args: Prisma.MarcaVeiculoCountArgs<ExtArgs>
            result: $Utils.Optional<MarcaVeiculoCountAggregateOutputType> | number
          }
        }
      }
      ModeloVeiculo: {
        payload: Prisma.$ModeloVeiculoPayload<ExtArgs>
        fields: Prisma.ModeloVeiculoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ModeloVeiculoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModeloVeiculoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ModeloVeiculoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModeloVeiculoPayload>
          }
          findFirst: {
            args: Prisma.ModeloVeiculoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModeloVeiculoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ModeloVeiculoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModeloVeiculoPayload>
          }
          findMany: {
            args: Prisma.ModeloVeiculoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModeloVeiculoPayload>[]
          }
          create: {
            args: Prisma.ModeloVeiculoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModeloVeiculoPayload>
          }
          createMany: {
            args: Prisma.ModeloVeiculoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ModeloVeiculoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModeloVeiculoPayload>[]
          }
          delete: {
            args: Prisma.ModeloVeiculoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModeloVeiculoPayload>
          }
          update: {
            args: Prisma.ModeloVeiculoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModeloVeiculoPayload>
          }
          deleteMany: {
            args: Prisma.ModeloVeiculoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ModeloVeiculoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ModeloVeiculoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModeloVeiculoPayload>[]
          }
          upsert: {
            args: Prisma.ModeloVeiculoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModeloVeiculoPayload>
          }
          aggregate: {
            args: Prisma.ModeloVeiculoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateModeloVeiculo>
          }
          groupBy: {
            args: Prisma.ModeloVeiculoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ModeloVeiculoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ModeloVeiculoCountArgs<ExtArgs>
            result: $Utils.Optional<ModeloVeiculoCountAggregateOutputType> | number
          }
        }
      }
      TipoServico: {
        payload: Prisma.$TipoServicoPayload<ExtArgs>
        fields: Prisma.TipoServicoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TipoServicoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoServicoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TipoServicoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoServicoPayload>
          }
          findFirst: {
            args: Prisma.TipoServicoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoServicoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TipoServicoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoServicoPayload>
          }
          findMany: {
            args: Prisma.TipoServicoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoServicoPayload>[]
          }
          create: {
            args: Prisma.TipoServicoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoServicoPayload>
          }
          createMany: {
            args: Prisma.TipoServicoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TipoServicoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoServicoPayload>[]
          }
          delete: {
            args: Prisma.TipoServicoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoServicoPayload>
          }
          update: {
            args: Prisma.TipoServicoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoServicoPayload>
          }
          deleteMany: {
            args: Prisma.TipoServicoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TipoServicoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TipoServicoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoServicoPayload>[]
          }
          upsert: {
            args: Prisma.TipoServicoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoServicoPayload>
          }
          aggregate: {
            args: Prisma.TipoServicoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTipoServico>
          }
          groupBy: {
            args: Prisma.TipoServicoGroupByArgs<ExtArgs>
            result: $Utils.Optional<TipoServicoGroupByOutputType>[]
          }
          count: {
            args: Prisma.TipoServicoCountArgs<ExtArgs>
            result: $Utils.Optional<TipoServicoCountAggregateOutputType> | number
          }
        }
      }
      Cliente: {
        payload: Prisma.$ClientePayload<ExtArgs>
        fields: Prisma.ClienteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClienteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClienteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          findFirst: {
            args: Prisma.ClienteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClienteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          findMany: {
            args: Prisma.ClienteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>[]
          }
          create: {
            args: Prisma.ClienteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          createMany: {
            args: Prisma.ClienteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClienteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>[]
          }
          delete: {
            args: Prisma.ClienteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          update: {
            args: Prisma.ClienteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          deleteMany: {
            args: Prisma.ClienteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClienteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClienteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>[]
          }
          upsert: {
            args: Prisma.ClienteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          aggregate: {
            args: Prisma.ClienteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCliente>
          }
          groupBy: {
            args: Prisma.ClienteGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClienteGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClienteCountArgs<ExtArgs>
            result: $Utils.Optional<ClienteCountAggregateOutputType> | number
          }
        }
      }
      Veiculo: {
        payload: Prisma.$VeiculoPayload<ExtArgs>
        fields: Prisma.VeiculoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VeiculoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VeiculoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VeiculoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VeiculoPayload>
          }
          findFirst: {
            args: Prisma.VeiculoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VeiculoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VeiculoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VeiculoPayload>
          }
          findMany: {
            args: Prisma.VeiculoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VeiculoPayload>[]
          }
          create: {
            args: Prisma.VeiculoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VeiculoPayload>
          }
          createMany: {
            args: Prisma.VeiculoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VeiculoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VeiculoPayload>[]
          }
          delete: {
            args: Prisma.VeiculoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VeiculoPayload>
          }
          update: {
            args: Prisma.VeiculoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VeiculoPayload>
          }
          deleteMany: {
            args: Prisma.VeiculoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VeiculoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VeiculoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VeiculoPayload>[]
          }
          upsert: {
            args: Prisma.VeiculoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VeiculoPayload>
          }
          aggregate: {
            args: Prisma.VeiculoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVeiculo>
          }
          groupBy: {
            args: Prisma.VeiculoGroupByArgs<ExtArgs>
            result: $Utils.Optional<VeiculoGroupByOutputType>[]
          }
          count: {
            args: Prisma.VeiculoCountArgs<ExtArgs>
            result: $Utils.Optional<VeiculoCountAggregateOutputType> | number
          }
        }
      }
      OrdemServico: {
        payload: Prisma.$OrdemServicoPayload<ExtArgs>
        fields: Prisma.OrdemServicoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrdemServicoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdemServicoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrdemServicoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdemServicoPayload>
          }
          findFirst: {
            args: Prisma.OrdemServicoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdemServicoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrdemServicoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdemServicoPayload>
          }
          findMany: {
            args: Prisma.OrdemServicoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdemServicoPayload>[]
          }
          create: {
            args: Prisma.OrdemServicoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdemServicoPayload>
          }
          createMany: {
            args: Prisma.OrdemServicoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrdemServicoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdemServicoPayload>[]
          }
          delete: {
            args: Prisma.OrdemServicoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdemServicoPayload>
          }
          update: {
            args: Prisma.OrdemServicoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdemServicoPayload>
          }
          deleteMany: {
            args: Prisma.OrdemServicoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrdemServicoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrdemServicoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdemServicoPayload>[]
          }
          upsert: {
            args: Prisma.OrdemServicoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdemServicoPayload>
          }
          aggregate: {
            args: Prisma.OrdemServicoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrdemServico>
          }
          groupBy: {
            args: Prisma.OrdemServicoGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrdemServicoGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrdemServicoCountArgs<ExtArgs>
            result: $Utils.Optional<OrdemServicoCountAggregateOutputType> | number
          }
        }
      }
      ItemServico: {
        payload: Prisma.$ItemServicoPayload<ExtArgs>
        fields: Prisma.ItemServicoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ItemServicoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemServicoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ItemServicoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemServicoPayload>
          }
          findFirst: {
            args: Prisma.ItemServicoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemServicoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ItemServicoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemServicoPayload>
          }
          findMany: {
            args: Prisma.ItemServicoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemServicoPayload>[]
          }
          create: {
            args: Prisma.ItemServicoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemServicoPayload>
          }
          createMany: {
            args: Prisma.ItemServicoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ItemServicoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemServicoPayload>[]
          }
          delete: {
            args: Prisma.ItemServicoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemServicoPayload>
          }
          update: {
            args: Prisma.ItemServicoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemServicoPayload>
          }
          deleteMany: {
            args: Prisma.ItemServicoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ItemServicoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ItemServicoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemServicoPayload>[]
          }
          upsert: {
            args: Prisma.ItemServicoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemServicoPayload>
          }
          aggregate: {
            args: Prisma.ItemServicoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateItemServico>
          }
          groupBy: {
            args: Prisma.ItemServicoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ItemServicoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ItemServicoCountArgs<ExtArgs>
            result: $Utils.Optional<ItemServicoCountAggregateOutputType> | number
          }
        }
      }
      ItemPeca: {
        payload: Prisma.$ItemPecaPayload<ExtArgs>
        fields: Prisma.ItemPecaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ItemPecaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPecaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ItemPecaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPecaPayload>
          }
          findFirst: {
            args: Prisma.ItemPecaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPecaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ItemPecaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPecaPayload>
          }
          findMany: {
            args: Prisma.ItemPecaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPecaPayload>[]
          }
          create: {
            args: Prisma.ItemPecaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPecaPayload>
          }
          createMany: {
            args: Prisma.ItemPecaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ItemPecaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPecaPayload>[]
          }
          delete: {
            args: Prisma.ItemPecaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPecaPayload>
          }
          update: {
            args: Prisma.ItemPecaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPecaPayload>
          }
          deleteMany: {
            args: Prisma.ItemPecaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ItemPecaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ItemPecaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPecaPayload>[]
          }
          upsert: {
            args: Prisma.ItemPecaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPecaPayload>
          }
          aggregate: {
            args: Prisma.ItemPecaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateItemPeca>
          }
          groupBy: {
            args: Prisma.ItemPecaGroupByArgs<ExtArgs>
            result: $Utils.Optional<ItemPecaGroupByOutputType>[]
          }
          count: {
            args: Prisma.ItemPecaCountArgs<ExtArgs>
            result: $Utils.Optional<ItemPecaCountAggregateOutputType> | number
          }
        }
      }
      Peca: {
        payload: Prisma.$PecaPayload<ExtArgs>
        fields: Prisma.PecaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PecaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PecaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PecaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PecaPayload>
          }
          findFirst: {
            args: Prisma.PecaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PecaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PecaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PecaPayload>
          }
          findMany: {
            args: Prisma.PecaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PecaPayload>[]
          }
          create: {
            args: Prisma.PecaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PecaPayload>
          }
          createMany: {
            args: Prisma.PecaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PecaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PecaPayload>[]
          }
          delete: {
            args: Prisma.PecaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PecaPayload>
          }
          update: {
            args: Prisma.PecaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PecaPayload>
          }
          deleteMany: {
            args: Prisma.PecaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PecaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PecaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PecaPayload>[]
          }
          upsert: {
            args: Prisma.PecaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PecaPayload>
          }
          aggregate: {
            args: Prisma.PecaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePeca>
          }
          groupBy: {
            args: Prisma.PecaGroupByArgs<ExtArgs>
            result: $Utils.Optional<PecaGroupByOutputType>[]
          }
          count: {
            args: Prisma.PecaCountArgs<ExtArgs>
            result: $Utils.Optional<PecaCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    marcaVeiculo?: MarcaVeiculoOmit
    modeloVeiculo?: ModeloVeiculoOmit
    tipoServico?: TipoServicoOmit
    cliente?: ClienteOmit
    veiculo?: VeiculoOmit
    ordemServico?: OrdemServicoOmit
    itemServico?: ItemServicoOmit
    itemPeca?: ItemPecaOmit
    peca?: PecaOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type MarcaVeiculoCountOutputType
   */

  export type MarcaVeiculoCountOutputType = {
    modelos: number
  }

  export type MarcaVeiculoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    modelos?: boolean | MarcaVeiculoCountOutputTypeCountModelosArgs
  }

  // Custom InputTypes
  /**
   * MarcaVeiculoCountOutputType without action
   */
  export type MarcaVeiculoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarcaVeiculoCountOutputType
     */
    select?: MarcaVeiculoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MarcaVeiculoCountOutputType without action
   */
  export type MarcaVeiculoCountOutputTypeCountModelosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ModeloVeiculoWhereInput
  }


  /**
   * Count Type ModeloVeiculoCountOutputType
   */

  export type ModeloVeiculoCountOutputType = {
    veiculos: number
  }

  export type ModeloVeiculoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    veiculos?: boolean | ModeloVeiculoCountOutputTypeCountVeiculosArgs
  }

  // Custom InputTypes
  /**
   * ModeloVeiculoCountOutputType without action
   */
  export type ModeloVeiculoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModeloVeiculoCountOutputType
     */
    select?: ModeloVeiculoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ModeloVeiculoCountOutputType without action
   */
  export type ModeloVeiculoCountOutputTypeCountVeiculosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VeiculoWhereInput
  }


  /**
   * Count Type TipoServicoCountOutputType
   */

  export type TipoServicoCountOutputType = {
    ItemServico: number
  }

  export type TipoServicoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ItemServico?: boolean | TipoServicoCountOutputTypeCountItemServicoArgs
  }

  // Custom InputTypes
  /**
   * TipoServicoCountOutputType without action
   */
  export type TipoServicoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoServicoCountOutputType
     */
    select?: TipoServicoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TipoServicoCountOutputType without action
   */
  export type TipoServicoCountOutputTypeCountItemServicoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemServicoWhereInput
  }


  /**
   * Count Type ClienteCountOutputType
   */

  export type ClienteCountOutputType = {
    veiculos: number
  }

  export type ClienteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    veiculos?: boolean | ClienteCountOutputTypeCountVeiculosArgs
  }

  // Custom InputTypes
  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClienteCountOutputType
     */
    select?: ClienteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeCountVeiculosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VeiculoWhereInput
  }


  /**
   * Count Type VeiculoCountOutputType
   */

  export type VeiculoCountOutputType = {
    ordensServico: number
  }

  export type VeiculoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ordensServico?: boolean | VeiculoCountOutputTypeCountOrdensServicoArgs
  }

  // Custom InputTypes
  /**
   * VeiculoCountOutputType without action
   */
  export type VeiculoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VeiculoCountOutputType
     */
    select?: VeiculoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VeiculoCountOutputType without action
   */
  export type VeiculoCountOutputTypeCountOrdensServicoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrdemServicoWhereInput
  }


  /**
   * Count Type OrdemServicoCountOutputType
   */

  export type OrdemServicoCountOutputType = {
    itensPeca: number
    itensServico: number
  }

  export type OrdemServicoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    itensPeca?: boolean | OrdemServicoCountOutputTypeCountItensPecaArgs
    itensServico?: boolean | OrdemServicoCountOutputTypeCountItensServicoArgs
  }

  // Custom InputTypes
  /**
   * OrdemServicoCountOutputType without action
   */
  export type OrdemServicoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdemServicoCountOutputType
     */
    select?: OrdemServicoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrdemServicoCountOutputType without action
   */
  export type OrdemServicoCountOutputTypeCountItensPecaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemPecaWhereInput
  }

  /**
   * OrdemServicoCountOutputType without action
   */
  export type OrdemServicoCountOutputTypeCountItensServicoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemServicoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    name: string | null
    password: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string | null
      password: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
  }


  /**
   * Model MarcaVeiculo
   */

  export type AggregateMarcaVeiculo = {
    _count: MarcaVeiculoCountAggregateOutputType | null
    _avg: MarcaVeiculoAvgAggregateOutputType | null
    _sum: MarcaVeiculoSumAggregateOutputType | null
    _min: MarcaVeiculoMinAggregateOutputType | null
    _max: MarcaVeiculoMaxAggregateOutputType | null
  }

  export type MarcaVeiculoAvgAggregateOutputType = {
    id: number | null
  }

  export type MarcaVeiculoSumAggregateOutputType = {
    id: number | null
  }

  export type MarcaVeiculoMinAggregateOutputType = {
    id: number | null
    nome: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MarcaVeiculoMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MarcaVeiculoCountAggregateOutputType = {
    id: number
    nome: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MarcaVeiculoAvgAggregateInputType = {
    id?: true
  }

  export type MarcaVeiculoSumAggregateInputType = {
    id?: true
  }

  export type MarcaVeiculoMinAggregateInputType = {
    id?: true
    nome?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MarcaVeiculoMaxAggregateInputType = {
    id?: true
    nome?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MarcaVeiculoCountAggregateInputType = {
    id?: true
    nome?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MarcaVeiculoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MarcaVeiculo to aggregate.
     */
    where?: MarcaVeiculoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MarcaVeiculos to fetch.
     */
    orderBy?: MarcaVeiculoOrderByWithRelationInput | MarcaVeiculoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MarcaVeiculoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MarcaVeiculos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MarcaVeiculos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MarcaVeiculos
    **/
    _count?: true | MarcaVeiculoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MarcaVeiculoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MarcaVeiculoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MarcaVeiculoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MarcaVeiculoMaxAggregateInputType
  }

  export type GetMarcaVeiculoAggregateType<T extends MarcaVeiculoAggregateArgs> = {
        [P in keyof T & keyof AggregateMarcaVeiculo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMarcaVeiculo[P]>
      : GetScalarType<T[P], AggregateMarcaVeiculo[P]>
  }




  export type MarcaVeiculoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MarcaVeiculoWhereInput
    orderBy?: MarcaVeiculoOrderByWithAggregationInput | MarcaVeiculoOrderByWithAggregationInput[]
    by: MarcaVeiculoScalarFieldEnum[] | MarcaVeiculoScalarFieldEnum
    having?: MarcaVeiculoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MarcaVeiculoCountAggregateInputType | true
    _avg?: MarcaVeiculoAvgAggregateInputType
    _sum?: MarcaVeiculoSumAggregateInputType
    _min?: MarcaVeiculoMinAggregateInputType
    _max?: MarcaVeiculoMaxAggregateInputType
  }

  export type MarcaVeiculoGroupByOutputType = {
    id: number
    nome: string
    createdAt: Date
    updatedAt: Date
    _count: MarcaVeiculoCountAggregateOutputType | null
    _avg: MarcaVeiculoAvgAggregateOutputType | null
    _sum: MarcaVeiculoSumAggregateOutputType | null
    _min: MarcaVeiculoMinAggregateOutputType | null
    _max: MarcaVeiculoMaxAggregateOutputType | null
  }

  type GetMarcaVeiculoGroupByPayload<T extends MarcaVeiculoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MarcaVeiculoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MarcaVeiculoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MarcaVeiculoGroupByOutputType[P]>
            : GetScalarType<T[P], MarcaVeiculoGroupByOutputType[P]>
        }
      >
    >


  export type MarcaVeiculoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    modelos?: boolean | MarcaVeiculo$modelosArgs<ExtArgs>
    _count?: boolean | MarcaVeiculoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["marcaVeiculo"]>

  export type MarcaVeiculoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["marcaVeiculo"]>

  export type MarcaVeiculoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["marcaVeiculo"]>

  export type MarcaVeiculoSelectScalar = {
    id?: boolean
    nome?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MarcaVeiculoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "createdAt" | "updatedAt", ExtArgs["result"]["marcaVeiculo"]>
  export type MarcaVeiculoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    modelos?: boolean | MarcaVeiculo$modelosArgs<ExtArgs>
    _count?: boolean | MarcaVeiculoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MarcaVeiculoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type MarcaVeiculoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MarcaVeiculoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MarcaVeiculo"
    objects: {
      modelos: Prisma.$ModeloVeiculoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["marcaVeiculo"]>
    composites: {}
  }

  type MarcaVeiculoGetPayload<S extends boolean | null | undefined | MarcaVeiculoDefaultArgs> = $Result.GetResult<Prisma.$MarcaVeiculoPayload, S>

  type MarcaVeiculoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MarcaVeiculoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MarcaVeiculoCountAggregateInputType | true
    }

  export interface MarcaVeiculoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MarcaVeiculo'], meta: { name: 'MarcaVeiculo' } }
    /**
     * Find zero or one MarcaVeiculo that matches the filter.
     * @param {MarcaVeiculoFindUniqueArgs} args - Arguments to find a MarcaVeiculo
     * @example
     * // Get one MarcaVeiculo
     * const marcaVeiculo = await prisma.marcaVeiculo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MarcaVeiculoFindUniqueArgs>(args: SelectSubset<T, MarcaVeiculoFindUniqueArgs<ExtArgs>>): Prisma__MarcaVeiculoClient<$Result.GetResult<Prisma.$MarcaVeiculoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MarcaVeiculo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MarcaVeiculoFindUniqueOrThrowArgs} args - Arguments to find a MarcaVeiculo
     * @example
     * // Get one MarcaVeiculo
     * const marcaVeiculo = await prisma.marcaVeiculo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MarcaVeiculoFindUniqueOrThrowArgs>(args: SelectSubset<T, MarcaVeiculoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MarcaVeiculoClient<$Result.GetResult<Prisma.$MarcaVeiculoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MarcaVeiculo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarcaVeiculoFindFirstArgs} args - Arguments to find a MarcaVeiculo
     * @example
     * // Get one MarcaVeiculo
     * const marcaVeiculo = await prisma.marcaVeiculo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MarcaVeiculoFindFirstArgs>(args?: SelectSubset<T, MarcaVeiculoFindFirstArgs<ExtArgs>>): Prisma__MarcaVeiculoClient<$Result.GetResult<Prisma.$MarcaVeiculoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MarcaVeiculo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarcaVeiculoFindFirstOrThrowArgs} args - Arguments to find a MarcaVeiculo
     * @example
     * // Get one MarcaVeiculo
     * const marcaVeiculo = await prisma.marcaVeiculo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MarcaVeiculoFindFirstOrThrowArgs>(args?: SelectSubset<T, MarcaVeiculoFindFirstOrThrowArgs<ExtArgs>>): Prisma__MarcaVeiculoClient<$Result.GetResult<Prisma.$MarcaVeiculoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MarcaVeiculos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarcaVeiculoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MarcaVeiculos
     * const marcaVeiculos = await prisma.marcaVeiculo.findMany()
     * 
     * // Get first 10 MarcaVeiculos
     * const marcaVeiculos = await prisma.marcaVeiculo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const marcaVeiculoWithIdOnly = await prisma.marcaVeiculo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MarcaVeiculoFindManyArgs>(args?: SelectSubset<T, MarcaVeiculoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarcaVeiculoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MarcaVeiculo.
     * @param {MarcaVeiculoCreateArgs} args - Arguments to create a MarcaVeiculo.
     * @example
     * // Create one MarcaVeiculo
     * const MarcaVeiculo = await prisma.marcaVeiculo.create({
     *   data: {
     *     // ... data to create a MarcaVeiculo
     *   }
     * })
     * 
     */
    create<T extends MarcaVeiculoCreateArgs>(args: SelectSubset<T, MarcaVeiculoCreateArgs<ExtArgs>>): Prisma__MarcaVeiculoClient<$Result.GetResult<Prisma.$MarcaVeiculoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MarcaVeiculos.
     * @param {MarcaVeiculoCreateManyArgs} args - Arguments to create many MarcaVeiculos.
     * @example
     * // Create many MarcaVeiculos
     * const marcaVeiculo = await prisma.marcaVeiculo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MarcaVeiculoCreateManyArgs>(args?: SelectSubset<T, MarcaVeiculoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MarcaVeiculos and returns the data saved in the database.
     * @param {MarcaVeiculoCreateManyAndReturnArgs} args - Arguments to create many MarcaVeiculos.
     * @example
     * // Create many MarcaVeiculos
     * const marcaVeiculo = await prisma.marcaVeiculo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MarcaVeiculos and only return the `id`
     * const marcaVeiculoWithIdOnly = await prisma.marcaVeiculo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MarcaVeiculoCreateManyAndReturnArgs>(args?: SelectSubset<T, MarcaVeiculoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarcaVeiculoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MarcaVeiculo.
     * @param {MarcaVeiculoDeleteArgs} args - Arguments to delete one MarcaVeiculo.
     * @example
     * // Delete one MarcaVeiculo
     * const MarcaVeiculo = await prisma.marcaVeiculo.delete({
     *   where: {
     *     // ... filter to delete one MarcaVeiculo
     *   }
     * })
     * 
     */
    delete<T extends MarcaVeiculoDeleteArgs>(args: SelectSubset<T, MarcaVeiculoDeleteArgs<ExtArgs>>): Prisma__MarcaVeiculoClient<$Result.GetResult<Prisma.$MarcaVeiculoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MarcaVeiculo.
     * @param {MarcaVeiculoUpdateArgs} args - Arguments to update one MarcaVeiculo.
     * @example
     * // Update one MarcaVeiculo
     * const marcaVeiculo = await prisma.marcaVeiculo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MarcaVeiculoUpdateArgs>(args: SelectSubset<T, MarcaVeiculoUpdateArgs<ExtArgs>>): Prisma__MarcaVeiculoClient<$Result.GetResult<Prisma.$MarcaVeiculoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MarcaVeiculos.
     * @param {MarcaVeiculoDeleteManyArgs} args - Arguments to filter MarcaVeiculos to delete.
     * @example
     * // Delete a few MarcaVeiculos
     * const { count } = await prisma.marcaVeiculo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MarcaVeiculoDeleteManyArgs>(args?: SelectSubset<T, MarcaVeiculoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MarcaVeiculos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarcaVeiculoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MarcaVeiculos
     * const marcaVeiculo = await prisma.marcaVeiculo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MarcaVeiculoUpdateManyArgs>(args: SelectSubset<T, MarcaVeiculoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MarcaVeiculos and returns the data updated in the database.
     * @param {MarcaVeiculoUpdateManyAndReturnArgs} args - Arguments to update many MarcaVeiculos.
     * @example
     * // Update many MarcaVeiculos
     * const marcaVeiculo = await prisma.marcaVeiculo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MarcaVeiculos and only return the `id`
     * const marcaVeiculoWithIdOnly = await prisma.marcaVeiculo.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MarcaVeiculoUpdateManyAndReturnArgs>(args: SelectSubset<T, MarcaVeiculoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarcaVeiculoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MarcaVeiculo.
     * @param {MarcaVeiculoUpsertArgs} args - Arguments to update or create a MarcaVeiculo.
     * @example
     * // Update or create a MarcaVeiculo
     * const marcaVeiculo = await prisma.marcaVeiculo.upsert({
     *   create: {
     *     // ... data to create a MarcaVeiculo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MarcaVeiculo we want to update
     *   }
     * })
     */
    upsert<T extends MarcaVeiculoUpsertArgs>(args: SelectSubset<T, MarcaVeiculoUpsertArgs<ExtArgs>>): Prisma__MarcaVeiculoClient<$Result.GetResult<Prisma.$MarcaVeiculoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MarcaVeiculos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarcaVeiculoCountArgs} args - Arguments to filter MarcaVeiculos to count.
     * @example
     * // Count the number of MarcaVeiculos
     * const count = await prisma.marcaVeiculo.count({
     *   where: {
     *     // ... the filter for the MarcaVeiculos we want to count
     *   }
     * })
    **/
    count<T extends MarcaVeiculoCountArgs>(
      args?: Subset<T, MarcaVeiculoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MarcaVeiculoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MarcaVeiculo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarcaVeiculoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MarcaVeiculoAggregateArgs>(args: Subset<T, MarcaVeiculoAggregateArgs>): Prisma.PrismaPromise<GetMarcaVeiculoAggregateType<T>>

    /**
     * Group by MarcaVeiculo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarcaVeiculoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MarcaVeiculoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MarcaVeiculoGroupByArgs['orderBy'] }
        : { orderBy?: MarcaVeiculoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MarcaVeiculoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMarcaVeiculoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MarcaVeiculo model
   */
  readonly fields: MarcaVeiculoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MarcaVeiculo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MarcaVeiculoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    modelos<T extends MarcaVeiculo$modelosArgs<ExtArgs> = {}>(args?: Subset<T, MarcaVeiculo$modelosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModeloVeiculoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MarcaVeiculo model
   */
  interface MarcaVeiculoFieldRefs {
    readonly id: FieldRef<"MarcaVeiculo", 'Int'>
    readonly nome: FieldRef<"MarcaVeiculo", 'String'>
    readonly createdAt: FieldRef<"MarcaVeiculo", 'DateTime'>
    readonly updatedAt: FieldRef<"MarcaVeiculo", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MarcaVeiculo findUnique
   */
  export type MarcaVeiculoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarcaVeiculo
     */
    select?: MarcaVeiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarcaVeiculo
     */
    omit?: MarcaVeiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarcaVeiculoInclude<ExtArgs> | null
    /**
     * Filter, which MarcaVeiculo to fetch.
     */
    where: MarcaVeiculoWhereUniqueInput
  }

  /**
   * MarcaVeiculo findUniqueOrThrow
   */
  export type MarcaVeiculoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarcaVeiculo
     */
    select?: MarcaVeiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarcaVeiculo
     */
    omit?: MarcaVeiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarcaVeiculoInclude<ExtArgs> | null
    /**
     * Filter, which MarcaVeiculo to fetch.
     */
    where: MarcaVeiculoWhereUniqueInput
  }

  /**
   * MarcaVeiculo findFirst
   */
  export type MarcaVeiculoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarcaVeiculo
     */
    select?: MarcaVeiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarcaVeiculo
     */
    omit?: MarcaVeiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarcaVeiculoInclude<ExtArgs> | null
    /**
     * Filter, which MarcaVeiculo to fetch.
     */
    where?: MarcaVeiculoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MarcaVeiculos to fetch.
     */
    orderBy?: MarcaVeiculoOrderByWithRelationInput | MarcaVeiculoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MarcaVeiculos.
     */
    cursor?: MarcaVeiculoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MarcaVeiculos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MarcaVeiculos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MarcaVeiculos.
     */
    distinct?: MarcaVeiculoScalarFieldEnum | MarcaVeiculoScalarFieldEnum[]
  }

  /**
   * MarcaVeiculo findFirstOrThrow
   */
  export type MarcaVeiculoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarcaVeiculo
     */
    select?: MarcaVeiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarcaVeiculo
     */
    omit?: MarcaVeiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarcaVeiculoInclude<ExtArgs> | null
    /**
     * Filter, which MarcaVeiculo to fetch.
     */
    where?: MarcaVeiculoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MarcaVeiculos to fetch.
     */
    orderBy?: MarcaVeiculoOrderByWithRelationInput | MarcaVeiculoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MarcaVeiculos.
     */
    cursor?: MarcaVeiculoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MarcaVeiculos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MarcaVeiculos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MarcaVeiculos.
     */
    distinct?: MarcaVeiculoScalarFieldEnum | MarcaVeiculoScalarFieldEnum[]
  }

  /**
   * MarcaVeiculo findMany
   */
  export type MarcaVeiculoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarcaVeiculo
     */
    select?: MarcaVeiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarcaVeiculo
     */
    omit?: MarcaVeiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarcaVeiculoInclude<ExtArgs> | null
    /**
     * Filter, which MarcaVeiculos to fetch.
     */
    where?: MarcaVeiculoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MarcaVeiculos to fetch.
     */
    orderBy?: MarcaVeiculoOrderByWithRelationInput | MarcaVeiculoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MarcaVeiculos.
     */
    cursor?: MarcaVeiculoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MarcaVeiculos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MarcaVeiculos.
     */
    skip?: number
    distinct?: MarcaVeiculoScalarFieldEnum | MarcaVeiculoScalarFieldEnum[]
  }

  /**
   * MarcaVeiculo create
   */
  export type MarcaVeiculoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarcaVeiculo
     */
    select?: MarcaVeiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarcaVeiculo
     */
    omit?: MarcaVeiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarcaVeiculoInclude<ExtArgs> | null
    /**
     * The data needed to create a MarcaVeiculo.
     */
    data: XOR<MarcaVeiculoCreateInput, MarcaVeiculoUncheckedCreateInput>
  }

  /**
   * MarcaVeiculo createMany
   */
  export type MarcaVeiculoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MarcaVeiculos.
     */
    data: MarcaVeiculoCreateManyInput | MarcaVeiculoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MarcaVeiculo createManyAndReturn
   */
  export type MarcaVeiculoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarcaVeiculo
     */
    select?: MarcaVeiculoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MarcaVeiculo
     */
    omit?: MarcaVeiculoOmit<ExtArgs> | null
    /**
     * The data used to create many MarcaVeiculos.
     */
    data: MarcaVeiculoCreateManyInput | MarcaVeiculoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MarcaVeiculo update
   */
  export type MarcaVeiculoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarcaVeiculo
     */
    select?: MarcaVeiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarcaVeiculo
     */
    omit?: MarcaVeiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarcaVeiculoInclude<ExtArgs> | null
    /**
     * The data needed to update a MarcaVeiculo.
     */
    data: XOR<MarcaVeiculoUpdateInput, MarcaVeiculoUncheckedUpdateInput>
    /**
     * Choose, which MarcaVeiculo to update.
     */
    where: MarcaVeiculoWhereUniqueInput
  }

  /**
   * MarcaVeiculo updateMany
   */
  export type MarcaVeiculoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MarcaVeiculos.
     */
    data: XOR<MarcaVeiculoUpdateManyMutationInput, MarcaVeiculoUncheckedUpdateManyInput>
    /**
     * Filter which MarcaVeiculos to update
     */
    where?: MarcaVeiculoWhereInput
    /**
     * Limit how many MarcaVeiculos to update.
     */
    limit?: number
  }

  /**
   * MarcaVeiculo updateManyAndReturn
   */
  export type MarcaVeiculoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarcaVeiculo
     */
    select?: MarcaVeiculoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MarcaVeiculo
     */
    omit?: MarcaVeiculoOmit<ExtArgs> | null
    /**
     * The data used to update MarcaVeiculos.
     */
    data: XOR<MarcaVeiculoUpdateManyMutationInput, MarcaVeiculoUncheckedUpdateManyInput>
    /**
     * Filter which MarcaVeiculos to update
     */
    where?: MarcaVeiculoWhereInput
    /**
     * Limit how many MarcaVeiculos to update.
     */
    limit?: number
  }

  /**
   * MarcaVeiculo upsert
   */
  export type MarcaVeiculoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarcaVeiculo
     */
    select?: MarcaVeiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarcaVeiculo
     */
    omit?: MarcaVeiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarcaVeiculoInclude<ExtArgs> | null
    /**
     * The filter to search for the MarcaVeiculo to update in case it exists.
     */
    where: MarcaVeiculoWhereUniqueInput
    /**
     * In case the MarcaVeiculo found by the `where` argument doesn't exist, create a new MarcaVeiculo with this data.
     */
    create: XOR<MarcaVeiculoCreateInput, MarcaVeiculoUncheckedCreateInput>
    /**
     * In case the MarcaVeiculo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MarcaVeiculoUpdateInput, MarcaVeiculoUncheckedUpdateInput>
  }

  /**
   * MarcaVeiculo delete
   */
  export type MarcaVeiculoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarcaVeiculo
     */
    select?: MarcaVeiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarcaVeiculo
     */
    omit?: MarcaVeiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarcaVeiculoInclude<ExtArgs> | null
    /**
     * Filter which MarcaVeiculo to delete.
     */
    where: MarcaVeiculoWhereUniqueInput
  }

  /**
   * MarcaVeiculo deleteMany
   */
  export type MarcaVeiculoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MarcaVeiculos to delete
     */
    where?: MarcaVeiculoWhereInput
    /**
     * Limit how many MarcaVeiculos to delete.
     */
    limit?: number
  }

  /**
   * MarcaVeiculo.modelos
   */
  export type MarcaVeiculo$modelosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModeloVeiculo
     */
    select?: ModeloVeiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModeloVeiculo
     */
    omit?: ModeloVeiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModeloVeiculoInclude<ExtArgs> | null
    where?: ModeloVeiculoWhereInput
    orderBy?: ModeloVeiculoOrderByWithRelationInput | ModeloVeiculoOrderByWithRelationInput[]
    cursor?: ModeloVeiculoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ModeloVeiculoScalarFieldEnum | ModeloVeiculoScalarFieldEnum[]
  }

  /**
   * MarcaVeiculo without action
   */
  export type MarcaVeiculoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarcaVeiculo
     */
    select?: MarcaVeiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarcaVeiculo
     */
    omit?: MarcaVeiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarcaVeiculoInclude<ExtArgs> | null
  }


  /**
   * Model ModeloVeiculo
   */

  export type AggregateModeloVeiculo = {
    _count: ModeloVeiculoCountAggregateOutputType | null
    _avg: ModeloVeiculoAvgAggregateOutputType | null
    _sum: ModeloVeiculoSumAggregateOutputType | null
    _min: ModeloVeiculoMinAggregateOutputType | null
    _max: ModeloVeiculoMaxAggregateOutputType | null
  }

  export type ModeloVeiculoAvgAggregateOutputType = {
    id: number | null
    marcaId: number | null
    anoFim: number | null
    anoInicio: number | null
  }

  export type ModeloVeiculoSumAggregateOutputType = {
    id: number | null
    marcaId: number | null
    anoFim: number | null
    anoInicio: number | null
  }

  export type ModeloVeiculoMinAggregateOutputType = {
    id: number | null
    nome: string | null
    marcaId: number | null
    createdAt: Date | null
    updatedAt: Date | null
    anoFim: number | null
    anoInicio: number | null
  }

  export type ModeloVeiculoMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    marcaId: number | null
    createdAt: Date | null
    updatedAt: Date | null
    anoFim: number | null
    anoInicio: number | null
  }

  export type ModeloVeiculoCountAggregateOutputType = {
    id: number
    nome: number
    marcaId: number
    createdAt: number
    updatedAt: number
    anoFim: number
    anoInicio: number
    _all: number
  }


  export type ModeloVeiculoAvgAggregateInputType = {
    id?: true
    marcaId?: true
    anoFim?: true
    anoInicio?: true
  }

  export type ModeloVeiculoSumAggregateInputType = {
    id?: true
    marcaId?: true
    anoFim?: true
    anoInicio?: true
  }

  export type ModeloVeiculoMinAggregateInputType = {
    id?: true
    nome?: true
    marcaId?: true
    createdAt?: true
    updatedAt?: true
    anoFim?: true
    anoInicio?: true
  }

  export type ModeloVeiculoMaxAggregateInputType = {
    id?: true
    nome?: true
    marcaId?: true
    createdAt?: true
    updatedAt?: true
    anoFim?: true
    anoInicio?: true
  }

  export type ModeloVeiculoCountAggregateInputType = {
    id?: true
    nome?: true
    marcaId?: true
    createdAt?: true
    updatedAt?: true
    anoFim?: true
    anoInicio?: true
    _all?: true
  }

  export type ModeloVeiculoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ModeloVeiculo to aggregate.
     */
    where?: ModeloVeiculoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModeloVeiculos to fetch.
     */
    orderBy?: ModeloVeiculoOrderByWithRelationInput | ModeloVeiculoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ModeloVeiculoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModeloVeiculos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModeloVeiculos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ModeloVeiculos
    **/
    _count?: true | ModeloVeiculoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ModeloVeiculoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ModeloVeiculoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ModeloVeiculoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ModeloVeiculoMaxAggregateInputType
  }

  export type GetModeloVeiculoAggregateType<T extends ModeloVeiculoAggregateArgs> = {
        [P in keyof T & keyof AggregateModeloVeiculo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateModeloVeiculo[P]>
      : GetScalarType<T[P], AggregateModeloVeiculo[P]>
  }




  export type ModeloVeiculoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ModeloVeiculoWhereInput
    orderBy?: ModeloVeiculoOrderByWithAggregationInput | ModeloVeiculoOrderByWithAggregationInput[]
    by: ModeloVeiculoScalarFieldEnum[] | ModeloVeiculoScalarFieldEnum
    having?: ModeloVeiculoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ModeloVeiculoCountAggregateInputType | true
    _avg?: ModeloVeiculoAvgAggregateInputType
    _sum?: ModeloVeiculoSumAggregateInputType
    _min?: ModeloVeiculoMinAggregateInputType
    _max?: ModeloVeiculoMaxAggregateInputType
  }

  export type ModeloVeiculoGroupByOutputType = {
    id: number
    nome: string
    marcaId: number
    createdAt: Date
    updatedAt: Date
    anoFim: number | null
    anoInicio: number | null
    _count: ModeloVeiculoCountAggregateOutputType | null
    _avg: ModeloVeiculoAvgAggregateOutputType | null
    _sum: ModeloVeiculoSumAggregateOutputType | null
    _min: ModeloVeiculoMinAggregateOutputType | null
    _max: ModeloVeiculoMaxAggregateOutputType | null
  }

  type GetModeloVeiculoGroupByPayload<T extends ModeloVeiculoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ModeloVeiculoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ModeloVeiculoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ModeloVeiculoGroupByOutputType[P]>
            : GetScalarType<T[P], ModeloVeiculoGroupByOutputType[P]>
        }
      >
    >


  export type ModeloVeiculoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    marcaId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    anoFim?: boolean
    anoInicio?: boolean
    marca?: boolean | MarcaVeiculoDefaultArgs<ExtArgs>
    veiculos?: boolean | ModeloVeiculo$veiculosArgs<ExtArgs>
    _count?: boolean | ModeloVeiculoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["modeloVeiculo"]>

  export type ModeloVeiculoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    marcaId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    anoFim?: boolean
    anoInicio?: boolean
    marca?: boolean | MarcaVeiculoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["modeloVeiculo"]>

  export type ModeloVeiculoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    marcaId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    anoFim?: boolean
    anoInicio?: boolean
    marca?: boolean | MarcaVeiculoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["modeloVeiculo"]>

  export type ModeloVeiculoSelectScalar = {
    id?: boolean
    nome?: boolean
    marcaId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    anoFim?: boolean
    anoInicio?: boolean
  }

  export type ModeloVeiculoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "marcaId" | "createdAt" | "updatedAt" | "anoFim" | "anoInicio", ExtArgs["result"]["modeloVeiculo"]>
  export type ModeloVeiculoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    marca?: boolean | MarcaVeiculoDefaultArgs<ExtArgs>
    veiculos?: boolean | ModeloVeiculo$veiculosArgs<ExtArgs>
    _count?: boolean | ModeloVeiculoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ModeloVeiculoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    marca?: boolean | MarcaVeiculoDefaultArgs<ExtArgs>
  }
  export type ModeloVeiculoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    marca?: boolean | MarcaVeiculoDefaultArgs<ExtArgs>
  }

  export type $ModeloVeiculoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ModeloVeiculo"
    objects: {
      marca: Prisma.$MarcaVeiculoPayload<ExtArgs>
      veiculos: Prisma.$VeiculoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      marcaId: number
      createdAt: Date
      updatedAt: Date
      anoFim: number | null
      anoInicio: number | null
    }, ExtArgs["result"]["modeloVeiculo"]>
    composites: {}
  }

  type ModeloVeiculoGetPayload<S extends boolean | null | undefined | ModeloVeiculoDefaultArgs> = $Result.GetResult<Prisma.$ModeloVeiculoPayload, S>

  type ModeloVeiculoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ModeloVeiculoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ModeloVeiculoCountAggregateInputType | true
    }

  export interface ModeloVeiculoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ModeloVeiculo'], meta: { name: 'ModeloVeiculo' } }
    /**
     * Find zero or one ModeloVeiculo that matches the filter.
     * @param {ModeloVeiculoFindUniqueArgs} args - Arguments to find a ModeloVeiculo
     * @example
     * // Get one ModeloVeiculo
     * const modeloVeiculo = await prisma.modeloVeiculo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ModeloVeiculoFindUniqueArgs>(args: SelectSubset<T, ModeloVeiculoFindUniqueArgs<ExtArgs>>): Prisma__ModeloVeiculoClient<$Result.GetResult<Prisma.$ModeloVeiculoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ModeloVeiculo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ModeloVeiculoFindUniqueOrThrowArgs} args - Arguments to find a ModeloVeiculo
     * @example
     * // Get one ModeloVeiculo
     * const modeloVeiculo = await prisma.modeloVeiculo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ModeloVeiculoFindUniqueOrThrowArgs>(args: SelectSubset<T, ModeloVeiculoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ModeloVeiculoClient<$Result.GetResult<Prisma.$ModeloVeiculoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ModeloVeiculo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModeloVeiculoFindFirstArgs} args - Arguments to find a ModeloVeiculo
     * @example
     * // Get one ModeloVeiculo
     * const modeloVeiculo = await prisma.modeloVeiculo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ModeloVeiculoFindFirstArgs>(args?: SelectSubset<T, ModeloVeiculoFindFirstArgs<ExtArgs>>): Prisma__ModeloVeiculoClient<$Result.GetResult<Prisma.$ModeloVeiculoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ModeloVeiculo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModeloVeiculoFindFirstOrThrowArgs} args - Arguments to find a ModeloVeiculo
     * @example
     * // Get one ModeloVeiculo
     * const modeloVeiculo = await prisma.modeloVeiculo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ModeloVeiculoFindFirstOrThrowArgs>(args?: SelectSubset<T, ModeloVeiculoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ModeloVeiculoClient<$Result.GetResult<Prisma.$ModeloVeiculoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ModeloVeiculos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModeloVeiculoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ModeloVeiculos
     * const modeloVeiculos = await prisma.modeloVeiculo.findMany()
     * 
     * // Get first 10 ModeloVeiculos
     * const modeloVeiculos = await prisma.modeloVeiculo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const modeloVeiculoWithIdOnly = await prisma.modeloVeiculo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ModeloVeiculoFindManyArgs>(args?: SelectSubset<T, ModeloVeiculoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModeloVeiculoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ModeloVeiculo.
     * @param {ModeloVeiculoCreateArgs} args - Arguments to create a ModeloVeiculo.
     * @example
     * // Create one ModeloVeiculo
     * const ModeloVeiculo = await prisma.modeloVeiculo.create({
     *   data: {
     *     // ... data to create a ModeloVeiculo
     *   }
     * })
     * 
     */
    create<T extends ModeloVeiculoCreateArgs>(args: SelectSubset<T, ModeloVeiculoCreateArgs<ExtArgs>>): Prisma__ModeloVeiculoClient<$Result.GetResult<Prisma.$ModeloVeiculoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ModeloVeiculos.
     * @param {ModeloVeiculoCreateManyArgs} args - Arguments to create many ModeloVeiculos.
     * @example
     * // Create many ModeloVeiculos
     * const modeloVeiculo = await prisma.modeloVeiculo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ModeloVeiculoCreateManyArgs>(args?: SelectSubset<T, ModeloVeiculoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ModeloVeiculos and returns the data saved in the database.
     * @param {ModeloVeiculoCreateManyAndReturnArgs} args - Arguments to create many ModeloVeiculos.
     * @example
     * // Create many ModeloVeiculos
     * const modeloVeiculo = await prisma.modeloVeiculo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ModeloVeiculos and only return the `id`
     * const modeloVeiculoWithIdOnly = await prisma.modeloVeiculo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ModeloVeiculoCreateManyAndReturnArgs>(args?: SelectSubset<T, ModeloVeiculoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModeloVeiculoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ModeloVeiculo.
     * @param {ModeloVeiculoDeleteArgs} args - Arguments to delete one ModeloVeiculo.
     * @example
     * // Delete one ModeloVeiculo
     * const ModeloVeiculo = await prisma.modeloVeiculo.delete({
     *   where: {
     *     // ... filter to delete one ModeloVeiculo
     *   }
     * })
     * 
     */
    delete<T extends ModeloVeiculoDeleteArgs>(args: SelectSubset<T, ModeloVeiculoDeleteArgs<ExtArgs>>): Prisma__ModeloVeiculoClient<$Result.GetResult<Prisma.$ModeloVeiculoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ModeloVeiculo.
     * @param {ModeloVeiculoUpdateArgs} args - Arguments to update one ModeloVeiculo.
     * @example
     * // Update one ModeloVeiculo
     * const modeloVeiculo = await prisma.modeloVeiculo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ModeloVeiculoUpdateArgs>(args: SelectSubset<T, ModeloVeiculoUpdateArgs<ExtArgs>>): Prisma__ModeloVeiculoClient<$Result.GetResult<Prisma.$ModeloVeiculoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ModeloVeiculos.
     * @param {ModeloVeiculoDeleteManyArgs} args - Arguments to filter ModeloVeiculos to delete.
     * @example
     * // Delete a few ModeloVeiculos
     * const { count } = await prisma.modeloVeiculo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ModeloVeiculoDeleteManyArgs>(args?: SelectSubset<T, ModeloVeiculoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ModeloVeiculos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModeloVeiculoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ModeloVeiculos
     * const modeloVeiculo = await prisma.modeloVeiculo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ModeloVeiculoUpdateManyArgs>(args: SelectSubset<T, ModeloVeiculoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ModeloVeiculos and returns the data updated in the database.
     * @param {ModeloVeiculoUpdateManyAndReturnArgs} args - Arguments to update many ModeloVeiculos.
     * @example
     * // Update many ModeloVeiculos
     * const modeloVeiculo = await prisma.modeloVeiculo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ModeloVeiculos and only return the `id`
     * const modeloVeiculoWithIdOnly = await prisma.modeloVeiculo.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ModeloVeiculoUpdateManyAndReturnArgs>(args: SelectSubset<T, ModeloVeiculoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModeloVeiculoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ModeloVeiculo.
     * @param {ModeloVeiculoUpsertArgs} args - Arguments to update or create a ModeloVeiculo.
     * @example
     * // Update or create a ModeloVeiculo
     * const modeloVeiculo = await prisma.modeloVeiculo.upsert({
     *   create: {
     *     // ... data to create a ModeloVeiculo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ModeloVeiculo we want to update
     *   }
     * })
     */
    upsert<T extends ModeloVeiculoUpsertArgs>(args: SelectSubset<T, ModeloVeiculoUpsertArgs<ExtArgs>>): Prisma__ModeloVeiculoClient<$Result.GetResult<Prisma.$ModeloVeiculoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ModeloVeiculos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModeloVeiculoCountArgs} args - Arguments to filter ModeloVeiculos to count.
     * @example
     * // Count the number of ModeloVeiculos
     * const count = await prisma.modeloVeiculo.count({
     *   where: {
     *     // ... the filter for the ModeloVeiculos we want to count
     *   }
     * })
    **/
    count<T extends ModeloVeiculoCountArgs>(
      args?: Subset<T, ModeloVeiculoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ModeloVeiculoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ModeloVeiculo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModeloVeiculoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ModeloVeiculoAggregateArgs>(args: Subset<T, ModeloVeiculoAggregateArgs>): Prisma.PrismaPromise<GetModeloVeiculoAggregateType<T>>

    /**
     * Group by ModeloVeiculo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModeloVeiculoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ModeloVeiculoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ModeloVeiculoGroupByArgs['orderBy'] }
        : { orderBy?: ModeloVeiculoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ModeloVeiculoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetModeloVeiculoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ModeloVeiculo model
   */
  readonly fields: ModeloVeiculoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ModeloVeiculo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ModeloVeiculoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    marca<T extends MarcaVeiculoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MarcaVeiculoDefaultArgs<ExtArgs>>): Prisma__MarcaVeiculoClient<$Result.GetResult<Prisma.$MarcaVeiculoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    veiculos<T extends ModeloVeiculo$veiculosArgs<ExtArgs> = {}>(args?: Subset<T, ModeloVeiculo$veiculosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VeiculoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ModeloVeiculo model
   */
  interface ModeloVeiculoFieldRefs {
    readonly id: FieldRef<"ModeloVeiculo", 'Int'>
    readonly nome: FieldRef<"ModeloVeiculo", 'String'>
    readonly marcaId: FieldRef<"ModeloVeiculo", 'Int'>
    readonly createdAt: FieldRef<"ModeloVeiculo", 'DateTime'>
    readonly updatedAt: FieldRef<"ModeloVeiculo", 'DateTime'>
    readonly anoFim: FieldRef<"ModeloVeiculo", 'Int'>
    readonly anoInicio: FieldRef<"ModeloVeiculo", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ModeloVeiculo findUnique
   */
  export type ModeloVeiculoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModeloVeiculo
     */
    select?: ModeloVeiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModeloVeiculo
     */
    omit?: ModeloVeiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModeloVeiculoInclude<ExtArgs> | null
    /**
     * Filter, which ModeloVeiculo to fetch.
     */
    where: ModeloVeiculoWhereUniqueInput
  }

  /**
   * ModeloVeiculo findUniqueOrThrow
   */
  export type ModeloVeiculoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModeloVeiculo
     */
    select?: ModeloVeiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModeloVeiculo
     */
    omit?: ModeloVeiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModeloVeiculoInclude<ExtArgs> | null
    /**
     * Filter, which ModeloVeiculo to fetch.
     */
    where: ModeloVeiculoWhereUniqueInput
  }

  /**
   * ModeloVeiculo findFirst
   */
  export type ModeloVeiculoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModeloVeiculo
     */
    select?: ModeloVeiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModeloVeiculo
     */
    omit?: ModeloVeiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModeloVeiculoInclude<ExtArgs> | null
    /**
     * Filter, which ModeloVeiculo to fetch.
     */
    where?: ModeloVeiculoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModeloVeiculos to fetch.
     */
    orderBy?: ModeloVeiculoOrderByWithRelationInput | ModeloVeiculoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ModeloVeiculos.
     */
    cursor?: ModeloVeiculoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModeloVeiculos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModeloVeiculos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ModeloVeiculos.
     */
    distinct?: ModeloVeiculoScalarFieldEnum | ModeloVeiculoScalarFieldEnum[]
  }

  /**
   * ModeloVeiculo findFirstOrThrow
   */
  export type ModeloVeiculoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModeloVeiculo
     */
    select?: ModeloVeiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModeloVeiculo
     */
    omit?: ModeloVeiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModeloVeiculoInclude<ExtArgs> | null
    /**
     * Filter, which ModeloVeiculo to fetch.
     */
    where?: ModeloVeiculoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModeloVeiculos to fetch.
     */
    orderBy?: ModeloVeiculoOrderByWithRelationInput | ModeloVeiculoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ModeloVeiculos.
     */
    cursor?: ModeloVeiculoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModeloVeiculos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModeloVeiculos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ModeloVeiculos.
     */
    distinct?: ModeloVeiculoScalarFieldEnum | ModeloVeiculoScalarFieldEnum[]
  }

  /**
   * ModeloVeiculo findMany
   */
  export type ModeloVeiculoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModeloVeiculo
     */
    select?: ModeloVeiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModeloVeiculo
     */
    omit?: ModeloVeiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModeloVeiculoInclude<ExtArgs> | null
    /**
     * Filter, which ModeloVeiculos to fetch.
     */
    where?: ModeloVeiculoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModeloVeiculos to fetch.
     */
    orderBy?: ModeloVeiculoOrderByWithRelationInput | ModeloVeiculoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ModeloVeiculos.
     */
    cursor?: ModeloVeiculoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModeloVeiculos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModeloVeiculos.
     */
    skip?: number
    distinct?: ModeloVeiculoScalarFieldEnum | ModeloVeiculoScalarFieldEnum[]
  }

  /**
   * ModeloVeiculo create
   */
  export type ModeloVeiculoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModeloVeiculo
     */
    select?: ModeloVeiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModeloVeiculo
     */
    omit?: ModeloVeiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModeloVeiculoInclude<ExtArgs> | null
    /**
     * The data needed to create a ModeloVeiculo.
     */
    data: XOR<ModeloVeiculoCreateInput, ModeloVeiculoUncheckedCreateInput>
  }

  /**
   * ModeloVeiculo createMany
   */
  export type ModeloVeiculoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ModeloVeiculos.
     */
    data: ModeloVeiculoCreateManyInput | ModeloVeiculoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ModeloVeiculo createManyAndReturn
   */
  export type ModeloVeiculoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModeloVeiculo
     */
    select?: ModeloVeiculoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ModeloVeiculo
     */
    omit?: ModeloVeiculoOmit<ExtArgs> | null
    /**
     * The data used to create many ModeloVeiculos.
     */
    data: ModeloVeiculoCreateManyInput | ModeloVeiculoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModeloVeiculoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ModeloVeiculo update
   */
  export type ModeloVeiculoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModeloVeiculo
     */
    select?: ModeloVeiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModeloVeiculo
     */
    omit?: ModeloVeiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModeloVeiculoInclude<ExtArgs> | null
    /**
     * The data needed to update a ModeloVeiculo.
     */
    data: XOR<ModeloVeiculoUpdateInput, ModeloVeiculoUncheckedUpdateInput>
    /**
     * Choose, which ModeloVeiculo to update.
     */
    where: ModeloVeiculoWhereUniqueInput
  }

  /**
   * ModeloVeiculo updateMany
   */
  export type ModeloVeiculoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ModeloVeiculos.
     */
    data: XOR<ModeloVeiculoUpdateManyMutationInput, ModeloVeiculoUncheckedUpdateManyInput>
    /**
     * Filter which ModeloVeiculos to update
     */
    where?: ModeloVeiculoWhereInput
    /**
     * Limit how many ModeloVeiculos to update.
     */
    limit?: number
  }

  /**
   * ModeloVeiculo updateManyAndReturn
   */
  export type ModeloVeiculoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModeloVeiculo
     */
    select?: ModeloVeiculoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ModeloVeiculo
     */
    omit?: ModeloVeiculoOmit<ExtArgs> | null
    /**
     * The data used to update ModeloVeiculos.
     */
    data: XOR<ModeloVeiculoUpdateManyMutationInput, ModeloVeiculoUncheckedUpdateManyInput>
    /**
     * Filter which ModeloVeiculos to update
     */
    where?: ModeloVeiculoWhereInput
    /**
     * Limit how many ModeloVeiculos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModeloVeiculoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ModeloVeiculo upsert
   */
  export type ModeloVeiculoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModeloVeiculo
     */
    select?: ModeloVeiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModeloVeiculo
     */
    omit?: ModeloVeiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModeloVeiculoInclude<ExtArgs> | null
    /**
     * The filter to search for the ModeloVeiculo to update in case it exists.
     */
    where: ModeloVeiculoWhereUniqueInput
    /**
     * In case the ModeloVeiculo found by the `where` argument doesn't exist, create a new ModeloVeiculo with this data.
     */
    create: XOR<ModeloVeiculoCreateInput, ModeloVeiculoUncheckedCreateInput>
    /**
     * In case the ModeloVeiculo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ModeloVeiculoUpdateInput, ModeloVeiculoUncheckedUpdateInput>
  }

  /**
   * ModeloVeiculo delete
   */
  export type ModeloVeiculoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModeloVeiculo
     */
    select?: ModeloVeiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModeloVeiculo
     */
    omit?: ModeloVeiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModeloVeiculoInclude<ExtArgs> | null
    /**
     * Filter which ModeloVeiculo to delete.
     */
    where: ModeloVeiculoWhereUniqueInput
  }

  /**
   * ModeloVeiculo deleteMany
   */
  export type ModeloVeiculoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ModeloVeiculos to delete
     */
    where?: ModeloVeiculoWhereInput
    /**
     * Limit how many ModeloVeiculos to delete.
     */
    limit?: number
  }

  /**
   * ModeloVeiculo.veiculos
   */
  export type ModeloVeiculo$veiculosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Veiculo
     */
    select?: VeiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Veiculo
     */
    omit?: VeiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeiculoInclude<ExtArgs> | null
    where?: VeiculoWhereInput
    orderBy?: VeiculoOrderByWithRelationInput | VeiculoOrderByWithRelationInput[]
    cursor?: VeiculoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VeiculoScalarFieldEnum | VeiculoScalarFieldEnum[]
  }

  /**
   * ModeloVeiculo without action
   */
  export type ModeloVeiculoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModeloVeiculo
     */
    select?: ModeloVeiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModeloVeiculo
     */
    omit?: ModeloVeiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModeloVeiculoInclude<ExtArgs> | null
  }


  /**
   * Model TipoServico
   */

  export type AggregateTipoServico = {
    _count: TipoServicoCountAggregateOutputType | null
    _avg: TipoServicoAvgAggregateOutputType | null
    _sum: TipoServicoSumAggregateOutputType | null
    _min: TipoServicoMinAggregateOutputType | null
    _max: TipoServicoMaxAggregateOutputType | null
  }

  export type TipoServicoAvgAggregateOutputType = {
    id: number | null
    valor: number | null
    tempoMedio: number | null
  }

  export type TipoServicoSumAggregateOutputType = {
    id: number | null
    valor: number | null
    tempoMedio: number | null
  }

  export type TipoServicoMinAggregateOutputType = {
    id: number | null
    nome: string | null
    descricao: string | null
    valor: number | null
    tempoMedio: number | null
    ativo: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TipoServicoMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    descricao: string | null
    valor: number | null
    tempoMedio: number | null
    ativo: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TipoServicoCountAggregateOutputType = {
    id: number
    nome: number
    descricao: number
    valor: number
    tempoMedio: number
    ativo: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TipoServicoAvgAggregateInputType = {
    id?: true
    valor?: true
    tempoMedio?: true
  }

  export type TipoServicoSumAggregateInputType = {
    id?: true
    valor?: true
    tempoMedio?: true
  }

  export type TipoServicoMinAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    valor?: true
    tempoMedio?: true
    ativo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TipoServicoMaxAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    valor?: true
    tempoMedio?: true
    ativo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TipoServicoCountAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    valor?: true
    tempoMedio?: true
    ativo?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TipoServicoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TipoServico to aggregate.
     */
    where?: TipoServicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoServicos to fetch.
     */
    orderBy?: TipoServicoOrderByWithRelationInput | TipoServicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TipoServicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoServicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoServicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TipoServicos
    **/
    _count?: true | TipoServicoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TipoServicoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TipoServicoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TipoServicoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TipoServicoMaxAggregateInputType
  }

  export type GetTipoServicoAggregateType<T extends TipoServicoAggregateArgs> = {
        [P in keyof T & keyof AggregateTipoServico]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTipoServico[P]>
      : GetScalarType<T[P], AggregateTipoServico[P]>
  }




  export type TipoServicoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TipoServicoWhereInput
    orderBy?: TipoServicoOrderByWithAggregationInput | TipoServicoOrderByWithAggregationInput[]
    by: TipoServicoScalarFieldEnum[] | TipoServicoScalarFieldEnum
    having?: TipoServicoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TipoServicoCountAggregateInputType | true
    _avg?: TipoServicoAvgAggregateInputType
    _sum?: TipoServicoSumAggregateInputType
    _min?: TipoServicoMinAggregateInputType
    _max?: TipoServicoMaxAggregateInputType
  }

  export type TipoServicoGroupByOutputType = {
    id: number
    nome: string
    descricao: string | null
    valor: number
    tempoMedio: number | null
    ativo: boolean
    createdAt: Date
    updatedAt: Date
    _count: TipoServicoCountAggregateOutputType | null
    _avg: TipoServicoAvgAggregateOutputType | null
    _sum: TipoServicoSumAggregateOutputType | null
    _min: TipoServicoMinAggregateOutputType | null
    _max: TipoServicoMaxAggregateOutputType | null
  }

  type GetTipoServicoGroupByPayload<T extends TipoServicoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TipoServicoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TipoServicoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TipoServicoGroupByOutputType[P]>
            : GetScalarType<T[P], TipoServicoGroupByOutputType[P]>
        }
      >
    >


  export type TipoServicoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    valor?: boolean
    tempoMedio?: boolean
    ativo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ItemServico?: boolean | TipoServico$ItemServicoArgs<ExtArgs>
    _count?: boolean | TipoServicoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tipoServico"]>

  export type TipoServicoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    valor?: boolean
    tempoMedio?: boolean
    ativo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["tipoServico"]>

  export type TipoServicoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    valor?: boolean
    tempoMedio?: boolean
    ativo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["tipoServico"]>

  export type TipoServicoSelectScalar = {
    id?: boolean
    nome?: boolean
    descricao?: boolean
    valor?: boolean
    tempoMedio?: boolean
    ativo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TipoServicoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "descricao" | "valor" | "tempoMedio" | "ativo" | "createdAt" | "updatedAt", ExtArgs["result"]["tipoServico"]>
  export type TipoServicoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ItemServico?: boolean | TipoServico$ItemServicoArgs<ExtArgs>
    _count?: boolean | TipoServicoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TipoServicoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TipoServicoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TipoServicoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TipoServico"
    objects: {
      ItemServico: Prisma.$ItemServicoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      descricao: string | null
      valor: number
      tempoMedio: number | null
      ativo: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["tipoServico"]>
    composites: {}
  }

  type TipoServicoGetPayload<S extends boolean | null | undefined | TipoServicoDefaultArgs> = $Result.GetResult<Prisma.$TipoServicoPayload, S>

  type TipoServicoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TipoServicoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TipoServicoCountAggregateInputType | true
    }

  export interface TipoServicoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TipoServico'], meta: { name: 'TipoServico' } }
    /**
     * Find zero or one TipoServico that matches the filter.
     * @param {TipoServicoFindUniqueArgs} args - Arguments to find a TipoServico
     * @example
     * // Get one TipoServico
     * const tipoServico = await prisma.tipoServico.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TipoServicoFindUniqueArgs>(args: SelectSubset<T, TipoServicoFindUniqueArgs<ExtArgs>>): Prisma__TipoServicoClient<$Result.GetResult<Prisma.$TipoServicoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TipoServico that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TipoServicoFindUniqueOrThrowArgs} args - Arguments to find a TipoServico
     * @example
     * // Get one TipoServico
     * const tipoServico = await prisma.tipoServico.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TipoServicoFindUniqueOrThrowArgs>(args: SelectSubset<T, TipoServicoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TipoServicoClient<$Result.GetResult<Prisma.$TipoServicoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TipoServico that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoServicoFindFirstArgs} args - Arguments to find a TipoServico
     * @example
     * // Get one TipoServico
     * const tipoServico = await prisma.tipoServico.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TipoServicoFindFirstArgs>(args?: SelectSubset<T, TipoServicoFindFirstArgs<ExtArgs>>): Prisma__TipoServicoClient<$Result.GetResult<Prisma.$TipoServicoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TipoServico that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoServicoFindFirstOrThrowArgs} args - Arguments to find a TipoServico
     * @example
     * // Get one TipoServico
     * const tipoServico = await prisma.tipoServico.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TipoServicoFindFirstOrThrowArgs>(args?: SelectSubset<T, TipoServicoFindFirstOrThrowArgs<ExtArgs>>): Prisma__TipoServicoClient<$Result.GetResult<Prisma.$TipoServicoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TipoServicos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoServicoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TipoServicos
     * const tipoServicos = await prisma.tipoServico.findMany()
     * 
     * // Get first 10 TipoServicos
     * const tipoServicos = await prisma.tipoServico.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tipoServicoWithIdOnly = await prisma.tipoServico.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TipoServicoFindManyArgs>(args?: SelectSubset<T, TipoServicoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TipoServicoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TipoServico.
     * @param {TipoServicoCreateArgs} args - Arguments to create a TipoServico.
     * @example
     * // Create one TipoServico
     * const TipoServico = await prisma.tipoServico.create({
     *   data: {
     *     // ... data to create a TipoServico
     *   }
     * })
     * 
     */
    create<T extends TipoServicoCreateArgs>(args: SelectSubset<T, TipoServicoCreateArgs<ExtArgs>>): Prisma__TipoServicoClient<$Result.GetResult<Prisma.$TipoServicoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TipoServicos.
     * @param {TipoServicoCreateManyArgs} args - Arguments to create many TipoServicos.
     * @example
     * // Create many TipoServicos
     * const tipoServico = await prisma.tipoServico.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TipoServicoCreateManyArgs>(args?: SelectSubset<T, TipoServicoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TipoServicos and returns the data saved in the database.
     * @param {TipoServicoCreateManyAndReturnArgs} args - Arguments to create many TipoServicos.
     * @example
     * // Create many TipoServicos
     * const tipoServico = await prisma.tipoServico.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TipoServicos and only return the `id`
     * const tipoServicoWithIdOnly = await prisma.tipoServico.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TipoServicoCreateManyAndReturnArgs>(args?: SelectSubset<T, TipoServicoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TipoServicoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TipoServico.
     * @param {TipoServicoDeleteArgs} args - Arguments to delete one TipoServico.
     * @example
     * // Delete one TipoServico
     * const TipoServico = await prisma.tipoServico.delete({
     *   where: {
     *     // ... filter to delete one TipoServico
     *   }
     * })
     * 
     */
    delete<T extends TipoServicoDeleteArgs>(args: SelectSubset<T, TipoServicoDeleteArgs<ExtArgs>>): Prisma__TipoServicoClient<$Result.GetResult<Prisma.$TipoServicoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TipoServico.
     * @param {TipoServicoUpdateArgs} args - Arguments to update one TipoServico.
     * @example
     * // Update one TipoServico
     * const tipoServico = await prisma.tipoServico.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TipoServicoUpdateArgs>(args: SelectSubset<T, TipoServicoUpdateArgs<ExtArgs>>): Prisma__TipoServicoClient<$Result.GetResult<Prisma.$TipoServicoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TipoServicos.
     * @param {TipoServicoDeleteManyArgs} args - Arguments to filter TipoServicos to delete.
     * @example
     * // Delete a few TipoServicos
     * const { count } = await prisma.tipoServico.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TipoServicoDeleteManyArgs>(args?: SelectSubset<T, TipoServicoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TipoServicos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoServicoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TipoServicos
     * const tipoServico = await prisma.tipoServico.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TipoServicoUpdateManyArgs>(args: SelectSubset<T, TipoServicoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TipoServicos and returns the data updated in the database.
     * @param {TipoServicoUpdateManyAndReturnArgs} args - Arguments to update many TipoServicos.
     * @example
     * // Update many TipoServicos
     * const tipoServico = await prisma.tipoServico.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TipoServicos and only return the `id`
     * const tipoServicoWithIdOnly = await prisma.tipoServico.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TipoServicoUpdateManyAndReturnArgs>(args: SelectSubset<T, TipoServicoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TipoServicoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TipoServico.
     * @param {TipoServicoUpsertArgs} args - Arguments to update or create a TipoServico.
     * @example
     * // Update or create a TipoServico
     * const tipoServico = await prisma.tipoServico.upsert({
     *   create: {
     *     // ... data to create a TipoServico
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TipoServico we want to update
     *   }
     * })
     */
    upsert<T extends TipoServicoUpsertArgs>(args: SelectSubset<T, TipoServicoUpsertArgs<ExtArgs>>): Prisma__TipoServicoClient<$Result.GetResult<Prisma.$TipoServicoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TipoServicos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoServicoCountArgs} args - Arguments to filter TipoServicos to count.
     * @example
     * // Count the number of TipoServicos
     * const count = await prisma.tipoServico.count({
     *   where: {
     *     // ... the filter for the TipoServicos we want to count
     *   }
     * })
    **/
    count<T extends TipoServicoCountArgs>(
      args?: Subset<T, TipoServicoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TipoServicoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TipoServico.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoServicoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TipoServicoAggregateArgs>(args: Subset<T, TipoServicoAggregateArgs>): Prisma.PrismaPromise<GetTipoServicoAggregateType<T>>

    /**
     * Group by TipoServico.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoServicoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TipoServicoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TipoServicoGroupByArgs['orderBy'] }
        : { orderBy?: TipoServicoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TipoServicoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTipoServicoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TipoServico model
   */
  readonly fields: TipoServicoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TipoServico.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TipoServicoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ItemServico<T extends TipoServico$ItemServicoArgs<ExtArgs> = {}>(args?: Subset<T, TipoServico$ItemServicoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemServicoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TipoServico model
   */
  interface TipoServicoFieldRefs {
    readonly id: FieldRef<"TipoServico", 'Int'>
    readonly nome: FieldRef<"TipoServico", 'String'>
    readonly descricao: FieldRef<"TipoServico", 'String'>
    readonly valor: FieldRef<"TipoServico", 'Float'>
    readonly tempoMedio: FieldRef<"TipoServico", 'Int'>
    readonly ativo: FieldRef<"TipoServico", 'Boolean'>
    readonly createdAt: FieldRef<"TipoServico", 'DateTime'>
    readonly updatedAt: FieldRef<"TipoServico", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TipoServico findUnique
   */
  export type TipoServicoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoServico
     */
    select?: TipoServicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoServico
     */
    omit?: TipoServicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoServicoInclude<ExtArgs> | null
    /**
     * Filter, which TipoServico to fetch.
     */
    where: TipoServicoWhereUniqueInput
  }

  /**
   * TipoServico findUniqueOrThrow
   */
  export type TipoServicoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoServico
     */
    select?: TipoServicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoServico
     */
    omit?: TipoServicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoServicoInclude<ExtArgs> | null
    /**
     * Filter, which TipoServico to fetch.
     */
    where: TipoServicoWhereUniqueInput
  }

  /**
   * TipoServico findFirst
   */
  export type TipoServicoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoServico
     */
    select?: TipoServicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoServico
     */
    omit?: TipoServicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoServicoInclude<ExtArgs> | null
    /**
     * Filter, which TipoServico to fetch.
     */
    where?: TipoServicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoServicos to fetch.
     */
    orderBy?: TipoServicoOrderByWithRelationInput | TipoServicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TipoServicos.
     */
    cursor?: TipoServicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoServicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoServicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TipoServicos.
     */
    distinct?: TipoServicoScalarFieldEnum | TipoServicoScalarFieldEnum[]
  }

  /**
   * TipoServico findFirstOrThrow
   */
  export type TipoServicoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoServico
     */
    select?: TipoServicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoServico
     */
    omit?: TipoServicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoServicoInclude<ExtArgs> | null
    /**
     * Filter, which TipoServico to fetch.
     */
    where?: TipoServicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoServicos to fetch.
     */
    orderBy?: TipoServicoOrderByWithRelationInput | TipoServicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TipoServicos.
     */
    cursor?: TipoServicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoServicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoServicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TipoServicos.
     */
    distinct?: TipoServicoScalarFieldEnum | TipoServicoScalarFieldEnum[]
  }

  /**
   * TipoServico findMany
   */
  export type TipoServicoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoServico
     */
    select?: TipoServicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoServico
     */
    omit?: TipoServicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoServicoInclude<ExtArgs> | null
    /**
     * Filter, which TipoServicos to fetch.
     */
    where?: TipoServicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoServicos to fetch.
     */
    orderBy?: TipoServicoOrderByWithRelationInput | TipoServicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TipoServicos.
     */
    cursor?: TipoServicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoServicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoServicos.
     */
    skip?: number
    distinct?: TipoServicoScalarFieldEnum | TipoServicoScalarFieldEnum[]
  }

  /**
   * TipoServico create
   */
  export type TipoServicoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoServico
     */
    select?: TipoServicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoServico
     */
    omit?: TipoServicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoServicoInclude<ExtArgs> | null
    /**
     * The data needed to create a TipoServico.
     */
    data: XOR<TipoServicoCreateInput, TipoServicoUncheckedCreateInput>
  }

  /**
   * TipoServico createMany
   */
  export type TipoServicoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TipoServicos.
     */
    data: TipoServicoCreateManyInput | TipoServicoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TipoServico createManyAndReturn
   */
  export type TipoServicoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoServico
     */
    select?: TipoServicoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TipoServico
     */
    omit?: TipoServicoOmit<ExtArgs> | null
    /**
     * The data used to create many TipoServicos.
     */
    data: TipoServicoCreateManyInput | TipoServicoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TipoServico update
   */
  export type TipoServicoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoServico
     */
    select?: TipoServicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoServico
     */
    omit?: TipoServicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoServicoInclude<ExtArgs> | null
    /**
     * The data needed to update a TipoServico.
     */
    data: XOR<TipoServicoUpdateInput, TipoServicoUncheckedUpdateInput>
    /**
     * Choose, which TipoServico to update.
     */
    where: TipoServicoWhereUniqueInput
  }

  /**
   * TipoServico updateMany
   */
  export type TipoServicoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TipoServicos.
     */
    data: XOR<TipoServicoUpdateManyMutationInput, TipoServicoUncheckedUpdateManyInput>
    /**
     * Filter which TipoServicos to update
     */
    where?: TipoServicoWhereInput
    /**
     * Limit how many TipoServicos to update.
     */
    limit?: number
  }

  /**
   * TipoServico updateManyAndReturn
   */
  export type TipoServicoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoServico
     */
    select?: TipoServicoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TipoServico
     */
    omit?: TipoServicoOmit<ExtArgs> | null
    /**
     * The data used to update TipoServicos.
     */
    data: XOR<TipoServicoUpdateManyMutationInput, TipoServicoUncheckedUpdateManyInput>
    /**
     * Filter which TipoServicos to update
     */
    where?: TipoServicoWhereInput
    /**
     * Limit how many TipoServicos to update.
     */
    limit?: number
  }

  /**
   * TipoServico upsert
   */
  export type TipoServicoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoServico
     */
    select?: TipoServicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoServico
     */
    omit?: TipoServicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoServicoInclude<ExtArgs> | null
    /**
     * The filter to search for the TipoServico to update in case it exists.
     */
    where: TipoServicoWhereUniqueInput
    /**
     * In case the TipoServico found by the `where` argument doesn't exist, create a new TipoServico with this data.
     */
    create: XOR<TipoServicoCreateInput, TipoServicoUncheckedCreateInput>
    /**
     * In case the TipoServico was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TipoServicoUpdateInput, TipoServicoUncheckedUpdateInput>
  }

  /**
   * TipoServico delete
   */
  export type TipoServicoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoServico
     */
    select?: TipoServicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoServico
     */
    omit?: TipoServicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoServicoInclude<ExtArgs> | null
    /**
     * Filter which TipoServico to delete.
     */
    where: TipoServicoWhereUniqueInput
  }

  /**
   * TipoServico deleteMany
   */
  export type TipoServicoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TipoServicos to delete
     */
    where?: TipoServicoWhereInput
    /**
     * Limit how many TipoServicos to delete.
     */
    limit?: number
  }

  /**
   * TipoServico.ItemServico
   */
  export type TipoServico$ItemServicoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemServico
     */
    select?: ItemServicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemServico
     */
    omit?: ItemServicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemServicoInclude<ExtArgs> | null
    where?: ItemServicoWhereInput
    orderBy?: ItemServicoOrderByWithRelationInput | ItemServicoOrderByWithRelationInput[]
    cursor?: ItemServicoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItemServicoScalarFieldEnum | ItemServicoScalarFieldEnum[]
  }

  /**
   * TipoServico without action
   */
  export type TipoServicoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoServico
     */
    select?: TipoServicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoServico
     */
    omit?: TipoServicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoServicoInclude<ExtArgs> | null
  }


  /**
   * Model Cliente
   */

  export type AggregateCliente = {
    _count: ClienteCountAggregateOutputType | null
    _avg: ClienteAvgAggregateOutputType | null
    _sum: ClienteSumAggregateOutputType | null
    _min: ClienteMinAggregateOutputType | null
    _max: ClienteMaxAggregateOutputType | null
  }

  export type ClienteAvgAggregateOutputType = {
    id: number | null
  }

  export type ClienteSumAggregateOutputType = {
    id: number | null
  }

  export type ClienteMinAggregateOutputType = {
    id: number | null
    cpf: string | null
    nome: string | null
    endereco: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClienteMaxAggregateOutputType = {
    id: number | null
    cpf: string | null
    nome: string | null
    endereco: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClienteCountAggregateOutputType = {
    id: number
    cpf: number
    nome: number
    endereco: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ClienteAvgAggregateInputType = {
    id?: true
  }

  export type ClienteSumAggregateInputType = {
    id?: true
  }

  export type ClienteMinAggregateInputType = {
    id?: true
    cpf?: true
    nome?: true
    endereco?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClienteMaxAggregateInputType = {
    id?: true
    cpf?: true
    nome?: true
    endereco?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClienteCountAggregateInputType = {
    id?: true
    cpf?: true
    nome?: true
    endereco?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ClienteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cliente to aggregate.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clientes
    **/
    _count?: true | ClienteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClienteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClienteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClienteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClienteMaxAggregateInputType
  }

  export type GetClienteAggregateType<T extends ClienteAggregateArgs> = {
        [P in keyof T & keyof AggregateCliente]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCliente[P]>
      : GetScalarType<T[P], AggregateCliente[P]>
  }




  export type ClienteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClienteWhereInput
    orderBy?: ClienteOrderByWithAggregationInput | ClienteOrderByWithAggregationInput[]
    by: ClienteScalarFieldEnum[] | ClienteScalarFieldEnum
    having?: ClienteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClienteCountAggregateInputType | true
    _avg?: ClienteAvgAggregateInputType
    _sum?: ClienteSumAggregateInputType
    _min?: ClienteMinAggregateInputType
    _max?: ClienteMaxAggregateInputType
  }

  export type ClienteGroupByOutputType = {
    id: number
    cpf: string
    nome: string
    endereco: string
    createdAt: Date
    updatedAt: Date
    _count: ClienteCountAggregateOutputType | null
    _avg: ClienteAvgAggregateOutputType | null
    _sum: ClienteSumAggregateOutputType | null
    _min: ClienteMinAggregateOutputType | null
    _max: ClienteMaxAggregateOutputType | null
  }

  type GetClienteGroupByPayload<T extends ClienteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClienteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClienteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClienteGroupByOutputType[P]>
            : GetScalarType<T[P], ClienteGroupByOutputType[P]>
        }
      >
    >


  export type ClienteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cpf?: boolean
    nome?: boolean
    endereco?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    veiculos?: boolean | Cliente$veiculosArgs<ExtArgs>
    _count?: boolean | ClienteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cliente"]>

  export type ClienteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cpf?: boolean
    nome?: boolean
    endereco?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["cliente"]>

  export type ClienteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cpf?: boolean
    nome?: boolean
    endereco?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["cliente"]>

  export type ClienteSelectScalar = {
    id?: boolean
    cpf?: boolean
    nome?: boolean
    endereco?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ClienteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cpf" | "nome" | "endereco" | "createdAt" | "updatedAt", ExtArgs["result"]["cliente"]>
  export type ClienteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    veiculos?: boolean | Cliente$veiculosArgs<ExtArgs>
    _count?: boolean | ClienteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClienteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ClienteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ClientePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cliente"
    objects: {
      veiculos: Prisma.$VeiculoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      cpf: string
      nome: string
      endereco: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["cliente"]>
    composites: {}
  }

  type ClienteGetPayload<S extends boolean | null | undefined | ClienteDefaultArgs> = $Result.GetResult<Prisma.$ClientePayload, S>

  type ClienteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClienteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClienteCountAggregateInputType | true
    }

  export interface ClienteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cliente'], meta: { name: 'Cliente' } }
    /**
     * Find zero or one Cliente that matches the filter.
     * @param {ClienteFindUniqueArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClienteFindUniqueArgs>(args: SelectSubset<T, ClienteFindUniqueArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cliente that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClienteFindUniqueOrThrowArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClienteFindUniqueOrThrowArgs>(args: SelectSubset<T, ClienteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cliente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindFirstArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClienteFindFirstArgs>(args?: SelectSubset<T, ClienteFindFirstArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cliente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindFirstOrThrowArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClienteFindFirstOrThrowArgs>(args?: SelectSubset<T, ClienteFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clientes
     * const clientes = await prisma.cliente.findMany()
     * 
     * // Get first 10 Clientes
     * const clientes = await prisma.cliente.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clienteWithIdOnly = await prisma.cliente.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClienteFindManyArgs>(args?: SelectSubset<T, ClienteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cliente.
     * @param {ClienteCreateArgs} args - Arguments to create a Cliente.
     * @example
     * // Create one Cliente
     * const Cliente = await prisma.cliente.create({
     *   data: {
     *     // ... data to create a Cliente
     *   }
     * })
     * 
     */
    create<T extends ClienteCreateArgs>(args: SelectSubset<T, ClienteCreateArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clientes.
     * @param {ClienteCreateManyArgs} args - Arguments to create many Clientes.
     * @example
     * // Create many Clientes
     * const cliente = await prisma.cliente.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClienteCreateManyArgs>(args?: SelectSubset<T, ClienteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clientes and returns the data saved in the database.
     * @param {ClienteCreateManyAndReturnArgs} args - Arguments to create many Clientes.
     * @example
     * // Create many Clientes
     * const cliente = await prisma.cliente.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clientes and only return the `id`
     * const clienteWithIdOnly = await prisma.cliente.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClienteCreateManyAndReturnArgs>(args?: SelectSubset<T, ClienteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cliente.
     * @param {ClienteDeleteArgs} args - Arguments to delete one Cliente.
     * @example
     * // Delete one Cliente
     * const Cliente = await prisma.cliente.delete({
     *   where: {
     *     // ... filter to delete one Cliente
     *   }
     * })
     * 
     */
    delete<T extends ClienteDeleteArgs>(args: SelectSubset<T, ClienteDeleteArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cliente.
     * @param {ClienteUpdateArgs} args - Arguments to update one Cliente.
     * @example
     * // Update one Cliente
     * const cliente = await prisma.cliente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClienteUpdateArgs>(args: SelectSubset<T, ClienteUpdateArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clientes.
     * @param {ClienteDeleteManyArgs} args - Arguments to filter Clientes to delete.
     * @example
     * // Delete a few Clientes
     * const { count } = await prisma.cliente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClienteDeleteManyArgs>(args?: SelectSubset<T, ClienteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clientes
     * const cliente = await prisma.cliente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClienteUpdateManyArgs>(args: SelectSubset<T, ClienteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clientes and returns the data updated in the database.
     * @param {ClienteUpdateManyAndReturnArgs} args - Arguments to update many Clientes.
     * @example
     * // Update many Clientes
     * const cliente = await prisma.cliente.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Clientes and only return the `id`
     * const clienteWithIdOnly = await prisma.cliente.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ClienteUpdateManyAndReturnArgs>(args: SelectSubset<T, ClienteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cliente.
     * @param {ClienteUpsertArgs} args - Arguments to update or create a Cliente.
     * @example
     * // Update or create a Cliente
     * const cliente = await prisma.cliente.upsert({
     *   create: {
     *     // ... data to create a Cliente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cliente we want to update
     *   }
     * })
     */
    upsert<T extends ClienteUpsertArgs>(args: SelectSubset<T, ClienteUpsertArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteCountArgs} args - Arguments to filter Clientes to count.
     * @example
     * // Count the number of Clientes
     * const count = await prisma.cliente.count({
     *   where: {
     *     // ... the filter for the Clientes we want to count
     *   }
     * })
    **/
    count<T extends ClienteCountArgs>(
      args?: Subset<T, ClienteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClienteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClienteAggregateArgs>(args: Subset<T, ClienteAggregateArgs>): Prisma.PrismaPromise<GetClienteAggregateType<T>>

    /**
     * Group by Cliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClienteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClienteGroupByArgs['orderBy'] }
        : { orderBy?: ClienteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClienteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClienteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cliente model
   */
  readonly fields: ClienteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cliente.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClienteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    veiculos<T extends Cliente$veiculosArgs<ExtArgs> = {}>(args?: Subset<T, Cliente$veiculosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VeiculoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Cliente model
   */
  interface ClienteFieldRefs {
    readonly id: FieldRef<"Cliente", 'Int'>
    readonly cpf: FieldRef<"Cliente", 'String'>
    readonly nome: FieldRef<"Cliente", 'String'>
    readonly endereco: FieldRef<"Cliente", 'String'>
    readonly createdAt: FieldRef<"Cliente", 'DateTime'>
    readonly updatedAt: FieldRef<"Cliente", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Cliente findUnique
   */
  export type ClienteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente findUniqueOrThrow
   */
  export type ClienteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente findFirst
   */
  export type ClienteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clientes.
     */
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente findFirstOrThrow
   */
  export type ClienteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clientes.
     */
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente findMany
   */
  export type ClienteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Clientes to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente create
   */
  export type ClienteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The data needed to create a Cliente.
     */
    data: XOR<ClienteCreateInput, ClienteUncheckedCreateInput>
  }

  /**
   * Cliente createMany
   */
  export type ClienteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clientes.
     */
    data: ClienteCreateManyInput | ClienteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cliente createManyAndReturn
   */
  export type ClienteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * The data used to create many Clientes.
     */
    data: ClienteCreateManyInput | ClienteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cliente update
   */
  export type ClienteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The data needed to update a Cliente.
     */
    data: XOR<ClienteUpdateInput, ClienteUncheckedUpdateInput>
    /**
     * Choose, which Cliente to update.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente updateMany
   */
  export type ClienteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clientes.
     */
    data: XOR<ClienteUpdateManyMutationInput, ClienteUncheckedUpdateManyInput>
    /**
     * Filter which Clientes to update
     */
    where?: ClienteWhereInput
    /**
     * Limit how many Clientes to update.
     */
    limit?: number
  }

  /**
   * Cliente updateManyAndReturn
   */
  export type ClienteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * The data used to update Clientes.
     */
    data: XOR<ClienteUpdateManyMutationInput, ClienteUncheckedUpdateManyInput>
    /**
     * Filter which Clientes to update
     */
    where?: ClienteWhereInput
    /**
     * Limit how many Clientes to update.
     */
    limit?: number
  }

  /**
   * Cliente upsert
   */
  export type ClienteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The filter to search for the Cliente to update in case it exists.
     */
    where: ClienteWhereUniqueInput
    /**
     * In case the Cliente found by the `where` argument doesn't exist, create a new Cliente with this data.
     */
    create: XOR<ClienteCreateInput, ClienteUncheckedCreateInput>
    /**
     * In case the Cliente was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClienteUpdateInput, ClienteUncheckedUpdateInput>
  }

  /**
   * Cliente delete
   */
  export type ClienteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter which Cliente to delete.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente deleteMany
   */
  export type ClienteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clientes to delete
     */
    where?: ClienteWhereInput
    /**
     * Limit how many Clientes to delete.
     */
    limit?: number
  }

  /**
   * Cliente.veiculos
   */
  export type Cliente$veiculosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Veiculo
     */
    select?: VeiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Veiculo
     */
    omit?: VeiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeiculoInclude<ExtArgs> | null
    where?: VeiculoWhereInput
    orderBy?: VeiculoOrderByWithRelationInput | VeiculoOrderByWithRelationInput[]
    cursor?: VeiculoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VeiculoScalarFieldEnum | VeiculoScalarFieldEnum[]
  }

  /**
   * Cliente without action
   */
  export type ClienteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
  }


  /**
   * Model Veiculo
   */

  export type AggregateVeiculo = {
    _count: VeiculoCountAggregateOutputType | null
    _avg: VeiculoAvgAggregateOutputType | null
    _sum: VeiculoSumAggregateOutputType | null
    _min: VeiculoMinAggregateOutputType | null
    _max: VeiculoMaxAggregateOutputType | null
  }

  export type VeiculoAvgAggregateOutputType = {
    id: number | null
    clienteId: number | null
    modeloId: number | null
    ano: number | null
  }

  export type VeiculoSumAggregateOutputType = {
    id: number | null
    clienteId: number | null
    modeloId: number | null
    ano: number | null
  }

  export type VeiculoMinAggregateOutputType = {
    id: number | null
    placa: string | null
    clienteId: number | null
    modeloId: number | null
    ano: number | null
    cor: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VeiculoMaxAggregateOutputType = {
    id: number | null
    placa: string | null
    clienteId: number | null
    modeloId: number | null
    ano: number | null
    cor: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VeiculoCountAggregateOutputType = {
    id: number
    placa: number
    clienteId: number
    modeloId: number
    ano: number
    cor: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VeiculoAvgAggregateInputType = {
    id?: true
    clienteId?: true
    modeloId?: true
    ano?: true
  }

  export type VeiculoSumAggregateInputType = {
    id?: true
    clienteId?: true
    modeloId?: true
    ano?: true
  }

  export type VeiculoMinAggregateInputType = {
    id?: true
    placa?: true
    clienteId?: true
    modeloId?: true
    ano?: true
    cor?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VeiculoMaxAggregateInputType = {
    id?: true
    placa?: true
    clienteId?: true
    modeloId?: true
    ano?: true
    cor?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VeiculoCountAggregateInputType = {
    id?: true
    placa?: true
    clienteId?: true
    modeloId?: true
    ano?: true
    cor?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VeiculoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Veiculo to aggregate.
     */
    where?: VeiculoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Veiculos to fetch.
     */
    orderBy?: VeiculoOrderByWithRelationInput | VeiculoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VeiculoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Veiculos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Veiculos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Veiculos
    **/
    _count?: true | VeiculoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VeiculoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VeiculoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VeiculoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VeiculoMaxAggregateInputType
  }

  export type GetVeiculoAggregateType<T extends VeiculoAggregateArgs> = {
        [P in keyof T & keyof AggregateVeiculo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVeiculo[P]>
      : GetScalarType<T[P], AggregateVeiculo[P]>
  }




  export type VeiculoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VeiculoWhereInput
    orderBy?: VeiculoOrderByWithAggregationInput | VeiculoOrderByWithAggregationInput[]
    by: VeiculoScalarFieldEnum[] | VeiculoScalarFieldEnum
    having?: VeiculoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VeiculoCountAggregateInputType | true
    _avg?: VeiculoAvgAggregateInputType
    _sum?: VeiculoSumAggregateInputType
    _min?: VeiculoMinAggregateInputType
    _max?: VeiculoMaxAggregateInputType
  }

  export type VeiculoGroupByOutputType = {
    id: number
    placa: string
    clienteId: number
    modeloId: number
    ano: number
    cor: string
    createdAt: Date
    updatedAt: Date
    _count: VeiculoCountAggregateOutputType | null
    _avg: VeiculoAvgAggregateOutputType | null
    _sum: VeiculoSumAggregateOutputType | null
    _min: VeiculoMinAggregateOutputType | null
    _max: VeiculoMaxAggregateOutputType | null
  }

  type GetVeiculoGroupByPayload<T extends VeiculoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VeiculoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VeiculoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VeiculoGroupByOutputType[P]>
            : GetScalarType<T[P], VeiculoGroupByOutputType[P]>
        }
      >
    >


  export type VeiculoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    placa?: boolean
    clienteId?: boolean
    modeloId?: boolean
    ano?: boolean
    cor?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ordensServico?: boolean | Veiculo$ordensServicoArgs<ExtArgs>
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    modelo?: boolean | ModeloVeiculoDefaultArgs<ExtArgs>
    _count?: boolean | VeiculoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["veiculo"]>

  export type VeiculoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    placa?: boolean
    clienteId?: boolean
    modeloId?: boolean
    ano?: boolean
    cor?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    modelo?: boolean | ModeloVeiculoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["veiculo"]>

  export type VeiculoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    placa?: boolean
    clienteId?: boolean
    modeloId?: boolean
    ano?: boolean
    cor?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    modelo?: boolean | ModeloVeiculoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["veiculo"]>

  export type VeiculoSelectScalar = {
    id?: boolean
    placa?: boolean
    clienteId?: boolean
    modeloId?: boolean
    ano?: boolean
    cor?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VeiculoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "placa" | "clienteId" | "modeloId" | "ano" | "cor" | "createdAt" | "updatedAt", ExtArgs["result"]["veiculo"]>
  export type VeiculoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ordensServico?: boolean | Veiculo$ordensServicoArgs<ExtArgs>
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    modelo?: boolean | ModeloVeiculoDefaultArgs<ExtArgs>
    _count?: boolean | VeiculoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VeiculoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    modelo?: boolean | ModeloVeiculoDefaultArgs<ExtArgs>
  }
  export type VeiculoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    modelo?: boolean | ModeloVeiculoDefaultArgs<ExtArgs>
  }

  export type $VeiculoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Veiculo"
    objects: {
      ordensServico: Prisma.$OrdemServicoPayload<ExtArgs>[]
      cliente: Prisma.$ClientePayload<ExtArgs>
      modelo: Prisma.$ModeloVeiculoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      placa: string
      clienteId: number
      modeloId: number
      ano: number
      cor: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["veiculo"]>
    composites: {}
  }

  type VeiculoGetPayload<S extends boolean | null | undefined | VeiculoDefaultArgs> = $Result.GetResult<Prisma.$VeiculoPayload, S>

  type VeiculoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VeiculoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VeiculoCountAggregateInputType | true
    }

  export interface VeiculoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Veiculo'], meta: { name: 'Veiculo' } }
    /**
     * Find zero or one Veiculo that matches the filter.
     * @param {VeiculoFindUniqueArgs} args - Arguments to find a Veiculo
     * @example
     * // Get one Veiculo
     * const veiculo = await prisma.veiculo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VeiculoFindUniqueArgs>(args: SelectSubset<T, VeiculoFindUniqueArgs<ExtArgs>>): Prisma__VeiculoClient<$Result.GetResult<Prisma.$VeiculoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Veiculo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VeiculoFindUniqueOrThrowArgs} args - Arguments to find a Veiculo
     * @example
     * // Get one Veiculo
     * const veiculo = await prisma.veiculo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VeiculoFindUniqueOrThrowArgs>(args: SelectSubset<T, VeiculoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VeiculoClient<$Result.GetResult<Prisma.$VeiculoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Veiculo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VeiculoFindFirstArgs} args - Arguments to find a Veiculo
     * @example
     * // Get one Veiculo
     * const veiculo = await prisma.veiculo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VeiculoFindFirstArgs>(args?: SelectSubset<T, VeiculoFindFirstArgs<ExtArgs>>): Prisma__VeiculoClient<$Result.GetResult<Prisma.$VeiculoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Veiculo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VeiculoFindFirstOrThrowArgs} args - Arguments to find a Veiculo
     * @example
     * // Get one Veiculo
     * const veiculo = await prisma.veiculo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VeiculoFindFirstOrThrowArgs>(args?: SelectSubset<T, VeiculoFindFirstOrThrowArgs<ExtArgs>>): Prisma__VeiculoClient<$Result.GetResult<Prisma.$VeiculoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Veiculos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VeiculoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Veiculos
     * const veiculos = await prisma.veiculo.findMany()
     * 
     * // Get first 10 Veiculos
     * const veiculos = await prisma.veiculo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const veiculoWithIdOnly = await prisma.veiculo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VeiculoFindManyArgs>(args?: SelectSubset<T, VeiculoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VeiculoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Veiculo.
     * @param {VeiculoCreateArgs} args - Arguments to create a Veiculo.
     * @example
     * // Create one Veiculo
     * const Veiculo = await prisma.veiculo.create({
     *   data: {
     *     // ... data to create a Veiculo
     *   }
     * })
     * 
     */
    create<T extends VeiculoCreateArgs>(args: SelectSubset<T, VeiculoCreateArgs<ExtArgs>>): Prisma__VeiculoClient<$Result.GetResult<Prisma.$VeiculoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Veiculos.
     * @param {VeiculoCreateManyArgs} args - Arguments to create many Veiculos.
     * @example
     * // Create many Veiculos
     * const veiculo = await prisma.veiculo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VeiculoCreateManyArgs>(args?: SelectSubset<T, VeiculoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Veiculos and returns the data saved in the database.
     * @param {VeiculoCreateManyAndReturnArgs} args - Arguments to create many Veiculos.
     * @example
     * // Create many Veiculos
     * const veiculo = await prisma.veiculo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Veiculos and only return the `id`
     * const veiculoWithIdOnly = await prisma.veiculo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VeiculoCreateManyAndReturnArgs>(args?: SelectSubset<T, VeiculoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VeiculoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Veiculo.
     * @param {VeiculoDeleteArgs} args - Arguments to delete one Veiculo.
     * @example
     * // Delete one Veiculo
     * const Veiculo = await prisma.veiculo.delete({
     *   where: {
     *     // ... filter to delete one Veiculo
     *   }
     * })
     * 
     */
    delete<T extends VeiculoDeleteArgs>(args: SelectSubset<T, VeiculoDeleteArgs<ExtArgs>>): Prisma__VeiculoClient<$Result.GetResult<Prisma.$VeiculoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Veiculo.
     * @param {VeiculoUpdateArgs} args - Arguments to update one Veiculo.
     * @example
     * // Update one Veiculo
     * const veiculo = await prisma.veiculo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VeiculoUpdateArgs>(args: SelectSubset<T, VeiculoUpdateArgs<ExtArgs>>): Prisma__VeiculoClient<$Result.GetResult<Prisma.$VeiculoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Veiculos.
     * @param {VeiculoDeleteManyArgs} args - Arguments to filter Veiculos to delete.
     * @example
     * // Delete a few Veiculos
     * const { count } = await prisma.veiculo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VeiculoDeleteManyArgs>(args?: SelectSubset<T, VeiculoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Veiculos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VeiculoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Veiculos
     * const veiculo = await prisma.veiculo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VeiculoUpdateManyArgs>(args: SelectSubset<T, VeiculoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Veiculos and returns the data updated in the database.
     * @param {VeiculoUpdateManyAndReturnArgs} args - Arguments to update many Veiculos.
     * @example
     * // Update many Veiculos
     * const veiculo = await prisma.veiculo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Veiculos and only return the `id`
     * const veiculoWithIdOnly = await prisma.veiculo.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VeiculoUpdateManyAndReturnArgs>(args: SelectSubset<T, VeiculoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VeiculoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Veiculo.
     * @param {VeiculoUpsertArgs} args - Arguments to update or create a Veiculo.
     * @example
     * // Update or create a Veiculo
     * const veiculo = await prisma.veiculo.upsert({
     *   create: {
     *     // ... data to create a Veiculo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Veiculo we want to update
     *   }
     * })
     */
    upsert<T extends VeiculoUpsertArgs>(args: SelectSubset<T, VeiculoUpsertArgs<ExtArgs>>): Prisma__VeiculoClient<$Result.GetResult<Prisma.$VeiculoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Veiculos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VeiculoCountArgs} args - Arguments to filter Veiculos to count.
     * @example
     * // Count the number of Veiculos
     * const count = await prisma.veiculo.count({
     *   where: {
     *     // ... the filter for the Veiculos we want to count
     *   }
     * })
    **/
    count<T extends VeiculoCountArgs>(
      args?: Subset<T, VeiculoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VeiculoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Veiculo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VeiculoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VeiculoAggregateArgs>(args: Subset<T, VeiculoAggregateArgs>): Prisma.PrismaPromise<GetVeiculoAggregateType<T>>

    /**
     * Group by Veiculo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VeiculoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VeiculoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VeiculoGroupByArgs['orderBy'] }
        : { orderBy?: VeiculoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VeiculoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVeiculoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Veiculo model
   */
  readonly fields: VeiculoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Veiculo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VeiculoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ordensServico<T extends Veiculo$ordensServicoArgs<ExtArgs> = {}>(args?: Subset<T, Veiculo$ordensServicoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdemServicoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    cliente<T extends ClienteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClienteDefaultArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    modelo<T extends ModeloVeiculoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ModeloVeiculoDefaultArgs<ExtArgs>>): Prisma__ModeloVeiculoClient<$Result.GetResult<Prisma.$ModeloVeiculoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Veiculo model
   */
  interface VeiculoFieldRefs {
    readonly id: FieldRef<"Veiculo", 'Int'>
    readonly placa: FieldRef<"Veiculo", 'String'>
    readonly clienteId: FieldRef<"Veiculo", 'Int'>
    readonly modeloId: FieldRef<"Veiculo", 'Int'>
    readonly ano: FieldRef<"Veiculo", 'Int'>
    readonly cor: FieldRef<"Veiculo", 'String'>
    readonly createdAt: FieldRef<"Veiculo", 'DateTime'>
    readonly updatedAt: FieldRef<"Veiculo", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Veiculo findUnique
   */
  export type VeiculoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Veiculo
     */
    select?: VeiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Veiculo
     */
    omit?: VeiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeiculoInclude<ExtArgs> | null
    /**
     * Filter, which Veiculo to fetch.
     */
    where: VeiculoWhereUniqueInput
  }

  /**
   * Veiculo findUniqueOrThrow
   */
  export type VeiculoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Veiculo
     */
    select?: VeiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Veiculo
     */
    omit?: VeiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeiculoInclude<ExtArgs> | null
    /**
     * Filter, which Veiculo to fetch.
     */
    where: VeiculoWhereUniqueInput
  }

  /**
   * Veiculo findFirst
   */
  export type VeiculoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Veiculo
     */
    select?: VeiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Veiculo
     */
    omit?: VeiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeiculoInclude<ExtArgs> | null
    /**
     * Filter, which Veiculo to fetch.
     */
    where?: VeiculoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Veiculos to fetch.
     */
    orderBy?: VeiculoOrderByWithRelationInput | VeiculoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Veiculos.
     */
    cursor?: VeiculoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Veiculos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Veiculos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Veiculos.
     */
    distinct?: VeiculoScalarFieldEnum | VeiculoScalarFieldEnum[]
  }

  /**
   * Veiculo findFirstOrThrow
   */
  export type VeiculoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Veiculo
     */
    select?: VeiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Veiculo
     */
    omit?: VeiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeiculoInclude<ExtArgs> | null
    /**
     * Filter, which Veiculo to fetch.
     */
    where?: VeiculoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Veiculos to fetch.
     */
    orderBy?: VeiculoOrderByWithRelationInput | VeiculoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Veiculos.
     */
    cursor?: VeiculoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Veiculos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Veiculos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Veiculos.
     */
    distinct?: VeiculoScalarFieldEnum | VeiculoScalarFieldEnum[]
  }

  /**
   * Veiculo findMany
   */
  export type VeiculoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Veiculo
     */
    select?: VeiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Veiculo
     */
    omit?: VeiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeiculoInclude<ExtArgs> | null
    /**
     * Filter, which Veiculos to fetch.
     */
    where?: VeiculoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Veiculos to fetch.
     */
    orderBy?: VeiculoOrderByWithRelationInput | VeiculoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Veiculos.
     */
    cursor?: VeiculoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Veiculos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Veiculos.
     */
    skip?: number
    distinct?: VeiculoScalarFieldEnum | VeiculoScalarFieldEnum[]
  }

  /**
   * Veiculo create
   */
  export type VeiculoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Veiculo
     */
    select?: VeiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Veiculo
     */
    omit?: VeiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeiculoInclude<ExtArgs> | null
    /**
     * The data needed to create a Veiculo.
     */
    data: XOR<VeiculoCreateInput, VeiculoUncheckedCreateInput>
  }

  /**
   * Veiculo createMany
   */
  export type VeiculoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Veiculos.
     */
    data: VeiculoCreateManyInput | VeiculoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Veiculo createManyAndReturn
   */
  export type VeiculoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Veiculo
     */
    select?: VeiculoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Veiculo
     */
    omit?: VeiculoOmit<ExtArgs> | null
    /**
     * The data used to create many Veiculos.
     */
    data: VeiculoCreateManyInput | VeiculoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeiculoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Veiculo update
   */
  export type VeiculoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Veiculo
     */
    select?: VeiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Veiculo
     */
    omit?: VeiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeiculoInclude<ExtArgs> | null
    /**
     * The data needed to update a Veiculo.
     */
    data: XOR<VeiculoUpdateInput, VeiculoUncheckedUpdateInput>
    /**
     * Choose, which Veiculo to update.
     */
    where: VeiculoWhereUniqueInput
  }

  /**
   * Veiculo updateMany
   */
  export type VeiculoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Veiculos.
     */
    data: XOR<VeiculoUpdateManyMutationInput, VeiculoUncheckedUpdateManyInput>
    /**
     * Filter which Veiculos to update
     */
    where?: VeiculoWhereInput
    /**
     * Limit how many Veiculos to update.
     */
    limit?: number
  }

  /**
   * Veiculo updateManyAndReturn
   */
  export type VeiculoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Veiculo
     */
    select?: VeiculoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Veiculo
     */
    omit?: VeiculoOmit<ExtArgs> | null
    /**
     * The data used to update Veiculos.
     */
    data: XOR<VeiculoUpdateManyMutationInput, VeiculoUncheckedUpdateManyInput>
    /**
     * Filter which Veiculos to update
     */
    where?: VeiculoWhereInput
    /**
     * Limit how many Veiculos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeiculoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Veiculo upsert
   */
  export type VeiculoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Veiculo
     */
    select?: VeiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Veiculo
     */
    omit?: VeiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeiculoInclude<ExtArgs> | null
    /**
     * The filter to search for the Veiculo to update in case it exists.
     */
    where: VeiculoWhereUniqueInput
    /**
     * In case the Veiculo found by the `where` argument doesn't exist, create a new Veiculo with this data.
     */
    create: XOR<VeiculoCreateInput, VeiculoUncheckedCreateInput>
    /**
     * In case the Veiculo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VeiculoUpdateInput, VeiculoUncheckedUpdateInput>
  }

  /**
   * Veiculo delete
   */
  export type VeiculoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Veiculo
     */
    select?: VeiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Veiculo
     */
    omit?: VeiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeiculoInclude<ExtArgs> | null
    /**
     * Filter which Veiculo to delete.
     */
    where: VeiculoWhereUniqueInput
  }

  /**
   * Veiculo deleteMany
   */
  export type VeiculoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Veiculos to delete
     */
    where?: VeiculoWhereInput
    /**
     * Limit how many Veiculos to delete.
     */
    limit?: number
  }

  /**
   * Veiculo.ordensServico
   */
  export type Veiculo$ordensServicoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdemServico
     */
    select?: OrdemServicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrdemServico
     */
    omit?: OrdemServicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdemServicoInclude<ExtArgs> | null
    where?: OrdemServicoWhereInput
    orderBy?: OrdemServicoOrderByWithRelationInput | OrdemServicoOrderByWithRelationInput[]
    cursor?: OrdemServicoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrdemServicoScalarFieldEnum | OrdemServicoScalarFieldEnum[]
  }

  /**
   * Veiculo without action
   */
  export type VeiculoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Veiculo
     */
    select?: VeiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Veiculo
     */
    omit?: VeiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeiculoInclude<ExtArgs> | null
  }


  /**
   * Model OrdemServico
   */

  export type AggregateOrdemServico = {
    _count: OrdemServicoCountAggregateOutputType | null
    _avg: OrdemServicoAvgAggregateOutputType | null
    _sum: OrdemServicoSumAggregateOutputType | null
    _min: OrdemServicoMinAggregateOutputType | null
    _max: OrdemServicoMaxAggregateOutputType | null
  }

  export type OrdemServicoAvgAggregateOutputType = {
    id: number | null
    veiculoId: number | null
    valorTotal: number | null
  }

  export type OrdemServicoSumAggregateOutputType = {
    id: number | null
    veiculoId: number | null
    valorTotal: number | null
  }

  export type OrdemServicoMinAggregateOutputType = {
    id: number | null
    veiculoId: number | null
    status: string | null
    tipoPagamento: string | null
    observacoes: string | null
    valorTotal: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrdemServicoMaxAggregateOutputType = {
    id: number | null
    veiculoId: number | null
    status: string | null
    tipoPagamento: string | null
    observacoes: string | null
    valorTotal: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrdemServicoCountAggregateOutputType = {
    id: number
    veiculoId: number
    status: number
    tipoPagamento: number
    observacoes: number
    valorTotal: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OrdemServicoAvgAggregateInputType = {
    id?: true
    veiculoId?: true
    valorTotal?: true
  }

  export type OrdemServicoSumAggregateInputType = {
    id?: true
    veiculoId?: true
    valorTotal?: true
  }

  export type OrdemServicoMinAggregateInputType = {
    id?: true
    veiculoId?: true
    status?: true
    tipoPagamento?: true
    observacoes?: true
    valorTotal?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrdemServicoMaxAggregateInputType = {
    id?: true
    veiculoId?: true
    status?: true
    tipoPagamento?: true
    observacoes?: true
    valorTotal?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrdemServicoCountAggregateInputType = {
    id?: true
    veiculoId?: true
    status?: true
    tipoPagamento?: true
    observacoes?: true
    valorTotal?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OrdemServicoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrdemServico to aggregate.
     */
    where?: OrdemServicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrdemServicos to fetch.
     */
    orderBy?: OrdemServicoOrderByWithRelationInput | OrdemServicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrdemServicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrdemServicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrdemServicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OrdemServicos
    **/
    _count?: true | OrdemServicoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrdemServicoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrdemServicoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrdemServicoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrdemServicoMaxAggregateInputType
  }

  export type GetOrdemServicoAggregateType<T extends OrdemServicoAggregateArgs> = {
        [P in keyof T & keyof AggregateOrdemServico]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrdemServico[P]>
      : GetScalarType<T[P], AggregateOrdemServico[P]>
  }




  export type OrdemServicoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrdemServicoWhereInput
    orderBy?: OrdemServicoOrderByWithAggregationInput | OrdemServicoOrderByWithAggregationInput[]
    by: OrdemServicoScalarFieldEnum[] | OrdemServicoScalarFieldEnum
    having?: OrdemServicoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrdemServicoCountAggregateInputType | true
    _avg?: OrdemServicoAvgAggregateInputType
    _sum?: OrdemServicoSumAggregateInputType
    _min?: OrdemServicoMinAggregateInputType
    _max?: OrdemServicoMaxAggregateInputType
  }

  export type OrdemServicoGroupByOutputType = {
    id: number
    veiculoId: number
    status: string
    tipoPagamento: string | null
    observacoes: string | null
    valorTotal: number
    createdAt: Date
    updatedAt: Date
    _count: OrdemServicoCountAggregateOutputType | null
    _avg: OrdemServicoAvgAggregateOutputType | null
    _sum: OrdemServicoSumAggregateOutputType | null
    _min: OrdemServicoMinAggregateOutputType | null
    _max: OrdemServicoMaxAggregateOutputType | null
  }

  type GetOrdemServicoGroupByPayload<T extends OrdemServicoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrdemServicoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrdemServicoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrdemServicoGroupByOutputType[P]>
            : GetScalarType<T[P], OrdemServicoGroupByOutputType[P]>
        }
      >
    >


  export type OrdemServicoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    veiculoId?: boolean
    status?: boolean
    tipoPagamento?: boolean
    observacoes?: boolean
    valorTotal?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    itensPeca?: boolean | OrdemServico$itensPecaArgs<ExtArgs>
    itensServico?: boolean | OrdemServico$itensServicoArgs<ExtArgs>
    veiculo?: boolean | VeiculoDefaultArgs<ExtArgs>
    _count?: boolean | OrdemServicoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ordemServico"]>

  export type OrdemServicoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    veiculoId?: boolean
    status?: boolean
    tipoPagamento?: boolean
    observacoes?: boolean
    valorTotal?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    veiculo?: boolean | VeiculoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ordemServico"]>

  export type OrdemServicoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    veiculoId?: boolean
    status?: boolean
    tipoPagamento?: boolean
    observacoes?: boolean
    valorTotal?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    veiculo?: boolean | VeiculoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ordemServico"]>

  export type OrdemServicoSelectScalar = {
    id?: boolean
    veiculoId?: boolean
    status?: boolean
    tipoPagamento?: boolean
    observacoes?: boolean
    valorTotal?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OrdemServicoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "veiculoId" | "status" | "tipoPagamento" | "observacoes" | "valorTotal" | "createdAt" | "updatedAt", ExtArgs["result"]["ordemServico"]>
  export type OrdemServicoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    itensPeca?: boolean | OrdemServico$itensPecaArgs<ExtArgs>
    itensServico?: boolean | OrdemServico$itensServicoArgs<ExtArgs>
    veiculo?: boolean | VeiculoDefaultArgs<ExtArgs>
    _count?: boolean | OrdemServicoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OrdemServicoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    veiculo?: boolean | VeiculoDefaultArgs<ExtArgs>
  }
  export type OrdemServicoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    veiculo?: boolean | VeiculoDefaultArgs<ExtArgs>
  }

  export type $OrdemServicoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OrdemServico"
    objects: {
      itensPeca: Prisma.$ItemPecaPayload<ExtArgs>[]
      itensServico: Prisma.$ItemServicoPayload<ExtArgs>[]
      veiculo: Prisma.$VeiculoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      veiculoId: number
      status: string
      tipoPagamento: string | null
      observacoes: string | null
      valorTotal: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["ordemServico"]>
    composites: {}
  }

  type OrdemServicoGetPayload<S extends boolean | null | undefined | OrdemServicoDefaultArgs> = $Result.GetResult<Prisma.$OrdemServicoPayload, S>

  type OrdemServicoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrdemServicoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrdemServicoCountAggregateInputType | true
    }

  export interface OrdemServicoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OrdemServico'], meta: { name: 'OrdemServico' } }
    /**
     * Find zero or one OrdemServico that matches the filter.
     * @param {OrdemServicoFindUniqueArgs} args - Arguments to find a OrdemServico
     * @example
     * // Get one OrdemServico
     * const ordemServico = await prisma.ordemServico.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrdemServicoFindUniqueArgs>(args: SelectSubset<T, OrdemServicoFindUniqueArgs<ExtArgs>>): Prisma__OrdemServicoClient<$Result.GetResult<Prisma.$OrdemServicoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OrdemServico that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrdemServicoFindUniqueOrThrowArgs} args - Arguments to find a OrdemServico
     * @example
     * // Get one OrdemServico
     * const ordemServico = await prisma.ordemServico.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrdemServicoFindUniqueOrThrowArgs>(args: SelectSubset<T, OrdemServicoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrdemServicoClient<$Result.GetResult<Prisma.$OrdemServicoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrdemServico that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdemServicoFindFirstArgs} args - Arguments to find a OrdemServico
     * @example
     * // Get one OrdemServico
     * const ordemServico = await prisma.ordemServico.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrdemServicoFindFirstArgs>(args?: SelectSubset<T, OrdemServicoFindFirstArgs<ExtArgs>>): Prisma__OrdemServicoClient<$Result.GetResult<Prisma.$OrdemServicoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrdemServico that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdemServicoFindFirstOrThrowArgs} args - Arguments to find a OrdemServico
     * @example
     * // Get one OrdemServico
     * const ordemServico = await prisma.ordemServico.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrdemServicoFindFirstOrThrowArgs>(args?: SelectSubset<T, OrdemServicoFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrdemServicoClient<$Result.GetResult<Prisma.$OrdemServicoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OrdemServicos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdemServicoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrdemServicos
     * const ordemServicos = await prisma.ordemServico.findMany()
     * 
     * // Get first 10 OrdemServicos
     * const ordemServicos = await prisma.ordemServico.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ordemServicoWithIdOnly = await prisma.ordemServico.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrdemServicoFindManyArgs>(args?: SelectSubset<T, OrdemServicoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdemServicoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OrdemServico.
     * @param {OrdemServicoCreateArgs} args - Arguments to create a OrdemServico.
     * @example
     * // Create one OrdemServico
     * const OrdemServico = await prisma.ordemServico.create({
     *   data: {
     *     // ... data to create a OrdemServico
     *   }
     * })
     * 
     */
    create<T extends OrdemServicoCreateArgs>(args: SelectSubset<T, OrdemServicoCreateArgs<ExtArgs>>): Prisma__OrdemServicoClient<$Result.GetResult<Prisma.$OrdemServicoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OrdemServicos.
     * @param {OrdemServicoCreateManyArgs} args - Arguments to create many OrdemServicos.
     * @example
     * // Create many OrdemServicos
     * const ordemServico = await prisma.ordemServico.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrdemServicoCreateManyArgs>(args?: SelectSubset<T, OrdemServicoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OrdemServicos and returns the data saved in the database.
     * @param {OrdemServicoCreateManyAndReturnArgs} args - Arguments to create many OrdemServicos.
     * @example
     * // Create many OrdemServicos
     * const ordemServico = await prisma.ordemServico.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OrdemServicos and only return the `id`
     * const ordemServicoWithIdOnly = await prisma.ordemServico.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrdemServicoCreateManyAndReturnArgs>(args?: SelectSubset<T, OrdemServicoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdemServicoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OrdemServico.
     * @param {OrdemServicoDeleteArgs} args - Arguments to delete one OrdemServico.
     * @example
     * // Delete one OrdemServico
     * const OrdemServico = await prisma.ordemServico.delete({
     *   where: {
     *     // ... filter to delete one OrdemServico
     *   }
     * })
     * 
     */
    delete<T extends OrdemServicoDeleteArgs>(args: SelectSubset<T, OrdemServicoDeleteArgs<ExtArgs>>): Prisma__OrdemServicoClient<$Result.GetResult<Prisma.$OrdemServicoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OrdemServico.
     * @param {OrdemServicoUpdateArgs} args - Arguments to update one OrdemServico.
     * @example
     * // Update one OrdemServico
     * const ordemServico = await prisma.ordemServico.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrdemServicoUpdateArgs>(args: SelectSubset<T, OrdemServicoUpdateArgs<ExtArgs>>): Prisma__OrdemServicoClient<$Result.GetResult<Prisma.$OrdemServicoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OrdemServicos.
     * @param {OrdemServicoDeleteManyArgs} args - Arguments to filter OrdemServicos to delete.
     * @example
     * // Delete a few OrdemServicos
     * const { count } = await prisma.ordemServico.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrdemServicoDeleteManyArgs>(args?: SelectSubset<T, OrdemServicoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrdemServicos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdemServicoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrdemServicos
     * const ordemServico = await prisma.ordemServico.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrdemServicoUpdateManyArgs>(args: SelectSubset<T, OrdemServicoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrdemServicos and returns the data updated in the database.
     * @param {OrdemServicoUpdateManyAndReturnArgs} args - Arguments to update many OrdemServicos.
     * @example
     * // Update many OrdemServicos
     * const ordemServico = await prisma.ordemServico.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OrdemServicos and only return the `id`
     * const ordemServicoWithIdOnly = await prisma.ordemServico.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrdemServicoUpdateManyAndReturnArgs>(args: SelectSubset<T, OrdemServicoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdemServicoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OrdemServico.
     * @param {OrdemServicoUpsertArgs} args - Arguments to update or create a OrdemServico.
     * @example
     * // Update or create a OrdemServico
     * const ordemServico = await prisma.ordemServico.upsert({
     *   create: {
     *     // ... data to create a OrdemServico
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrdemServico we want to update
     *   }
     * })
     */
    upsert<T extends OrdemServicoUpsertArgs>(args: SelectSubset<T, OrdemServicoUpsertArgs<ExtArgs>>): Prisma__OrdemServicoClient<$Result.GetResult<Prisma.$OrdemServicoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OrdemServicos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdemServicoCountArgs} args - Arguments to filter OrdemServicos to count.
     * @example
     * // Count the number of OrdemServicos
     * const count = await prisma.ordemServico.count({
     *   where: {
     *     // ... the filter for the OrdemServicos we want to count
     *   }
     * })
    **/
    count<T extends OrdemServicoCountArgs>(
      args?: Subset<T, OrdemServicoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrdemServicoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrdemServico.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdemServicoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrdemServicoAggregateArgs>(args: Subset<T, OrdemServicoAggregateArgs>): Prisma.PrismaPromise<GetOrdemServicoAggregateType<T>>

    /**
     * Group by OrdemServico.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdemServicoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrdemServicoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrdemServicoGroupByArgs['orderBy'] }
        : { orderBy?: OrdemServicoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrdemServicoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrdemServicoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OrdemServico model
   */
  readonly fields: OrdemServicoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrdemServico.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrdemServicoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    itensPeca<T extends OrdemServico$itensPecaArgs<ExtArgs> = {}>(args?: Subset<T, OrdemServico$itensPecaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPecaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    itensServico<T extends OrdemServico$itensServicoArgs<ExtArgs> = {}>(args?: Subset<T, OrdemServico$itensServicoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemServicoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    veiculo<T extends VeiculoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VeiculoDefaultArgs<ExtArgs>>): Prisma__VeiculoClient<$Result.GetResult<Prisma.$VeiculoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the OrdemServico model
   */
  interface OrdemServicoFieldRefs {
    readonly id: FieldRef<"OrdemServico", 'Int'>
    readonly veiculoId: FieldRef<"OrdemServico", 'Int'>
    readonly status: FieldRef<"OrdemServico", 'String'>
    readonly tipoPagamento: FieldRef<"OrdemServico", 'String'>
    readonly observacoes: FieldRef<"OrdemServico", 'String'>
    readonly valorTotal: FieldRef<"OrdemServico", 'Float'>
    readonly createdAt: FieldRef<"OrdemServico", 'DateTime'>
    readonly updatedAt: FieldRef<"OrdemServico", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OrdemServico findUnique
   */
  export type OrdemServicoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdemServico
     */
    select?: OrdemServicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrdemServico
     */
    omit?: OrdemServicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdemServicoInclude<ExtArgs> | null
    /**
     * Filter, which OrdemServico to fetch.
     */
    where: OrdemServicoWhereUniqueInput
  }

  /**
   * OrdemServico findUniqueOrThrow
   */
  export type OrdemServicoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdemServico
     */
    select?: OrdemServicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrdemServico
     */
    omit?: OrdemServicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdemServicoInclude<ExtArgs> | null
    /**
     * Filter, which OrdemServico to fetch.
     */
    where: OrdemServicoWhereUniqueInput
  }

  /**
   * OrdemServico findFirst
   */
  export type OrdemServicoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdemServico
     */
    select?: OrdemServicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrdemServico
     */
    omit?: OrdemServicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdemServicoInclude<ExtArgs> | null
    /**
     * Filter, which OrdemServico to fetch.
     */
    where?: OrdemServicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrdemServicos to fetch.
     */
    orderBy?: OrdemServicoOrderByWithRelationInput | OrdemServicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrdemServicos.
     */
    cursor?: OrdemServicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrdemServicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrdemServicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrdemServicos.
     */
    distinct?: OrdemServicoScalarFieldEnum | OrdemServicoScalarFieldEnum[]
  }

  /**
   * OrdemServico findFirstOrThrow
   */
  export type OrdemServicoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdemServico
     */
    select?: OrdemServicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrdemServico
     */
    omit?: OrdemServicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdemServicoInclude<ExtArgs> | null
    /**
     * Filter, which OrdemServico to fetch.
     */
    where?: OrdemServicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrdemServicos to fetch.
     */
    orderBy?: OrdemServicoOrderByWithRelationInput | OrdemServicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrdemServicos.
     */
    cursor?: OrdemServicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrdemServicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrdemServicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrdemServicos.
     */
    distinct?: OrdemServicoScalarFieldEnum | OrdemServicoScalarFieldEnum[]
  }

  /**
   * OrdemServico findMany
   */
  export type OrdemServicoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdemServico
     */
    select?: OrdemServicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrdemServico
     */
    omit?: OrdemServicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdemServicoInclude<ExtArgs> | null
    /**
     * Filter, which OrdemServicos to fetch.
     */
    where?: OrdemServicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrdemServicos to fetch.
     */
    orderBy?: OrdemServicoOrderByWithRelationInput | OrdemServicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OrdemServicos.
     */
    cursor?: OrdemServicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrdemServicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrdemServicos.
     */
    skip?: number
    distinct?: OrdemServicoScalarFieldEnum | OrdemServicoScalarFieldEnum[]
  }

  /**
   * OrdemServico create
   */
  export type OrdemServicoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdemServico
     */
    select?: OrdemServicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrdemServico
     */
    omit?: OrdemServicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdemServicoInclude<ExtArgs> | null
    /**
     * The data needed to create a OrdemServico.
     */
    data: XOR<OrdemServicoCreateInput, OrdemServicoUncheckedCreateInput>
  }

  /**
   * OrdemServico createMany
   */
  export type OrdemServicoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OrdemServicos.
     */
    data: OrdemServicoCreateManyInput | OrdemServicoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OrdemServico createManyAndReturn
   */
  export type OrdemServicoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdemServico
     */
    select?: OrdemServicoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrdemServico
     */
    omit?: OrdemServicoOmit<ExtArgs> | null
    /**
     * The data used to create many OrdemServicos.
     */
    data: OrdemServicoCreateManyInput | OrdemServicoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdemServicoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrdemServico update
   */
  export type OrdemServicoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdemServico
     */
    select?: OrdemServicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrdemServico
     */
    omit?: OrdemServicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdemServicoInclude<ExtArgs> | null
    /**
     * The data needed to update a OrdemServico.
     */
    data: XOR<OrdemServicoUpdateInput, OrdemServicoUncheckedUpdateInput>
    /**
     * Choose, which OrdemServico to update.
     */
    where: OrdemServicoWhereUniqueInput
  }

  /**
   * OrdemServico updateMany
   */
  export type OrdemServicoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OrdemServicos.
     */
    data: XOR<OrdemServicoUpdateManyMutationInput, OrdemServicoUncheckedUpdateManyInput>
    /**
     * Filter which OrdemServicos to update
     */
    where?: OrdemServicoWhereInput
    /**
     * Limit how many OrdemServicos to update.
     */
    limit?: number
  }

  /**
   * OrdemServico updateManyAndReturn
   */
  export type OrdemServicoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdemServico
     */
    select?: OrdemServicoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrdemServico
     */
    omit?: OrdemServicoOmit<ExtArgs> | null
    /**
     * The data used to update OrdemServicos.
     */
    data: XOR<OrdemServicoUpdateManyMutationInput, OrdemServicoUncheckedUpdateManyInput>
    /**
     * Filter which OrdemServicos to update
     */
    where?: OrdemServicoWhereInput
    /**
     * Limit how many OrdemServicos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdemServicoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrdemServico upsert
   */
  export type OrdemServicoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdemServico
     */
    select?: OrdemServicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrdemServico
     */
    omit?: OrdemServicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdemServicoInclude<ExtArgs> | null
    /**
     * The filter to search for the OrdemServico to update in case it exists.
     */
    where: OrdemServicoWhereUniqueInput
    /**
     * In case the OrdemServico found by the `where` argument doesn't exist, create a new OrdemServico with this data.
     */
    create: XOR<OrdemServicoCreateInput, OrdemServicoUncheckedCreateInput>
    /**
     * In case the OrdemServico was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrdemServicoUpdateInput, OrdemServicoUncheckedUpdateInput>
  }

  /**
   * OrdemServico delete
   */
  export type OrdemServicoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdemServico
     */
    select?: OrdemServicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrdemServico
     */
    omit?: OrdemServicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdemServicoInclude<ExtArgs> | null
    /**
     * Filter which OrdemServico to delete.
     */
    where: OrdemServicoWhereUniqueInput
  }

  /**
   * OrdemServico deleteMany
   */
  export type OrdemServicoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrdemServicos to delete
     */
    where?: OrdemServicoWhereInput
    /**
     * Limit how many OrdemServicos to delete.
     */
    limit?: number
  }

  /**
   * OrdemServico.itensPeca
   */
  export type OrdemServico$itensPecaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPeca
     */
    select?: ItemPecaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemPeca
     */
    omit?: ItemPecaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPecaInclude<ExtArgs> | null
    where?: ItemPecaWhereInput
    orderBy?: ItemPecaOrderByWithRelationInput | ItemPecaOrderByWithRelationInput[]
    cursor?: ItemPecaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItemPecaScalarFieldEnum | ItemPecaScalarFieldEnum[]
  }

  /**
   * OrdemServico.itensServico
   */
  export type OrdemServico$itensServicoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemServico
     */
    select?: ItemServicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemServico
     */
    omit?: ItemServicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemServicoInclude<ExtArgs> | null
    where?: ItemServicoWhereInput
    orderBy?: ItemServicoOrderByWithRelationInput | ItemServicoOrderByWithRelationInput[]
    cursor?: ItemServicoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItemServicoScalarFieldEnum | ItemServicoScalarFieldEnum[]
  }

  /**
   * OrdemServico without action
   */
  export type OrdemServicoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdemServico
     */
    select?: OrdemServicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrdemServico
     */
    omit?: OrdemServicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdemServicoInclude<ExtArgs> | null
  }


  /**
   * Model ItemServico
   */

  export type AggregateItemServico = {
    _count: ItemServicoCountAggregateOutputType | null
    _avg: ItemServicoAvgAggregateOutputType | null
    _sum: ItemServicoSumAggregateOutputType | null
    _min: ItemServicoMinAggregateOutputType | null
    _max: ItemServicoMaxAggregateOutputType | null
  }

  export type ItemServicoAvgAggregateOutputType = {
    id: number | null
    ordemServicoId: number | null
    tipoServicoId: number | null
    quantidade: number | null
    valorUnitario: number | null
    valorTotal: number | null
  }

  export type ItemServicoSumAggregateOutputType = {
    id: number | null
    ordemServicoId: number | null
    tipoServicoId: number | null
    quantidade: number | null
    valorUnitario: number | null
    valorTotal: number | null
  }

  export type ItemServicoMinAggregateOutputType = {
    id: number | null
    ordemServicoId: number | null
    tipoServicoId: number | null
    quantidade: number | null
    valorUnitario: number | null
    valorTotal: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ItemServicoMaxAggregateOutputType = {
    id: number | null
    ordemServicoId: number | null
    tipoServicoId: number | null
    quantidade: number | null
    valorUnitario: number | null
    valorTotal: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ItemServicoCountAggregateOutputType = {
    id: number
    ordemServicoId: number
    tipoServicoId: number
    quantidade: number
    valorUnitario: number
    valorTotal: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ItemServicoAvgAggregateInputType = {
    id?: true
    ordemServicoId?: true
    tipoServicoId?: true
    quantidade?: true
    valorUnitario?: true
    valorTotal?: true
  }

  export type ItemServicoSumAggregateInputType = {
    id?: true
    ordemServicoId?: true
    tipoServicoId?: true
    quantidade?: true
    valorUnitario?: true
    valorTotal?: true
  }

  export type ItemServicoMinAggregateInputType = {
    id?: true
    ordemServicoId?: true
    tipoServicoId?: true
    quantidade?: true
    valorUnitario?: true
    valorTotal?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ItemServicoMaxAggregateInputType = {
    id?: true
    ordemServicoId?: true
    tipoServicoId?: true
    quantidade?: true
    valorUnitario?: true
    valorTotal?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ItemServicoCountAggregateInputType = {
    id?: true
    ordemServicoId?: true
    tipoServicoId?: true
    quantidade?: true
    valorUnitario?: true
    valorTotal?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ItemServicoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ItemServico to aggregate.
     */
    where?: ItemServicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemServicos to fetch.
     */
    orderBy?: ItemServicoOrderByWithRelationInput | ItemServicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ItemServicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemServicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemServicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ItemServicos
    **/
    _count?: true | ItemServicoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ItemServicoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ItemServicoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ItemServicoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ItemServicoMaxAggregateInputType
  }

  export type GetItemServicoAggregateType<T extends ItemServicoAggregateArgs> = {
        [P in keyof T & keyof AggregateItemServico]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItemServico[P]>
      : GetScalarType<T[P], AggregateItemServico[P]>
  }




  export type ItemServicoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemServicoWhereInput
    orderBy?: ItemServicoOrderByWithAggregationInput | ItemServicoOrderByWithAggregationInput[]
    by: ItemServicoScalarFieldEnum[] | ItemServicoScalarFieldEnum
    having?: ItemServicoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ItemServicoCountAggregateInputType | true
    _avg?: ItemServicoAvgAggregateInputType
    _sum?: ItemServicoSumAggregateInputType
    _min?: ItemServicoMinAggregateInputType
    _max?: ItemServicoMaxAggregateInputType
  }

  export type ItemServicoGroupByOutputType = {
    id: number
    ordemServicoId: number
    tipoServicoId: number
    quantidade: number
    valorUnitario: number
    valorTotal: number
    createdAt: Date
    updatedAt: Date
    _count: ItemServicoCountAggregateOutputType | null
    _avg: ItemServicoAvgAggregateOutputType | null
    _sum: ItemServicoSumAggregateOutputType | null
    _min: ItemServicoMinAggregateOutputType | null
    _max: ItemServicoMaxAggregateOutputType | null
  }

  type GetItemServicoGroupByPayload<T extends ItemServicoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ItemServicoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ItemServicoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ItemServicoGroupByOutputType[P]>
            : GetScalarType<T[P], ItemServicoGroupByOutputType[P]>
        }
      >
    >


  export type ItemServicoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ordemServicoId?: boolean
    tipoServicoId?: boolean
    quantidade?: boolean
    valorUnitario?: boolean
    valorTotal?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ordemServico?: boolean | OrdemServicoDefaultArgs<ExtArgs>
    tipoServico?: boolean | TipoServicoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itemServico"]>

  export type ItemServicoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ordemServicoId?: boolean
    tipoServicoId?: boolean
    quantidade?: boolean
    valorUnitario?: boolean
    valorTotal?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ordemServico?: boolean | OrdemServicoDefaultArgs<ExtArgs>
    tipoServico?: boolean | TipoServicoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itemServico"]>

  export type ItemServicoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ordemServicoId?: boolean
    tipoServicoId?: boolean
    quantidade?: boolean
    valorUnitario?: boolean
    valorTotal?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ordemServico?: boolean | OrdemServicoDefaultArgs<ExtArgs>
    tipoServico?: boolean | TipoServicoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itemServico"]>

  export type ItemServicoSelectScalar = {
    id?: boolean
    ordemServicoId?: boolean
    tipoServicoId?: boolean
    quantidade?: boolean
    valorUnitario?: boolean
    valorTotal?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ItemServicoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ordemServicoId" | "tipoServicoId" | "quantidade" | "valorUnitario" | "valorTotal" | "createdAt" | "updatedAt", ExtArgs["result"]["itemServico"]>
  export type ItemServicoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ordemServico?: boolean | OrdemServicoDefaultArgs<ExtArgs>
    tipoServico?: boolean | TipoServicoDefaultArgs<ExtArgs>
  }
  export type ItemServicoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ordemServico?: boolean | OrdemServicoDefaultArgs<ExtArgs>
    tipoServico?: boolean | TipoServicoDefaultArgs<ExtArgs>
  }
  export type ItemServicoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ordemServico?: boolean | OrdemServicoDefaultArgs<ExtArgs>
    tipoServico?: boolean | TipoServicoDefaultArgs<ExtArgs>
  }

  export type $ItemServicoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ItemServico"
    objects: {
      ordemServico: Prisma.$OrdemServicoPayload<ExtArgs>
      tipoServico: Prisma.$TipoServicoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      ordemServicoId: number
      tipoServicoId: number
      quantidade: number
      valorUnitario: number
      valorTotal: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["itemServico"]>
    composites: {}
  }

  type ItemServicoGetPayload<S extends boolean | null | undefined | ItemServicoDefaultArgs> = $Result.GetResult<Prisma.$ItemServicoPayload, S>

  type ItemServicoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ItemServicoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ItemServicoCountAggregateInputType | true
    }

  export interface ItemServicoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ItemServico'], meta: { name: 'ItemServico' } }
    /**
     * Find zero or one ItemServico that matches the filter.
     * @param {ItemServicoFindUniqueArgs} args - Arguments to find a ItemServico
     * @example
     * // Get one ItemServico
     * const itemServico = await prisma.itemServico.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ItemServicoFindUniqueArgs>(args: SelectSubset<T, ItemServicoFindUniqueArgs<ExtArgs>>): Prisma__ItemServicoClient<$Result.GetResult<Prisma.$ItemServicoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ItemServico that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ItemServicoFindUniqueOrThrowArgs} args - Arguments to find a ItemServico
     * @example
     * // Get one ItemServico
     * const itemServico = await prisma.itemServico.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ItemServicoFindUniqueOrThrowArgs>(args: SelectSubset<T, ItemServicoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ItemServicoClient<$Result.GetResult<Prisma.$ItemServicoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ItemServico that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemServicoFindFirstArgs} args - Arguments to find a ItemServico
     * @example
     * // Get one ItemServico
     * const itemServico = await prisma.itemServico.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ItemServicoFindFirstArgs>(args?: SelectSubset<T, ItemServicoFindFirstArgs<ExtArgs>>): Prisma__ItemServicoClient<$Result.GetResult<Prisma.$ItemServicoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ItemServico that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemServicoFindFirstOrThrowArgs} args - Arguments to find a ItemServico
     * @example
     * // Get one ItemServico
     * const itemServico = await prisma.itemServico.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ItemServicoFindFirstOrThrowArgs>(args?: SelectSubset<T, ItemServicoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ItemServicoClient<$Result.GetResult<Prisma.$ItemServicoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ItemServicos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemServicoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ItemServicos
     * const itemServicos = await prisma.itemServico.findMany()
     * 
     * // Get first 10 ItemServicos
     * const itemServicos = await prisma.itemServico.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const itemServicoWithIdOnly = await prisma.itemServico.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ItemServicoFindManyArgs>(args?: SelectSubset<T, ItemServicoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemServicoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ItemServico.
     * @param {ItemServicoCreateArgs} args - Arguments to create a ItemServico.
     * @example
     * // Create one ItemServico
     * const ItemServico = await prisma.itemServico.create({
     *   data: {
     *     // ... data to create a ItemServico
     *   }
     * })
     * 
     */
    create<T extends ItemServicoCreateArgs>(args: SelectSubset<T, ItemServicoCreateArgs<ExtArgs>>): Prisma__ItemServicoClient<$Result.GetResult<Prisma.$ItemServicoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ItemServicos.
     * @param {ItemServicoCreateManyArgs} args - Arguments to create many ItemServicos.
     * @example
     * // Create many ItemServicos
     * const itemServico = await prisma.itemServico.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ItemServicoCreateManyArgs>(args?: SelectSubset<T, ItemServicoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ItemServicos and returns the data saved in the database.
     * @param {ItemServicoCreateManyAndReturnArgs} args - Arguments to create many ItemServicos.
     * @example
     * // Create many ItemServicos
     * const itemServico = await prisma.itemServico.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ItemServicos and only return the `id`
     * const itemServicoWithIdOnly = await prisma.itemServico.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ItemServicoCreateManyAndReturnArgs>(args?: SelectSubset<T, ItemServicoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemServicoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ItemServico.
     * @param {ItemServicoDeleteArgs} args - Arguments to delete one ItemServico.
     * @example
     * // Delete one ItemServico
     * const ItemServico = await prisma.itemServico.delete({
     *   where: {
     *     // ... filter to delete one ItemServico
     *   }
     * })
     * 
     */
    delete<T extends ItemServicoDeleteArgs>(args: SelectSubset<T, ItemServicoDeleteArgs<ExtArgs>>): Prisma__ItemServicoClient<$Result.GetResult<Prisma.$ItemServicoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ItemServico.
     * @param {ItemServicoUpdateArgs} args - Arguments to update one ItemServico.
     * @example
     * // Update one ItemServico
     * const itemServico = await prisma.itemServico.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ItemServicoUpdateArgs>(args: SelectSubset<T, ItemServicoUpdateArgs<ExtArgs>>): Prisma__ItemServicoClient<$Result.GetResult<Prisma.$ItemServicoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ItemServicos.
     * @param {ItemServicoDeleteManyArgs} args - Arguments to filter ItemServicos to delete.
     * @example
     * // Delete a few ItemServicos
     * const { count } = await prisma.itemServico.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ItemServicoDeleteManyArgs>(args?: SelectSubset<T, ItemServicoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ItemServicos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemServicoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ItemServicos
     * const itemServico = await prisma.itemServico.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ItemServicoUpdateManyArgs>(args: SelectSubset<T, ItemServicoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ItemServicos and returns the data updated in the database.
     * @param {ItemServicoUpdateManyAndReturnArgs} args - Arguments to update many ItemServicos.
     * @example
     * // Update many ItemServicos
     * const itemServico = await prisma.itemServico.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ItemServicos and only return the `id`
     * const itemServicoWithIdOnly = await prisma.itemServico.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ItemServicoUpdateManyAndReturnArgs>(args: SelectSubset<T, ItemServicoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemServicoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ItemServico.
     * @param {ItemServicoUpsertArgs} args - Arguments to update or create a ItemServico.
     * @example
     * // Update or create a ItemServico
     * const itemServico = await prisma.itemServico.upsert({
     *   create: {
     *     // ... data to create a ItemServico
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ItemServico we want to update
     *   }
     * })
     */
    upsert<T extends ItemServicoUpsertArgs>(args: SelectSubset<T, ItemServicoUpsertArgs<ExtArgs>>): Prisma__ItemServicoClient<$Result.GetResult<Prisma.$ItemServicoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ItemServicos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemServicoCountArgs} args - Arguments to filter ItemServicos to count.
     * @example
     * // Count the number of ItemServicos
     * const count = await prisma.itemServico.count({
     *   where: {
     *     // ... the filter for the ItemServicos we want to count
     *   }
     * })
    **/
    count<T extends ItemServicoCountArgs>(
      args?: Subset<T, ItemServicoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ItemServicoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ItemServico.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemServicoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ItemServicoAggregateArgs>(args: Subset<T, ItemServicoAggregateArgs>): Prisma.PrismaPromise<GetItemServicoAggregateType<T>>

    /**
     * Group by ItemServico.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemServicoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ItemServicoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ItemServicoGroupByArgs['orderBy'] }
        : { orderBy?: ItemServicoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ItemServicoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItemServicoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ItemServico model
   */
  readonly fields: ItemServicoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ItemServico.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ItemServicoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ordemServico<T extends OrdemServicoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrdemServicoDefaultArgs<ExtArgs>>): Prisma__OrdemServicoClient<$Result.GetResult<Prisma.$OrdemServicoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tipoServico<T extends TipoServicoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TipoServicoDefaultArgs<ExtArgs>>): Prisma__TipoServicoClient<$Result.GetResult<Prisma.$TipoServicoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ItemServico model
   */
  interface ItemServicoFieldRefs {
    readonly id: FieldRef<"ItemServico", 'Int'>
    readonly ordemServicoId: FieldRef<"ItemServico", 'Int'>
    readonly tipoServicoId: FieldRef<"ItemServico", 'Int'>
    readonly quantidade: FieldRef<"ItemServico", 'Int'>
    readonly valorUnitario: FieldRef<"ItemServico", 'Float'>
    readonly valorTotal: FieldRef<"ItemServico", 'Float'>
    readonly createdAt: FieldRef<"ItemServico", 'DateTime'>
    readonly updatedAt: FieldRef<"ItemServico", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ItemServico findUnique
   */
  export type ItemServicoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemServico
     */
    select?: ItemServicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemServico
     */
    omit?: ItemServicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemServicoInclude<ExtArgs> | null
    /**
     * Filter, which ItemServico to fetch.
     */
    where: ItemServicoWhereUniqueInput
  }

  /**
   * ItemServico findUniqueOrThrow
   */
  export type ItemServicoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemServico
     */
    select?: ItemServicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemServico
     */
    omit?: ItemServicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemServicoInclude<ExtArgs> | null
    /**
     * Filter, which ItemServico to fetch.
     */
    where: ItemServicoWhereUniqueInput
  }

  /**
   * ItemServico findFirst
   */
  export type ItemServicoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemServico
     */
    select?: ItemServicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemServico
     */
    omit?: ItemServicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemServicoInclude<ExtArgs> | null
    /**
     * Filter, which ItemServico to fetch.
     */
    where?: ItemServicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemServicos to fetch.
     */
    orderBy?: ItemServicoOrderByWithRelationInput | ItemServicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ItemServicos.
     */
    cursor?: ItemServicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemServicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemServicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ItemServicos.
     */
    distinct?: ItemServicoScalarFieldEnum | ItemServicoScalarFieldEnum[]
  }

  /**
   * ItemServico findFirstOrThrow
   */
  export type ItemServicoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemServico
     */
    select?: ItemServicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemServico
     */
    omit?: ItemServicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemServicoInclude<ExtArgs> | null
    /**
     * Filter, which ItemServico to fetch.
     */
    where?: ItemServicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemServicos to fetch.
     */
    orderBy?: ItemServicoOrderByWithRelationInput | ItemServicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ItemServicos.
     */
    cursor?: ItemServicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemServicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemServicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ItemServicos.
     */
    distinct?: ItemServicoScalarFieldEnum | ItemServicoScalarFieldEnum[]
  }

  /**
   * ItemServico findMany
   */
  export type ItemServicoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemServico
     */
    select?: ItemServicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemServico
     */
    omit?: ItemServicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemServicoInclude<ExtArgs> | null
    /**
     * Filter, which ItemServicos to fetch.
     */
    where?: ItemServicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemServicos to fetch.
     */
    orderBy?: ItemServicoOrderByWithRelationInput | ItemServicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ItemServicos.
     */
    cursor?: ItemServicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemServicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemServicos.
     */
    skip?: number
    distinct?: ItemServicoScalarFieldEnum | ItemServicoScalarFieldEnum[]
  }

  /**
   * ItemServico create
   */
  export type ItemServicoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemServico
     */
    select?: ItemServicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemServico
     */
    omit?: ItemServicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemServicoInclude<ExtArgs> | null
    /**
     * The data needed to create a ItemServico.
     */
    data: XOR<ItemServicoCreateInput, ItemServicoUncheckedCreateInput>
  }

  /**
   * ItemServico createMany
   */
  export type ItemServicoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ItemServicos.
     */
    data: ItemServicoCreateManyInput | ItemServicoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ItemServico createManyAndReturn
   */
  export type ItemServicoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemServico
     */
    select?: ItemServicoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ItemServico
     */
    omit?: ItemServicoOmit<ExtArgs> | null
    /**
     * The data used to create many ItemServicos.
     */
    data: ItemServicoCreateManyInput | ItemServicoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemServicoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ItemServico update
   */
  export type ItemServicoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemServico
     */
    select?: ItemServicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemServico
     */
    omit?: ItemServicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemServicoInclude<ExtArgs> | null
    /**
     * The data needed to update a ItemServico.
     */
    data: XOR<ItemServicoUpdateInput, ItemServicoUncheckedUpdateInput>
    /**
     * Choose, which ItemServico to update.
     */
    where: ItemServicoWhereUniqueInput
  }

  /**
   * ItemServico updateMany
   */
  export type ItemServicoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ItemServicos.
     */
    data: XOR<ItemServicoUpdateManyMutationInput, ItemServicoUncheckedUpdateManyInput>
    /**
     * Filter which ItemServicos to update
     */
    where?: ItemServicoWhereInput
    /**
     * Limit how many ItemServicos to update.
     */
    limit?: number
  }

  /**
   * ItemServico updateManyAndReturn
   */
  export type ItemServicoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemServico
     */
    select?: ItemServicoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ItemServico
     */
    omit?: ItemServicoOmit<ExtArgs> | null
    /**
     * The data used to update ItemServicos.
     */
    data: XOR<ItemServicoUpdateManyMutationInput, ItemServicoUncheckedUpdateManyInput>
    /**
     * Filter which ItemServicos to update
     */
    where?: ItemServicoWhereInput
    /**
     * Limit how many ItemServicos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemServicoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ItemServico upsert
   */
  export type ItemServicoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemServico
     */
    select?: ItemServicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemServico
     */
    omit?: ItemServicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemServicoInclude<ExtArgs> | null
    /**
     * The filter to search for the ItemServico to update in case it exists.
     */
    where: ItemServicoWhereUniqueInput
    /**
     * In case the ItemServico found by the `where` argument doesn't exist, create a new ItemServico with this data.
     */
    create: XOR<ItemServicoCreateInput, ItemServicoUncheckedCreateInput>
    /**
     * In case the ItemServico was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ItemServicoUpdateInput, ItemServicoUncheckedUpdateInput>
  }

  /**
   * ItemServico delete
   */
  export type ItemServicoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemServico
     */
    select?: ItemServicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemServico
     */
    omit?: ItemServicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemServicoInclude<ExtArgs> | null
    /**
     * Filter which ItemServico to delete.
     */
    where: ItemServicoWhereUniqueInput
  }

  /**
   * ItemServico deleteMany
   */
  export type ItemServicoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ItemServicos to delete
     */
    where?: ItemServicoWhereInput
    /**
     * Limit how many ItemServicos to delete.
     */
    limit?: number
  }

  /**
   * ItemServico without action
   */
  export type ItemServicoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemServico
     */
    select?: ItemServicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemServico
     */
    omit?: ItemServicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemServicoInclude<ExtArgs> | null
  }


  /**
   * Model ItemPeca
   */

  export type AggregateItemPeca = {
    _count: ItemPecaCountAggregateOutputType | null
    _avg: ItemPecaAvgAggregateOutputType | null
    _sum: ItemPecaSumAggregateOutputType | null
    _min: ItemPecaMinAggregateOutputType | null
    _max: ItemPecaMaxAggregateOutputType | null
  }

  export type ItemPecaAvgAggregateOutputType = {
    id: number | null
    ordemServicoId: number | null
    quantidade: number | null
    valorUnitario: number | null
    valorTotal: number | null
  }

  export type ItemPecaSumAggregateOutputType = {
    id: number | null
    ordemServicoId: number | null
    quantidade: number | null
    valorUnitario: number | null
    valorTotal: number | null
  }

  export type ItemPecaMinAggregateOutputType = {
    id: number | null
    ordemServicoId: number | null
    nome: string | null
    quantidade: number | null
    valorUnitario: number | null
    valorTotal: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ItemPecaMaxAggregateOutputType = {
    id: number | null
    ordemServicoId: number | null
    nome: string | null
    quantidade: number | null
    valorUnitario: number | null
    valorTotal: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ItemPecaCountAggregateOutputType = {
    id: number
    ordemServicoId: number
    nome: number
    quantidade: number
    valorUnitario: number
    valorTotal: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ItemPecaAvgAggregateInputType = {
    id?: true
    ordemServicoId?: true
    quantidade?: true
    valorUnitario?: true
    valorTotal?: true
  }

  export type ItemPecaSumAggregateInputType = {
    id?: true
    ordemServicoId?: true
    quantidade?: true
    valorUnitario?: true
    valorTotal?: true
  }

  export type ItemPecaMinAggregateInputType = {
    id?: true
    ordemServicoId?: true
    nome?: true
    quantidade?: true
    valorUnitario?: true
    valorTotal?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ItemPecaMaxAggregateInputType = {
    id?: true
    ordemServicoId?: true
    nome?: true
    quantidade?: true
    valorUnitario?: true
    valorTotal?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ItemPecaCountAggregateInputType = {
    id?: true
    ordemServicoId?: true
    nome?: true
    quantidade?: true
    valorUnitario?: true
    valorTotal?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ItemPecaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ItemPeca to aggregate.
     */
    where?: ItemPecaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemPecas to fetch.
     */
    orderBy?: ItemPecaOrderByWithRelationInput | ItemPecaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ItemPecaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemPecas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemPecas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ItemPecas
    **/
    _count?: true | ItemPecaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ItemPecaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ItemPecaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ItemPecaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ItemPecaMaxAggregateInputType
  }

  export type GetItemPecaAggregateType<T extends ItemPecaAggregateArgs> = {
        [P in keyof T & keyof AggregateItemPeca]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItemPeca[P]>
      : GetScalarType<T[P], AggregateItemPeca[P]>
  }




  export type ItemPecaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemPecaWhereInput
    orderBy?: ItemPecaOrderByWithAggregationInput | ItemPecaOrderByWithAggregationInput[]
    by: ItemPecaScalarFieldEnum[] | ItemPecaScalarFieldEnum
    having?: ItemPecaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ItemPecaCountAggregateInputType | true
    _avg?: ItemPecaAvgAggregateInputType
    _sum?: ItemPecaSumAggregateInputType
    _min?: ItemPecaMinAggregateInputType
    _max?: ItemPecaMaxAggregateInputType
  }

  export type ItemPecaGroupByOutputType = {
    id: number
    ordemServicoId: number
    nome: string
    quantidade: number
    valorUnitario: number
    valorTotal: number
    createdAt: Date
    updatedAt: Date
    _count: ItemPecaCountAggregateOutputType | null
    _avg: ItemPecaAvgAggregateOutputType | null
    _sum: ItemPecaSumAggregateOutputType | null
    _min: ItemPecaMinAggregateOutputType | null
    _max: ItemPecaMaxAggregateOutputType | null
  }

  type GetItemPecaGroupByPayload<T extends ItemPecaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ItemPecaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ItemPecaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ItemPecaGroupByOutputType[P]>
            : GetScalarType<T[P], ItemPecaGroupByOutputType[P]>
        }
      >
    >


  export type ItemPecaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ordemServicoId?: boolean
    nome?: boolean
    quantidade?: boolean
    valorUnitario?: boolean
    valorTotal?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ordemServico?: boolean | OrdemServicoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itemPeca"]>

  export type ItemPecaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ordemServicoId?: boolean
    nome?: boolean
    quantidade?: boolean
    valorUnitario?: boolean
    valorTotal?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ordemServico?: boolean | OrdemServicoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itemPeca"]>

  export type ItemPecaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ordemServicoId?: boolean
    nome?: boolean
    quantidade?: boolean
    valorUnitario?: boolean
    valorTotal?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ordemServico?: boolean | OrdemServicoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itemPeca"]>

  export type ItemPecaSelectScalar = {
    id?: boolean
    ordemServicoId?: boolean
    nome?: boolean
    quantidade?: boolean
    valorUnitario?: boolean
    valorTotal?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ItemPecaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ordemServicoId" | "nome" | "quantidade" | "valorUnitario" | "valorTotal" | "createdAt" | "updatedAt", ExtArgs["result"]["itemPeca"]>
  export type ItemPecaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ordemServico?: boolean | OrdemServicoDefaultArgs<ExtArgs>
  }
  export type ItemPecaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ordemServico?: boolean | OrdemServicoDefaultArgs<ExtArgs>
  }
  export type ItemPecaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ordemServico?: boolean | OrdemServicoDefaultArgs<ExtArgs>
  }

  export type $ItemPecaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ItemPeca"
    objects: {
      ordemServico: Prisma.$OrdemServicoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      ordemServicoId: number
      nome: string
      quantidade: number
      valorUnitario: number
      valorTotal: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["itemPeca"]>
    composites: {}
  }

  type ItemPecaGetPayload<S extends boolean | null | undefined | ItemPecaDefaultArgs> = $Result.GetResult<Prisma.$ItemPecaPayload, S>

  type ItemPecaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ItemPecaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ItemPecaCountAggregateInputType | true
    }

  export interface ItemPecaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ItemPeca'], meta: { name: 'ItemPeca' } }
    /**
     * Find zero or one ItemPeca that matches the filter.
     * @param {ItemPecaFindUniqueArgs} args - Arguments to find a ItemPeca
     * @example
     * // Get one ItemPeca
     * const itemPeca = await prisma.itemPeca.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ItemPecaFindUniqueArgs>(args: SelectSubset<T, ItemPecaFindUniqueArgs<ExtArgs>>): Prisma__ItemPecaClient<$Result.GetResult<Prisma.$ItemPecaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ItemPeca that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ItemPecaFindUniqueOrThrowArgs} args - Arguments to find a ItemPeca
     * @example
     * // Get one ItemPeca
     * const itemPeca = await prisma.itemPeca.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ItemPecaFindUniqueOrThrowArgs>(args: SelectSubset<T, ItemPecaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ItemPecaClient<$Result.GetResult<Prisma.$ItemPecaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ItemPeca that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemPecaFindFirstArgs} args - Arguments to find a ItemPeca
     * @example
     * // Get one ItemPeca
     * const itemPeca = await prisma.itemPeca.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ItemPecaFindFirstArgs>(args?: SelectSubset<T, ItemPecaFindFirstArgs<ExtArgs>>): Prisma__ItemPecaClient<$Result.GetResult<Prisma.$ItemPecaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ItemPeca that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemPecaFindFirstOrThrowArgs} args - Arguments to find a ItemPeca
     * @example
     * // Get one ItemPeca
     * const itemPeca = await prisma.itemPeca.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ItemPecaFindFirstOrThrowArgs>(args?: SelectSubset<T, ItemPecaFindFirstOrThrowArgs<ExtArgs>>): Prisma__ItemPecaClient<$Result.GetResult<Prisma.$ItemPecaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ItemPecas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemPecaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ItemPecas
     * const itemPecas = await prisma.itemPeca.findMany()
     * 
     * // Get first 10 ItemPecas
     * const itemPecas = await prisma.itemPeca.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const itemPecaWithIdOnly = await prisma.itemPeca.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ItemPecaFindManyArgs>(args?: SelectSubset<T, ItemPecaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPecaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ItemPeca.
     * @param {ItemPecaCreateArgs} args - Arguments to create a ItemPeca.
     * @example
     * // Create one ItemPeca
     * const ItemPeca = await prisma.itemPeca.create({
     *   data: {
     *     // ... data to create a ItemPeca
     *   }
     * })
     * 
     */
    create<T extends ItemPecaCreateArgs>(args: SelectSubset<T, ItemPecaCreateArgs<ExtArgs>>): Prisma__ItemPecaClient<$Result.GetResult<Prisma.$ItemPecaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ItemPecas.
     * @param {ItemPecaCreateManyArgs} args - Arguments to create many ItemPecas.
     * @example
     * // Create many ItemPecas
     * const itemPeca = await prisma.itemPeca.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ItemPecaCreateManyArgs>(args?: SelectSubset<T, ItemPecaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ItemPecas and returns the data saved in the database.
     * @param {ItemPecaCreateManyAndReturnArgs} args - Arguments to create many ItemPecas.
     * @example
     * // Create many ItemPecas
     * const itemPeca = await prisma.itemPeca.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ItemPecas and only return the `id`
     * const itemPecaWithIdOnly = await prisma.itemPeca.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ItemPecaCreateManyAndReturnArgs>(args?: SelectSubset<T, ItemPecaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPecaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ItemPeca.
     * @param {ItemPecaDeleteArgs} args - Arguments to delete one ItemPeca.
     * @example
     * // Delete one ItemPeca
     * const ItemPeca = await prisma.itemPeca.delete({
     *   where: {
     *     // ... filter to delete one ItemPeca
     *   }
     * })
     * 
     */
    delete<T extends ItemPecaDeleteArgs>(args: SelectSubset<T, ItemPecaDeleteArgs<ExtArgs>>): Prisma__ItemPecaClient<$Result.GetResult<Prisma.$ItemPecaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ItemPeca.
     * @param {ItemPecaUpdateArgs} args - Arguments to update one ItemPeca.
     * @example
     * // Update one ItemPeca
     * const itemPeca = await prisma.itemPeca.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ItemPecaUpdateArgs>(args: SelectSubset<T, ItemPecaUpdateArgs<ExtArgs>>): Prisma__ItemPecaClient<$Result.GetResult<Prisma.$ItemPecaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ItemPecas.
     * @param {ItemPecaDeleteManyArgs} args - Arguments to filter ItemPecas to delete.
     * @example
     * // Delete a few ItemPecas
     * const { count } = await prisma.itemPeca.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ItemPecaDeleteManyArgs>(args?: SelectSubset<T, ItemPecaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ItemPecas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemPecaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ItemPecas
     * const itemPeca = await prisma.itemPeca.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ItemPecaUpdateManyArgs>(args: SelectSubset<T, ItemPecaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ItemPecas and returns the data updated in the database.
     * @param {ItemPecaUpdateManyAndReturnArgs} args - Arguments to update many ItemPecas.
     * @example
     * // Update many ItemPecas
     * const itemPeca = await prisma.itemPeca.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ItemPecas and only return the `id`
     * const itemPecaWithIdOnly = await prisma.itemPeca.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ItemPecaUpdateManyAndReturnArgs>(args: SelectSubset<T, ItemPecaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPecaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ItemPeca.
     * @param {ItemPecaUpsertArgs} args - Arguments to update or create a ItemPeca.
     * @example
     * // Update or create a ItemPeca
     * const itemPeca = await prisma.itemPeca.upsert({
     *   create: {
     *     // ... data to create a ItemPeca
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ItemPeca we want to update
     *   }
     * })
     */
    upsert<T extends ItemPecaUpsertArgs>(args: SelectSubset<T, ItemPecaUpsertArgs<ExtArgs>>): Prisma__ItemPecaClient<$Result.GetResult<Prisma.$ItemPecaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ItemPecas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemPecaCountArgs} args - Arguments to filter ItemPecas to count.
     * @example
     * // Count the number of ItemPecas
     * const count = await prisma.itemPeca.count({
     *   where: {
     *     // ... the filter for the ItemPecas we want to count
     *   }
     * })
    **/
    count<T extends ItemPecaCountArgs>(
      args?: Subset<T, ItemPecaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ItemPecaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ItemPeca.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemPecaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ItemPecaAggregateArgs>(args: Subset<T, ItemPecaAggregateArgs>): Prisma.PrismaPromise<GetItemPecaAggregateType<T>>

    /**
     * Group by ItemPeca.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemPecaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ItemPecaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ItemPecaGroupByArgs['orderBy'] }
        : { orderBy?: ItemPecaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ItemPecaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItemPecaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ItemPeca model
   */
  readonly fields: ItemPecaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ItemPeca.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ItemPecaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ordemServico<T extends OrdemServicoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrdemServicoDefaultArgs<ExtArgs>>): Prisma__OrdemServicoClient<$Result.GetResult<Prisma.$OrdemServicoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ItemPeca model
   */
  interface ItemPecaFieldRefs {
    readonly id: FieldRef<"ItemPeca", 'Int'>
    readonly ordemServicoId: FieldRef<"ItemPeca", 'Int'>
    readonly nome: FieldRef<"ItemPeca", 'String'>
    readonly quantidade: FieldRef<"ItemPeca", 'Int'>
    readonly valorUnitario: FieldRef<"ItemPeca", 'Float'>
    readonly valorTotal: FieldRef<"ItemPeca", 'Float'>
    readonly createdAt: FieldRef<"ItemPeca", 'DateTime'>
    readonly updatedAt: FieldRef<"ItemPeca", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ItemPeca findUnique
   */
  export type ItemPecaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPeca
     */
    select?: ItemPecaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemPeca
     */
    omit?: ItemPecaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPecaInclude<ExtArgs> | null
    /**
     * Filter, which ItemPeca to fetch.
     */
    where: ItemPecaWhereUniqueInput
  }

  /**
   * ItemPeca findUniqueOrThrow
   */
  export type ItemPecaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPeca
     */
    select?: ItemPecaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemPeca
     */
    omit?: ItemPecaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPecaInclude<ExtArgs> | null
    /**
     * Filter, which ItemPeca to fetch.
     */
    where: ItemPecaWhereUniqueInput
  }

  /**
   * ItemPeca findFirst
   */
  export type ItemPecaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPeca
     */
    select?: ItemPecaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemPeca
     */
    omit?: ItemPecaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPecaInclude<ExtArgs> | null
    /**
     * Filter, which ItemPeca to fetch.
     */
    where?: ItemPecaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemPecas to fetch.
     */
    orderBy?: ItemPecaOrderByWithRelationInput | ItemPecaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ItemPecas.
     */
    cursor?: ItemPecaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemPecas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemPecas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ItemPecas.
     */
    distinct?: ItemPecaScalarFieldEnum | ItemPecaScalarFieldEnum[]
  }

  /**
   * ItemPeca findFirstOrThrow
   */
  export type ItemPecaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPeca
     */
    select?: ItemPecaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemPeca
     */
    omit?: ItemPecaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPecaInclude<ExtArgs> | null
    /**
     * Filter, which ItemPeca to fetch.
     */
    where?: ItemPecaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemPecas to fetch.
     */
    orderBy?: ItemPecaOrderByWithRelationInput | ItemPecaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ItemPecas.
     */
    cursor?: ItemPecaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemPecas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemPecas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ItemPecas.
     */
    distinct?: ItemPecaScalarFieldEnum | ItemPecaScalarFieldEnum[]
  }

  /**
   * ItemPeca findMany
   */
  export type ItemPecaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPeca
     */
    select?: ItemPecaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemPeca
     */
    omit?: ItemPecaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPecaInclude<ExtArgs> | null
    /**
     * Filter, which ItemPecas to fetch.
     */
    where?: ItemPecaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemPecas to fetch.
     */
    orderBy?: ItemPecaOrderByWithRelationInput | ItemPecaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ItemPecas.
     */
    cursor?: ItemPecaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemPecas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemPecas.
     */
    skip?: number
    distinct?: ItemPecaScalarFieldEnum | ItemPecaScalarFieldEnum[]
  }

  /**
   * ItemPeca create
   */
  export type ItemPecaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPeca
     */
    select?: ItemPecaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemPeca
     */
    omit?: ItemPecaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPecaInclude<ExtArgs> | null
    /**
     * The data needed to create a ItemPeca.
     */
    data: XOR<ItemPecaCreateInput, ItemPecaUncheckedCreateInput>
  }

  /**
   * ItemPeca createMany
   */
  export type ItemPecaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ItemPecas.
     */
    data: ItemPecaCreateManyInput | ItemPecaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ItemPeca createManyAndReturn
   */
  export type ItemPecaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPeca
     */
    select?: ItemPecaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ItemPeca
     */
    omit?: ItemPecaOmit<ExtArgs> | null
    /**
     * The data used to create many ItemPecas.
     */
    data: ItemPecaCreateManyInput | ItemPecaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPecaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ItemPeca update
   */
  export type ItemPecaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPeca
     */
    select?: ItemPecaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemPeca
     */
    omit?: ItemPecaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPecaInclude<ExtArgs> | null
    /**
     * The data needed to update a ItemPeca.
     */
    data: XOR<ItemPecaUpdateInput, ItemPecaUncheckedUpdateInput>
    /**
     * Choose, which ItemPeca to update.
     */
    where: ItemPecaWhereUniqueInput
  }

  /**
   * ItemPeca updateMany
   */
  export type ItemPecaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ItemPecas.
     */
    data: XOR<ItemPecaUpdateManyMutationInput, ItemPecaUncheckedUpdateManyInput>
    /**
     * Filter which ItemPecas to update
     */
    where?: ItemPecaWhereInput
    /**
     * Limit how many ItemPecas to update.
     */
    limit?: number
  }

  /**
   * ItemPeca updateManyAndReturn
   */
  export type ItemPecaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPeca
     */
    select?: ItemPecaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ItemPeca
     */
    omit?: ItemPecaOmit<ExtArgs> | null
    /**
     * The data used to update ItemPecas.
     */
    data: XOR<ItemPecaUpdateManyMutationInput, ItemPecaUncheckedUpdateManyInput>
    /**
     * Filter which ItemPecas to update
     */
    where?: ItemPecaWhereInput
    /**
     * Limit how many ItemPecas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPecaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ItemPeca upsert
   */
  export type ItemPecaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPeca
     */
    select?: ItemPecaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemPeca
     */
    omit?: ItemPecaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPecaInclude<ExtArgs> | null
    /**
     * The filter to search for the ItemPeca to update in case it exists.
     */
    where: ItemPecaWhereUniqueInput
    /**
     * In case the ItemPeca found by the `where` argument doesn't exist, create a new ItemPeca with this data.
     */
    create: XOR<ItemPecaCreateInput, ItemPecaUncheckedCreateInput>
    /**
     * In case the ItemPeca was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ItemPecaUpdateInput, ItemPecaUncheckedUpdateInput>
  }

  /**
   * ItemPeca delete
   */
  export type ItemPecaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPeca
     */
    select?: ItemPecaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemPeca
     */
    omit?: ItemPecaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPecaInclude<ExtArgs> | null
    /**
     * Filter which ItemPeca to delete.
     */
    where: ItemPecaWhereUniqueInput
  }

  /**
   * ItemPeca deleteMany
   */
  export type ItemPecaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ItemPecas to delete
     */
    where?: ItemPecaWhereInput
    /**
     * Limit how many ItemPecas to delete.
     */
    limit?: number
  }

  /**
   * ItemPeca without action
   */
  export type ItemPecaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPeca
     */
    select?: ItemPecaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemPeca
     */
    omit?: ItemPecaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPecaInclude<ExtArgs> | null
  }


  /**
   * Model Peca
   */

  export type AggregatePeca = {
    _count: PecaCountAggregateOutputType | null
    _avg: PecaAvgAggregateOutputType | null
    _sum: PecaSumAggregateOutputType | null
    _min: PecaMinAggregateOutputType | null
    _max: PecaMaxAggregateOutputType | null
  }

  export type PecaAvgAggregateOutputType = {
    id: number | null
    valorUnitario: number | null
    quantidadeEstoque: number | null
    quantidadeMinima: number | null
  }

  export type PecaSumAggregateOutputType = {
    id: number | null
    valorUnitario: number | null
    quantidadeEstoque: number | null
    quantidadeMinima: number | null
  }

  export type PecaMinAggregateOutputType = {
    id: number | null
    nome: string | null
    descricao: string | null
    valorUnitario: number | null
    quantidadeEstoque: number | null
    quantidadeMinima: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PecaMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    descricao: string | null
    valorUnitario: number | null
    quantidadeEstoque: number | null
    quantidadeMinima: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PecaCountAggregateOutputType = {
    id: number
    nome: number
    descricao: number
    valorUnitario: number
    quantidadeEstoque: number
    quantidadeMinima: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PecaAvgAggregateInputType = {
    id?: true
    valorUnitario?: true
    quantidadeEstoque?: true
    quantidadeMinima?: true
  }

  export type PecaSumAggregateInputType = {
    id?: true
    valorUnitario?: true
    quantidadeEstoque?: true
    quantidadeMinima?: true
  }

  export type PecaMinAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    valorUnitario?: true
    quantidadeEstoque?: true
    quantidadeMinima?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PecaMaxAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    valorUnitario?: true
    quantidadeEstoque?: true
    quantidadeMinima?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PecaCountAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    valorUnitario?: true
    quantidadeEstoque?: true
    quantidadeMinima?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PecaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Peca to aggregate.
     */
    where?: PecaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pecas to fetch.
     */
    orderBy?: PecaOrderByWithRelationInput | PecaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PecaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pecas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pecas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pecas
    **/
    _count?: true | PecaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PecaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PecaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PecaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PecaMaxAggregateInputType
  }

  export type GetPecaAggregateType<T extends PecaAggregateArgs> = {
        [P in keyof T & keyof AggregatePeca]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePeca[P]>
      : GetScalarType<T[P], AggregatePeca[P]>
  }




  export type PecaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PecaWhereInput
    orderBy?: PecaOrderByWithAggregationInput | PecaOrderByWithAggregationInput[]
    by: PecaScalarFieldEnum[] | PecaScalarFieldEnum
    having?: PecaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PecaCountAggregateInputType | true
    _avg?: PecaAvgAggregateInputType
    _sum?: PecaSumAggregateInputType
    _min?: PecaMinAggregateInputType
    _max?: PecaMaxAggregateInputType
  }

  export type PecaGroupByOutputType = {
    id: number
    nome: string
    descricao: string | null
    valorUnitario: number
    quantidadeEstoque: number
    quantidadeMinima: number
    createdAt: Date
    updatedAt: Date
    _count: PecaCountAggregateOutputType | null
    _avg: PecaAvgAggregateOutputType | null
    _sum: PecaSumAggregateOutputType | null
    _min: PecaMinAggregateOutputType | null
    _max: PecaMaxAggregateOutputType | null
  }

  type GetPecaGroupByPayload<T extends PecaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PecaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PecaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PecaGroupByOutputType[P]>
            : GetScalarType<T[P], PecaGroupByOutputType[P]>
        }
      >
    >


  export type PecaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    valorUnitario?: boolean
    quantidadeEstoque?: boolean
    quantidadeMinima?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["peca"]>

  export type PecaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    valorUnitario?: boolean
    quantidadeEstoque?: boolean
    quantidadeMinima?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["peca"]>

  export type PecaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    valorUnitario?: boolean
    quantidadeEstoque?: boolean
    quantidadeMinima?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["peca"]>

  export type PecaSelectScalar = {
    id?: boolean
    nome?: boolean
    descricao?: boolean
    valorUnitario?: boolean
    quantidadeEstoque?: boolean
    quantidadeMinima?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PecaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "descricao" | "valorUnitario" | "quantidadeEstoque" | "quantidadeMinima" | "createdAt" | "updatedAt", ExtArgs["result"]["peca"]>

  export type $PecaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Peca"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      descricao: string | null
      valorUnitario: number
      quantidadeEstoque: number
      quantidadeMinima: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["peca"]>
    composites: {}
  }

  type PecaGetPayload<S extends boolean | null | undefined | PecaDefaultArgs> = $Result.GetResult<Prisma.$PecaPayload, S>

  type PecaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PecaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PecaCountAggregateInputType | true
    }

  export interface PecaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Peca'], meta: { name: 'Peca' } }
    /**
     * Find zero or one Peca that matches the filter.
     * @param {PecaFindUniqueArgs} args - Arguments to find a Peca
     * @example
     * // Get one Peca
     * const peca = await prisma.peca.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PecaFindUniqueArgs>(args: SelectSubset<T, PecaFindUniqueArgs<ExtArgs>>): Prisma__PecaClient<$Result.GetResult<Prisma.$PecaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Peca that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PecaFindUniqueOrThrowArgs} args - Arguments to find a Peca
     * @example
     * // Get one Peca
     * const peca = await prisma.peca.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PecaFindUniqueOrThrowArgs>(args: SelectSubset<T, PecaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PecaClient<$Result.GetResult<Prisma.$PecaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Peca that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PecaFindFirstArgs} args - Arguments to find a Peca
     * @example
     * // Get one Peca
     * const peca = await prisma.peca.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PecaFindFirstArgs>(args?: SelectSubset<T, PecaFindFirstArgs<ExtArgs>>): Prisma__PecaClient<$Result.GetResult<Prisma.$PecaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Peca that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PecaFindFirstOrThrowArgs} args - Arguments to find a Peca
     * @example
     * // Get one Peca
     * const peca = await prisma.peca.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PecaFindFirstOrThrowArgs>(args?: SelectSubset<T, PecaFindFirstOrThrowArgs<ExtArgs>>): Prisma__PecaClient<$Result.GetResult<Prisma.$PecaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pecas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PecaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pecas
     * const pecas = await prisma.peca.findMany()
     * 
     * // Get first 10 Pecas
     * const pecas = await prisma.peca.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pecaWithIdOnly = await prisma.peca.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PecaFindManyArgs>(args?: SelectSubset<T, PecaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PecaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Peca.
     * @param {PecaCreateArgs} args - Arguments to create a Peca.
     * @example
     * // Create one Peca
     * const Peca = await prisma.peca.create({
     *   data: {
     *     // ... data to create a Peca
     *   }
     * })
     * 
     */
    create<T extends PecaCreateArgs>(args: SelectSubset<T, PecaCreateArgs<ExtArgs>>): Prisma__PecaClient<$Result.GetResult<Prisma.$PecaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pecas.
     * @param {PecaCreateManyArgs} args - Arguments to create many Pecas.
     * @example
     * // Create many Pecas
     * const peca = await prisma.peca.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PecaCreateManyArgs>(args?: SelectSubset<T, PecaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pecas and returns the data saved in the database.
     * @param {PecaCreateManyAndReturnArgs} args - Arguments to create many Pecas.
     * @example
     * // Create many Pecas
     * const peca = await prisma.peca.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pecas and only return the `id`
     * const pecaWithIdOnly = await prisma.peca.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PecaCreateManyAndReturnArgs>(args?: SelectSubset<T, PecaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PecaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Peca.
     * @param {PecaDeleteArgs} args - Arguments to delete one Peca.
     * @example
     * // Delete one Peca
     * const Peca = await prisma.peca.delete({
     *   where: {
     *     // ... filter to delete one Peca
     *   }
     * })
     * 
     */
    delete<T extends PecaDeleteArgs>(args: SelectSubset<T, PecaDeleteArgs<ExtArgs>>): Prisma__PecaClient<$Result.GetResult<Prisma.$PecaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Peca.
     * @param {PecaUpdateArgs} args - Arguments to update one Peca.
     * @example
     * // Update one Peca
     * const peca = await prisma.peca.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PecaUpdateArgs>(args: SelectSubset<T, PecaUpdateArgs<ExtArgs>>): Prisma__PecaClient<$Result.GetResult<Prisma.$PecaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pecas.
     * @param {PecaDeleteManyArgs} args - Arguments to filter Pecas to delete.
     * @example
     * // Delete a few Pecas
     * const { count } = await prisma.peca.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PecaDeleteManyArgs>(args?: SelectSubset<T, PecaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pecas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PecaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pecas
     * const peca = await prisma.peca.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PecaUpdateManyArgs>(args: SelectSubset<T, PecaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pecas and returns the data updated in the database.
     * @param {PecaUpdateManyAndReturnArgs} args - Arguments to update many Pecas.
     * @example
     * // Update many Pecas
     * const peca = await prisma.peca.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pecas and only return the `id`
     * const pecaWithIdOnly = await prisma.peca.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PecaUpdateManyAndReturnArgs>(args: SelectSubset<T, PecaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PecaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Peca.
     * @param {PecaUpsertArgs} args - Arguments to update or create a Peca.
     * @example
     * // Update or create a Peca
     * const peca = await prisma.peca.upsert({
     *   create: {
     *     // ... data to create a Peca
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Peca we want to update
     *   }
     * })
     */
    upsert<T extends PecaUpsertArgs>(args: SelectSubset<T, PecaUpsertArgs<ExtArgs>>): Prisma__PecaClient<$Result.GetResult<Prisma.$PecaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pecas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PecaCountArgs} args - Arguments to filter Pecas to count.
     * @example
     * // Count the number of Pecas
     * const count = await prisma.peca.count({
     *   where: {
     *     // ... the filter for the Pecas we want to count
     *   }
     * })
    **/
    count<T extends PecaCountArgs>(
      args?: Subset<T, PecaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PecaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Peca.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PecaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PecaAggregateArgs>(args: Subset<T, PecaAggregateArgs>): Prisma.PrismaPromise<GetPecaAggregateType<T>>

    /**
     * Group by Peca.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PecaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PecaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PecaGroupByArgs['orderBy'] }
        : { orderBy?: PecaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PecaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPecaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Peca model
   */
  readonly fields: PecaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Peca.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PecaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Peca model
   */
  interface PecaFieldRefs {
    readonly id: FieldRef<"Peca", 'Int'>
    readonly nome: FieldRef<"Peca", 'String'>
    readonly descricao: FieldRef<"Peca", 'String'>
    readonly valorUnitario: FieldRef<"Peca", 'Float'>
    readonly quantidadeEstoque: FieldRef<"Peca", 'Int'>
    readonly quantidadeMinima: FieldRef<"Peca", 'Int'>
    readonly createdAt: FieldRef<"Peca", 'DateTime'>
    readonly updatedAt: FieldRef<"Peca", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Peca findUnique
   */
  export type PecaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peca
     */
    select?: PecaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Peca
     */
    omit?: PecaOmit<ExtArgs> | null
    /**
     * Filter, which Peca to fetch.
     */
    where: PecaWhereUniqueInput
  }

  /**
   * Peca findUniqueOrThrow
   */
  export type PecaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peca
     */
    select?: PecaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Peca
     */
    omit?: PecaOmit<ExtArgs> | null
    /**
     * Filter, which Peca to fetch.
     */
    where: PecaWhereUniqueInput
  }

  /**
   * Peca findFirst
   */
  export type PecaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peca
     */
    select?: PecaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Peca
     */
    omit?: PecaOmit<ExtArgs> | null
    /**
     * Filter, which Peca to fetch.
     */
    where?: PecaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pecas to fetch.
     */
    orderBy?: PecaOrderByWithRelationInput | PecaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pecas.
     */
    cursor?: PecaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pecas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pecas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pecas.
     */
    distinct?: PecaScalarFieldEnum | PecaScalarFieldEnum[]
  }

  /**
   * Peca findFirstOrThrow
   */
  export type PecaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peca
     */
    select?: PecaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Peca
     */
    omit?: PecaOmit<ExtArgs> | null
    /**
     * Filter, which Peca to fetch.
     */
    where?: PecaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pecas to fetch.
     */
    orderBy?: PecaOrderByWithRelationInput | PecaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pecas.
     */
    cursor?: PecaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pecas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pecas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pecas.
     */
    distinct?: PecaScalarFieldEnum | PecaScalarFieldEnum[]
  }

  /**
   * Peca findMany
   */
  export type PecaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peca
     */
    select?: PecaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Peca
     */
    omit?: PecaOmit<ExtArgs> | null
    /**
     * Filter, which Pecas to fetch.
     */
    where?: PecaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pecas to fetch.
     */
    orderBy?: PecaOrderByWithRelationInput | PecaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pecas.
     */
    cursor?: PecaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pecas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pecas.
     */
    skip?: number
    distinct?: PecaScalarFieldEnum | PecaScalarFieldEnum[]
  }

  /**
   * Peca create
   */
  export type PecaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peca
     */
    select?: PecaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Peca
     */
    omit?: PecaOmit<ExtArgs> | null
    /**
     * The data needed to create a Peca.
     */
    data: XOR<PecaCreateInput, PecaUncheckedCreateInput>
  }

  /**
   * Peca createMany
   */
  export type PecaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pecas.
     */
    data: PecaCreateManyInput | PecaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Peca createManyAndReturn
   */
  export type PecaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peca
     */
    select?: PecaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Peca
     */
    omit?: PecaOmit<ExtArgs> | null
    /**
     * The data used to create many Pecas.
     */
    data: PecaCreateManyInput | PecaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Peca update
   */
  export type PecaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peca
     */
    select?: PecaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Peca
     */
    omit?: PecaOmit<ExtArgs> | null
    /**
     * The data needed to update a Peca.
     */
    data: XOR<PecaUpdateInput, PecaUncheckedUpdateInput>
    /**
     * Choose, which Peca to update.
     */
    where: PecaWhereUniqueInput
  }

  /**
   * Peca updateMany
   */
  export type PecaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pecas.
     */
    data: XOR<PecaUpdateManyMutationInput, PecaUncheckedUpdateManyInput>
    /**
     * Filter which Pecas to update
     */
    where?: PecaWhereInput
    /**
     * Limit how many Pecas to update.
     */
    limit?: number
  }

  /**
   * Peca updateManyAndReturn
   */
  export type PecaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peca
     */
    select?: PecaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Peca
     */
    omit?: PecaOmit<ExtArgs> | null
    /**
     * The data used to update Pecas.
     */
    data: XOR<PecaUpdateManyMutationInput, PecaUncheckedUpdateManyInput>
    /**
     * Filter which Pecas to update
     */
    where?: PecaWhereInput
    /**
     * Limit how many Pecas to update.
     */
    limit?: number
  }

  /**
   * Peca upsert
   */
  export type PecaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peca
     */
    select?: PecaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Peca
     */
    omit?: PecaOmit<ExtArgs> | null
    /**
     * The filter to search for the Peca to update in case it exists.
     */
    where: PecaWhereUniqueInput
    /**
     * In case the Peca found by the `where` argument doesn't exist, create a new Peca with this data.
     */
    create: XOR<PecaCreateInput, PecaUncheckedCreateInput>
    /**
     * In case the Peca was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PecaUpdateInput, PecaUncheckedUpdateInput>
  }

  /**
   * Peca delete
   */
  export type PecaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peca
     */
    select?: PecaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Peca
     */
    omit?: PecaOmit<ExtArgs> | null
    /**
     * Filter which Peca to delete.
     */
    where: PecaWhereUniqueInput
  }

  /**
   * Peca deleteMany
   */
  export type PecaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pecas to delete
     */
    where?: PecaWhereInput
    /**
     * Limit how many Pecas to delete.
     */
    limit?: number
  }

  /**
   * Peca without action
   */
  export type PecaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peca
     */
    select?: PecaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Peca
     */
    omit?: PecaOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const MarcaVeiculoScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MarcaVeiculoScalarFieldEnum = (typeof MarcaVeiculoScalarFieldEnum)[keyof typeof MarcaVeiculoScalarFieldEnum]


  export const ModeloVeiculoScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    marcaId: 'marcaId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    anoFim: 'anoFim',
    anoInicio: 'anoInicio'
  };

  export type ModeloVeiculoScalarFieldEnum = (typeof ModeloVeiculoScalarFieldEnum)[keyof typeof ModeloVeiculoScalarFieldEnum]


  export const TipoServicoScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    descricao: 'descricao',
    valor: 'valor',
    tempoMedio: 'tempoMedio',
    ativo: 'ativo',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TipoServicoScalarFieldEnum = (typeof TipoServicoScalarFieldEnum)[keyof typeof TipoServicoScalarFieldEnum]


  export const ClienteScalarFieldEnum: {
    id: 'id',
    cpf: 'cpf',
    nome: 'nome',
    endereco: 'endereco',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ClienteScalarFieldEnum = (typeof ClienteScalarFieldEnum)[keyof typeof ClienteScalarFieldEnum]


  export const VeiculoScalarFieldEnum: {
    id: 'id',
    placa: 'placa',
    clienteId: 'clienteId',
    modeloId: 'modeloId',
    ano: 'ano',
    cor: 'cor',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VeiculoScalarFieldEnum = (typeof VeiculoScalarFieldEnum)[keyof typeof VeiculoScalarFieldEnum]


  export const OrdemServicoScalarFieldEnum: {
    id: 'id',
    veiculoId: 'veiculoId',
    status: 'status',
    tipoPagamento: 'tipoPagamento',
    observacoes: 'observacoes',
    valorTotal: 'valorTotal',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OrdemServicoScalarFieldEnum = (typeof OrdemServicoScalarFieldEnum)[keyof typeof OrdemServicoScalarFieldEnum]


  export const ItemServicoScalarFieldEnum: {
    id: 'id',
    ordemServicoId: 'ordemServicoId',
    tipoServicoId: 'tipoServicoId',
    quantidade: 'quantidade',
    valorUnitario: 'valorUnitario',
    valorTotal: 'valorTotal',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ItemServicoScalarFieldEnum = (typeof ItemServicoScalarFieldEnum)[keyof typeof ItemServicoScalarFieldEnum]


  export const ItemPecaScalarFieldEnum: {
    id: 'id',
    ordemServicoId: 'ordemServicoId',
    nome: 'nome',
    quantidade: 'quantidade',
    valorUnitario: 'valorUnitario',
    valorTotal: 'valorTotal',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ItemPecaScalarFieldEnum = (typeof ItemPecaScalarFieldEnum)[keyof typeof ItemPecaScalarFieldEnum]


  export const PecaScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    descricao: 'descricao',
    valorUnitario: 'valorUnitario',
    quantidadeEstoque: 'quantidadeEstoque',
    quantidadeMinima: 'quantidadeMinima',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PecaScalarFieldEnum = (typeof PecaScalarFieldEnum)[keyof typeof PecaScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type MarcaVeiculoWhereInput = {
    AND?: MarcaVeiculoWhereInput | MarcaVeiculoWhereInput[]
    OR?: MarcaVeiculoWhereInput[]
    NOT?: MarcaVeiculoWhereInput | MarcaVeiculoWhereInput[]
    id?: IntFilter<"MarcaVeiculo"> | number
    nome?: StringFilter<"MarcaVeiculo"> | string
    createdAt?: DateTimeFilter<"MarcaVeiculo"> | Date | string
    updatedAt?: DateTimeFilter<"MarcaVeiculo"> | Date | string
    modelos?: ModeloVeiculoListRelationFilter
  }

  export type MarcaVeiculoOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    modelos?: ModeloVeiculoOrderByRelationAggregateInput
  }

  export type MarcaVeiculoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nome?: string
    AND?: MarcaVeiculoWhereInput | MarcaVeiculoWhereInput[]
    OR?: MarcaVeiculoWhereInput[]
    NOT?: MarcaVeiculoWhereInput | MarcaVeiculoWhereInput[]
    createdAt?: DateTimeFilter<"MarcaVeiculo"> | Date | string
    updatedAt?: DateTimeFilter<"MarcaVeiculo"> | Date | string
    modelos?: ModeloVeiculoListRelationFilter
  }, "id" | "nome">

  export type MarcaVeiculoOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MarcaVeiculoCountOrderByAggregateInput
    _avg?: MarcaVeiculoAvgOrderByAggregateInput
    _max?: MarcaVeiculoMaxOrderByAggregateInput
    _min?: MarcaVeiculoMinOrderByAggregateInput
    _sum?: MarcaVeiculoSumOrderByAggregateInput
  }

  export type MarcaVeiculoScalarWhereWithAggregatesInput = {
    AND?: MarcaVeiculoScalarWhereWithAggregatesInput | MarcaVeiculoScalarWhereWithAggregatesInput[]
    OR?: MarcaVeiculoScalarWhereWithAggregatesInput[]
    NOT?: MarcaVeiculoScalarWhereWithAggregatesInput | MarcaVeiculoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MarcaVeiculo"> | number
    nome?: StringWithAggregatesFilter<"MarcaVeiculo"> | string
    createdAt?: DateTimeWithAggregatesFilter<"MarcaVeiculo"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MarcaVeiculo"> | Date | string
  }

  export type ModeloVeiculoWhereInput = {
    AND?: ModeloVeiculoWhereInput | ModeloVeiculoWhereInput[]
    OR?: ModeloVeiculoWhereInput[]
    NOT?: ModeloVeiculoWhereInput | ModeloVeiculoWhereInput[]
    id?: IntFilter<"ModeloVeiculo"> | number
    nome?: StringFilter<"ModeloVeiculo"> | string
    marcaId?: IntFilter<"ModeloVeiculo"> | number
    createdAt?: DateTimeFilter<"ModeloVeiculo"> | Date | string
    updatedAt?: DateTimeFilter<"ModeloVeiculo"> | Date | string
    anoFim?: IntNullableFilter<"ModeloVeiculo"> | number | null
    anoInicio?: IntNullableFilter<"ModeloVeiculo"> | number | null
    marca?: XOR<MarcaVeiculoScalarRelationFilter, MarcaVeiculoWhereInput>
    veiculos?: VeiculoListRelationFilter
  }

  export type ModeloVeiculoOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    marcaId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    anoFim?: SortOrderInput | SortOrder
    anoInicio?: SortOrderInput | SortOrder
    marca?: MarcaVeiculoOrderByWithRelationInput
    veiculos?: VeiculoOrderByRelationAggregateInput
  }

  export type ModeloVeiculoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nome_marcaId_anoInicio_anoFim?: ModeloVeiculoNomeMarcaIdAnoInicioAnoFimCompoundUniqueInput
    AND?: ModeloVeiculoWhereInput | ModeloVeiculoWhereInput[]
    OR?: ModeloVeiculoWhereInput[]
    NOT?: ModeloVeiculoWhereInput | ModeloVeiculoWhereInput[]
    nome?: StringFilter<"ModeloVeiculo"> | string
    marcaId?: IntFilter<"ModeloVeiculo"> | number
    createdAt?: DateTimeFilter<"ModeloVeiculo"> | Date | string
    updatedAt?: DateTimeFilter<"ModeloVeiculo"> | Date | string
    anoFim?: IntNullableFilter<"ModeloVeiculo"> | number | null
    anoInicio?: IntNullableFilter<"ModeloVeiculo"> | number | null
    marca?: XOR<MarcaVeiculoScalarRelationFilter, MarcaVeiculoWhereInput>
    veiculos?: VeiculoListRelationFilter
  }, "id" | "nome_marcaId_anoInicio_anoFim">

  export type ModeloVeiculoOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    marcaId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    anoFim?: SortOrderInput | SortOrder
    anoInicio?: SortOrderInput | SortOrder
    _count?: ModeloVeiculoCountOrderByAggregateInput
    _avg?: ModeloVeiculoAvgOrderByAggregateInput
    _max?: ModeloVeiculoMaxOrderByAggregateInput
    _min?: ModeloVeiculoMinOrderByAggregateInput
    _sum?: ModeloVeiculoSumOrderByAggregateInput
  }

  export type ModeloVeiculoScalarWhereWithAggregatesInput = {
    AND?: ModeloVeiculoScalarWhereWithAggregatesInput | ModeloVeiculoScalarWhereWithAggregatesInput[]
    OR?: ModeloVeiculoScalarWhereWithAggregatesInput[]
    NOT?: ModeloVeiculoScalarWhereWithAggregatesInput | ModeloVeiculoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ModeloVeiculo"> | number
    nome?: StringWithAggregatesFilter<"ModeloVeiculo"> | string
    marcaId?: IntWithAggregatesFilter<"ModeloVeiculo"> | number
    createdAt?: DateTimeWithAggregatesFilter<"ModeloVeiculo"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ModeloVeiculo"> | Date | string
    anoFim?: IntNullableWithAggregatesFilter<"ModeloVeiculo"> | number | null
    anoInicio?: IntNullableWithAggregatesFilter<"ModeloVeiculo"> | number | null
  }

  export type TipoServicoWhereInput = {
    AND?: TipoServicoWhereInput | TipoServicoWhereInput[]
    OR?: TipoServicoWhereInput[]
    NOT?: TipoServicoWhereInput | TipoServicoWhereInput[]
    id?: IntFilter<"TipoServico"> | number
    nome?: StringFilter<"TipoServico"> | string
    descricao?: StringNullableFilter<"TipoServico"> | string | null
    valor?: FloatFilter<"TipoServico"> | number
    tempoMedio?: IntNullableFilter<"TipoServico"> | number | null
    ativo?: BoolFilter<"TipoServico"> | boolean
    createdAt?: DateTimeFilter<"TipoServico"> | Date | string
    updatedAt?: DateTimeFilter<"TipoServico"> | Date | string
    ItemServico?: ItemServicoListRelationFilter
  }

  export type TipoServicoOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrderInput | SortOrder
    valor?: SortOrder
    tempoMedio?: SortOrderInput | SortOrder
    ativo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ItemServico?: ItemServicoOrderByRelationAggregateInput
  }

  export type TipoServicoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nome?: string
    AND?: TipoServicoWhereInput | TipoServicoWhereInput[]
    OR?: TipoServicoWhereInput[]
    NOT?: TipoServicoWhereInput | TipoServicoWhereInput[]
    descricao?: StringNullableFilter<"TipoServico"> | string | null
    valor?: FloatFilter<"TipoServico"> | number
    tempoMedio?: IntNullableFilter<"TipoServico"> | number | null
    ativo?: BoolFilter<"TipoServico"> | boolean
    createdAt?: DateTimeFilter<"TipoServico"> | Date | string
    updatedAt?: DateTimeFilter<"TipoServico"> | Date | string
    ItemServico?: ItemServicoListRelationFilter
  }, "id" | "nome">

  export type TipoServicoOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrderInput | SortOrder
    valor?: SortOrder
    tempoMedio?: SortOrderInput | SortOrder
    ativo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TipoServicoCountOrderByAggregateInput
    _avg?: TipoServicoAvgOrderByAggregateInput
    _max?: TipoServicoMaxOrderByAggregateInput
    _min?: TipoServicoMinOrderByAggregateInput
    _sum?: TipoServicoSumOrderByAggregateInput
  }

  export type TipoServicoScalarWhereWithAggregatesInput = {
    AND?: TipoServicoScalarWhereWithAggregatesInput | TipoServicoScalarWhereWithAggregatesInput[]
    OR?: TipoServicoScalarWhereWithAggregatesInput[]
    NOT?: TipoServicoScalarWhereWithAggregatesInput | TipoServicoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TipoServico"> | number
    nome?: StringWithAggregatesFilter<"TipoServico"> | string
    descricao?: StringNullableWithAggregatesFilter<"TipoServico"> | string | null
    valor?: FloatWithAggregatesFilter<"TipoServico"> | number
    tempoMedio?: IntNullableWithAggregatesFilter<"TipoServico"> | number | null
    ativo?: BoolWithAggregatesFilter<"TipoServico"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"TipoServico"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TipoServico"> | Date | string
  }

  export type ClienteWhereInput = {
    AND?: ClienteWhereInput | ClienteWhereInput[]
    OR?: ClienteWhereInput[]
    NOT?: ClienteWhereInput | ClienteWhereInput[]
    id?: IntFilter<"Cliente"> | number
    cpf?: StringFilter<"Cliente"> | string
    nome?: StringFilter<"Cliente"> | string
    endereco?: StringFilter<"Cliente"> | string
    createdAt?: DateTimeFilter<"Cliente"> | Date | string
    updatedAt?: DateTimeFilter<"Cliente"> | Date | string
    veiculos?: VeiculoListRelationFilter
  }

  export type ClienteOrderByWithRelationInput = {
    id?: SortOrder
    cpf?: SortOrder
    nome?: SortOrder
    endereco?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    veiculos?: VeiculoOrderByRelationAggregateInput
  }

  export type ClienteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    cpf?: string
    AND?: ClienteWhereInput | ClienteWhereInput[]
    OR?: ClienteWhereInput[]
    NOT?: ClienteWhereInput | ClienteWhereInput[]
    nome?: StringFilter<"Cliente"> | string
    endereco?: StringFilter<"Cliente"> | string
    createdAt?: DateTimeFilter<"Cliente"> | Date | string
    updatedAt?: DateTimeFilter<"Cliente"> | Date | string
    veiculos?: VeiculoListRelationFilter
  }, "id" | "cpf">

  export type ClienteOrderByWithAggregationInput = {
    id?: SortOrder
    cpf?: SortOrder
    nome?: SortOrder
    endereco?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ClienteCountOrderByAggregateInput
    _avg?: ClienteAvgOrderByAggregateInput
    _max?: ClienteMaxOrderByAggregateInput
    _min?: ClienteMinOrderByAggregateInput
    _sum?: ClienteSumOrderByAggregateInput
  }

  export type ClienteScalarWhereWithAggregatesInput = {
    AND?: ClienteScalarWhereWithAggregatesInput | ClienteScalarWhereWithAggregatesInput[]
    OR?: ClienteScalarWhereWithAggregatesInput[]
    NOT?: ClienteScalarWhereWithAggregatesInput | ClienteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Cliente"> | number
    cpf?: StringWithAggregatesFilter<"Cliente"> | string
    nome?: StringWithAggregatesFilter<"Cliente"> | string
    endereco?: StringWithAggregatesFilter<"Cliente"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Cliente"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Cliente"> | Date | string
  }

  export type VeiculoWhereInput = {
    AND?: VeiculoWhereInput | VeiculoWhereInput[]
    OR?: VeiculoWhereInput[]
    NOT?: VeiculoWhereInput | VeiculoWhereInput[]
    id?: IntFilter<"Veiculo"> | number
    placa?: StringFilter<"Veiculo"> | string
    clienteId?: IntFilter<"Veiculo"> | number
    modeloId?: IntFilter<"Veiculo"> | number
    ano?: IntFilter<"Veiculo"> | number
    cor?: StringFilter<"Veiculo"> | string
    createdAt?: DateTimeFilter<"Veiculo"> | Date | string
    updatedAt?: DateTimeFilter<"Veiculo"> | Date | string
    ordensServico?: OrdemServicoListRelationFilter
    cliente?: XOR<ClienteScalarRelationFilter, ClienteWhereInput>
    modelo?: XOR<ModeloVeiculoScalarRelationFilter, ModeloVeiculoWhereInput>
  }

  export type VeiculoOrderByWithRelationInput = {
    id?: SortOrder
    placa?: SortOrder
    clienteId?: SortOrder
    modeloId?: SortOrder
    ano?: SortOrder
    cor?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ordensServico?: OrdemServicoOrderByRelationAggregateInput
    cliente?: ClienteOrderByWithRelationInput
    modelo?: ModeloVeiculoOrderByWithRelationInput
  }

  export type VeiculoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    placa?: string
    AND?: VeiculoWhereInput | VeiculoWhereInput[]
    OR?: VeiculoWhereInput[]
    NOT?: VeiculoWhereInput | VeiculoWhereInput[]
    clienteId?: IntFilter<"Veiculo"> | number
    modeloId?: IntFilter<"Veiculo"> | number
    ano?: IntFilter<"Veiculo"> | number
    cor?: StringFilter<"Veiculo"> | string
    createdAt?: DateTimeFilter<"Veiculo"> | Date | string
    updatedAt?: DateTimeFilter<"Veiculo"> | Date | string
    ordensServico?: OrdemServicoListRelationFilter
    cliente?: XOR<ClienteScalarRelationFilter, ClienteWhereInput>
    modelo?: XOR<ModeloVeiculoScalarRelationFilter, ModeloVeiculoWhereInput>
  }, "id" | "placa">

  export type VeiculoOrderByWithAggregationInput = {
    id?: SortOrder
    placa?: SortOrder
    clienteId?: SortOrder
    modeloId?: SortOrder
    ano?: SortOrder
    cor?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VeiculoCountOrderByAggregateInput
    _avg?: VeiculoAvgOrderByAggregateInput
    _max?: VeiculoMaxOrderByAggregateInput
    _min?: VeiculoMinOrderByAggregateInput
    _sum?: VeiculoSumOrderByAggregateInput
  }

  export type VeiculoScalarWhereWithAggregatesInput = {
    AND?: VeiculoScalarWhereWithAggregatesInput | VeiculoScalarWhereWithAggregatesInput[]
    OR?: VeiculoScalarWhereWithAggregatesInput[]
    NOT?: VeiculoScalarWhereWithAggregatesInput | VeiculoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Veiculo"> | number
    placa?: StringWithAggregatesFilter<"Veiculo"> | string
    clienteId?: IntWithAggregatesFilter<"Veiculo"> | number
    modeloId?: IntWithAggregatesFilter<"Veiculo"> | number
    ano?: IntWithAggregatesFilter<"Veiculo"> | number
    cor?: StringWithAggregatesFilter<"Veiculo"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Veiculo"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Veiculo"> | Date | string
  }

  export type OrdemServicoWhereInput = {
    AND?: OrdemServicoWhereInput | OrdemServicoWhereInput[]
    OR?: OrdemServicoWhereInput[]
    NOT?: OrdemServicoWhereInput | OrdemServicoWhereInput[]
    id?: IntFilter<"OrdemServico"> | number
    veiculoId?: IntFilter<"OrdemServico"> | number
    status?: StringFilter<"OrdemServico"> | string
    tipoPagamento?: StringNullableFilter<"OrdemServico"> | string | null
    observacoes?: StringNullableFilter<"OrdemServico"> | string | null
    valorTotal?: FloatFilter<"OrdemServico"> | number
    createdAt?: DateTimeFilter<"OrdemServico"> | Date | string
    updatedAt?: DateTimeFilter<"OrdemServico"> | Date | string
    itensPeca?: ItemPecaListRelationFilter
    itensServico?: ItemServicoListRelationFilter
    veiculo?: XOR<VeiculoScalarRelationFilter, VeiculoWhereInput>
  }

  export type OrdemServicoOrderByWithRelationInput = {
    id?: SortOrder
    veiculoId?: SortOrder
    status?: SortOrder
    tipoPagamento?: SortOrderInput | SortOrder
    observacoes?: SortOrderInput | SortOrder
    valorTotal?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    itensPeca?: ItemPecaOrderByRelationAggregateInput
    itensServico?: ItemServicoOrderByRelationAggregateInput
    veiculo?: VeiculoOrderByWithRelationInput
  }

  export type OrdemServicoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: OrdemServicoWhereInput | OrdemServicoWhereInput[]
    OR?: OrdemServicoWhereInput[]
    NOT?: OrdemServicoWhereInput | OrdemServicoWhereInput[]
    veiculoId?: IntFilter<"OrdemServico"> | number
    status?: StringFilter<"OrdemServico"> | string
    tipoPagamento?: StringNullableFilter<"OrdemServico"> | string | null
    observacoes?: StringNullableFilter<"OrdemServico"> | string | null
    valorTotal?: FloatFilter<"OrdemServico"> | number
    createdAt?: DateTimeFilter<"OrdemServico"> | Date | string
    updatedAt?: DateTimeFilter<"OrdemServico"> | Date | string
    itensPeca?: ItemPecaListRelationFilter
    itensServico?: ItemServicoListRelationFilter
    veiculo?: XOR<VeiculoScalarRelationFilter, VeiculoWhereInput>
  }, "id">

  export type OrdemServicoOrderByWithAggregationInput = {
    id?: SortOrder
    veiculoId?: SortOrder
    status?: SortOrder
    tipoPagamento?: SortOrderInput | SortOrder
    observacoes?: SortOrderInput | SortOrder
    valorTotal?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OrdemServicoCountOrderByAggregateInput
    _avg?: OrdemServicoAvgOrderByAggregateInput
    _max?: OrdemServicoMaxOrderByAggregateInput
    _min?: OrdemServicoMinOrderByAggregateInput
    _sum?: OrdemServicoSumOrderByAggregateInput
  }

  export type OrdemServicoScalarWhereWithAggregatesInput = {
    AND?: OrdemServicoScalarWhereWithAggregatesInput | OrdemServicoScalarWhereWithAggregatesInput[]
    OR?: OrdemServicoScalarWhereWithAggregatesInput[]
    NOT?: OrdemServicoScalarWhereWithAggregatesInput | OrdemServicoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"OrdemServico"> | number
    veiculoId?: IntWithAggregatesFilter<"OrdemServico"> | number
    status?: StringWithAggregatesFilter<"OrdemServico"> | string
    tipoPagamento?: StringNullableWithAggregatesFilter<"OrdemServico"> | string | null
    observacoes?: StringNullableWithAggregatesFilter<"OrdemServico"> | string | null
    valorTotal?: FloatWithAggregatesFilter<"OrdemServico"> | number
    createdAt?: DateTimeWithAggregatesFilter<"OrdemServico"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"OrdemServico"> | Date | string
  }

  export type ItemServicoWhereInput = {
    AND?: ItemServicoWhereInput | ItemServicoWhereInput[]
    OR?: ItemServicoWhereInput[]
    NOT?: ItemServicoWhereInput | ItemServicoWhereInput[]
    id?: IntFilter<"ItemServico"> | number
    ordemServicoId?: IntFilter<"ItemServico"> | number
    tipoServicoId?: IntFilter<"ItemServico"> | number
    quantidade?: IntFilter<"ItemServico"> | number
    valorUnitario?: FloatFilter<"ItemServico"> | number
    valorTotal?: FloatFilter<"ItemServico"> | number
    createdAt?: DateTimeFilter<"ItemServico"> | Date | string
    updatedAt?: DateTimeFilter<"ItemServico"> | Date | string
    ordemServico?: XOR<OrdemServicoScalarRelationFilter, OrdemServicoWhereInput>
    tipoServico?: XOR<TipoServicoScalarRelationFilter, TipoServicoWhereInput>
  }

  export type ItemServicoOrderByWithRelationInput = {
    id?: SortOrder
    ordemServicoId?: SortOrder
    tipoServicoId?: SortOrder
    quantidade?: SortOrder
    valorUnitario?: SortOrder
    valorTotal?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ordemServico?: OrdemServicoOrderByWithRelationInput
    tipoServico?: TipoServicoOrderByWithRelationInput
  }

  export type ItemServicoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ItemServicoWhereInput | ItemServicoWhereInput[]
    OR?: ItemServicoWhereInput[]
    NOT?: ItemServicoWhereInput | ItemServicoWhereInput[]
    ordemServicoId?: IntFilter<"ItemServico"> | number
    tipoServicoId?: IntFilter<"ItemServico"> | number
    quantidade?: IntFilter<"ItemServico"> | number
    valorUnitario?: FloatFilter<"ItemServico"> | number
    valorTotal?: FloatFilter<"ItemServico"> | number
    createdAt?: DateTimeFilter<"ItemServico"> | Date | string
    updatedAt?: DateTimeFilter<"ItemServico"> | Date | string
    ordemServico?: XOR<OrdemServicoScalarRelationFilter, OrdemServicoWhereInput>
    tipoServico?: XOR<TipoServicoScalarRelationFilter, TipoServicoWhereInput>
  }, "id">

  export type ItemServicoOrderByWithAggregationInput = {
    id?: SortOrder
    ordemServicoId?: SortOrder
    tipoServicoId?: SortOrder
    quantidade?: SortOrder
    valorUnitario?: SortOrder
    valorTotal?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ItemServicoCountOrderByAggregateInput
    _avg?: ItemServicoAvgOrderByAggregateInput
    _max?: ItemServicoMaxOrderByAggregateInput
    _min?: ItemServicoMinOrderByAggregateInput
    _sum?: ItemServicoSumOrderByAggregateInput
  }

  export type ItemServicoScalarWhereWithAggregatesInput = {
    AND?: ItemServicoScalarWhereWithAggregatesInput | ItemServicoScalarWhereWithAggregatesInput[]
    OR?: ItemServicoScalarWhereWithAggregatesInput[]
    NOT?: ItemServicoScalarWhereWithAggregatesInput | ItemServicoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ItemServico"> | number
    ordemServicoId?: IntWithAggregatesFilter<"ItemServico"> | number
    tipoServicoId?: IntWithAggregatesFilter<"ItemServico"> | number
    quantidade?: IntWithAggregatesFilter<"ItemServico"> | number
    valorUnitario?: FloatWithAggregatesFilter<"ItemServico"> | number
    valorTotal?: FloatWithAggregatesFilter<"ItemServico"> | number
    createdAt?: DateTimeWithAggregatesFilter<"ItemServico"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ItemServico"> | Date | string
  }

  export type ItemPecaWhereInput = {
    AND?: ItemPecaWhereInput | ItemPecaWhereInput[]
    OR?: ItemPecaWhereInput[]
    NOT?: ItemPecaWhereInput | ItemPecaWhereInput[]
    id?: IntFilter<"ItemPeca"> | number
    ordemServicoId?: IntFilter<"ItemPeca"> | number
    nome?: StringFilter<"ItemPeca"> | string
    quantidade?: IntFilter<"ItemPeca"> | number
    valorUnitario?: FloatFilter<"ItemPeca"> | number
    valorTotal?: FloatFilter<"ItemPeca"> | number
    createdAt?: DateTimeFilter<"ItemPeca"> | Date | string
    updatedAt?: DateTimeFilter<"ItemPeca"> | Date | string
    ordemServico?: XOR<OrdemServicoScalarRelationFilter, OrdemServicoWhereInput>
  }

  export type ItemPecaOrderByWithRelationInput = {
    id?: SortOrder
    ordemServicoId?: SortOrder
    nome?: SortOrder
    quantidade?: SortOrder
    valorUnitario?: SortOrder
    valorTotal?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ordemServico?: OrdemServicoOrderByWithRelationInput
  }

  export type ItemPecaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ItemPecaWhereInput | ItemPecaWhereInput[]
    OR?: ItemPecaWhereInput[]
    NOT?: ItemPecaWhereInput | ItemPecaWhereInput[]
    ordemServicoId?: IntFilter<"ItemPeca"> | number
    nome?: StringFilter<"ItemPeca"> | string
    quantidade?: IntFilter<"ItemPeca"> | number
    valorUnitario?: FloatFilter<"ItemPeca"> | number
    valorTotal?: FloatFilter<"ItemPeca"> | number
    createdAt?: DateTimeFilter<"ItemPeca"> | Date | string
    updatedAt?: DateTimeFilter<"ItemPeca"> | Date | string
    ordemServico?: XOR<OrdemServicoScalarRelationFilter, OrdemServicoWhereInput>
  }, "id">

  export type ItemPecaOrderByWithAggregationInput = {
    id?: SortOrder
    ordemServicoId?: SortOrder
    nome?: SortOrder
    quantidade?: SortOrder
    valorUnitario?: SortOrder
    valorTotal?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ItemPecaCountOrderByAggregateInput
    _avg?: ItemPecaAvgOrderByAggregateInput
    _max?: ItemPecaMaxOrderByAggregateInput
    _min?: ItemPecaMinOrderByAggregateInput
    _sum?: ItemPecaSumOrderByAggregateInput
  }

  export type ItemPecaScalarWhereWithAggregatesInput = {
    AND?: ItemPecaScalarWhereWithAggregatesInput | ItemPecaScalarWhereWithAggregatesInput[]
    OR?: ItemPecaScalarWhereWithAggregatesInput[]
    NOT?: ItemPecaScalarWhereWithAggregatesInput | ItemPecaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ItemPeca"> | number
    ordemServicoId?: IntWithAggregatesFilter<"ItemPeca"> | number
    nome?: StringWithAggregatesFilter<"ItemPeca"> | string
    quantidade?: IntWithAggregatesFilter<"ItemPeca"> | number
    valorUnitario?: FloatWithAggregatesFilter<"ItemPeca"> | number
    valorTotal?: FloatWithAggregatesFilter<"ItemPeca"> | number
    createdAt?: DateTimeWithAggregatesFilter<"ItemPeca"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ItemPeca"> | Date | string
  }

  export type PecaWhereInput = {
    AND?: PecaWhereInput | PecaWhereInput[]
    OR?: PecaWhereInput[]
    NOT?: PecaWhereInput | PecaWhereInput[]
    id?: IntFilter<"Peca"> | number
    nome?: StringFilter<"Peca"> | string
    descricao?: StringNullableFilter<"Peca"> | string | null
    valorUnitario?: FloatFilter<"Peca"> | number
    quantidadeEstoque?: IntFilter<"Peca"> | number
    quantidadeMinima?: IntFilter<"Peca"> | number
    createdAt?: DateTimeFilter<"Peca"> | Date | string
    updatedAt?: DateTimeFilter<"Peca"> | Date | string
  }

  export type PecaOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrderInput | SortOrder
    valorUnitario?: SortOrder
    quantidadeEstoque?: SortOrder
    quantidadeMinima?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PecaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PecaWhereInput | PecaWhereInput[]
    OR?: PecaWhereInput[]
    NOT?: PecaWhereInput | PecaWhereInput[]
    nome?: StringFilter<"Peca"> | string
    descricao?: StringNullableFilter<"Peca"> | string | null
    valorUnitario?: FloatFilter<"Peca"> | number
    quantidadeEstoque?: IntFilter<"Peca"> | number
    quantidadeMinima?: IntFilter<"Peca"> | number
    createdAt?: DateTimeFilter<"Peca"> | Date | string
    updatedAt?: DateTimeFilter<"Peca"> | Date | string
  }, "id">

  export type PecaOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrderInput | SortOrder
    valorUnitario?: SortOrder
    quantidadeEstoque?: SortOrder
    quantidadeMinima?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PecaCountOrderByAggregateInput
    _avg?: PecaAvgOrderByAggregateInput
    _max?: PecaMaxOrderByAggregateInput
    _min?: PecaMinOrderByAggregateInput
    _sum?: PecaSumOrderByAggregateInput
  }

  export type PecaScalarWhereWithAggregatesInput = {
    AND?: PecaScalarWhereWithAggregatesInput | PecaScalarWhereWithAggregatesInput[]
    OR?: PecaScalarWhereWithAggregatesInput[]
    NOT?: PecaScalarWhereWithAggregatesInput | PecaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Peca"> | number
    nome?: StringWithAggregatesFilter<"Peca"> | string
    descricao?: StringNullableWithAggregatesFilter<"Peca"> | string | null
    valorUnitario?: FloatWithAggregatesFilter<"Peca"> | number
    quantidadeEstoque?: IntWithAggregatesFilter<"Peca"> | number
    quantidadeMinima?: IntWithAggregatesFilter<"Peca"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Peca"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Peca"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    name?: string | null
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    name?: string | null
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    name?: string | null
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MarcaVeiculoCreateInput = {
    nome: string
    createdAt?: Date | string
    updatedAt?: Date | string
    modelos?: ModeloVeiculoCreateNestedManyWithoutMarcaInput
  }

  export type MarcaVeiculoUncheckedCreateInput = {
    id?: number
    nome: string
    createdAt?: Date | string
    updatedAt?: Date | string
    modelos?: ModeloVeiculoUncheckedCreateNestedManyWithoutMarcaInput
  }

  export type MarcaVeiculoUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    modelos?: ModeloVeiculoUpdateManyWithoutMarcaNestedInput
  }

  export type MarcaVeiculoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    modelos?: ModeloVeiculoUncheckedUpdateManyWithoutMarcaNestedInput
  }

  export type MarcaVeiculoCreateManyInput = {
    id?: number
    nome: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MarcaVeiculoUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MarcaVeiculoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModeloVeiculoCreateInput = {
    nome: string
    createdAt?: Date | string
    updatedAt?: Date | string
    anoFim?: number | null
    anoInicio?: number | null
    marca: MarcaVeiculoCreateNestedOneWithoutModelosInput
    veiculos?: VeiculoCreateNestedManyWithoutModeloInput
  }

  export type ModeloVeiculoUncheckedCreateInput = {
    id?: number
    nome: string
    marcaId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    anoFim?: number | null
    anoInicio?: number | null
    veiculos?: VeiculoUncheckedCreateNestedManyWithoutModeloInput
  }

  export type ModeloVeiculoUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    anoFim?: NullableIntFieldUpdateOperationsInput | number | null
    anoInicio?: NullableIntFieldUpdateOperationsInput | number | null
    marca?: MarcaVeiculoUpdateOneRequiredWithoutModelosNestedInput
    veiculos?: VeiculoUpdateManyWithoutModeloNestedInput
  }

  export type ModeloVeiculoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    marcaId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    anoFim?: NullableIntFieldUpdateOperationsInput | number | null
    anoInicio?: NullableIntFieldUpdateOperationsInput | number | null
    veiculos?: VeiculoUncheckedUpdateManyWithoutModeloNestedInput
  }

  export type ModeloVeiculoCreateManyInput = {
    id?: number
    nome: string
    marcaId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    anoFim?: number | null
    anoInicio?: number | null
  }

  export type ModeloVeiculoUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    anoFim?: NullableIntFieldUpdateOperationsInput | number | null
    anoInicio?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ModeloVeiculoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    marcaId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    anoFim?: NullableIntFieldUpdateOperationsInput | number | null
    anoInicio?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TipoServicoCreateInput = {
    nome: string
    descricao?: string | null
    valor: number
    tempoMedio?: number | null
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    ItemServico?: ItemServicoCreateNestedManyWithoutTipoServicoInput
  }

  export type TipoServicoUncheckedCreateInput = {
    id?: number
    nome: string
    descricao?: string | null
    valor: number
    tempoMedio?: number | null
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    ItemServico?: ItemServicoUncheckedCreateNestedManyWithoutTipoServicoInput
  }

  export type TipoServicoUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    valor?: FloatFieldUpdateOperationsInput | number
    tempoMedio?: NullableIntFieldUpdateOperationsInput | number | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ItemServico?: ItemServicoUpdateManyWithoutTipoServicoNestedInput
  }

  export type TipoServicoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    valor?: FloatFieldUpdateOperationsInput | number
    tempoMedio?: NullableIntFieldUpdateOperationsInput | number | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ItemServico?: ItemServicoUncheckedUpdateManyWithoutTipoServicoNestedInput
  }

  export type TipoServicoCreateManyInput = {
    id?: number
    nome: string
    descricao?: string | null
    valor: number
    tempoMedio?: number | null
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TipoServicoUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    valor?: FloatFieldUpdateOperationsInput | number
    tempoMedio?: NullableIntFieldUpdateOperationsInput | number | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TipoServicoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    valor?: FloatFieldUpdateOperationsInput | number
    tempoMedio?: NullableIntFieldUpdateOperationsInput | number | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClienteCreateInput = {
    cpf: string
    nome: string
    endereco: string
    createdAt?: Date | string
    updatedAt?: Date | string
    veiculos?: VeiculoCreateNestedManyWithoutClienteInput
  }

  export type ClienteUncheckedCreateInput = {
    id?: number
    cpf: string
    nome: string
    endereco: string
    createdAt?: Date | string
    updatedAt?: Date | string
    veiculos?: VeiculoUncheckedCreateNestedManyWithoutClienteInput
  }

  export type ClienteUpdateInput = {
    cpf?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    veiculos?: VeiculoUpdateManyWithoutClienteNestedInput
  }

  export type ClienteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    cpf?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    veiculos?: VeiculoUncheckedUpdateManyWithoutClienteNestedInput
  }

  export type ClienteCreateManyInput = {
    id?: number
    cpf: string
    nome: string
    endereco: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClienteUpdateManyMutationInput = {
    cpf?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClienteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    cpf?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VeiculoCreateInput = {
    placa: string
    ano: number
    cor: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ordensServico?: OrdemServicoCreateNestedManyWithoutVeiculoInput
    cliente: ClienteCreateNestedOneWithoutVeiculosInput
    modelo: ModeloVeiculoCreateNestedOneWithoutVeiculosInput
  }

  export type VeiculoUncheckedCreateInput = {
    id?: number
    placa: string
    clienteId: number
    modeloId: number
    ano: number
    cor: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ordensServico?: OrdemServicoUncheckedCreateNestedManyWithoutVeiculoInput
  }

  export type VeiculoUpdateInput = {
    placa?: StringFieldUpdateOperationsInput | string
    ano?: IntFieldUpdateOperationsInput | number
    cor?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ordensServico?: OrdemServicoUpdateManyWithoutVeiculoNestedInput
    cliente?: ClienteUpdateOneRequiredWithoutVeiculosNestedInput
    modelo?: ModeloVeiculoUpdateOneRequiredWithoutVeiculosNestedInput
  }

  export type VeiculoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    placa?: StringFieldUpdateOperationsInput | string
    clienteId?: IntFieldUpdateOperationsInput | number
    modeloId?: IntFieldUpdateOperationsInput | number
    ano?: IntFieldUpdateOperationsInput | number
    cor?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ordensServico?: OrdemServicoUncheckedUpdateManyWithoutVeiculoNestedInput
  }

  export type VeiculoCreateManyInput = {
    id?: number
    placa: string
    clienteId: number
    modeloId: number
    ano: number
    cor: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VeiculoUpdateManyMutationInput = {
    placa?: StringFieldUpdateOperationsInput | string
    ano?: IntFieldUpdateOperationsInput | number
    cor?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VeiculoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    placa?: StringFieldUpdateOperationsInput | string
    clienteId?: IntFieldUpdateOperationsInput | number
    modeloId?: IntFieldUpdateOperationsInput | number
    ano?: IntFieldUpdateOperationsInput | number
    cor?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrdemServicoCreateInput = {
    status?: string
    tipoPagamento?: string | null
    observacoes?: string | null
    valorTotal: number
    createdAt?: Date | string
    updatedAt?: Date | string
    itensPeca?: ItemPecaCreateNestedManyWithoutOrdemServicoInput
    itensServico?: ItemServicoCreateNestedManyWithoutOrdemServicoInput
    veiculo: VeiculoCreateNestedOneWithoutOrdensServicoInput
  }

  export type OrdemServicoUncheckedCreateInput = {
    id?: number
    veiculoId: number
    status?: string
    tipoPagamento?: string | null
    observacoes?: string | null
    valorTotal: number
    createdAt?: Date | string
    updatedAt?: Date | string
    itensPeca?: ItemPecaUncheckedCreateNestedManyWithoutOrdemServicoInput
    itensServico?: ItemServicoUncheckedCreateNestedManyWithoutOrdemServicoInput
  }

  export type OrdemServicoUpdateInput = {
    status?: StringFieldUpdateOperationsInput | string
    tipoPagamento?: NullableStringFieldUpdateOperationsInput | string | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    valorTotal?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    itensPeca?: ItemPecaUpdateManyWithoutOrdemServicoNestedInput
    itensServico?: ItemServicoUpdateManyWithoutOrdemServicoNestedInput
    veiculo?: VeiculoUpdateOneRequiredWithoutOrdensServicoNestedInput
  }

  export type OrdemServicoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    veiculoId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    tipoPagamento?: NullableStringFieldUpdateOperationsInput | string | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    valorTotal?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    itensPeca?: ItemPecaUncheckedUpdateManyWithoutOrdemServicoNestedInput
    itensServico?: ItemServicoUncheckedUpdateManyWithoutOrdemServicoNestedInput
  }

  export type OrdemServicoCreateManyInput = {
    id?: number
    veiculoId: number
    status?: string
    tipoPagamento?: string | null
    observacoes?: string | null
    valorTotal: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrdemServicoUpdateManyMutationInput = {
    status?: StringFieldUpdateOperationsInput | string
    tipoPagamento?: NullableStringFieldUpdateOperationsInput | string | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    valorTotal?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrdemServicoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    veiculoId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    tipoPagamento?: NullableStringFieldUpdateOperationsInput | string | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    valorTotal?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemServicoCreateInput = {
    quantidade?: number
    valorUnitario: number
    valorTotal: number
    createdAt?: Date | string
    updatedAt?: Date | string
    ordemServico: OrdemServicoCreateNestedOneWithoutItensServicoInput
    tipoServico: TipoServicoCreateNestedOneWithoutItemServicoInput
  }

  export type ItemServicoUncheckedCreateInput = {
    id?: number
    ordemServicoId: number
    tipoServicoId: number
    quantidade?: number
    valorUnitario: number
    valorTotal: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ItemServicoUpdateInput = {
    quantidade?: IntFieldUpdateOperationsInput | number
    valorUnitario?: FloatFieldUpdateOperationsInput | number
    valorTotal?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ordemServico?: OrdemServicoUpdateOneRequiredWithoutItensServicoNestedInput
    tipoServico?: TipoServicoUpdateOneRequiredWithoutItemServicoNestedInput
  }

  export type ItemServicoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    ordemServicoId?: IntFieldUpdateOperationsInput | number
    tipoServicoId?: IntFieldUpdateOperationsInput | number
    quantidade?: IntFieldUpdateOperationsInput | number
    valorUnitario?: FloatFieldUpdateOperationsInput | number
    valorTotal?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemServicoCreateManyInput = {
    id?: number
    ordemServicoId: number
    tipoServicoId: number
    quantidade?: number
    valorUnitario: number
    valorTotal: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ItemServicoUpdateManyMutationInput = {
    quantidade?: IntFieldUpdateOperationsInput | number
    valorUnitario?: FloatFieldUpdateOperationsInput | number
    valorTotal?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemServicoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    ordemServicoId?: IntFieldUpdateOperationsInput | number
    tipoServicoId?: IntFieldUpdateOperationsInput | number
    quantidade?: IntFieldUpdateOperationsInput | number
    valorUnitario?: FloatFieldUpdateOperationsInput | number
    valorTotal?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemPecaCreateInput = {
    nome: string
    quantidade?: number
    valorUnitario: number
    valorTotal: number
    createdAt?: Date | string
    updatedAt?: Date | string
    ordemServico: OrdemServicoCreateNestedOneWithoutItensPecaInput
  }

  export type ItemPecaUncheckedCreateInput = {
    id?: number
    ordemServicoId: number
    nome: string
    quantidade?: number
    valorUnitario: number
    valorTotal: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ItemPecaUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    quantidade?: IntFieldUpdateOperationsInput | number
    valorUnitario?: FloatFieldUpdateOperationsInput | number
    valorTotal?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ordemServico?: OrdemServicoUpdateOneRequiredWithoutItensPecaNestedInput
  }

  export type ItemPecaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    ordemServicoId?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    quantidade?: IntFieldUpdateOperationsInput | number
    valorUnitario?: FloatFieldUpdateOperationsInput | number
    valorTotal?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemPecaCreateManyInput = {
    id?: number
    ordemServicoId: number
    nome: string
    quantidade?: number
    valorUnitario: number
    valorTotal: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ItemPecaUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    quantidade?: IntFieldUpdateOperationsInput | number
    valorUnitario?: FloatFieldUpdateOperationsInput | number
    valorTotal?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemPecaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    ordemServicoId?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    quantidade?: IntFieldUpdateOperationsInput | number
    valorUnitario?: FloatFieldUpdateOperationsInput | number
    valorTotal?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PecaCreateInput = {
    nome: string
    descricao?: string | null
    valorUnitario: number
    quantidadeEstoque?: number
    quantidadeMinima?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PecaUncheckedCreateInput = {
    id?: number
    nome: string
    descricao?: string | null
    valorUnitario: number
    quantidadeEstoque?: number
    quantidadeMinima?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PecaUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    valorUnitario?: FloatFieldUpdateOperationsInput | number
    quantidadeEstoque?: IntFieldUpdateOperationsInput | number
    quantidadeMinima?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PecaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    valorUnitario?: FloatFieldUpdateOperationsInput | number
    quantidadeEstoque?: IntFieldUpdateOperationsInput | number
    quantidadeMinima?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PecaCreateManyInput = {
    id?: number
    nome: string
    descricao?: string | null
    valorUnitario: number
    quantidadeEstoque?: number
    quantidadeMinima?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PecaUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    valorUnitario?: FloatFieldUpdateOperationsInput | number
    quantidadeEstoque?: IntFieldUpdateOperationsInput | number
    quantidadeMinima?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PecaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    valorUnitario?: FloatFieldUpdateOperationsInput | number
    quantidadeEstoque?: IntFieldUpdateOperationsInput | number
    quantidadeMinima?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type ModeloVeiculoListRelationFilter = {
    every?: ModeloVeiculoWhereInput
    some?: ModeloVeiculoWhereInput
    none?: ModeloVeiculoWhereInput
  }

  export type ModeloVeiculoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MarcaVeiculoCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MarcaVeiculoAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type MarcaVeiculoMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MarcaVeiculoMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MarcaVeiculoSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type MarcaVeiculoScalarRelationFilter = {
    is?: MarcaVeiculoWhereInput
    isNot?: MarcaVeiculoWhereInput
  }

  export type VeiculoListRelationFilter = {
    every?: VeiculoWhereInput
    some?: VeiculoWhereInput
    none?: VeiculoWhereInput
  }

  export type VeiculoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ModeloVeiculoNomeMarcaIdAnoInicioAnoFimCompoundUniqueInput = {
    nome: string
    marcaId: number
    anoInicio: number
    anoFim: number
  }

  export type ModeloVeiculoCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    marcaId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    anoFim?: SortOrder
    anoInicio?: SortOrder
  }

  export type ModeloVeiculoAvgOrderByAggregateInput = {
    id?: SortOrder
    marcaId?: SortOrder
    anoFim?: SortOrder
    anoInicio?: SortOrder
  }

  export type ModeloVeiculoMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    marcaId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    anoFim?: SortOrder
    anoInicio?: SortOrder
  }

  export type ModeloVeiculoMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    marcaId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    anoFim?: SortOrder
    anoInicio?: SortOrder
  }

  export type ModeloVeiculoSumOrderByAggregateInput = {
    id?: SortOrder
    marcaId?: SortOrder
    anoFim?: SortOrder
    anoInicio?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ItemServicoListRelationFilter = {
    every?: ItemServicoWhereInput
    some?: ItemServicoWhereInput
    none?: ItemServicoWhereInput
  }

  export type ItemServicoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TipoServicoCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    valor?: SortOrder
    tempoMedio?: SortOrder
    ativo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TipoServicoAvgOrderByAggregateInput = {
    id?: SortOrder
    valor?: SortOrder
    tempoMedio?: SortOrder
  }

  export type TipoServicoMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    valor?: SortOrder
    tempoMedio?: SortOrder
    ativo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TipoServicoMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    valor?: SortOrder
    tempoMedio?: SortOrder
    ativo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TipoServicoSumOrderByAggregateInput = {
    id?: SortOrder
    valor?: SortOrder
    tempoMedio?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ClienteCountOrderByAggregateInput = {
    id?: SortOrder
    cpf?: SortOrder
    nome?: SortOrder
    endereco?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClienteAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ClienteMaxOrderByAggregateInput = {
    id?: SortOrder
    cpf?: SortOrder
    nome?: SortOrder
    endereco?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClienteMinOrderByAggregateInput = {
    id?: SortOrder
    cpf?: SortOrder
    nome?: SortOrder
    endereco?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClienteSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type OrdemServicoListRelationFilter = {
    every?: OrdemServicoWhereInput
    some?: OrdemServicoWhereInput
    none?: OrdemServicoWhereInput
  }

  export type ClienteScalarRelationFilter = {
    is?: ClienteWhereInput
    isNot?: ClienteWhereInput
  }

  export type ModeloVeiculoScalarRelationFilter = {
    is?: ModeloVeiculoWhereInput
    isNot?: ModeloVeiculoWhereInput
  }

  export type OrdemServicoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VeiculoCountOrderByAggregateInput = {
    id?: SortOrder
    placa?: SortOrder
    clienteId?: SortOrder
    modeloId?: SortOrder
    ano?: SortOrder
    cor?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VeiculoAvgOrderByAggregateInput = {
    id?: SortOrder
    clienteId?: SortOrder
    modeloId?: SortOrder
    ano?: SortOrder
  }

  export type VeiculoMaxOrderByAggregateInput = {
    id?: SortOrder
    placa?: SortOrder
    clienteId?: SortOrder
    modeloId?: SortOrder
    ano?: SortOrder
    cor?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VeiculoMinOrderByAggregateInput = {
    id?: SortOrder
    placa?: SortOrder
    clienteId?: SortOrder
    modeloId?: SortOrder
    ano?: SortOrder
    cor?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VeiculoSumOrderByAggregateInput = {
    id?: SortOrder
    clienteId?: SortOrder
    modeloId?: SortOrder
    ano?: SortOrder
  }

  export type ItemPecaListRelationFilter = {
    every?: ItemPecaWhereInput
    some?: ItemPecaWhereInput
    none?: ItemPecaWhereInput
  }

  export type VeiculoScalarRelationFilter = {
    is?: VeiculoWhereInput
    isNot?: VeiculoWhereInput
  }

  export type ItemPecaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrdemServicoCountOrderByAggregateInput = {
    id?: SortOrder
    veiculoId?: SortOrder
    status?: SortOrder
    tipoPagamento?: SortOrder
    observacoes?: SortOrder
    valorTotal?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrdemServicoAvgOrderByAggregateInput = {
    id?: SortOrder
    veiculoId?: SortOrder
    valorTotal?: SortOrder
  }

  export type OrdemServicoMaxOrderByAggregateInput = {
    id?: SortOrder
    veiculoId?: SortOrder
    status?: SortOrder
    tipoPagamento?: SortOrder
    observacoes?: SortOrder
    valorTotal?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrdemServicoMinOrderByAggregateInput = {
    id?: SortOrder
    veiculoId?: SortOrder
    status?: SortOrder
    tipoPagamento?: SortOrder
    observacoes?: SortOrder
    valorTotal?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrdemServicoSumOrderByAggregateInput = {
    id?: SortOrder
    veiculoId?: SortOrder
    valorTotal?: SortOrder
  }

  export type OrdemServicoScalarRelationFilter = {
    is?: OrdemServicoWhereInput
    isNot?: OrdemServicoWhereInput
  }

  export type TipoServicoScalarRelationFilter = {
    is?: TipoServicoWhereInput
    isNot?: TipoServicoWhereInput
  }

  export type ItemServicoCountOrderByAggregateInput = {
    id?: SortOrder
    ordemServicoId?: SortOrder
    tipoServicoId?: SortOrder
    quantidade?: SortOrder
    valorUnitario?: SortOrder
    valorTotal?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ItemServicoAvgOrderByAggregateInput = {
    id?: SortOrder
    ordemServicoId?: SortOrder
    tipoServicoId?: SortOrder
    quantidade?: SortOrder
    valorUnitario?: SortOrder
    valorTotal?: SortOrder
  }

  export type ItemServicoMaxOrderByAggregateInput = {
    id?: SortOrder
    ordemServicoId?: SortOrder
    tipoServicoId?: SortOrder
    quantidade?: SortOrder
    valorUnitario?: SortOrder
    valorTotal?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ItemServicoMinOrderByAggregateInput = {
    id?: SortOrder
    ordemServicoId?: SortOrder
    tipoServicoId?: SortOrder
    quantidade?: SortOrder
    valorUnitario?: SortOrder
    valorTotal?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ItemServicoSumOrderByAggregateInput = {
    id?: SortOrder
    ordemServicoId?: SortOrder
    tipoServicoId?: SortOrder
    quantidade?: SortOrder
    valorUnitario?: SortOrder
    valorTotal?: SortOrder
  }

  export type ItemPecaCountOrderByAggregateInput = {
    id?: SortOrder
    ordemServicoId?: SortOrder
    nome?: SortOrder
    quantidade?: SortOrder
    valorUnitario?: SortOrder
    valorTotal?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ItemPecaAvgOrderByAggregateInput = {
    id?: SortOrder
    ordemServicoId?: SortOrder
    quantidade?: SortOrder
    valorUnitario?: SortOrder
    valorTotal?: SortOrder
  }

  export type ItemPecaMaxOrderByAggregateInput = {
    id?: SortOrder
    ordemServicoId?: SortOrder
    nome?: SortOrder
    quantidade?: SortOrder
    valorUnitario?: SortOrder
    valorTotal?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ItemPecaMinOrderByAggregateInput = {
    id?: SortOrder
    ordemServicoId?: SortOrder
    nome?: SortOrder
    quantidade?: SortOrder
    valorUnitario?: SortOrder
    valorTotal?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ItemPecaSumOrderByAggregateInput = {
    id?: SortOrder
    ordemServicoId?: SortOrder
    quantidade?: SortOrder
    valorUnitario?: SortOrder
    valorTotal?: SortOrder
  }

  export type PecaCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    valorUnitario?: SortOrder
    quantidadeEstoque?: SortOrder
    quantidadeMinima?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PecaAvgOrderByAggregateInput = {
    id?: SortOrder
    valorUnitario?: SortOrder
    quantidadeEstoque?: SortOrder
    quantidadeMinima?: SortOrder
  }

  export type PecaMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    valorUnitario?: SortOrder
    quantidadeEstoque?: SortOrder
    quantidadeMinima?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PecaMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    valorUnitario?: SortOrder
    quantidadeEstoque?: SortOrder
    quantidadeMinima?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PecaSumOrderByAggregateInput = {
    id?: SortOrder
    valorUnitario?: SortOrder
    quantidadeEstoque?: SortOrder
    quantidadeMinima?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ModeloVeiculoCreateNestedManyWithoutMarcaInput = {
    create?: XOR<ModeloVeiculoCreateWithoutMarcaInput, ModeloVeiculoUncheckedCreateWithoutMarcaInput> | ModeloVeiculoCreateWithoutMarcaInput[] | ModeloVeiculoUncheckedCreateWithoutMarcaInput[]
    connectOrCreate?: ModeloVeiculoCreateOrConnectWithoutMarcaInput | ModeloVeiculoCreateOrConnectWithoutMarcaInput[]
    createMany?: ModeloVeiculoCreateManyMarcaInputEnvelope
    connect?: ModeloVeiculoWhereUniqueInput | ModeloVeiculoWhereUniqueInput[]
  }

  export type ModeloVeiculoUncheckedCreateNestedManyWithoutMarcaInput = {
    create?: XOR<ModeloVeiculoCreateWithoutMarcaInput, ModeloVeiculoUncheckedCreateWithoutMarcaInput> | ModeloVeiculoCreateWithoutMarcaInput[] | ModeloVeiculoUncheckedCreateWithoutMarcaInput[]
    connectOrCreate?: ModeloVeiculoCreateOrConnectWithoutMarcaInput | ModeloVeiculoCreateOrConnectWithoutMarcaInput[]
    createMany?: ModeloVeiculoCreateManyMarcaInputEnvelope
    connect?: ModeloVeiculoWhereUniqueInput | ModeloVeiculoWhereUniqueInput[]
  }

  export type ModeloVeiculoUpdateManyWithoutMarcaNestedInput = {
    create?: XOR<ModeloVeiculoCreateWithoutMarcaInput, ModeloVeiculoUncheckedCreateWithoutMarcaInput> | ModeloVeiculoCreateWithoutMarcaInput[] | ModeloVeiculoUncheckedCreateWithoutMarcaInput[]
    connectOrCreate?: ModeloVeiculoCreateOrConnectWithoutMarcaInput | ModeloVeiculoCreateOrConnectWithoutMarcaInput[]
    upsert?: ModeloVeiculoUpsertWithWhereUniqueWithoutMarcaInput | ModeloVeiculoUpsertWithWhereUniqueWithoutMarcaInput[]
    createMany?: ModeloVeiculoCreateManyMarcaInputEnvelope
    set?: ModeloVeiculoWhereUniqueInput | ModeloVeiculoWhereUniqueInput[]
    disconnect?: ModeloVeiculoWhereUniqueInput | ModeloVeiculoWhereUniqueInput[]
    delete?: ModeloVeiculoWhereUniqueInput | ModeloVeiculoWhereUniqueInput[]
    connect?: ModeloVeiculoWhereUniqueInput | ModeloVeiculoWhereUniqueInput[]
    update?: ModeloVeiculoUpdateWithWhereUniqueWithoutMarcaInput | ModeloVeiculoUpdateWithWhereUniqueWithoutMarcaInput[]
    updateMany?: ModeloVeiculoUpdateManyWithWhereWithoutMarcaInput | ModeloVeiculoUpdateManyWithWhereWithoutMarcaInput[]
    deleteMany?: ModeloVeiculoScalarWhereInput | ModeloVeiculoScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ModeloVeiculoUncheckedUpdateManyWithoutMarcaNestedInput = {
    create?: XOR<ModeloVeiculoCreateWithoutMarcaInput, ModeloVeiculoUncheckedCreateWithoutMarcaInput> | ModeloVeiculoCreateWithoutMarcaInput[] | ModeloVeiculoUncheckedCreateWithoutMarcaInput[]
    connectOrCreate?: ModeloVeiculoCreateOrConnectWithoutMarcaInput | ModeloVeiculoCreateOrConnectWithoutMarcaInput[]
    upsert?: ModeloVeiculoUpsertWithWhereUniqueWithoutMarcaInput | ModeloVeiculoUpsertWithWhereUniqueWithoutMarcaInput[]
    createMany?: ModeloVeiculoCreateManyMarcaInputEnvelope
    set?: ModeloVeiculoWhereUniqueInput | ModeloVeiculoWhereUniqueInput[]
    disconnect?: ModeloVeiculoWhereUniqueInput | ModeloVeiculoWhereUniqueInput[]
    delete?: ModeloVeiculoWhereUniqueInput | ModeloVeiculoWhereUniqueInput[]
    connect?: ModeloVeiculoWhereUniqueInput | ModeloVeiculoWhereUniqueInput[]
    update?: ModeloVeiculoUpdateWithWhereUniqueWithoutMarcaInput | ModeloVeiculoUpdateWithWhereUniqueWithoutMarcaInput[]
    updateMany?: ModeloVeiculoUpdateManyWithWhereWithoutMarcaInput | ModeloVeiculoUpdateManyWithWhereWithoutMarcaInput[]
    deleteMany?: ModeloVeiculoScalarWhereInput | ModeloVeiculoScalarWhereInput[]
  }

  export type MarcaVeiculoCreateNestedOneWithoutModelosInput = {
    create?: XOR<MarcaVeiculoCreateWithoutModelosInput, MarcaVeiculoUncheckedCreateWithoutModelosInput>
    connectOrCreate?: MarcaVeiculoCreateOrConnectWithoutModelosInput
    connect?: MarcaVeiculoWhereUniqueInput
  }

  export type VeiculoCreateNestedManyWithoutModeloInput = {
    create?: XOR<VeiculoCreateWithoutModeloInput, VeiculoUncheckedCreateWithoutModeloInput> | VeiculoCreateWithoutModeloInput[] | VeiculoUncheckedCreateWithoutModeloInput[]
    connectOrCreate?: VeiculoCreateOrConnectWithoutModeloInput | VeiculoCreateOrConnectWithoutModeloInput[]
    createMany?: VeiculoCreateManyModeloInputEnvelope
    connect?: VeiculoWhereUniqueInput | VeiculoWhereUniqueInput[]
  }

  export type VeiculoUncheckedCreateNestedManyWithoutModeloInput = {
    create?: XOR<VeiculoCreateWithoutModeloInput, VeiculoUncheckedCreateWithoutModeloInput> | VeiculoCreateWithoutModeloInput[] | VeiculoUncheckedCreateWithoutModeloInput[]
    connectOrCreate?: VeiculoCreateOrConnectWithoutModeloInput | VeiculoCreateOrConnectWithoutModeloInput[]
    createMany?: VeiculoCreateManyModeloInputEnvelope
    connect?: VeiculoWhereUniqueInput | VeiculoWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MarcaVeiculoUpdateOneRequiredWithoutModelosNestedInput = {
    create?: XOR<MarcaVeiculoCreateWithoutModelosInput, MarcaVeiculoUncheckedCreateWithoutModelosInput>
    connectOrCreate?: MarcaVeiculoCreateOrConnectWithoutModelosInput
    upsert?: MarcaVeiculoUpsertWithoutModelosInput
    connect?: MarcaVeiculoWhereUniqueInput
    update?: XOR<XOR<MarcaVeiculoUpdateToOneWithWhereWithoutModelosInput, MarcaVeiculoUpdateWithoutModelosInput>, MarcaVeiculoUncheckedUpdateWithoutModelosInput>
  }

  export type VeiculoUpdateManyWithoutModeloNestedInput = {
    create?: XOR<VeiculoCreateWithoutModeloInput, VeiculoUncheckedCreateWithoutModeloInput> | VeiculoCreateWithoutModeloInput[] | VeiculoUncheckedCreateWithoutModeloInput[]
    connectOrCreate?: VeiculoCreateOrConnectWithoutModeloInput | VeiculoCreateOrConnectWithoutModeloInput[]
    upsert?: VeiculoUpsertWithWhereUniqueWithoutModeloInput | VeiculoUpsertWithWhereUniqueWithoutModeloInput[]
    createMany?: VeiculoCreateManyModeloInputEnvelope
    set?: VeiculoWhereUniqueInput | VeiculoWhereUniqueInput[]
    disconnect?: VeiculoWhereUniqueInput | VeiculoWhereUniqueInput[]
    delete?: VeiculoWhereUniqueInput | VeiculoWhereUniqueInput[]
    connect?: VeiculoWhereUniqueInput | VeiculoWhereUniqueInput[]
    update?: VeiculoUpdateWithWhereUniqueWithoutModeloInput | VeiculoUpdateWithWhereUniqueWithoutModeloInput[]
    updateMany?: VeiculoUpdateManyWithWhereWithoutModeloInput | VeiculoUpdateManyWithWhereWithoutModeloInput[]
    deleteMany?: VeiculoScalarWhereInput | VeiculoScalarWhereInput[]
  }

  export type VeiculoUncheckedUpdateManyWithoutModeloNestedInput = {
    create?: XOR<VeiculoCreateWithoutModeloInput, VeiculoUncheckedCreateWithoutModeloInput> | VeiculoCreateWithoutModeloInput[] | VeiculoUncheckedCreateWithoutModeloInput[]
    connectOrCreate?: VeiculoCreateOrConnectWithoutModeloInput | VeiculoCreateOrConnectWithoutModeloInput[]
    upsert?: VeiculoUpsertWithWhereUniqueWithoutModeloInput | VeiculoUpsertWithWhereUniqueWithoutModeloInput[]
    createMany?: VeiculoCreateManyModeloInputEnvelope
    set?: VeiculoWhereUniqueInput | VeiculoWhereUniqueInput[]
    disconnect?: VeiculoWhereUniqueInput | VeiculoWhereUniqueInput[]
    delete?: VeiculoWhereUniqueInput | VeiculoWhereUniqueInput[]
    connect?: VeiculoWhereUniqueInput | VeiculoWhereUniqueInput[]
    update?: VeiculoUpdateWithWhereUniqueWithoutModeloInput | VeiculoUpdateWithWhereUniqueWithoutModeloInput[]
    updateMany?: VeiculoUpdateManyWithWhereWithoutModeloInput | VeiculoUpdateManyWithWhereWithoutModeloInput[]
    deleteMany?: VeiculoScalarWhereInput | VeiculoScalarWhereInput[]
  }

  export type ItemServicoCreateNestedManyWithoutTipoServicoInput = {
    create?: XOR<ItemServicoCreateWithoutTipoServicoInput, ItemServicoUncheckedCreateWithoutTipoServicoInput> | ItemServicoCreateWithoutTipoServicoInput[] | ItemServicoUncheckedCreateWithoutTipoServicoInput[]
    connectOrCreate?: ItemServicoCreateOrConnectWithoutTipoServicoInput | ItemServicoCreateOrConnectWithoutTipoServicoInput[]
    createMany?: ItemServicoCreateManyTipoServicoInputEnvelope
    connect?: ItemServicoWhereUniqueInput | ItemServicoWhereUniqueInput[]
  }

  export type ItemServicoUncheckedCreateNestedManyWithoutTipoServicoInput = {
    create?: XOR<ItemServicoCreateWithoutTipoServicoInput, ItemServicoUncheckedCreateWithoutTipoServicoInput> | ItemServicoCreateWithoutTipoServicoInput[] | ItemServicoUncheckedCreateWithoutTipoServicoInput[]
    connectOrCreate?: ItemServicoCreateOrConnectWithoutTipoServicoInput | ItemServicoCreateOrConnectWithoutTipoServicoInput[]
    createMany?: ItemServicoCreateManyTipoServicoInputEnvelope
    connect?: ItemServicoWhereUniqueInput | ItemServicoWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ItemServicoUpdateManyWithoutTipoServicoNestedInput = {
    create?: XOR<ItemServicoCreateWithoutTipoServicoInput, ItemServicoUncheckedCreateWithoutTipoServicoInput> | ItemServicoCreateWithoutTipoServicoInput[] | ItemServicoUncheckedCreateWithoutTipoServicoInput[]
    connectOrCreate?: ItemServicoCreateOrConnectWithoutTipoServicoInput | ItemServicoCreateOrConnectWithoutTipoServicoInput[]
    upsert?: ItemServicoUpsertWithWhereUniqueWithoutTipoServicoInput | ItemServicoUpsertWithWhereUniqueWithoutTipoServicoInput[]
    createMany?: ItemServicoCreateManyTipoServicoInputEnvelope
    set?: ItemServicoWhereUniqueInput | ItemServicoWhereUniqueInput[]
    disconnect?: ItemServicoWhereUniqueInput | ItemServicoWhereUniqueInput[]
    delete?: ItemServicoWhereUniqueInput | ItemServicoWhereUniqueInput[]
    connect?: ItemServicoWhereUniqueInput | ItemServicoWhereUniqueInput[]
    update?: ItemServicoUpdateWithWhereUniqueWithoutTipoServicoInput | ItemServicoUpdateWithWhereUniqueWithoutTipoServicoInput[]
    updateMany?: ItemServicoUpdateManyWithWhereWithoutTipoServicoInput | ItemServicoUpdateManyWithWhereWithoutTipoServicoInput[]
    deleteMany?: ItemServicoScalarWhereInput | ItemServicoScalarWhereInput[]
  }

  export type ItemServicoUncheckedUpdateManyWithoutTipoServicoNestedInput = {
    create?: XOR<ItemServicoCreateWithoutTipoServicoInput, ItemServicoUncheckedCreateWithoutTipoServicoInput> | ItemServicoCreateWithoutTipoServicoInput[] | ItemServicoUncheckedCreateWithoutTipoServicoInput[]
    connectOrCreate?: ItemServicoCreateOrConnectWithoutTipoServicoInput | ItemServicoCreateOrConnectWithoutTipoServicoInput[]
    upsert?: ItemServicoUpsertWithWhereUniqueWithoutTipoServicoInput | ItemServicoUpsertWithWhereUniqueWithoutTipoServicoInput[]
    createMany?: ItemServicoCreateManyTipoServicoInputEnvelope
    set?: ItemServicoWhereUniqueInput | ItemServicoWhereUniqueInput[]
    disconnect?: ItemServicoWhereUniqueInput | ItemServicoWhereUniqueInput[]
    delete?: ItemServicoWhereUniqueInput | ItemServicoWhereUniqueInput[]
    connect?: ItemServicoWhereUniqueInput | ItemServicoWhereUniqueInput[]
    update?: ItemServicoUpdateWithWhereUniqueWithoutTipoServicoInput | ItemServicoUpdateWithWhereUniqueWithoutTipoServicoInput[]
    updateMany?: ItemServicoUpdateManyWithWhereWithoutTipoServicoInput | ItemServicoUpdateManyWithWhereWithoutTipoServicoInput[]
    deleteMany?: ItemServicoScalarWhereInput | ItemServicoScalarWhereInput[]
  }

  export type VeiculoCreateNestedManyWithoutClienteInput = {
    create?: XOR<VeiculoCreateWithoutClienteInput, VeiculoUncheckedCreateWithoutClienteInput> | VeiculoCreateWithoutClienteInput[] | VeiculoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: VeiculoCreateOrConnectWithoutClienteInput | VeiculoCreateOrConnectWithoutClienteInput[]
    createMany?: VeiculoCreateManyClienteInputEnvelope
    connect?: VeiculoWhereUniqueInput | VeiculoWhereUniqueInput[]
  }

  export type VeiculoUncheckedCreateNestedManyWithoutClienteInput = {
    create?: XOR<VeiculoCreateWithoutClienteInput, VeiculoUncheckedCreateWithoutClienteInput> | VeiculoCreateWithoutClienteInput[] | VeiculoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: VeiculoCreateOrConnectWithoutClienteInput | VeiculoCreateOrConnectWithoutClienteInput[]
    createMany?: VeiculoCreateManyClienteInputEnvelope
    connect?: VeiculoWhereUniqueInput | VeiculoWhereUniqueInput[]
  }

  export type VeiculoUpdateManyWithoutClienteNestedInput = {
    create?: XOR<VeiculoCreateWithoutClienteInput, VeiculoUncheckedCreateWithoutClienteInput> | VeiculoCreateWithoutClienteInput[] | VeiculoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: VeiculoCreateOrConnectWithoutClienteInput | VeiculoCreateOrConnectWithoutClienteInput[]
    upsert?: VeiculoUpsertWithWhereUniqueWithoutClienteInput | VeiculoUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: VeiculoCreateManyClienteInputEnvelope
    set?: VeiculoWhereUniqueInput | VeiculoWhereUniqueInput[]
    disconnect?: VeiculoWhereUniqueInput | VeiculoWhereUniqueInput[]
    delete?: VeiculoWhereUniqueInput | VeiculoWhereUniqueInput[]
    connect?: VeiculoWhereUniqueInput | VeiculoWhereUniqueInput[]
    update?: VeiculoUpdateWithWhereUniqueWithoutClienteInput | VeiculoUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: VeiculoUpdateManyWithWhereWithoutClienteInput | VeiculoUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: VeiculoScalarWhereInput | VeiculoScalarWhereInput[]
  }

  export type VeiculoUncheckedUpdateManyWithoutClienteNestedInput = {
    create?: XOR<VeiculoCreateWithoutClienteInput, VeiculoUncheckedCreateWithoutClienteInput> | VeiculoCreateWithoutClienteInput[] | VeiculoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: VeiculoCreateOrConnectWithoutClienteInput | VeiculoCreateOrConnectWithoutClienteInput[]
    upsert?: VeiculoUpsertWithWhereUniqueWithoutClienteInput | VeiculoUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: VeiculoCreateManyClienteInputEnvelope
    set?: VeiculoWhereUniqueInput | VeiculoWhereUniqueInput[]
    disconnect?: VeiculoWhereUniqueInput | VeiculoWhereUniqueInput[]
    delete?: VeiculoWhereUniqueInput | VeiculoWhereUniqueInput[]
    connect?: VeiculoWhereUniqueInput | VeiculoWhereUniqueInput[]
    update?: VeiculoUpdateWithWhereUniqueWithoutClienteInput | VeiculoUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: VeiculoUpdateManyWithWhereWithoutClienteInput | VeiculoUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: VeiculoScalarWhereInput | VeiculoScalarWhereInput[]
  }

  export type OrdemServicoCreateNestedManyWithoutVeiculoInput = {
    create?: XOR<OrdemServicoCreateWithoutVeiculoInput, OrdemServicoUncheckedCreateWithoutVeiculoInput> | OrdemServicoCreateWithoutVeiculoInput[] | OrdemServicoUncheckedCreateWithoutVeiculoInput[]
    connectOrCreate?: OrdemServicoCreateOrConnectWithoutVeiculoInput | OrdemServicoCreateOrConnectWithoutVeiculoInput[]
    createMany?: OrdemServicoCreateManyVeiculoInputEnvelope
    connect?: OrdemServicoWhereUniqueInput | OrdemServicoWhereUniqueInput[]
  }

  export type ClienteCreateNestedOneWithoutVeiculosInput = {
    create?: XOR<ClienteCreateWithoutVeiculosInput, ClienteUncheckedCreateWithoutVeiculosInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutVeiculosInput
    connect?: ClienteWhereUniqueInput
  }

  export type ModeloVeiculoCreateNestedOneWithoutVeiculosInput = {
    create?: XOR<ModeloVeiculoCreateWithoutVeiculosInput, ModeloVeiculoUncheckedCreateWithoutVeiculosInput>
    connectOrCreate?: ModeloVeiculoCreateOrConnectWithoutVeiculosInput
    connect?: ModeloVeiculoWhereUniqueInput
  }

  export type OrdemServicoUncheckedCreateNestedManyWithoutVeiculoInput = {
    create?: XOR<OrdemServicoCreateWithoutVeiculoInput, OrdemServicoUncheckedCreateWithoutVeiculoInput> | OrdemServicoCreateWithoutVeiculoInput[] | OrdemServicoUncheckedCreateWithoutVeiculoInput[]
    connectOrCreate?: OrdemServicoCreateOrConnectWithoutVeiculoInput | OrdemServicoCreateOrConnectWithoutVeiculoInput[]
    createMany?: OrdemServicoCreateManyVeiculoInputEnvelope
    connect?: OrdemServicoWhereUniqueInput | OrdemServicoWhereUniqueInput[]
  }

  export type OrdemServicoUpdateManyWithoutVeiculoNestedInput = {
    create?: XOR<OrdemServicoCreateWithoutVeiculoInput, OrdemServicoUncheckedCreateWithoutVeiculoInput> | OrdemServicoCreateWithoutVeiculoInput[] | OrdemServicoUncheckedCreateWithoutVeiculoInput[]
    connectOrCreate?: OrdemServicoCreateOrConnectWithoutVeiculoInput | OrdemServicoCreateOrConnectWithoutVeiculoInput[]
    upsert?: OrdemServicoUpsertWithWhereUniqueWithoutVeiculoInput | OrdemServicoUpsertWithWhereUniqueWithoutVeiculoInput[]
    createMany?: OrdemServicoCreateManyVeiculoInputEnvelope
    set?: OrdemServicoWhereUniqueInput | OrdemServicoWhereUniqueInput[]
    disconnect?: OrdemServicoWhereUniqueInput | OrdemServicoWhereUniqueInput[]
    delete?: OrdemServicoWhereUniqueInput | OrdemServicoWhereUniqueInput[]
    connect?: OrdemServicoWhereUniqueInput | OrdemServicoWhereUniqueInput[]
    update?: OrdemServicoUpdateWithWhereUniqueWithoutVeiculoInput | OrdemServicoUpdateWithWhereUniqueWithoutVeiculoInput[]
    updateMany?: OrdemServicoUpdateManyWithWhereWithoutVeiculoInput | OrdemServicoUpdateManyWithWhereWithoutVeiculoInput[]
    deleteMany?: OrdemServicoScalarWhereInput | OrdemServicoScalarWhereInput[]
  }

  export type ClienteUpdateOneRequiredWithoutVeiculosNestedInput = {
    create?: XOR<ClienteCreateWithoutVeiculosInput, ClienteUncheckedCreateWithoutVeiculosInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutVeiculosInput
    upsert?: ClienteUpsertWithoutVeiculosInput
    connect?: ClienteWhereUniqueInput
    update?: XOR<XOR<ClienteUpdateToOneWithWhereWithoutVeiculosInput, ClienteUpdateWithoutVeiculosInput>, ClienteUncheckedUpdateWithoutVeiculosInput>
  }

  export type ModeloVeiculoUpdateOneRequiredWithoutVeiculosNestedInput = {
    create?: XOR<ModeloVeiculoCreateWithoutVeiculosInput, ModeloVeiculoUncheckedCreateWithoutVeiculosInput>
    connectOrCreate?: ModeloVeiculoCreateOrConnectWithoutVeiculosInput
    upsert?: ModeloVeiculoUpsertWithoutVeiculosInput
    connect?: ModeloVeiculoWhereUniqueInput
    update?: XOR<XOR<ModeloVeiculoUpdateToOneWithWhereWithoutVeiculosInput, ModeloVeiculoUpdateWithoutVeiculosInput>, ModeloVeiculoUncheckedUpdateWithoutVeiculosInput>
  }

  export type OrdemServicoUncheckedUpdateManyWithoutVeiculoNestedInput = {
    create?: XOR<OrdemServicoCreateWithoutVeiculoInput, OrdemServicoUncheckedCreateWithoutVeiculoInput> | OrdemServicoCreateWithoutVeiculoInput[] | OrdemServicoUncheckedCreateWithoutVeiculoInput[]
    connectOrCreate?: OrdemServicoCreateOrConnectWithoutVeiculoInput | OrdemServicoCreateOrConnectWithoutVeiculoInput[]
    upsert?: OrdemServicoUpsertWithWhereUniqueWithoutVeiculoInput | OrdemServicoUpsertWithWhereUniqueWithoutVeiculoInput[]
    createMany?: OrdemServicoCreateManyVeiculoInputEnvelope
    set?: OrdemServicoWhereUniqueInput | OrdemServicoWhereUniqueInput[]
    disconnect?: OrdemServicoWhereUniqueInput | OrdemServicoWhereUniqueInput[]
    delete?: OrdemServicoWhereUniqueInput | OrdemServicoWhereUniqueInput[]
    connect?: OrdemServicoWhereUniqueInput | OrdemServicoWhereUniqueInput[]
    update?: OrdemServicoUpdateWithWhereUniqueWithoutVeiculoInput | OrdemServicoUpdateWithWhereUniqueWithoutVeiculoInput[]
    updateMany?: OrdemServicoUpdateManyWithWhereWithoutVeiculoInput | OrdemServicoUpdateManyWithWhereWithoutVeiculoInput[]
    deleteMany?: OrdemServicoScalarWhereInput | OrdemServicoScalarWhereInput[]
  }

  export type ItemPecaCreateNestedManyWithoutOrdemServicoInput = {
    create?: XOR<ItemPecaCreateWithoutOrdemServicoInput, ItemPecaUncheckedCreateWithoutOrdemServicoInput> | ItemPecaCreateWithoutOrdemServicoInput[] | ItemPecaUncheckedCreateWithoutOrdemServicoInput[]
    connectOrCreate?: ItemPecaCreateOrConnectWithoutOrdemServicoInput | ItemPecaCreateOrConnectWithoutOrdemServicoInput[]
    createMany?: ItemPecaCreateManyOrdemServicoInputEnvelope
    connect?: ItemPecaWhereUniqueInput | ItemPecaWhereUniqueInput[]
  }

  export type ItemServicoCreateNestedManyWithoutOrdemServicoInput = {
    create?: XOR<ItemServicoCreateWithoutOrdemServicoInput, ItemServicoUncheckedCreateWithoutOrdemServicoInput> | ItemServicoCreateWithoutOrdemServicoInput[] | ItemServicoUncheckedCreateWithoutOrdemServicoInput[]
    connectOrCreate?: ItemServicoCreateOrConnectWithoutOrdemServicoInput | ItemServicoCreateOrConnectWithoutOrdemServicoInput[]
    createMany?: ItemServicoCreateManyOrdemServicoInputEnvelope
    connect?: ItemServicoWhereUniqueInput | ItemServicoWhereUniqueInput[]
  }

  export type VeiculoCreateNestedOneWithoutOrdensServicoInput = {
    create?: XOR<VeiculoCreateWithoutOrdensServicoInput, VeiculoUncheckedCreateWithoutOrdensServicoInput>
    connectOrCreate?: VeiculoCreateOrConnectWithoutOrdensServicoInput
    connect?: VeiculoWhereUniqueInput
  }

  export type ItemPecaUncheckedCreateNestedManyWithoutOrdemServicoInput = {
    create?: XOR<ItemPecaCreateWithoutOrdemServicoInput, ItemPecaUncheckedCreateWithoutOrdemServicoInput> | ItemPecaCreateWithoutOrdemServicoInput[] | ItemPecaUncheckedCreateWithoutOrdemServicoInput[]
    connectOrCreate?: ItemPecaCreateOrConnectWithoutOrdemServicoInput | ItemPecaCreateOrConnectWithoutOrdemServicoInput[]
    createMany?: ItemPecaCreateManyOrdemServicoInputEnvelope
    connect?: ItemPecaWhereUniqueInput | ItemPecaWhereUniqueInput[]
  }

  export type ItemServicoUncheckedCreateNestedManyWithoutOrdemServicoInput = {
    create?: XOR<ItemServicoCreateWithoutOrdemServicoInput, ItemServicoUncheckedCreateWithoutOrdemServicoInput> | ItemServicoCreateWithoutOrdemServicoInput[] | ItemServicoUncheckedCreateWithoutOrdemServicoInput[]
    connectOrCreate?: ItemServicoCreateOrConnectWithoutOrdemServicoInput | ItemServicoCreateOrConnectWithoutOrdemServicoInput[]
    createMany?: ItemServicoCreateManyOrdemServicoInputEnvelope
    connect?: ItemServicoWhereUniqueInput | ItemServicoWhereUniqueInput[]
  }

  export type ItemPecaUpdateManyWithoutOrdemServicoNestedInput = {
    create?: XOR<ItemPecaCreateWithoutOrdemServicoInput, ItemPecaUncheckedCreateWithoutOrdemServicoInput> | ItemPecaCreateWithoutOrdemServicoInput[] | ItemPecaUncheckedCreateWithoutOrdemServicoInput[]
    connectOrCreate?: ItemPecaCreateOrConnectWithoutOrdemServicoInput | ItemPecaCreateOrConnectWithoutOrdemServicoInput[]
    upsert?: ItemPecaUpsertWithWhereUniqueWithoutOrdemServicoInput | ItemPecaUpsertWithWhereUniqueWithoutOrdemServicoInput[]
    createMany?: ItemPecaCreateManyOrdemServicoInputEnvelope
    set?: ItemPecaWhereUniqueInput | ItemPecaWhereUniqueInput[]
    disconnect?: ItemPecaWhereUniqueInput | ItemPecaWhereUniqueInput[]
    delete?: ItemPecaWhereUniqueInput | ItemPecaWhereUniqueInput[]
    connect?: ItemPecaWhereUniqueInput | ItemPecaWhereUniqueInput[]
    update?: ItemPecaUpdateWithWhereUniqueWithoutOrdemServicoInput | ItemPecaUpdateWithWhereUniqueWithoutOrdemServicoInput[]
    updateMany?: ItemPecaUpdateManyWithWhereWithoutOrdemServicoInput | ItemPecaUpdateManyWithWhereWithoutOrdemServicoInput[]
    deleteMany?: ItemPecaScalarWhereInput | ItemPecaScalarWhereInput[]
  }

  export type ItemServicoUpdateManyWithoutOrdemServicoNestedInput = {
    create?: XOR<ItemServicoCreateWithoutOrdemServicoInput, ItemServicoUncheckedCreateWithoutOrdemServicoInput> | ItemServicoCreateWithoutOrdemServicoInput[] | ItemServicoUncheckedCreateWithoutOrdemServicoInput[]
    connectOrCreate?: ItemServicoCreateOrConnectWithoutOrdemServicoInput | ItemServicoCreateOrConnectWithoutOrdemServicoInput[]
    upsert?: ItemServicoUpsertWithWhereUniqueWithoutOrdemServicoInput | ItemServicoUpsertWithWhereUniqueWithoutOrdemServicoInput[]
    createMany?: ItemServicoCreateManyOrdemServicoInputEnvelope
    set?: ItemServicoWhereUniqueInput | ItemServicoWhereUniqueInput[]
    disconnect?: ItemServicoWhereUniqueInput | ItemServicoWhereUniqueInput[]
    delete?: ItemServicoWhereUniqueInput | ItemServicoWhereUniqueInput[]
    connect?: ItemServicoWhereUniqueInput | ItemServicoWhereUniqueInput[]
    update?: ItemServicoUpdateWithWhereUniqueWithoutOrdemServicoInput | ItemServicoUpdateWithWhereUniqueWithoutOrdemServicoInput[]
    updateMany?: ItemServicoUpdateManyWithWhereWithoutOrdemServicoInput | ItemServicoUpdateManyWithWhereWithoutOrdemServicoInput[]
    deleteMany?: ItemServicoScalarWhereInput | ItemServicoScalarWhereInput[]
  }

  export type VeiculoUpdateOneRequiredWithoutOrdensServicoNestedInput = {
    create?: XOR<VeiculoCreateWithoutOrdensServicoInput, VeiculoUncheckedCreateWithoutOrdensServicoInput>
    connectOrCreate?: VeiculoCreateOrConnectWithoutOrdensServicoInput
    upsert?: VeiculoUpsertWithoutOrdensServicoInput
    connect?: VeiculoWhereUniqueInput
    update?: XOR<XOR<VeiculoUpdateToOneWithWhereWithoutOrdensServicoInput, VeiculoUpdateWithoutOrdensServicoInput>, VeiculoUncheckedUpdateWithoutOrdensServicoInput>
  }

  export type ItemPecaUncheckedUpdateManyWithoutOrdemServicoNestedInput = {
    create?: XOR<ItemPecaCreateWithoutOrdemServicoInput, ItemPecaUncheckedCreateWithoutOrdemServicoInput> | ItemPecaCreateWithoutOrdemServicoInput[] | ItemPecaUncheckedCreateWithoutOrdemServicoInput[]
    connectOrCreate?: ItemPecaCreateOrConnectWithoutOrdemServicoInput | ItemPecaCreateOrConnectWithoutOrdemServicoInput[]
    upsert?: ItemPecaUpsertWithWhereUniqueWithoutOrdemServicoInput | ItemPecaUpsertWithWhereUniqueWithoutOrdemServicoInput[]
    createMany?: ItemPecaCreateManyOrdemServicoInputEnvelope
    set?: ItemPecaWhereUniqueInput | ItemPecaWhereUniqueInput[]
    disconnect?: ItemPecaWhereUniqueInput | ItemPecaWhereUniqueInput[]
    delete?: ItemPecaWhereUniqueInput | ItemPecaWhereUniqueInput[]
    connect?: ItemPecaWhereUniqueInput | ItemPecaWhereUniqueInput[]
    update?: ItemPecaUpdateWithWhereUniqueWithoutOrdemServicoInput | ItemPecaUpdateWithWhereUniqueWithoutOrdemServicoInput[]
    updateMany?: ItemPecaUpdateManyWithWhereWithoutOrdemServicoInput | ItemPecaUpdateManyWithWhereWithoutOrdemServicoInput[]
    deleteMany?: ItemPecaScalarWhereInput | ItemPecaScalarWhereInput[]
  }

  export type ItemServicoUncheckedUpdateManyWithoutOrdemServicoNestedInput = {
    create?: XOR<ItemServicoCreateWithoutOrdemServicoInput, ItemServicoUncheckedCreateWithoutOrdemServicoInput> | ItemServicoCreateWithoutOrdemServicoInput[] | ItemServicoUncheckedCreateWithoutOrdemServicoInput[]
    connectOrCreate?: ItemServicoCreateOrConnectWithoutOrdemServicoInput | ItemServicoCreateOrConnectWithoutOrdemServicoInput[]
    upsert?: ItemServicoUpsertWithWhereUniqueWithoutOrdemServicoInput | ItemServicoUpsertWithWhereUniqueWithoutOrdemServicoInput[]
    createMany?: ItemServicoCreateManyOrdemServicoInputEnvelope
    set?: ItemServicoWhereUniqueInput | ItemServicoWhereUniqueInput[]
    disconnect?: ItemServicoWhereUniqueInput | ItemServicoWhereUniqueInput[]
    delete?: ItemServicoWhereUniqueInput | ItemServicoWhereUniqueInput[]
    connect?: ItemServicoWhereUniqueInput | ItemServicoWhereUniqueInput[]
    update?: ItemServicoUpdateWithWhereUniqueWithoutOrdemServicoInput | ItemServicoUpdateWithWhereUniqueWithoutOrdemServicoInput[]
    updateMany?: ItemServicoUpdateManyWithWhereWithoutOrdemServicoInput | ItemServicoUpdateManyWithWhereWithoutOrdemServicoInput[]
    deleteMany?: ItemServicoScalarWhereInput | ItemServicoScalarWhereInput[]
  }

  export type OrdemServicoCreateNestedOneWithoutItensServicoInput = {
    create?: XOR<OrdemServicoCreateWithoutItensServicoInput, OrdemServicoUncheckedCreateWithoutItensServicoInput>
    connectOrCreate?: OrdemServicoCreateOrConnectWithoutItensServicoInput
    connect?: OrdemServicoWhereUniqueInput
  }

  export type TipoServicoCreateNestedOneWithoutItemServicoInput = {
    create?: XOR<TipoServicoCreateWithoutItemServicoInput, TipoServicoUncheckedCreateWithoutItemServicoInput>
    connectOrCreate?: TipoServicoCreateOrConnectWithoutItemServicoInput
    connect?: TipoServicoWhereUniqueInput
  }

  export type OrdemServicoUpdateOneRequiredWithoutItensServicoNestedInput = {
    create?: XOR<OrdemServicoCreateWithoutItensServicoInput, OrdemServicoUncheckedCreateWithoutItensServicoInput>
    connectOrCreate?: OrdemServicoCreateOrConnectWithoutItensServicoInput
    upsert?: OrdemServicoUpsertWithoutItensServicoInput
    connect?: OrdemServicoWhereUniqueInput
    update?: XOR<XOR<OrdemServicoUpdateToOneWithWhereWithoutItensServicoInput, OrdemServicoUpdateWithoutItensServicoInput>, OrdemServicoUncheckedUpdateWithoutItensServicoInput>
  }

  export type TipoServicoUpdateOneRequiredWithoutItemServicoNestedInput = {
    create?: XOR<TipoServicoCreateWithoutItemServicoInput, TipoServicoUncheckedCreateWithoutItemServicoInput>
    connectOrCreate?: TipoServicoCreateOrConnectWithoutItemServicoInput
    upsert?: TipoServicoUpsertWithoutItemServicoInput
    connect?: TipoServicoWhereUniqueInput
    update?: XOR<XOR<TipoServicoUpdateToOneWithWhereWithoutItemServicoInput, TipoServicoUpdateWithoutItemServicoInput>, TipoServicoUncheckedUpdateWithoutItemServicoInput>
  }

  export type OrdemServicoCreateNestedOneWithoutItensPecaInput = {
    create?: XOR<OrdemServicoCreateWithoutItensPecaInput, OrdemServicoUncheckedCreateWithoutItensPecaInput>
    connectOrCreate?: OrdemServicoCreateOrConnectWithoutItensPecaInput
    connect?: OrdemServicoWhereUniqueInput
  }

  export type OrdemServicoUpdateOneRequiredWithoutItensPecaNestedInput = {
    create?: XOR<OrdemServicoCreateWithoutItensPecaInput, OrdemServicoUncheckedCreateWithoutItensPecaInput>
    connectOrCreate?: OrdemServicoCreateOrConnectWithoutItensPecaInput
    upsert?: OrdemServicoUpsertWithoutItensPecaInput
    connect?: OrdemServicoWhereUniqueInput
    update?: XOR<XOR<OrdemServicoUpdateToOneWithWhereWithoutItensPecaInput, OrdemServicoUpdateWithoutItensPecaInput>, OrdemServicoUncheckedUpdateWithoutItensPecaInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ModeloVeiculoCreateWithoutMarcaInput = {
    nome: string
    createdAt?: Date | string
    updatedAt?: Date | string
    anoFim?: number | null
    anoInicio?: number | null
    veiculos?: VeiculoCreateNestedManyWithoutModeloInput
  }

  export type ModeloVeiculoUncheckedCreateWithoutMarcaInput = {
    id?: number
    nome: string
    createdAt?: Date | string
    updatedAt?: Date | string
    anoFim?: number | null
    anoInicio?: number | null
    veiculos?: VeiculoUncheckedCreateNestedManyWithoutModeloInput
  }

  export type ModeloVeiculoCreateOrConnectWithoutMarcaInput = {
    where: ModeloVeiculoWhereUniqueInput
    create: XOR<ModeloVeiculoCreateWithoutMarcaInput, ModeloVeiculoUncheckedCreateWithoutMarcaInput>
  }

  export type ModeloVeiculoCreateManyMarcaInputEnvelope = {
    data: ModeloVeiculoCreateManyMarcaInput | ModeloVeiculoCreateManyMarcaInput[]
    skipDuplicates?: boolean
  }

  export type ModeloVeiculoUpsertWithWhereUniqueWithoutMarcaInput = {
    where: ModeloVeiculoWhereUniqueInput
    update: XOR<ModeloVeiculoUpdateWithoutMarcaInput, ModeloVeiculoUncheckedUpdateWithoutMarcaInput>
    create: XOR<ModeloVeiculoCreateWithoutMarcaInput, ModeloVeiculoUncheckedCreateWithoutMarcaInput>
  }

  export type ModeloVeiculoUpdateWithWhereUniqueWithoutMarcaInput = {
    where: ModeloVeiculoWhereUniqueInput
    data: XOR<ModeloVeiculoUpdateWithoutMarcaInput, ModeloVeiculoUncheckedUpdateWithoutMarcaInput>
  }

  export type ModeloVeiculoUpdateManyWithWhereWithoutMarcaInput = {
    where: ModeloVeiculoScalarWhereInput
    data: XOR<ModeloVeiculoUpdateManyMutationInput, ModeloVeiculoUncheckedUpdateManyWithoutMarcaInput>
  }

  export type ModeloVeiculoScalarWhereInput = {
    AND?: ModeloVeiculoScalarWhereInput | ModeloVeiculoScalarWhereInput[]
    OR?: ModeloVeiculoScalarWhereInput[]
    NOT?: ModeloVeiculoScalarWhereInput | ModeloVeiculoScalarWhereInput[]
    id?: IntFilter<"ModeloVeiculo"> | number
    nome?: StringFilter<"ModeloVeiculo"> | string
    marcaId?: IntFilter<"ModeloVeiculo"> | number
    createdAt?: DateTimeFilter<"ModeloVeiculo"> | Date | string
    updatedAt?: DateTimeFilter<"ModeloVeiculo"> | Date | string
    anoFim?: IntNullableFilter<"ModeloVeiculo"> | number | null
    anoInicio?: IntNullableFilter<"ModeloVeiculo"> | number | null
  }

  export type MarcaVeiculoCreateWithoutModelosInput = {
    nome: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MarcaVeiculoUncheckedCreateWithoutModelosInput = {
    id?: number
    nome: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MarcaVeiculoCreateOrConnectWithoutModelosInput = {
    where: MarcaVeiculoWhereUniqueInput
    create: XOR<MarcaVeiculoCreateWithoutModelosInput, MarcaVeiculoUncheckedCreateWithoutModelosInput>
  }

  export type VeiculoCreateWithoutModeloInput = {
    placa: string
    ano: number
    cor: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ordensServico?: OrdemServicoCreateNestedManyWithoutVeiculoInput
    cliente: ClienteCreateNestedOneWithoutVeiculosInput
  }

  export type VeiculoUncheckedCreateWithoutModeloInput = {
    id?: number
    placa: string
    clienteId: number
    ano: number
    cor: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ordensServico?: OrdemServicoUncheckedCreateNestedManyWithoutVeiculoInput
  }

  export type VeiculoCreateOrConnectWithoutModeloInput = {
    where: VeiculoWhereUniqueInput
    create: XOR<VeiculoCreateWithoutModeloInput, VeiculoUncheckedCreateWithoutModeloInput>
  }

  export type VeiculoCreateManyModeloInputEnvelope = {
    data: VeiculoCreateManyModeloInput | VeiculoCreateManyModeloInput[]
    skipDuplicates?: boolean
  }

  export type MarcaVeiculoUpsertWithoutModelosInput = {
    update: XOR<MarcaVeiculoUpdateWithoutModelosInput, MarcaVeiculoUncheckedUpdateWithoutModelosInput>
    create: XOR<MarcaVeiculoCreateWithoutModelosInput, MarcaVeiculoUncheckedCreateWithoutModelosInput>
    where?: MarcaVeiculoWhereInput
  }

  export type MarcaVeiculoUpdateToOneWithWhereWithoutModelosInput = {
    where?: MarcaVeiculoWhereInput
    data: XOR<MarcaVeiculoUpdateWithoutModelosInput, MarcaVeiculoUncheckedUpdateWithoutModelosInput>
  }

  export type MarcaVeiculoUpdateWithoutModelosInput = {
    nome?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MarcaVeiculoUncheckedUpdateWithoutModelosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VeiculoUpsertWithWhereUniqueWithoutModeloInput = {
    where: VeiculoWhereUniqueInput
    update: XOR<VeiculoUpdateWithoutModeloInput, VeiculoUncheckedUpdateWithoutModeloInput>
    create: XOR<VeiculoCreateWithoutModeloInput, VeiculoUncheckedCreateWithoutModeloInput>
  }

  export type VeiculoUpdateWithWhereUniqueWithoutModeloInput = {
    where: VeiculoWhereUniqueInput
    data: XOR<VeiculoUpdateWithoutModeloInput, VeiculoUncheckedUpdateWithoutModeloInput>
  }

  export type VeiculoUpdateManyWithWhereWithoutModeloInput = {
    where: VeiculoScalarWhereInput
    data: XOR<VeiculoUpdateManyMutationInput, VeiculoUncheckedUpdateManyWithoutModeloInput>
  }

  export type VeiculoScalarWhereInput = {
    AND?: VeiculoScalarWhereInput | VeiculoScalarWhereInput[]
    OR?: VeiculoScalarWhereInput[]
    NOT?: VeiculoScalarWhereInput | VeiculoScalarWhereInput[]
    id?: IntFilter<"Veiculo"> | number
    placa?: StringFilter<"Veiculo"> | string
    clienteId?: IntFilter<"Veiculo"> | number
    modeloId?: IntFilter<"Veiculo"> | number
    ano?: IntFilter<"Veiculo"> | number
    cor?: StringFilter<"Veiculo"> | string
    createdAt?: DateTimeFilter<"Veiculo"> | Date | string
    updatedAt?: DateTimeFilter<"Veiculo"> | Date | string
  }

  export type ItemServicoCreateWithoutTipoServicoInput = {
    quantidade?: number
    valorUnitario: number
    valorTotal: number
    createdAt?: Date | string
    updatedAt?: Date | string
    ordemServico: OrdemServicoCreateNestedOneWithoutItensServicoInput
  }

  export type ItemServicoUncheckedCreateWithoutTipoServicoInput = {
    id?: number
    ordemServicoId: number
    quantidade?: number
    valorUnitario: number
    valorTotal: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ItemServicoCreateOrConnectWithoutTipoServicoInput = {
    where: ItemServicoWhereUniqueInput
    create: XOR<ItemServicoCreateWithoutTipoServicoInput, ItemServicoUncheckedCreateWithoutTipoServicoInput>
  }

  export type ItemServicoCreateManyTipoServicoInputEnvelope = {
    data: ItemServicoCreateManyTipoServicoInput | ItemServicoCreateManyTipoServicoInput[]
    skipDuplicates?: boolean
  }

  export type ItemServicoUpsertWithWhereUniqueWithoutTipoServicoInput = {
    where: ItemServicoWhereUniqueInput
    update: XOR<ItemServicoUpdateWithoutTipoServicoInput, ItemServicoUncheckedUpdateWithoutTipoServicoInput>
    create: XOR<ItemServicoCreateWithoutTipoServicoInput, ItemServicoUncheckedCreateWithoutTipoServicoInput>
  }

  export type ItemServicoUpdateWithWhereUniqueWithoutTipoServicoInput = {
    where: ItemServicoWhereUniqueInput
    data: XOR<ItemServicoUpdateWithoutTipoServicoInput, ItemServicoUncheckedUpdateWithoutTipoServicoInput>
  }

  export type ItemServicoUpdateManyWithWhereWithoutTipoServicoInput = {
    where: ItemServicoScalarWhereInput
    data: XOR<ItemServicoUpdateManyMutationInput, ItemServicoUncheckedUpdateManyWithoutTipoServicoInput>
  }

  export type ItemServicoScalarWhereInput = {
    AND?: ItemServicoScalarWhereInput | ItemServicoScalarWhereInput[]
    OR?: ItemServicoScalarWhereInput[]
    NOT?: ItemServicoScalarWhereInput | ItemServicoScalarWhereInput[]
    id?: IntFilter<"ItemServico"> | number
    ordemServicoId?: IntFilter<"ItemServico"> | number
    tipoServicoId?: IntFilter<"ItemServico"> | number
    quantidade?: IntFilter<"ItemServico"> | number
    valorUnitario?: FloatFilter<"ItemServico"> | number
    valorTotal?: FloatFilter<"ItemServico"> | number
    createdAt?: DateTimeFilter<"ItemServico"> | Date | string
    updatedAt?: DateTimeFilter<"ItemServico"> | Date | string
  }

  export type VeiculoCreateWithoutClienteInput = {
    placa: string
    ano: number
    cor: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ordensServico?: OrdemServicoCreateNestedManyWithoutVeiculoInput
    modelo: ModeloVeiculoCreateNestedOneWithoutVeiculosInput
  }

  export type VeiculoUncheckedCreateWithoutClienteInput = {
    id?: number
    placa: string
    modeloId: number
    ano: number
    cor: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ordensServico?: OrdemServicoUncheckedCreateNestedManyWithoutVeiculoInput
  }

  export type VeiculoCreateOrConnectWithoutClienteInput = {
    where: VeiculoWhereUniqueInput
    create: XOR<VeiculoCreateWithoutClienteInput, VeiculoUncheckedCreateWithoutClienteInput>
  }

  export type VeiculoCreateManyClienteInputEnvelope = {
    data: VeiculoCreateManyClienteInput | VeiculoCreateManyClienteInput[]
    skipDuplicates?: boolean
  }

  export type VeiculoUpsertWithWhereUniqueWithoutClienteInput = {
    where: VeiculoWhereUniqueInput
    update: XOR<VeiculoUpdateWithoutClienteInput, VeiculoUncheckedUpdateWithoutClienteInput>
    create: XOR<VeiculoCreateWithoutClienteInput, VeiculoUncheckedCreateWithoutClienteInput>
  }

  export type VeiculoUpdateWithWhereUniqueWithoutClienteInput = {
    where: VeiculoWhereUniqueInput
    data: XOR<VeiculoUpdateWithoutClienteInput, VeiculoUncheckedUpdateWithoutClienteInput>
  }

  export type VeiculoUpdateManyWithWhereWithoutClienteInput = {
    where: VeiculoScalarWhereInput
    data: XOR<VeiculoUpdateManyMutationInput, VeiculoUncheckedUpdateManyWithoutClienteInput>
  }

  export type OrdemServicoCreateWithoutVeiculoInput = {
    status?: string
    tipoPagamento?: string | null
    observacoes?: string | null
    valorTotal: number
    createdAt?: Date | string
    updatedAt?: Date | string
    itensPeca?: ItemPecaCreateNestedManyWithoutOrdemServicoInput
    itensServico?: ItemServicoCreateNestedManyWithoutOrdemServicoInput
  }

  export type OrdemServicoUncheckedCreateWithoutVeiculoInput = {
    id?: number
    status?: string
    tipoPagamento?: string | null
    observacoes?: string | null
    valorTotal: number
    createdAt?: Date | string
    updatedAt?: Date | string
    itensPeca?: ItemPecaUncheckedCreateNestedManyWithoutOrdemServicoInput
    itensServico?: ItemServicoUncheckedCreateNestedManyWithoutOrdemServicoInput
  }

  export type OrdemServicoCreateOrConnectWithoutVeiculoInput = {
    where: OrdemServicoWhereUniqueInput
    create: XOR<OrdemServicoCreateWithoutVeiculoInput, OrdemServicoUncheckedCreateWithoutVeiculoInput>
  }

  export type OrdemServicoCreateManyVeiculoInputEnvelope = {
    data: OrdemServicoCreateManyVeiculoInput | OrdemServicoCreateManyVeiculoInput[]
    skipDuplicates?: boolean
  }

  export type ClienteCreateWithoutVeiculosInput = {
    cpf: string
    nome: string
    endereco: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClienteUncheckedCreateWithoutVeiculosInput = {
    id?: number
    cpf: string
    nome: string
    endereco: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClienteCreateOrConnectWithoutVeiculosInput = {
    where: ClienteWhereUniqueInput
    create: XOR<ClienteCreateWithoutVeiculosInput, ClienteUncheckedCreateWithoutVeiculosInput>
  }

  export type ModeloVeiculoCreateWithoutVeiculosInput = {
    nome: string
    createdAt?: Date | string
    updatedAt?: Date | string
    anoFim?: number | null
    anoInicio?: number | null
    marca: MarcaVeiculoCreateNestedOneWithoutModelosInput
  }

  export type ModeloVeiculoUncheckedCreateWithoutVeiculosInput = {
    id?: number
    nome: string
    marcaId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    anoFim?: number | null
    anoInicio?: number | null
  }

  export type ModeloVeiculoCreateOrConnectWithoutVeiculosInput = {
    where: ModeloVeiculoWhereUniqueInput
    create: XOR<ModeloVeiculoCreateWithoutVeiculosInput, ModeloVeiculoUncheckedCreateWithoutVeiculosInput>
  }

  export type OrdemServicoUpsertWithWhereUniqueWithoutVeiculoInput = {
    where: OrdemServicoWhereUniqueInput
    update: XOR<OrdemServicoUpdateWithoutVeiculoInput, OrdemServicoUncheckedUpdateWithoutVeiculoInput>
    create: XOR<OrdemServicoCreateWithoutVeiculoInput, OrdemServicoUncheckedCreateWithoutVeiculoInput>
  }

  export type OrdemServicoUpdateWithWhereUniqueWithoutVeiculoInput = {
    where: OrdemServicoWhereUniqueInput
    data: XOR<OrdemServicoUpdateWithoutVeiculoInput, OrdemServicoUncheckedUpdateWithoutVeiculoInput>
  }

  export type OrdemServicoUpdateManyWithWhereWithoutVeiculoInput = {
    where: OrdemServicoScalarWhereInput
    data: XOR<OrdemServicoUpdateManyMutationInput, OrdemServicoUncheckedUpdateManyWithoutVeiculoInput>
  }

  export type OrdemServicoScalarWhereInput = {
    AND?: OrdemServicoScalarWhereInput | OrdemServicoScalarWhereInput[]
    OR?: OrdemServicoScalarWhereInput[]
    NOT?: OrdemServicoScalarWhereInput | OrdemServicoScalarWhereInput[]
    id?: IntFilter<"OrdemServico"> | number
    veiculoId?: IntFilter<"OrdemServico"> | number
    status?: StringFilter<"OrdemServico"> | string
    tipoPagamento?: StringNullableFilter<"OrdemServico"> | string | null
    observacoes?: StringNullableFilter<"OrdemServico"> | string | null
    valorTotal?: FloatFilter<"OrdemServico"> | number
    createdAt?: DateTimeFilter<"OrdemServico"> | Date | string
    updatedAt?: DateTimeFilter<"OrdemServico"> | Date | string
  }

  export type ClienteUpsertWithoutVeiculosInput = {
    update: XOR<ClienteUpdateWithoutVeiculosInput, ClienteUncheckedUpdateWithoutVeiculosInput>
    create: XOR<ClienteCreateWithoutVeiculosInput, ClienteUncheckedCreateWithoutVeiculosInput>
    where?: ClienteWhereInput
  }

  export type ClienteUpdateToOneWithWhereWithoutVeiculosInput = {
    where?: ClienteWhereInput
    data: XOR<ClienteUpdateWithoutVeiculosInput, ClienteUncheckedUpdateWithoutVeiculosInput>
  }

  export type ClienteUpdateWithoutVeiculosInput = {
    cpf?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClienteUncheckedUpdateWithoutVeiculosInput = {
    id?: IntFieldUpdateOperationsInput | number
    cpf?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModeloVeiculoUpsertWithoutVeiculosInput = {
    update: XOR<ModeloVeiculoUpdateWithoutVeiculosInput, ModeloVeiculoUncheckedUpdateWithoutVeiculosInput>
    create: XOR<ModeloVeiculoCreateWithoutVeiculosInput, ModeloVeiculoUncheckedCreateWithoutVeiculosInput>
    where?: ModeloVeiculoWhereInput
  }

  export type ModeloVeiculoUpdateToOneWithWhereWithoutVeiculosInput = {
    where?: ModeloVeiculoWhereInput
    data: XOR<ModeloVeiculoUpdateWithoutVeiculosInput, ModeloVeiculoUncheckedUpdateWithoutVeiculosInput>
  }

  export type ModeloVeiculoUpdateWithoutVeiculosInput = {
    nome?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    anoFim?: NullableIntFieldUpdateOperationsInput | number | null
    anoInicio?: NullableIntFieldUpdateOperationsInput | number | null
    marca?: MarcaVeiculoUpdateOneRequiredWithoutModelosNestedInput
  }

  export type ModeloVeiculoUncheckedUpdateWithoutVeiculosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    marcaId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    anoFim?: NullableIntFieldUpdateOperationsInput | number | null
    anoInicio?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ItemPecaCreateWithoutOrdemServicoInput = {
    nome: string
    quantidade?: number
    valorUnitario: number
    valorTotal: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ItemPecaUncheckedCreateWithoutOrdemServicoInput = {
    id?: number
    nome: string
    quantidade?: number
    valorUnitario: number
    valorTotal: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ItemPecaCreateOrConnectWithoutOrdemServicoInput = {
    where: ItemPecaWhereUniqueInput
    create: XOR<ItemPecaCreateWithoutOrdemServicoInput, ItemPecaUncheckedCreateWithoutOrdemServicoInput>
  }

  export type ItemPecaCreateManyOrdemServicoInputEnvelope = {
    data: ItemPecaCreateManyOrdemServicoInput | ItemPecaCreateManyOrdemServicoInput[]
    skipDuplicates?: boolean
  }

  export type ItemServicoCreateWithoutOrdemServicoInput = {
    quantidade?: number
    valorUnitario: number
    valorTotal: number
    createdAt?: Date | string
    updatedAt?: Date | string
    tipoServico: TipoServicoCreateNestedOneWithoutItemServicoInput
  }

  export type ItemServicoUncheckedCreateWithoutOrdemServicoInput = {
    id?: number
    tipoServicoId: number
    quantidade?: number
    valorUnitario: number
    valorTotal: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ItemServicoCreateOrConnectWithoutOrdemServicoInput = {
    where: ItemServicoWhereUniqueInput
    create: XOR<ItemServicoCreateWithoutOrdemServicoInput, ItemServicoUncheckedCreateWithoutOrdemServicoInput>
  }

  export type ItemServicoCreateManyOrdemServicoInputEnvelope = {
    data: ItemServicoCreateManyOrdemServicoInput | ItemServicoCreateManyOrdemServicoInput[]
    skipDuplicates?: boolean
  }

  export type VeiculoCreateWithoutOrdensServicoInput = {
    placa: string
    ano: number
    cor: string
    createdAt?: Date | string
    updatedAt?: Date | string
    cliente: ClienteCreateNestedOneWithoutVeiculosInput
    modelo: ModeloVeiculoCreateNestedOneWithoutVeiculosInput
  }

  export type VeiculoUncheckedCreateWithoutOrdensServicoInput = {
    id?: number
    placa: string
    clienteId: number
    modeloId: number
    ano: number
    cor: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VeiculoCreateOrConnectWithoutOrdensServicoInput = {
    where: VeiculoWhereUniqueInput
    create: XOR<VeiculoCreateWithoutOrdensServicoInput, VeiculoUncheckedCreateWithoutOrdensServicoInput>
  }

  export type ItemPecaUpsertWithWhereUniqueWithoutOrdemServicoInput = {
    where: ItemPecaWhereUniqueInput
    update: XOR<ItemPecaUpdateWithoutOrdemServicoInput, ItemPecaUncheckedUpdateWithoutOrdemServicoInput>
    create: XOR<ItemPecaCreateWithoutOrdemServicoInput, ItemPecaUncheckedCreateWithoutOrdemServicoInput>
  }

  export type ItemPecaUpdateWithWhereUniqueWithoutOrdemServicoInput = {
    where: ItemPecaWhereUniqueInput
    data: XOR<ItemPecaUpdateWithoutOrdemServicoInput, ItemPecaUncheckedUpdateWithoutOrdemServicoInput>
  }

  export type ItemPecaUpdateManyWithWhereWithoutOrdemServicoInput = {
    where: ItemPecaScalarWhereInput
    data: XOR<ItemPecaUpdateManyMutationInput, ItemPecaUncheckedUpdateManyWithoutOrdemServicoInput>
  }

  export type ItemPecaScalarWhereInput = {
    AND?: ItemPecaScalarWhereInput | ItemPecaScalarWhereInput[]
    OR?: ItemPecaScalarWhereInput[]
    NOT?: ItemPecaScalarWhereInput | ItemPecaScalarWhereInput[]
    id?: IntFilter<"ItemPeca"> | number
    ordemServicoId?: IntFilter<"ItemPeca"> | number
    nome?: StringFilter<"ItemPeca"> | string
    quantidade?: IntFilter<"ItemPeca"> | number
    valorUnitario?: FloatFilter<"ItemPeca"> | number
    valorTotal?: FloatFilter<"ItemPeca"> | number
    createdAt?: DateTimeFilter<"ItemPeca"> | Date | string
    updatedAt?: DateTimeFilter<"ItemPeca"> | Date | string
  }

  export type ItemServicoUpsertWithWhereUniqueWithoutOrdemServicoInput = {
    where: ItemServicoWhereUniqueInput
    update: XOR<ItemServicoUpdateWithoutOrdemServicoInput, ItemServicoUncheckedUpdateWithoutOrdemServicoInput>
    create: XOR<ItemServicoCreateWithoutOrdemServicoInput, ItemServicoUncheckedCreateWithoutOrdemServicoInput>
  }

  export type ItemServicoUpdateWithWhereUniqueWithoutOrdemServicoInput = {
    where: ItemServicoWhereUniqueInput
    data: XOR<ItemServicoUpdateWithoutOrdemServicoInput, ItemServicoUncheckedUpdateWithoutOrdemServicoInput>
  }

  export type ItemServicoUpdateManyWithWhereWithoutOrdemServicoInput = {
    where: ItemServicoScalarWhereInput
    data: XOR<ItemServicoUpdateManyMutationInput, ItemServicoUncheckedUpdateManyWithoutOrdemServicoInput>
  }

  export type VeiculoUpsertWithoutOrdensServicoInput = {
    update: XOR<VeiculoUpdateWithoutOrdensServicoInput, VeiculoUncheckedUpdateWithoutOrdensServicoInput>
    create: XOR<VeiculoCreateWithoutOrdensServicoInput, VeiculoUncheckedCreateWithoutOrdensServicoInput>
    where?: VeiculoWhereInput
  }

  export type VeiculoUpdateToOneWithWhereWithoutOrdensServicoInput = {
    where?: VeiculoWhereInput
    data: XOR<VeiculoUpdateWithoutOrdensServicoInput, VeiculoUncheckedUpdateWithoutOrdensServicoInput>
  }

  export type VeiculoUpdateWithoutOrdensServicoInput = {
    placa?: StringFieldUpdateOperationsInput | string
    ano?: IntFieldUpdateOperationsInput | number
    cor?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cliente?: ClienteUpdateOneRequiredWithoutVeiculosNestedInput
    modelo?: ModeloVeiculoUpdateOneRequiredWithoutVeiculosNestedInput
  }

  export type VeiculoUncheckedUpdateWithoutOrdensServicoInput = {
    id?: IntFieldUpdateOperationsInput | number
    placa?: StringFieldUpdateOperationsInput | string
    clienteId?: IntFieldUpdateOperationsInput | number
    modeloId?: IntFieldUpdateOperationsInput | number
    ano?: IntFieldUpdateOperationsInput | number
    cor?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrdemServicoCreateWithoutItensServicoInput = {
    status?: string
    tipoPagamento?: string | null
    observacoes?: string | null
    valorTotal: number
    createdAt?: Date | string
    updatedAt?: Date | string
    itensPeca?: ItemPecaCreateNestedManyWithoutOrdemServicoInput
    veiculo: VeiculoCreateNestedOneWithoutOrdensServicoInput
  }

  export type OrdemServicoUncheckedCreateWithoutItensServicoInput = {
    id?: number
    veiculoId: number
    status?: string
    tipoPagamento?: string | null
    observacoes?: string | null
    valorTotal: number
    createdAt?: Date | string
    updatedAt?: Date | string
    itensPeca?: ItemPecaUncheckedCreateNestedManyWithoutOrdemServicoInput
  }

  export type OrdemServicoCreateOrConnectWithoutItensServicoInput = {
    where: OrdemServicoWhereUniqueInput
    create: XOR<OrdemServicoCreateWithoutItensServicoInput, OrdemServicoUncheckedCreateWithoutItensServicoInput>
  }

  export type TipoServicoCreateWithoutItemServicoInput = {
    nome: string
    descricao?: string | null
    valor: number
    tempoMedio?: number | null
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TipoServicoUncheckedCreateWithoutItemServicoInput = {
    id?: number
    nome: string
    descricao?: string | null
    valor: number
    tempoMedio?: number | null
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TipoServicoCreateOrConnectWithoutItemServicoInput = {
    where: TipoServicoWhereUniqueInput
    create: XOR<TipoServicoCreateWithoutItemServicoInput, TipoServicoUncheckedCreateWithoutItemServicoInput>
  }

  export type OrdemServicoUpsertWithoutItensServicoInput = {
    update: XOR<OrdemServicoUpdateWithoutItensServicoInput, OrdemServicoUncheckedUpdateWithoutItensServicoInput>
    create: XOR<OrdemServicoCreateWithoutItensServicoInput, OrdemServicoUncheckedCreateWithoutItensServicoInput>
    where?: OrdemServicoWhereInput
  }

  export type OrdemServicoUpdateToOneWithWhereWithoutItensServicoInput = {
    where?: OrdemServicoWhereInput
    data: XOR<OrdemServicoUpdateWithoutItensServicoInput, OrdemServicoUncheckedUpdateWithoutItensServicoInput>
  }

  export type OrdemServicoUpdateWithoutItensServicoInput = {
    status?: StringFieldUpdateOperationsInput | string
    tipoPagamento?: NullableStringFieldUpdateOperationsInput | string | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    valorTotal?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    itensPeca?: ItemPecaUpdateManyWithoutOrdemServicoNestedInput
    veiculo?: VeiculoUpdateOneRequiredWithoutOrdensServicoNestedInput
  }

  export type OrdemServicoUncheckedUpdateWithoutItensServicoInput = {
    id?: IntFieldUpdateOperationsInput | number
    veiculoId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    tipoPagamento?: NullableStringFieldUpdateOperationsInput | string | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    valorTotal?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    itensPeca?: ItemPecaUncheckedUpdateManyWithoutOrdemServicoNestedInput
  }

  export type TipoServicoUpsertWithoutItemServicoInput = {
    update: XOR<TipoServicoUpdateWithoutItemServicoInput, TipoServicoUncheckedUpdateWithoutItemServicoInput>
    create: XOR<TipoServicoCreateWithoutItemServicoInput, TipoServicoUncheckedCreateWithoutItemServicoInput>
    where?: TipoServicoWhereInput
  }

  export type TipoServicoUpdateToOneWithWhereWithoutItemServicoInput = {
    where?: TipoServicoWhereInput
    data: XOR<TipoServicoUpdateWithoutItemServicoInput, TipoServicoUncheckedUpdateWithoutItemServicoInput>
  }

  export type TipoServicoUpdateWithoutItemServicoInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    valor?: FloatFieldUpdateOperationsInput | number
    tempoMedio?: NullableIntFieldUpdateOperationsInput | number | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TipoServicoUncheckedUpdateWithoutItemServicoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    valor?: FloatFieldUpdateOperationsInput | number
    tempoMedio?: NullableIntFieldUpdateOperationsInput | number | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrdemServicoCreateWithoutItensPecaInput = {
    status?: string
    tipoPagamento?: string | null
    observacoes?: string | null
    valorTotal: number
    createdAt?: Date | string
    updatedAt?: Date | string
    itensServico?: ItemServicoCreateNestedManyWithoutOrdemServicoInput
    veiculo: VeiculoCreateNestedOneWithoutOrdensServicoInput
  }

  export type OrdemServicoUncheckedCreateWithoutItensPecaInput = {
    id?: number
    veiculoId: number
    status?: string
    tipoPagamento?: string | null
    observacoes?: string | null
    valorTotal: number
    createdAt?: Date | string
    updatedAt?: Date | string
    itensServico?: ItemServicoUncheckedCreateNestedManyWithoutOrdemServicoInput
  }

  export type OrdemServicoCreateOrConnectWithoutItensPecaInput = {
    where: OrdemServicoWhereUniqueInput
    create: XOR<OrdemServicoCreateWithoutItensPecaInput, OrdemServicoUncheckedCreateWithoutItensPecaInput>
  }

  export type OrdemServicoUpsertWithoutItensPecaInput = {
    update: XOR<OrdemServicoUpdateWithoutItensPecaInput, OrdemServicoUncheckedUpdateWithoutItensPecaInput>
    create: XOR<OrdemServicoCreateWithoutItensPecaInput, OrdemServicoUncheckedCreateWithoutItensPecaInput>
    where?: OrdemServicoWhereInput
  }

  export type OrdemServicoUpdateToOneWithWhereWithoutItensPecaInput = {
    where?: OrdemServicoWhereInput
    data: XOR<OrdemServicoUpdateWithoutItensPecaInput, OrdemServicoUncheckedUpdateWithoutItensPecaInput>
  }

  export type OrdemServicoUpdateWithoutItensPecaInput = {
    status?: StringFieldUpdateOperationsInput | string
    tipoPagamento?: NullableStringFieldUpdateOperationsInput | string | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    valorTotal?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    itensServico?: ItemServicoUpdateManyWithoutOrdemServicoNestedInput
    veiculo?: VeiculoUpdateOneRequiredWithoutOrdensServicoNestedInput
  }

  export type OrdemServicoUncheckedUpdateWithoutItensPecaInput = {
    id?: IntFieldUpdateOperationsInput | number
    veiculoId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    tipoPagamento?: NullableStringFieldUpdateOperationsInput | string | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    valorTotal?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    itensServico?: ItemServicoUncheckedUpdateManyWithoutOrdemServicoNestedInput
  }

  export type ModeloVeiculoCreateManyMarcaInput = {
    id?: number
    nome: string
    createdAt?: Date | string
    updatedAt?: Date | string
    anoFim?: number | null
    anoInicio?: number | null
  }

  export type ModeloVeiculoUpdateWithoutMarcaInput = {
    nome?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    anoFim?: NullableIntFieldUpdateOperationsInput | number | null
    anoInicio?: NullableIntFieldUpdateOperationsInput | number | null
    veiculos?: VeiculoUpdateManyWithoutModeloNestedInput
  }

  export type ModeloVeiculoUncheckedUpdateWithoutMarcaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    anoFim?: NullableIntFieldUpdateOperationsInput | number | null
    anoInicio?: NullableIntFieldUpdateOperationsInput | number | null
    veiculos?: VeiculoUncheckedUpdateManyWithoutModeloNestedInput
  }

  export type ModeloVeiculoUncheckedUpdateManyWithoutMarcaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    anoFim?: NullableIntFieldUpdateOperationsInput | number | null
    anoInicio?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type VeiculoCreateManyModeloInput = {
    id?: number
    placa: string
    clienteId: number
    ano: number
    cor: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VeiculoUpdateWithoutModeloInput = {
    placa?: StringFieldUpdateOperationsInput | string
    ano?: IntFieldUpdateOperationsInput | number
    cor?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ordensServico?: OrdemServicoUpdateManyWithoutVeiculoNestedInput
    cliente?: ClienteUpdateOneRequiredWithoutVeiculosNestedInput
  }

  export type VeiculoUncheckedUpdateWithoutModeloInput = {
    id?: IntFieldUpdateOperationsInput | number
    placa?: StringFieldUpdateOperationsInput | string
    clienteId?: IntFieldUpdateOperationsInput | number
    ano?: IntFieldUpdateOperationsInput | number
    cor?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ordensServico?: OrdemServicoUncheckedUpdateManyWithoutVeiculoNestedInput
  }

  export type VeiculoUncheckedUpdateManyWithoutModeloInput = {
    id?: IntFieldUpdateOperationsInput | number
    placa?: StringFieldUpdateOperationsInput | string
    clienteId?: IntFieldUpdateOperationsInput | number
    ano?: IntFieldUpdateOperationsInput | number
    cor?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemServicoCreateManyTipoServicoInput = {
    id?: number
    ordemServicoId: number
    quantidade?: number
    valorUnitario: number
    valorTotal: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ItemServicoUpdateWithoutTipoServicoInput = {
    quantidade?: IntFieldUpdateOperationsInput | number
    valorUnitario?: FloatFieldUpdateOperationsInput | number
    valorTotal?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ordemServico?: OrdemServicoUpdateOneRequiredWithoutItensServicoNestedInput
  }

  export type ItemServicoUncheckedUpdateWithoutTipoServicoInput = {
    id?: IntFieldUpdateOperationsInput | number
    ordemServicoId?: IntFieldUpdateOperationsInput | number
    quantidade?: IntFieldUpdateOperationsInput | number
    valorUnitario?: FloatFieldUpdateOperationsInput | number
    valorTotal?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemServicoUncheckedUpdateManyWithoutTipoServicoInput = {
    id?: IntFieldUpdateOperationsInput | number
    ordemServicoId?: IntFieldUpdateOperationsInput | number
    quantidade?: IntFieldUpdateOperationsInput | number
    valorUnitario?: FloatFieldUpdateOperationsInput | number
    valorTotal?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VeiculoCreateManyClienteInput = {
    id?: number
    placa: string
    modeloId: number
    ano: number
    cor: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VeiculoUpdateWithoutClienteInput = {
    placa?: StringFieldUpdateOperationsInput | string
    ano?: IntFieldUpdateOperationsInput | number
    cor?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ordensServico?: OrdemServicoUpdateManyWithoutVeiculoNestedInput
    modelo?: ModeloVeiculoUpdateOneRequiredWithoutVeiculosNestedInput
  }

  export type VeiculoUncheckedUpdateWithoutClienteInput = {
    id?: IntFieldUpdateOperationsInput | number
    placa?: StringFieldUpdateOperationsInput | string
    modeloId?: IntFieldUpdateOperationsInput | number
    ano?: IntFieldUpdateOperationsInput | number
    cor?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ordensServico?: OrdemServicoUncheckedUpdateManyWithoutVeiculoNestedInput
  }

  export type VeiculoUncheckedUpdateManyWithoutClienteInput = {
    id?: IntFieldUpdateOperationsInput | number
    placa?: StringFieldUpdateOperationsInput | string
    modeloId?: IntFieldUpdateOperationsInput | number
    ano?: IntFieldUpdateOperationsInput | number
    cor?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrdemServicoCreateManyVeiculoInput = {
    id?: number
    status?: string
    tipoPagamento?: string | null
    observacoes?: string | null
    valorTotal: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrdemServicoUpdateWithoutVeiculoInput = {
    status?: StringFieldUpdateOperationsInput | string
    tipoPagamento?: NullableStringFieldUpdateOperationsInput | string | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    valorTotal?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    itensPeca?: ItemPecaUpdateManyWithoutOrdemServicoNestedInput
    itensServico?: ItemServicoUpdateManyWithoutOrdemServicoNestedInput
  }

  export type OrdemServicoUncheckedUpdateWithoutVeiculoInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    tipoPagamento?: NullableStringFieldUpdateOperationsInput | string | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    valorTotal?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    itensPeca?: ItemPecaUncheckedUpdateManyWithoutOrdemServicoNestedInput
    itensServico?: ItemServicoUncheckedUpdateManyWithoutOrdemServicoNestedInput
  }

  export type OrdemServicoUncheckedUpdateManyWithoutVeiculoInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    tipoPagamento?: NullableStringFieldUpdateOperationsInput | string | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    valorTotal?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemPecaCreateManyOrdemServicoInput = {
    id?: number
    nome: string
    quantidade?: number
    valorUnitario: number
    valorTotal: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ItemServicoCreateManyOrdemServicoInput = {
    id?: number
    tipoServicoId: number
    quantidade?: number
    valorUnitario: number
    valorTotal: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ItemPecaUpdateWithoutOrdemServicoInput = {
    nome?: StringFieldUpdateOperationsInput | string
    quantidade?: IntFieldUpdateOperationsInput | number
    valorUnitario?: FloatFieldUpdateOperationsInput | number
    valorTotal?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemPecaUncheckedUpdateWithoutOrdemServicoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    quantidade?: IntFieldUpdateOperationsInput | number
    valorUnitario?: FloatFieldUpdateOperationsInput | number
    valorTotal?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemPecaUncheckedUpdateManyWithoutOrdemServicoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    quantidade?: IntFieldUpdateOperationsInput | number
    valorUnitario?: FloatFieldUpdateOperationsInput | number
    valorTotal?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemServicoUpdateWithoutOrdemServicoInput = {
    quantidade?: IntFieldUpdateOperationsInput | number
    valorUnitario?: FloatFieldUpdateOperationsInput | number
    valorTotal?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tipoServico?: TipoServicoUpdateOneRequiredWithoutItemServicoNestedInput
  }

  export type ItemServicoUncheckedUpdateWithoutOrdemServicoInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipoServicoId?: IntFieldUpdateOperationsInput | number
    quantidade?: IntFieldUpdateOperationsInput | number
    valorUnitario?: FloatFieldUpdateOperationsInput | number
    valorTotal?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemServicoUncheckedUpdateManyWithoutOrdemServicoInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipoServicoId?: IntFieldUpdateOperationsInput | number
    quantidade?: IntFieldUpdateOperationsInput | number
    valorUnitario?: FloatFieldUpdateOperationsInput | number
    valorTotal?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}