export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  I18NLocaleCode: any;
  JSON: any;
  Upload: any;
};

export type BooleanFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  contains?: InputMaybe<Scalars['Boolean']>;
  containsi?: InputMaybe<Scalars['Boolean']>;
  endsWith?: InputMaybe<Scalars['Boolean']>;
  eq?: InputMaybe<Scalars['Boolean']>;
  eqi?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Boolean']>;
  gte?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  lt?: InputMaybe<Scalars['Boolean']>;
  lte?: InputMaybe<Scalars['Boolean']>;
  ne?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<BooleanFilterInput>;
  notContains?: InputMaybe<Scalars['Boolean']>;
  notContainsi?: InputMaybe<Scalars['Boolean']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  startsWith?: InputMaybe<Scalars['Boolean']>;
};

export type ComponentContentHeading = {
  __typename?: 'ComponentContentHeading';
  id: Scalars['ID'];
  title: Scalars['String'];
  titleTag: Enum_Componentcontentheading_Titletag;
};

export type ComponentContentHeadingFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentContentHeadingFiltersInput>>>;
  not?: InputMaybe<ComponentContentHeadingFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentContentHeadingFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
  titleTag?: InputMaybe<StringFilterInput>;
};

export type ComponentContentImageText = {
  __typename?: 'ComponentContentImageText';
  background: Scalars['Boolean'];
  button: ComponentInputButton;
  heading: ComponentContentHeading;
  id: Scalars['ID'];
  image: UploadFileEntityResponse;
  text: Scalars['String'];
};

export type ComponentContentImageTextCollection = {
  __typename?: 'ComponentContentImageTextCollection';
  direction: Enum_Componentcontentimagetextcollection_Direction;
  id: Scalars['ID'];
  images: Array<Maybe<ComponentContentImageText>>;
};


export type ComponentContentImageTextCollectionImagesArgs = {
  filters?: InputMaybe<ComponentContentImageTextFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentContentImageTextFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentContentImageTextFiltersInput>>>;
  background?: InputMaybe<BooleanFilterInput>;
  button?: InputMaybe<ComponentInputButtonFiltersInput>;
  heading?: InputMaybe<ComponentContentHeadingFiltersInput>;
  not?: InputMaybe<ComponentContentImageTextFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentContentImageTextFiltersInput>>>;
  text?: InputMaybe<StringFilterInput>;
};

export type ComponentContentTeaser = {
  __typename?: 'ComponentContentTeaser';
  button?: Maybe<ComponentInputButton>;
  heading: ComponentContentHeading;
  id: Scalars['ID'];
  image: UploadFileEntityResponse;
  text: Scalars['String'];
};

export type ComponentContentTeaserCollection = {
  __typename?: 'ComponentContentTeaserCollection';
  heading: ComponentContentHeading;
  id: Scalars['ID'];
  teasers: Array<Maybe<ComponentContentTeaser>>;
};


export type ComponentContentTeaserCollectionTeasersArgs = {
  filters?: InputMaybe<ComponentContentTeaserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentContentTeaserFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentContentTeaserFiltersInput>>>;
  button?: InputMaybe<ComponentInputButtonFiltersInput>;
  heading?: InputMaybe<ComponentContentHeadingFiltersInput>;
  not?: InputMaybe<ComponentContentTeaserFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentContentTeaserFiltersInput>>>;
  text?: InputMaybe<StringFilterInput>;
};

export type ComponentContentText = {
  __typename?: 'ComponentContentText';
  background: Scalars['Boolean'];
  button: ComponentInputButton;
  heading?: Maybe<ComponentContentHeading>;
  id: Scalars['ID'];
  text: Scalars['String'];
};

export type ComponentGeneralSocialMedia = {
  __typename?: 'ComponentGeneralSocialMedia';
  channel?: Maybe<Enum_Componentgeneralsocialmedia_Channel>;
  id: Scalars['ID'];
  url: Scalars['String'];
};

export type ComponentGeneralSocialMediaFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentGeneralSocialMediaFiltersInput>>>;
  channel?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentGeneralSocialMediaFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentGeneralSocialMediaFiltersInput>>>;
  url?: InputMaybe<StringFilterInput>;
};

export type ComponentGeneralSocialMediaInput = {
  channel?: InputMaybe<Enum_Componentgeneralsocialmedia_Channel>;
  id?: InputMaybe<Scalars['ID']>;
  url?: InputMaybe<Scalars['String']>;
};

export type ComponentInputButton = {
  __typename?: 'ComponentInputButton';
  color: Enum_Componentinputbutton_Color;
  href: Scalars['String'];
  id: Scalars['ID'];
  label: Scalars['String'];
  target: Enum_Componentinputbutton_Target;
  variant: Enum_Componentinputbutton_Variant;
};

export type ComponentInputButtonFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentInputButtonFiltersInput>>>;
  color?: InputMaybe<StringFilterInput>;
  href?: InputMaybe<StringFilterInput>;
  label?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentInputButtonFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentInputButtonFiltersInput>>>;
  target?: InputMaybe<StringFilterInput>;
  variant?: InputMaybe<StringFilterInput>;
};

export type ComponentSharedMetaSocial = {
  __typename?: 'ComponentSharedMetaSocial';
  description: Scalars['String'];
  id: Scalars['ID'];
  image?: Maybe<UploadFileEntityResponse>;
  socialNetwork: Enum_Componentsharedmetasocial_Socialnetwork;
  title: Scalars['String'];
};

export type ComponentSharedMetaSocialFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSharedMetaSocialFiltersInput>>>;
  description?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentSharedMetaSocialFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSharedMetaSocialFiltersInput>>>;
  socialNetwork?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentSharedMetaSocialInput = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<Scalars['ID']>;
  socialNetwork?: InputMaybe<Enum_Componentsharedmetasocial_Socialnetwork>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentSharedSeo = {
  __typename?: 'ComponentSharedSeo';
  canonicalURL?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  keywords?: Maybe<Scalars['String']>;
  metaDescription?: Maybe<Scalars['String']>;
  metaImage: UploadFileEntityResponse;
  metaRobots?: Maybe<Scalars['String']>;
  metaSocial?: Maybe<Array<Maybe<ComponentSharedMetaSocial>>>;
  metaTitle?: Maybe<Scalars['String']>;
  metaViewport?: Maybe<Scalars['String']>;
  structuredData?: Maybe<Scalars['JSON']>;
};


export type ComponentSharedSeoMetaSocialArgs = {
  filters?: InputMaybe<ComponentSharedMetaSocialFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentSharedSeoFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSharedSeoFiltersInput>>>;
  canonicalURL?: InputMaybe<StringFilterInput>;
  keywords?: InputMaybe<StringFilterInput>;
  metaDescription?: InputMaybe<StringFilterInput>;
  metaRobots?: InputMaybe<StringFilterInput>;
  metaSocial?: InputMaybe<ComponentSharedMetaSocialFiltersInput>;
  metaTitle?: InputMaybe<StringFilterInput>;
  metaViewport?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentSharedSeoFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSharedSeoFiltersInput>>>;
  structuredData?: InputMaybe<JsonFilterInput>;
};

export type ComponentSharedSeoInput = {
  canonicalURL?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  keywords?: InputMaybe<Scalars['String']>;
  metaDescription?: InputMaybe<Scalars['String']>;
  metaImage?: InputMaybe<Scalars['ID']>;
  metaRobots?: InputMaybe<Scalars['String']>;
  metaSocial?: InputMaybe<Array<InputMaybe<ComponentSharedMetaSocialInput>>>;
  metaTitle?: InputMaybe<Scalars['String']>;
  metaViewport?: InputMaybe<Scalars['String']>;
  structuredData?: InputMaybe<Scalars['JSON']>;
};

export type ContactPage = {
  __typename?: 'ContactPage';
  createdAt?: Maybe<Scalars['DateTime']>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<ContactPageRelationResponseCollection>;
  seo?: Maybe<ComponentSharedSeo>;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ContactPageEntity = {
  __typename?: 'ContactPageEntity';
  attributes?: Maybe<ContactPage>;
  id?: Maybe<Scalars['ID']>;
};

export type ContactPageEntityResponse = {
  __typename?: 'ContactPageEntityResponse';
  data?: Maybe<ContactPageEntity>;
};

export type ContactPageInput = {
  seo?: InputMaybe<ComponentSharedSeoInput>;
  title?: InputMaybe<Scalars['String']>;
};

export type ContactPageRelationResponseCollection = {
  __typename?: 'ContactPageRelationResponseCollection';
  data: Array<ContactPageEntity>;
};

export type ContentPage = {
  __typename?: 'ContentPage';
  createdAt?: Maybe<Scalars['DateTime']>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<ContentPageRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  seo?: Maybe<ComponentSharedSeo>;
  slug: Scalars['String'];
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type ContentPageLocalizationsArgs = {
  filters?: InputMaybe<ContentPageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ContentPageEntity = {
  __typename?: 'ContentPageEntity';
  attributes?: Maybe<ContentPage>;
  id?: Maybe<Scalars['ID']>;
};

export type ContentPageEntityResponse = {
  __typename?: 'ContentPageEntityResponse';
  data?: Maybe<ContentPageEntity>;
};

export type ContentPageEntityResponseCollection = {
  __typename?: 'ContentPageEntityResponseCollection';
  data: Array<ContentPageEntity>;
  meta: ResponseCollectionMeta;
};

export type ContentPageFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ContentPageFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<ContentPageFiltersInput>;
  not?: InputMaybe<ContentPageFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ContentPageFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  seo?: InputMaybe<ComponentSharedSeoFiltersInput>;
  slug?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ContentPageInput = {
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  seo?: InputMaybe<ComponentSharedSeoInput>;
  slug?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ContentPageRelationResponseCollection = {
  __typename?: 'ContentPageRelationResponseCollection';
  data: Array<ContentPageEntity>;
};

export type DateTimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  contains?: InputMaybe<Scalars['DateTime']>;
  containsi?: InputMaybe<Scalars['DateTime']>;
  endsWith?: InputMaybe<Scalars['DateTime']>;
  eq?: InputMaybe<Scalars['DateTime']>;
  eqi?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  ne?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<DateTimeFilterInput>;
  notContains?: InputMaybe<Scalars['DateTime']>;
  notContainsi?: InputMaybe<Scalars['DateTime']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  startsWith?: InputMaybe<Scalars['DateTime']>;
};

export enum Enum_Componentcontentheading_Titletag {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
  H5 = 'h5',
  Paragraph = 'paragraph'
}

export enum Enum_Componentcontentimagetextcollection_Direction {
  Even = 'even',
  Odd = 'odd'
}

export enum Enum_Componentgeneralsocialmedia_Channel {
  Facebook = 'facebook',
  Instagram = 'instagram',
  Linkedin = 'linkedin',
  Tiktok = 'tiktok',
  Twitter = 'twitter'
}

export enum Enum_Componentinputbutton_Color {
  Primary = 'primary',
  Secondary = 'secondary'
}

export enum Enum_Componentinputbutton_Target {
  Blank = 'blank',
  Self = 'self'
}

export enum Enum_Componentinputbutton_Variant {
  Default = 'default',
  Outline = 'outline',
  Text = 'text'
}

export enum Enum_Componentsharedmetasocial_Socialnetwork {
  Facebook = 'Facebook',
  Twitter = 'Twitter'
}

export enum Enum_Webformshandler_Type {
  Action = 'action',
  Email = 'email',
  Remote = 'remote'
}

export type FileInfoInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type FloatFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  contains?: InputMaybe<Scalars['Float']>;
  containsi?: InputMaybe<Scalars['Float']>;
  endsWith?: InputMaybe<Scalars['Float']>;
  eq?: InputMaybe<Scalars['Float']>;
  eqi?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<FloatFilterInput>;
  notContains?: InputMaybe<Scalars['Float']>;
  notContainsi?: InputMaybe<Scalars['Float']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  startsWith?: InputMaybe<Scalars['Float']>;
};

export type GeneralSetting = {
  __typename?: 'GeneralSetting';
  address?: Maybe<Scalars['String']>;
  companyName?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  emailaddress?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<GeneralSettingRelationResponseCollection>;
  logo?: Maybe<UploadFileEntityResponse>;
  phoneNumber?: Maybe<Scalars['String']>;
  socials?: Maybe<Array<Maybe<ComponentGeneralSocialMedia>>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type GeneralSettingSocialsArgs = {
  filters?: InputMaybe<ComponentGeneralSocialMediaFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type GeneralSettingEntity = {
  __typename?: 'GeneralSettingEntity';
  attributes?: Maybe<GeneralSetting>;
  id?: Maybe<Scalars['ID']>;
};

export type GeneralSettingEntityResponse = {
  __typename?: 'GeneralSettingEntityResponse';
  data?: Maybe<GeneralSettingEntity>;
};

export type GeneralSettingInput = {
  address?: InputMaybe<Scalars['String']>;
  companyName?: InputMaybe<Scalars['String']>;
  emailaddress?: InputMaybe<Scalars['String']>;
  logo?: InputMaybe<Scalars['ID']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  socials?: InputMaybe<Array<InputMaybe<ComponentGeneralSocialMediaInput>>>;
};

export type GeneralSettingRelationResponseCollection = {
  __typename?: 'GeneralSettingRelationResponseCollection';
  data: Array<GeneralSettingEntity>;
};

export type GenericMorph = ComponentContentHeading | ComponentContentImageText | ComponentContentImageTextCollection | ComponentContentTeaser | ComponentContentTeaserCollection | ComponentContentText | ComponentGeneralSocialMedia | ComponentInputButton | ComponentSharedMetaSocial | ComponentSharedSeo | ContactPage | ContentPage | GeneralSetting | Homepage | I18NLocale | NotFound | UploadFile | UploadFolder | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsUser | WebformsForm | WebformsHandler | WebformsSetting | WebformsSubmission;

export type Homepage = {
  __typename?: 'Homepage';
  createdAt?: Maybe<Scalars['DateTime']>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<HomepageRelationResponseCollection>;
  seo?: Maybe<ComponentSharedSeo>;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type HomepageEntity = {
  __typename?: 'HomepageEntity';
  attributes?: Maybe<Homepage>;
  id?: Maybe<Scalars['ID']>;
};

export type HomepageEntityResponse = {
  __typename?: 'HomepageEntityResponse';
  data?: Maybe<HomepageEntity>;
};

export type HomepageInput = {
  seo?: InputMaybe<ComponentSharedSeoInput>;
  title?: InputMaybe<Scalars['String']>;
};

export type HomepageRelationResponseCollection = {
  __typename?: 'HomepageRelationResponseCollection';
  data: Array<HomepageEntity>;
};

export type I18NLocale = {
  __typename?: 'I18NLocale';
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type I18NLocaleEntity = {
  __typename?: 'I18NLocaleEntity';
  attributes?: Maybe<I18NLocale>;
  id?: Maybe<Scalars['ID']>;
};

export type I18NLocaleEntityResponse = {
  __typename?: 'I18NLocaleEntityResponse';
  data?: Maybe<I18NLocaleEntity>;
};

export type I18NLocaleEntityResponseCollection = {
  __typename?: 'I18NLocaleEntityResponseCollection';
  data: Array<I18NLocaleEntity>;
  meta: ResponseCollectionMeta;
};

export type I18NLocaleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  code?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<I18NLocaleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type IdFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  contains?: InputMaybe<Scalars['ID']>;
  containsi?: InputMaybe<Scalars['ID']>;
  endsWith?: InputMaybe<Scalars['ID']>;
  eq?: InputMaybe<Scalars['ID']>;
  eqi?: InputMaybe<Scalars['ID']>;
  gt?: InputMaybe<Scalars['ID']>;
  gte?: InputMaybe<Scalars['ID']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  lt?: InputMaybe<Scalars['ID']>;
  lte?: InputMaybe<Scalars['ID']>;
  ne?: InputMaybe<Scalars['ID']>;
  not?: InputMaybe<IdFilterInput>;
  notContains?: InputMaybe<Scalars['ID']>;
  notContainsi?: InputMaybe<Scalars['ID']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  startsWith?: InputMaybe<Scalars['ID']>;
};

export type IntFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  contains?: InputMaybe<Scalars['Int']>;
  containsi?: InputMaybe<Scalars['Int']>;
  endsWith?: InputMaybe<Scalars['Int']>;
  eq?: InputMaybe<Scalars['Int']>;
  eqi?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  ne?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<IntFilterInput>;
  notContains?: InputMaybe<Scalars['Int']>;
  notContainsi?: InputMaybe<Scalars['Int']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  startsWith?: InputMaybe<Scalars['Int']>;
};

export type JsonFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  contains?: InputMaybe<Scalars['JSON']>;
  containsi?: InputMaybe<Scalars['JSON']>;
  endsWith?: InputMaybe<Scalars['JSON']>;
  eq?: InputMaybe<Scalars['JSON']>;
  eqi?: InputMaybe<Scalars['JSON']>;
  gt?: InputMaybe<Scalars['JSON']>;
  gte?: InputMaybe<Scalars['JSON']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  lt?: InputMaybe<Scalars['JSON']>;
  lte?: InputMaybe<Scalars['JSON']>;
  ne?: InputMaybe<Scalars['JSON']>;
  not?: InputMaybe<JsonFilterInput>;
  notContains?: InputMaybe<Scalars['JSON']>;
  notContainsi?: InputMaybe<Scalars['JSON']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  startsWith?: InputMaybe<Scalars['JSON']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Change user password. Confirm with the current password. */
  changePassword?: Maybe<UsersPermissionsLoginPayload>;
  createContactPageLocalization?: Maybe<ContactPageEntityResponse>;
  createContentPage?: Maybe<ContentPageEntityResponse>;
  createContentPageLocalization?: Maybe<ContentPageEntityResponse>;
  createGeneralSettingLocalization?: Maybe<GeneralSettingEntityResponse>;
  createHomepageLocalization?: Maybe<HomepageEntityResponse>;
  createNotFoundLocalization?: Maybe<NotFoundEntityResponse>;
  createUploadFile?: Maybe<UploadFileEntityResponse>;
  createUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Create a new role */
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>;
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  createWebformsForm?: Maybe<WebformsFormEntityResponse>;
  createWebformsHandler?: Maybe<WebformsHandlerEntityResponse>;
  createWebformsSubmission?: Maybe<WebformsSubmissionEntityResponse>;
  deleteContactPage?: Maybe<ContactPageEntityResponse>;
  deleteContentPage?: Maybe<ContentPageEntityResponse>;
  deleteGeneralSetting?: Maybe<GeneralSettingEntityResponse>;
  deleteHomepage?: Maybe<HomepageEntityResponse>;
  deleteNotFound?: Maybe<NotFoundEntityResponse>;
  deleteUploadFile?: Maybe<UploadFileEntityResponse>;
  deleteUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Delete an existing role */
  deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>;
  /** Delete an existing user */
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  deleteWebformsForm?: Maybe<WebformsFormEntityResponse>;
  deleteWebformsHandler?: Maybe<WebformsHandlerEntityResponse>;
  deleteWebformsSetting?: Maybe<WebformsSettingEntityResponse>;
  deleteWebformsSubmission?: Maybe<WebformsSubmissionEntityResponse>;
  /** Confirm an email users email address */
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
  /** Request a reset password token */
  forgotPassword?: Maybe<UsersPermissionsPasswordPayload>;
  login: UsersPermissionsLoginPayload;
  multipleUpload: Array<Maybe<UploadFileEntityResponse>>;
  /** Register a user */
  register: UsersPermissionsLoginPayload;
  removeFile?: Maybe<UploadFileEntityResponse>;
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  updateContactPage?: Maybe<ContactPageEntityResponse>;
  updateContentPage?: Maybe<ContentPageEntityResponse>;
  updateFileInfo: UploadFileEntityResponse;
  updateGeneralSetting?: Maybe<GeneralSettingEntityResponse>;
  updateHomepage?: Maybe<HomepageEntityResponse>;
  updateNotFound?: Maybe<NotFoundEntityResponse>;
  updateUploadFile?: Maybe<UploadFileEntityResponse>;
  updateUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Update an existing role */
  updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>;
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  updateWebformsForm?: Maybe<WebformsFormEntityResponse>;
  updateWebformsHandler?: Maybe<WebformsHandlerEntityResponse>;
  updateWebformsSetting?: Maybe<WebformsSettingEntityResponse>;
  updateWebformsSubmission?: Maybe<WebformsSubmissionEntityResponse>;
  upload: UploadFileEntityResponse;
};


export type MutationChangePasswordArgs = {
  currentPassword: Scalars['String'];
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
};


export type MutationCreateContactPageLocalizationArgs = {
  data?: InputMaybe<ContactPageInput>;
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateContentPageArgs = {
  data: ContentPageInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateContentPageLocalizationArgs = {
  data?: InputMaybe<ContentPageInput>;
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateGeneralSettingLocalizationArgs = {
  data?: InputMaybe<GeneralSettingInput>;
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateHomepageLocalizationArgs = {
  data?: InputMaybe<HomepageInput>;
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateNotFoundLocalizationArgs = {
  data?: InputMaybe<NotFoundInput>;
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateUploadFileArgs = {
  data: UploadFileInput;
};


export type MutationCreateUploadFolderArgs = {
  data: UploadFolderInput;
};


export type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
};


export type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
};


export type MutationCreateWebformsFormArgs = {
  data: WebformsFormInput;
};


export type MutationCreateWebformsHandlerArgs = {
  data: WebformsHandlerInput;
};


export type MutationCreateWebformsSubmissionArgs = {
  data: WebformsSubmissionInput;
};


export type MutationDeleteContactPageArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeleteContentPageArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeleteGeneralSettingArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeleteHomepageArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeleteNotFoundArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeleteUploadFileArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUploadFolderArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteWebformsFormArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteWebformsHandlerArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteWebformsSubmissionArgs = {
  id: Scalars['ID'];
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationMultipleUploadArgs = {
  field?: InputMaybe<Scalars['String']>;
  files: Array<InputMaybe<Scalars['Upload']>>;
  ref?: InputMaybe<Scalars['String']>;
  refId?: InputMaybe<Scalars['ID']>;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationRemoveFileArgs = {
  id: Scalars['ID'];
};


export type MutationResetPasswordArgs = {
  code: Scalars['String'];
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
};


export type MutationUpdateContactPageArgs = {
  data: ContactPageInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationUpdateContentPageArgs = {
  data: ContentPageInput;
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID'];
  info?: InputMaybe<FileInfoInput>;
};


export type MutationUpdateGeneralSettingArgs = {
  data: GeneralSettingInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationUpdateHomepageArgs = {
  data: HomepageInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationUpdateNotFoundArgs = {
  data: NotFoundInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationUpdateUploadFileArgs = {
  data: UploadFileInput;
  id: Scalars['ID'];
};


export type MutationUpdateUploadFolderArgs = {
  data: UploadFolderInput;
  id: Scalars['ID'];
};


export type MutationUpdateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
  id: Scalars['ID'];
};


export type MutationUpdateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
  id: Scalars['ID'];
};


export type MutationUpdateWebformsFormArgs = {
  data: WebformsFormInput;
  id: Scalars['ID'];
};


export type MutationUpdateWebformsHandlerArgs = {
  data: WebformsHandlerInput;
  id: Scalars['ID'];
};


export type MutationUpdateWebformsSettingArgs = {
  data: WebformsSettingInput;
};


export type MutationUpdateWebformsSubmissionArgs = {
  data: WebformsSubmissionInput;
  id: Scalars['ID'];
};


export type MutationUploadArgs = {
  field?: InputMaybe<Scalars['String']>;
  file: Scalars['Upload'];
  info?: InputMaybe<FileInfoInput>;
  ref?: InputMaybe<Scalars['String']>;
  refId?: InputMaybe<Scalars['ID']>;
};

export type NavigationItem = {
  __typename?: 'NavigationItem';
  bold?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['String']>;
  externalPath?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  items?: Maybe<Array<Maybe<NavigationItem>>>;
  master?: Maybe<Scalars['Int']>;
  menuAttached: Scalars['Boolean'];
  order: Scalars['Int'];
  parent?: Maybe<NavigationItem>;
  path?: Maybe<Scalars['String']>;
  related?: Maybe<NavigationItemRelatedData>;
  title: Scalars['String'];
  type: Scalars['String'];
  uiRouterKey: Scalars['String'];
  updatedAt?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['String']>;
  updated_by?: Maybe<Scalars['String']>;
};

export type NavigationItemRelated = {
  __typename?: 'NavigationItemRelated';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type NavigationItemRelatedData = {
  __typename?: 'NavigationItemRelatedData';
  attributes?: Maybe<NavigationItemRelated>;
  id: Scalars['Int'];
};

export enum NavigationRenderType {
  Flat = 'FLAT',
  Rfr = 'RFR',
  Tree = 'TREE'
}

export type NotFound = {
  __typename?: 'NotFound';
  createdAt?: Maybe<Scalars['DateTime']>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<NotFoundRelationResponseCollection>;
  seo?: Maybe<ComponentSharedSeo>;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type NotFoundEntity = {
  __typename?: 'NotFoundEntity';
  attributes?: Maybe<NotFound>;
  id?: Maybe<Scalars['ID']>;
};

export type NotFoundEntityResponse = {
  __typename?: 'NotFoundEntityResponse';
  data?: Maybe<NotFoundEntity>;
};

export type NotFoundInput = {
  seo?: InputMaybe<ComponentSharedSeoInput>;
  title?: InputMaybe<Scalars['String']>;
};

export type NotFoundRelationResponseCollection = {
  __typename?: 'NotFoundRelationResponseCollection';
  data: Array<NotFoundEntity>;
};

export type Pagination = {
  __typename?: 'Pagination';
  page: Scalars['Int'];
  pageCount: Scalars['Int'];
  pageSize: Scalars['Int'];
  total: Scalars['Int'];
};

export type PaginationArg = {
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  start?: InputMaybe<Scalars['Int']>;
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type Query = {
  __typename?: 'Query';
  contactPage?: Maybe<ContactPageEntityResponse>;
  contentPage?: Maybe<ContentPageEntityResponse>;
  contentPages?: Maybe<ContentPageEntityResponseCollection>;
  generalSetting?: Maybe<GeneralSettingEntityResponse>;
  homepage?: Maybe<HomepageEntityResponse>;
  i18NLocale?: Maybe<I18NLocaleEntityResponse>;
  i18NLocales?: Maybe<I18NLocaleEntityResponseCollection>;
  me?: Maybe<UsersPermissionsMe>;
  notFound?: Maybe<NotFoundEntityResponse>;
  renderNavigation: Array<Maybe<NavigationItem>>;
  renderNavigationChild: Array<Maybe<NavigationItem>>;
  uploadFile?: Maybe<UploadFileEntityResponse>;
  uploadFiles?: Maybe<UploadFileEntityResponseCollection>;
  uploadFolder?: Maybe<UploadFolderEntityResponse>;
  uploadFolders?: Maybe<UploadFolderEntityResponseCollection>;
  usersPermissionsRole?: Maybe<UsersPermissionsRoleEntityResponse>;
  usersPermissionsRoles?: Maybe<UsersPermissionsRoleEntityResponseCollection>;
  usersPermissionsUser?: Maybe<UsersPermissionsUserEntityResponse>;
  usersPermissionsUsers?: Maybe<UsersPermissionsUserEntityResponseCollection>;
  webformsForm?: Maybe<WebformsFormEntityResponse>;
  webformsForms?: Maybe<WebformsFormEntityResponseCollection>;
  webformsHandler?: Maybe<WebformsHandlerEntityResponse>;
  webformsHandlers?: Maybe<WebformsHandlerEntityResponseCollection>;
  webformsSetting?: Maybe<WebformsSettingEntityResponse>;
  webformsSubmission?: Maybe<WebformsSubmissionEntityResponse>;
  webformsSubmissions?: Maybe<WebformsSubmissionEntityResponseCollection>;
};


export type QueryContactPageArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type QueryContentPageArgs = {
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type QueryContentPagesArgs = {
  filters?: InputMaybe<ContentPageFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryGeneralSettingArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type QueryHomepageArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type QueryI18NLocaleArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryI18NLocalesArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryNotFoundArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type QueryRenderNavigationArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
  menuOnly?: InputMaybe<Scalars['Boolean']>;
  navigationIdOrSlug: Scalars['String'];
  path?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<NavigationRenderType>;
};


export type QueryRenderNavigationChildArgs = {
  childUiKey: Scalars['String'];
  id: Scalars['String'];
  menuOnly?: InputMaybe<Scalars['Boolean']>;
  type?: InputMaybe<NavigationRenderType>;
};


export type QueryUploadFileArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUploadFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUploadFolderArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUploadFoldersArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUsersPermissionsRoleArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUsersPermissionsRolesArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUsersPermissionsUserArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUsersPermissionsUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryWebformsFormArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryWebformsFormsArgs = {
  filters?: InputMaybe<WebformsFormFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryWebformsHandlerArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryWebformsHandlersArgs = {
  filters?: InputMaybe<WebformsHandlerFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryWebformsSubmissionArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryWebformsSubmissionsArgs = {
  filters?: InputMaybe<WebformsSubmissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ResponseCollectionMeta = {
  __typename?: 'ResponseCollectionMeta';
  pagination: Pagination;
};

export type StringFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  containsi?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  eq?: InputMaybe<Scalars['String']>;
  eqi?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<StringFilterInput>;
  notContains?: InputMaybe<Scalars['String']>;
  notContainsi?: InputMaybe<Scalars['String']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  ext?: Maybe<Scalars['String']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  height?: Maybe<Scalars['Int']>;
  mime: Scalars['String'];
  name: Scalars['String'];
  placeholder?: Maybe<Scalars['String']>;
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<GenericMorph>>>;
  size: Scalars['Float'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  url: Scalars['String'];
  width?: Maybe<Scalars['Int']>;
};

export type UploadFileEntity = {
  __typename?: 'UploadFileEntity';
  attributes?: Maybe<UploadFile>;
  id?: Maybe<Scalars['ID']>;
};

export type UploadFileEntityResponse = {
  __typename?: 'UploadFileEntityResponse';
  data?: Maybe<UploadFileEntity>;
};

export type UploadFileEntityResponseCollection = {
  __typename?: 'UploadFileEntityResponseCollection';
  data: Array<UploadFileEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFileFiltersInput = {
  alternativeText?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  caption?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  ext?: InputMaybe<StringFilterInput>;
  folder?: InputMaybe<UploadFolderFiltersInput>;
  folderPath?: InputMaybe<StringFilterInput>;
  formats?: InputMaybe<JsonFilterInput>;
  hash?: InputMaybe<StringFilterInput>;
  height?: InputMaybe<IntFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  mime?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFileFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  placeholder?: InputMaybe<StringFilterInput>;
  previewUrl?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  provider_metadata?: InputMaybe<JsonFilterInput>;
  size?: InputMaybe<FloatFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
  width?: InputMaybe<IntFilterInput>;
};

export type UploadFileInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  ext?: InputMaybe<Scalars['String']>;
  folder?: InputMaybe<Scalars['ID']>;
  folderPath?: InputMaybe<Scalars['String']>;
  formats?: InputMaybe<Scalars['JSON']>;
  hash?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Int']>;
  mime?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  placeholder?: InputMaybe<Scalars['String']>;
  previewUrl?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  provider_metadata?: InputMaybe<Scalars['JSON']>;
  size?: InputMaybe<Scalars['Float']>;
  url?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Int']>;
};

export type UploadFileRelationResponseCollection = {
  __typename?: 'UploadFileRelationResponseCollection';
  data: Array<UploadFileEntity>;
};

export type UploadFolder = {
  __typename?: 'UploadFolder';
  children?: Maybe<UploadFolderRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']>;
  files?: Maybe<UploadFileRelationResponseCollection>;
  name: Scalars['String'];
  parent?: Maybe<UploadFolderEntityResponse>;
  path: Scalars['String'];
  pathId: Scalars['Int'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type UploadFolderChildrenArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type UploadFolderFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type UploadFolderEntity = {
  __typename?: 'UploadFolderEntity';
  attributes?: Maybe<UploadFolder>;
  id?: Maybe<Scalars['ID']>;
};

export type UploadFolderEntityResponse = {
  __typename?: 'UploadFolderEntityResponse';
  data?: Maybe<UploadFolderEntity>;
};

export type UploadFolderEntityResponseCollection = {
  __typename?: 'UploadFolderEntityResponseCollection';
  data: Array<UploadFolderEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFolderFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  children?: InputMaybe<UploadFolderFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  files?: InputMaybe<UploadFileFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFolderFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  parent?: InputMaybe<UploadFolderFiltersInput>;
  path?: InputMaybe<StringFilterInput>;
  pathId?: InputMaybe<IntFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UploadFolderInput = {
  children?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  files?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  name?: InputMaybe<Scalars['String']>;
  parent?: InputMaybe<Scalars['ID']>;
  path?: InputMaybe<Scalars['String']>;
  pathId?: InputMaybe<Scalars['Int']>;
};

export type UploadFolderRelationResponseCollection = {
  __typename?: 'UploadFolderRelationResponseCollection';
  data: Array<UploadFolderEntity>;
};

export type UsersPermissionsCreateRolePayload = {
  __typename?: 'UsersPermissionsCreateRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsDeleteRolePayload = {
  __typename?: 'UsersPermissionsDeleteRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String'];
  password: Scalars['String'];
  provider?: Scalars['String'];
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  blocked?: Maybe<Scalars['Boolean']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  role?: Maybe<UsersPermissionsMeRole>;
  username: Scalars['String'];
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  type?: Maybe<Scalars['String']>;
};

export type UsersPermissionsPasswordPayload = {
  __typename?: 'UsersPermissionsPasswordPayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  action: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UsersPermissionsPermissionEntity = {
  __typename?: 'UsersPermissionsPermissionEntity';
  attributes?: Maybe<UsersPermissionsPermission>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsPermissionFiltersInput = {
  action?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UsersPermissionsPermissionRelationResponseCollection = {
  __typename?: 'UsersPermissionsPermissionRelationResponseCollection';
  data: Array<UsersPermissionsPermissionEntity>;
};

export type UsersPermissionsRegisterInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  permissions?: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  users?: Maybe<UsersPermissionsUserRelationResponseCollection>;
};


export type UsersPermissionsRolePermissionsArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type UsersPermissionsRoleUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type UsersPermissionsRoleEntity = {
  __typename?: 'UsersPermissionsRoleEntity';
  attributes?: Maybe<UsersPermissionsRole>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsRoleEntityResponse = {
  __typename?: 'UsersPermissionsRoleEntityResponse';
  data?: Maybe<UsersPermissionsRoleEntity>;
};

export type UsersPermissionsRoleEntityResponseCollection = {
  __typename?: 'UsersPermissionsRoleEntityResponseCollection';
  data: Array<UsersPermissionsRoleEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsRoleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  permissions?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  users?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type UsersPermissionsRoleInput = {
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  type?: InputMaybe<Scalars['String']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type UsersPermissionsUpdateRolePayload = {
  __typename?: 'UsersPermissionsUpdateRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  blocked?: Maybe<Scalars['Boolean']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  username: Scalars['String'];
};

export type UsersPermissionsUserEntity = {
  __typename?: 'UsersPermissionsUserEntity';
  attributes?: Maybe<UsersPermissionsUser>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsUserEntityResponse = {
  __typename?: 'UsersPermissionsUserEntityResponse';
  data?: Maybe<UsersPermissionsUserEntity>;
};

export type UsersPermissionsUserEntityResponseCollection = {
  __typename?: 'UsersPermissionsUserEntityResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsUserFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  blocked?: InputMaybe<BooleanFilterInput>;
  confirmationToken?: InputMaybe<StringFilterInput>;
  confirmed?: InputMaybe<BooleanFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsUserFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  password?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  resetPasswordToken?: InputMaybe<StringFilterInput>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  username?: InputMaybe<StringFilterInput>;
};

export type UsersPermissionsUserInput = {
  blocked?: InputMaybe<Scalars['Boolean']>;
  confirmationToken?: InputMaybe<Scalars['String']>;
  confirmed?: InputMaybe<Scalars['Boolean']>;
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  resetPasswordToken?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['ID']>;
  username?: InputMaybe<Scalars['String']>;
};

export type UsersPermissionsUserRelationResponseCollection = {
  __typename?: 'UsersPermissionsUserRelationResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
};

export type WebformsForm = {
  __typename?: 'WebformsForm';
  fields?: Maybe<Scalars['JSON']>;
  handlers?: Maybe<WebformsHandlerRelationResponseCollection>;
  submissions?: Maybe<WebformsSubmissionRelationResponseCollection>;
  title?: Maybe<Scalars['String']>;
};


export type WebformsFormHandlersArgs = {
  filters?: InputMaybe<WebformsHandlerFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type WebformsFormSubmissionsArgs = {
  filters?: InputMaybe<WebformsSubmissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type WebformsFormEntity = {
  __typename?: 'WebformsFormEntity';
  attributes?: Maybe<WebformsForm>;
  id?: Maybe<Scalars['ID']>;
};

export type WebformsFormEntityResponse = {
  __typename?: 'WebformsFormEntityResponse';
  data?: Maybe<WebformsFormEntity>;
};

export type WebformsFormEntityResponseCollection = {
  __typename?: 'WebformsFormEntityResponseCollection';
  data: Array<WebformsFormEntity>;
  meta: ResponseCollectionMeta;
};

export type WebformsFormFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<WebformsFormFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  fields?: InputMaybe<JsonFilterInput>;
  handlers?: InputMaybe<WebformsHandlerFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<WebformsFormFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<WebformsFormFiltersInput>>>;
  submissions?: InputMaybe<WebformsSubmissionFiltersInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type WebformsFormInput = {
  fields?: InputMaybe<Scalars['JSON']>;
  handlers?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  submissions?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  title?: InputMaybe<Scalars['String']>;
};

export type WebformsHandler = {
  __typename?: 'WebformsHandler';
  data?: Maybe<Scalars['JSON']>;
  enabled?: Maybe<Scalars['Boolean']>;
  form?: Maybe<WebformsFormEntityResponse>;
  identifier?: Maybe<Scalars['String']>;
  service?: Maybe<Scalars['String']>;
  type?: Maybe<Enum_Webformshandler_Type>;
};

export type WebformsHandlerEntity = {
  __typename?: 'WebformsHandlerEntity';
  attributes?: Maybe<WebformsHandler>;
  id?: Maybe<Scalars['ID']>;
};

export type WebformsHandlerEntityResponse = {
  __typename?: 'WebformsHandlerEntityResponse';
  data?: Maybe<WebformsHandlerEntity>;
};

export type WebformsHandlerEntityResponseCollection = {
  __typename?: 'WebformsHandlerEntityResponseCollection';
  data: Array<WebformsHandlerEntity>;
  meta: ResponseCollectionMeta;
};

export type WebformsHandlerFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<WebformsHandlerFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  data?: InputMaybe<JsonFilterInput>;
  enabled?: InputMaybe<BooleanFilterInput>;
  form?: InputMaybe<WebformsFormFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  identifier?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<WebformsHandlerFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<WebformsHandlerFiltersInput>>>;
  service?: InputMaybe<StringFilterInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type WebformsHandlerInput = {
  data?: InputMaybe<Scalars['JSON']>;
  enabled?: InputMaybe<Scalars['Boolean']>;
  form?: InputMaybe<Scalars['ID']>;
  identifier?: InputMaybe<Scalars['String']>;
  service?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Enum_Webformshandler_Type>;
};

export type WebformsHandlerRelationResponseCollection = {
  __typename?: 'WebformsHandlerRelationResponseCollection';
  data: Array<WebformsHandlerEntity>;
};

export type WebformsSetting = {
  __typename?: 'WebformsSetting';
  createdAt?: Maybe<Scalars['DateTime']>;
  from?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type WebformsSettingEntity = {
  __typename?: 'WebformsSettingEntity';
  attributes?: Maybe<WebformsSetting>;
  id?: Maybe<Scalars['ID']>;
};

export type WebformsSettingEntityResponse = {
  __typename?: 'WebformsSettingEntityResponse';
  data?: Maybe<WebformsSettingEntity>;
};

export type WebformsSettingInput = {
  from?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type WebformsSubmission = {
  __typename?: 'WebformsSubmission';
  form?: Maybe<WebformsFormEntityResponse>;
  submission?: Maybe<Scalars['JSON']>;
};

export type WebformsSubmissionEntity = {
  __typename?: 'WebformsSubmissionEntity';
  attributes?: Maybe<WebformsSubmission>;
  id?: Maybe<Scalars['ID']>;
};

export type WebformsSubmissionEntityResponse = {
  __typename?: 'WebformsSubmissionEntityResponse';
  data?: Maybe<WebformsSubmissionEntity>;
};

export type WebformsSubmissionEntityResponseCollection = {
  __typename?: 'WebformsSubmissionEntityResponseCollection';
  data: Array<WebformsSubmissionEntity>;
  meta: ResponseCollectionMeta;
};

export type WebformsSubmissionFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<WebformsSubmissionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  form?: InputMaybe<WebformsFormFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<WebformsSubmissionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<WebformsSubmissionFiltersInput>>>;
  submission?: InputMaybe<JsonFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type WebformsSubmissionInput = {
  form?: InputMaybe<Scalars['ID']>;
  submission?: InputMaybe<Scalars['JSON']>;
};

export type WebformsSubmissionRelationResponseCollection = {
  __typename?: 'WebformsSubmissionRelationResponseCollection';
  data: Array<WebformsSubmissionEntity>;
};

export type ComponentInputButtonFragment = { __typename?: 'ComponentInputButton', id: string, label: string, href: string, color: Enum_Componentinputbutton_Color, variant: Enum_Componentinputbutton_Variant, target: Enum_Componentinputbutton_Target };

export type ComponentContentHeadingFragment = { __typename?: 'ComponentContentHeading', id: string, title: string, titleTag: Enum_Componentcontentheading_Titletag };

export type ComponentContentImageTextFragment = { __typename?: 'ComponentContentImageText', id: string, text: string, background: boolean, image: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string, placeholder?: string | null, hash: string, mime: string, name: string, provider: string, size: number } | null } | null }, heading: { __typename?: 'ComponentContentHeading', id: string, title: string, titleTag: Enum_Componentcontentheading_Titletag }, button: { __typename?: 'ComponentInputButton', id: string, label: string, href: string, color: Enum_Componentinputbutton_Color, variant: Enum_Componentinputbutton_Variant, target: Enum_Componentinputbutton_Target } };

export type ComponentContentTeaserFragment = { __typename?: 'ComponentContentTeaser', id: string, text: string, image: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string, placeholder?: string | null, hash: string, mime: string, name: string, provider: string, size: number } | null } | null }, heading: { __typename?: 'ComponentContentHeading', id: string, title: string, titleTag: Enum_Componentcontentheading_Titletag }, button?: { __typename?: 'ComponentInputButton', id: string, label: string, href: string, color: Enum_Componentinputbutton_Color, variant: Enum_Componentinputbutton_Variant, target: Enum_Componentinputbutton_Target } | null };

export type ComponentContentTeaserCollectionFragment = { __typename?: 'ComponentContentTeaserCollection', id: string, heading: { __typename?: 'ComponentContentHeading', id: string, title: string, titleTag: Enum_Componentcontentheading_Titletag }, teasers: Array<{ __typename?: 'ComponentContentTeaser', id: string, text: string, image: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string, placeholder?: string | null, hash: string, mime: string, name: string, provider: string, size: number } | null } | null }, heading: { __typename?: 'ComponentContentHeading', id: string, title: string, titleTag: Enum_Componentcontentheading_Titletag }, button?: { __typename?: 'ComponentInputButton', id: string, label: string, href: string, color: Enum_Componentinputbutton_Color, variant: Enum_Componentinputbutton_Variant, target: Enum_Componentinputbutton_Target } | null } | null> };

export type ComponentContentTextFragment = { __typename?: 'ComponentContentText', id: string, text: string, background: boolean, heading?: { __typename?: 'ComponentContentHeading', id: string, title: string, titleTag: Enum_Componentcontentheading_Titletag } | null, button: { __typename?: 'ComponentInputButton', id: string, label: string, href: string, color: Enum_Componentinputbutton_Color, variant: Enum_Componentinputbutton_Variant, target: Enum_Componentinputbutton_Target } };

export type NavigationItemFragment = { __typename?: 'NavigationItem', id: number, title: string, path?: string | null, type: string, externalPath?: string | null, bold?: boolean | null, related?: { __typename?: 'NavigationItemRelatedData', attributes?: { __typename: 'NavigationItemRelated' } | null } | null };

export type NavigationQueryVariables = Exact<{
  id: Scalars['String'];
  locale: Scalars['I18NLocaleCode'];
}>;


export type NavigationQuery = { navigation: Array<{ __typename?: 'NavigationItem', id: number, title: string, path?: string | null, type: string, externalPath?: string | null, bold?: boolean | null, items?: Array<{ __typename?: 'NavigationItem', id: number, title: string, path?: string | null, type: string, externalPath?: string | null, bold?: boolean | null, related?: { __typename?: 'NavigationItemRelatedData', attributes?: { __typename: 'NavigationItemRelated' } | null } | null } | null> | null, related?: { __typename?: 'NavigationItemRelatedData', attributes?: { __typename: 'NavigationItemRelated' } | null } | null } | null> };

export type ComponentSharedSeoFragment = { __typename?: 'ComponentSharedSeo', id: string, metaTitle?: string | null, metaRobots?: string | null, metaDescription?: string | null, metaViewport?: string | null, canonicalURL?: string | null, keywords?: string | null, metaImage: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string, placeholder?: string | null, hash: string, mime: string, name: string, provider: string, size: number } | null } | null } };

export type ComponentUploadFileFragment = { __typename?: 'UploadFile', alternativeText?: string | null, url: string, placeholder?: string | null, hash: string, mime: string, name: string, provider: string, size: number };

export type SingleTypeGeneralQueryVariables = Exact<{
  locale: Scalars['I18NLocaleCode'];
}>;


export type SingleTypeGeneralQuery = { generalSetting?: { __typename?: 'GeneralSettingEntityResponse', data?: { __typename?: 'GeneralSettingEntity', id?: string | null, attributes?: { __typename?: 'GeneralSetting', companyName?: string | null, emailaddress?: string | null, phoneNumber?: string | null, address?: string | null, logo?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string, placeholder?: string | null, hash: string, mime: string, name: string, provider: string, size: number } | null } | null } | null, socials?: Array<{ __typename?: 'ComponentGeneralSocialMedia', id: string, channel?: Enum_Componentgeneralsocialmedia_Channel | null, url: string } | null> | null } | null } | null } | null };

export type SingleTypeHomepageQueryVariables = Exact<{
  locale: Scalars['I18NLocaleCode'];
}>;


export type SingleTypeHomepageQuery = { homepage?: { __typename?: 'HomepageEntityResponse', data?: { __typename?: 'HomepageEntity', id?: string | null, attributes?: { __typename?: 'Homepage', title: string } | null } | null } | null };

export type SingleTypeNotFoundQueryVariables = Exact<{
  locale: Scalars['I18NLocaleCode'];
}>;


export type SingleTypeNotFoundQuery = { notFound?: { __typename?: 'NotFoundEntityResponse', data?: { __typename?: 'NotFoundEntity', attributes?: { __typename?: 'NotFound', title: string } | null } | null } | null };
