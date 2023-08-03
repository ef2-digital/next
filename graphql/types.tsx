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
  ArticleOverviewPageFlexContentDynamicZoneInput: any;
  ArticleOverviewPageHeroDynamicZoneInput: any;
  ArticlePageFlexContentDynamicZoneInput: any;
  ArticlePageHeroDynamicZoneInput: any;
  ContactPageFlexContentDynamicZoneInput: any;
  ContactPageHeroDynamicZoneInput: any;
  ContentPageFlexContentDynamicZoneInput: any;
  ContentPageHeroDynamicZoneInput: any;
  DateTime: any;
  HomepageFlexContentDynamicZoneInput: any;
  HomepageHeroDynamicZoneInput: any;
  I18NLocaleCode: any;
  JSON: any;
  NotFoundFlexContentDynamicZoneInput: any;
  NotFoundHeroDynamicZoneInput: any;
  Upload: any;
};

export type ArticleOverviewPage = {
  __typename?: 'ArticleOverviewPage';
  createdAt?: Maybe<Scalars['DateTime']>;
  flexContent: Array<Maybe<ArticleOverviewPageFlexContentDynamicZone>>;
  hero: Array<Maybe<ArticleOverviewPageHeroDynamicZone>>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<ArticleOverviewPageRelationResponseCollection>;
  seo?: Maybe<ComponentSharedSeo>;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ArticleOverviewPageEntity = {
  __typename?: 'ArticleOverviewPageEntity';
  attributes?: Maybe<ArticleOverviewPage>;
  id?: Maybe<Scalars['ID']>;
};

export type ArticleOverviewPageEntityResponse = {
  __typename?: 'ArticleOverviewPageEntityResponse';
  data?: Maybe<ArticleOverviewPageEntity>;
};

export type ArticleOverviewPageFlexContentDynamicZone = ComponentContentAccordion | ComponentContentAccordionItem | ComponentContentImage | ComponentContentImageText | ComponentContentQuote | ComponentContentText | ComponentContentVideo | Error;

export type ArticleOverviewPageHeroDynamicZone = ComponentHeroHeroButtons | Error;

export type ArticleOverviewPageInput = {
  flexContent?: InputMaybe<Array<Scalars['ArticleOverviewPageFlexContentDynamicZoneInput']>>;
  hero?: InputMaybe<Array<Scalars['ArticleOverviewPageHeroDynamicZoneInput']>>;
  seo?: InputMaybe<ComponentSharedSeoInput>;
  title?: InputMaybe<Scalars['String']>;
};

export type ArticleOverviewPageRelationResponseCollection = {
  __typename?: 'ArticleOverviewPageRelationResponseCollection';
  data: Array<ArticleOverviewPageEntity>;
};

export type ArticlePage = {
  __typename?: 'ArticlePage';
  createdAt?: Maybe<Scalars['DateTime']>;
  flexContent: Array<Maybe<ArticlePageFlexContentDynamicZone>>;
  hero: Array<Maybe<ArticlePageHeroDynamicZone>>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<ArticlePageRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  seo?: Maybe<ComponentSharedSeo>;
  slug: Scalars['String'];
  teaser?: Maybe<ComponentSharedTeaser>;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type ArticlePageLocalizationsArgs = {
  filters?: InputMaybe<ArticlePageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ArticlePageEntity = {
  __typename?: 'ArticlePageEntity';
  attributes?: Maybe<ArticlePage>;
  id?: Maybe<Scalars['ID']>;
};

export type ArticlePageEntityResponse = {
  __typename?: 'ArticlePageEntityResponse';
  data?: Maybe<ArticlePageEntity>;
};

export type ArticlePageEntityResponseCollection = {
  __typename?: 'ArticlePageEntityResponseCollection';
  data: Array<ArticlePageEntity>;
  meta: ResponseCollectionMeta;
};

export type ArticlePageFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ArticlePageFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<ArticlePageFiltersInput>;
  not?: InputMaybe<ArticlePageFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ArticlePageFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  seo?: InputMaybe<ComponentSharedSeoFiltersInput>;
  slug?: InputMaybe<StringFilterInput>;
  teaser?: InputMaybe<ComponentSharedTeaserFiltersInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ArticlePageFlexContentDynamicZone = ComponentContentAccordion | ComponentContentAccordionItem | ComponentContentImage | ComponentContentImageText | ComponentContentQuote | ComponentContentText | ComponentContentVideo | Error;

export type ArticlePageHeroDynamicZone = ComponentHeroHeroButtons | Error;

export type ArticlePageInput = {
  flexContent?: InputMaybe<Array<Scalars['ArticlePageFlexContentDynamicZoneInput']>>;
  hero?: InputMaybe<Array<Scalars['ArticlePageHeroDynamicZoneInput']>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  seo?: InputMaybe<ComponentSharedSeoInput>;
  slug?: InputMaybe<Scalars['String']>;
  teaser?: InputMaybe<ComponentSharedTeaserInput>;
  title?: InputMaybe<Scalars['String']>;
};

export type ArticlePageRelationResponseCollection = {
  __typename?: 'ArticlePageRelationResponseCollection';
  data: Array<ArticlePageEntity>;
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

export type ComponentContentAccordion = {
  __typename?: 'ComponentContentAccordion';
  heading: ComponentLayoutHeading;
  id: Scalars['ID'];
  items: Array<Maybe<ComponentContentAccordionItem>>;
};


export type ComponentContentAccordionItemsArgs = {
  filters?: InputMaybe<ComponentContentAccordionItemFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentContentAccordionItem = {
  __typename?: 'ComponentContentAccordionItem';
  id: Scalars['ID'];
  text: Scalars['String'];
  title: Scalars['String'];
};

export type ComponentContentAccordionItemFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentContentAccordionItemFiltersInput>>>;
  not?: InputMaybe<ComponentContentAccordionItemFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentContentAccordionItemFiltersInput>>>;
  text?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentContentImage = {
  __typename?: 'ComponentContentImage';
  caption: Scalars['String'];
  id: Scalars['ID'];
  image: UploadFileEntityResponse;
  narrow: Scalars['Boolean'];
};

export type ComponentContentImageText = {
  __typename?: 'ComponentContentImageText';
  background: Scalars['Boolean'];
  id: Scalars['ID'];
  image: UploadFileEntityResponse;
  paragraph: ComponentLayoutParagraph;
  textLeft: Scalars['Boolean'];
};

export type ComponentContentQuote = {
  __typename?: 'ComponentContentQuote';
  button?: Maybe<ComponentInputButton>;
  heading: ComponentLayoutHeading;
  id: Scalars['ID'];
  image: UploadFileEntityResponse;
};

export type ComponentContentText = {
  __typename?: 'ComponentContentText';
  background: Scalars['Boolean'];
  id: Scalars['ID'];
  narrow: Scalars['Boolean'];
  paragraph: ComponentLayoutParagraph;
};

export type ComponentContentVideo = {
  __typename?: 'ComponentContentVideo';
  caption: Scalars['String'];
  embedId: Scalars['String'];
  id: Scalars['ID'];
};

export type ComponentGeneralFooter = {
  __typename?: 'ComponentGeneralFooter';
  addresses?: Maybe<Array<Maybe<ComponentInputAddress>>>;
  columns?: Maybe<Array<Maybe<ComponentInputLinks>>>;
  id: Scalars['ID'];
  links?: Maybe<Array<Maybe<ComponentInputLink>>>;
  socials: Array<Maybe<ComponentGeneralSocialMedia>>;
};


export type ComponentGeneralFooterAddressesArgs = {
  filters?: InputMaybe<ComponentInputAddressFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type ComponentGeneralFooterColumnsArgs = {
  filters?: InputMaybe<ComponentInputLinksFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type ComponentGeneralFooterLinksArgs = {
  filters?: InputMaybe<ComponentInputLinkFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type ComponentGeneralFooterSocialsArgs = {
  filters?: InputMaybe<ComponentGeneralSocialMediaFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentGeneralFooterInput = {
  addresses?: InputMaybe<Array<InputMaybe<ComponentInputAddressInput>>>;
  columns?: InputMaybe<Array<InputMaybe<ComponentInputLinksInput>>>;
  id?: InputMaybe<Scalars['ID']>;
  links?: InputMaybe<Array<InputMaybe<ComponentInputLinkInput>>>;
  socials?: InputMaybe<Array<InputMaybe<ComponentGeneralSocialMediaInput>>>;
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

export type ComponentHeroHero = {
  __typename?: 'ComponentHeroHero';
  id: Scalars['ID'];
  image: UploadFileEntityResponse;
  text: Scalars['String'];
  textTeaser: Scalars['String'];
  title: Scalars['String'];
};

export type ComponentHeroHeroButtons = {
  __typename?: 'ComponentHeroHeroButtons';
  buttons: Array<Maybe<ComponentInputButton>>;
  hero: ComponentHeroHero;
  id: Scalars['ID'];
};


export type ComponentHeroHeroButtonsButtonsArgs = {
  filters?: InputMaybe<ComponentInputButtonFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentInputAddress = {
  __typename?: 'ComponentInputAddress';
  email?: Maybe<Scalars['String']>;
  houseNumber?: Maybe<Scalars['String']>;
  houseNumberAddition?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  phone?: Maybe<Scalars['String']>;
  phoneHref?: Maybe<Scalars['String']>;
  place?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  title: Scalars['String'];
};

export type ComponentInputAddressFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentInputAddressFiltersInput>>>;
  email?: InputMaybe<StringFilterInput>;
  houseNumber?: InputMaybe<StringFilterInput>;
  houseNumberAddition?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentInputAddressFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentInputAddressFiltersInput>>>;
  phone?: InputMaybe<StringFilterInput>;
  phoneHref?: InputMaybe<StringFilterInput>;
  place?: InputMaybe<StringFilterInput>;
  postalCode?: InputMaybe<StringFilterInput>;
  street?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentInputAddressInput = {
  email?: InputMaybe<Scalars['String']>;
  houseNumber?: InputMaybe<Scalars['String']>;
  houseNumberAddition?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  phone?: InputMaybe<Scalars['String']>;
  phoneHref?: InputMaybe<Scalars['String']>;
  place?: InputMaybe<Scalars['String']>;
  postalCode?: InputMaybe<Scalars['String']>;
  street?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentInputButton = {
  __typename?: 'ComponentInputButton';
  href: Scalars['String'];
  id: Scalars['ID'];
  label: Scalars['String'];
  target: Enum_Componentinputbutton_Target;
  variant: Enum_Componentinputbutton_Variant;
};

export type ComponentInputButtonFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentInputButtonFiltersInput>>>;
  href?: InputMaybe<StringFilterInput>;
  label?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentInputButtonFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentInputButtonFiltersInput>>>;
  target?: InputMaybe<StringFilterInput>;
  variant?: InputMaybe<StringFilterInput>;
};

export type ComponentInputLink = {
  __typename?: 'ComponentInputLink';
  href?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  label: Scalars['String'];
  target?: Maybe<Enum_Componentinputlink_Target>;
};

export type ComponentInputLinkFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentInputLinkFiltersInput>>>;
  href?: InputMaybe<StringFilterInput>;
  label?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentInputLinkFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentInputLinkFiltersInput>>>;
  target?: InputMaybe<StringFilterInput>;
};

export type ComponentInputLinkInput = {
  href?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  label?: InputMaybe<Scalars['String']>;
  target?: InputMaybe<Enum_Componentinputlink_Target>;
};

export type ComponentInputLinks = {
  __typename?: 'ComponentInputLinks';
  id: Scalars['ID'];
  links: Array<Maybe<ComponentInputLink>>;
  title: Scalars['String'];
};


export type ComponentInputLinksLinksArgs = {
  filters?: InputMaybe<ComponentInputLinkFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentInputLinksFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentInputLinksFiltersInput>>>;
  links?: InputMaybe<ComponentInputLinkFiltersInput>;
  not?: InputMaybe<ComponentInputLinksFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentInputLinksFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentInputLinksInput = {
  id?: InputMaybe<Scalars['ID']>;
  links?: InputMaybe<Array<InputMaybe<ComponentInputLinkInput>>>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentInputRedirect = {
  __typename?: 'ComponentInputRedirect';
  destination: Scalars['String'];
  id: Scalars['ID'];
  source: Scalars['String'];
};

export type ComponentInputRedirectFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentInputRedirectFiltersInput>>>;
  destination?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentInputRedirectFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentInputRedirectFiltersInput>>>;
  source?: InputMaybe<StringFilterInput>;
};

export type ComponentInputRedirectInput = {
  destination?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  source?: InputMaybe<Scalars['String']>;
};

export type ComponentLayoutHeading = {
  __typename?: 'ComponentLayoutHeading';
  id: Scalars['ID'];
  subtitle: Scalars['String'];
  title: Scalars['String'];
};

export type ComponentLayoutHeadingFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentLayoutHeadingFiltersInput>>>;
  not?: InputMaybe<ComponentLayoutHeadingFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentLayoutHeadingFiltersInput>>>;
  subtitle?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentLayoutParagraph = {
  __typename?: 'ComponentLayoutParagraph';
  button?: Maybe<ComponentInputButton>;
  heading: ComponentLayoutHeading;
  id: Scalars['ID'];
  text: Scalars['String'];
};

export type ComponentLayoutParagraphFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentLayoutParagraphFiltersInput>>>;
  button?: InputMaybe<ComponentInputButtonFiltersInput>;
  heading?: InputMaybe<ComponentLayoutHeadingFiltersInput>;
  not?: InputMaybe<ComponentLayoutParagraphFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentLayoutParagraphFiltersInput>>>;
  text?: InputMaybe<StringFilterInput>;
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

export type ComponentSharedTeaser = {
  __typename?: 'ComponentSharedTeaser';
  description: Scalars['String'];
  id: Scalars['ID'];
  image: UploadFileEntityResponse;
  title: Scalars['String'];
};

export type ComponentSharedTeaserFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSharedTeaserFiltersInput>>>;
  description?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentSharedTeaserFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSharedTeaserFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentSharedTeaserInput = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentTeaserTeaser = {
  __typename?: 'ComponentTeaserTeaser';
  id: Scalars['ID'];
  paragraph: ComponentLayoutParagraph;
};

export type ComponentTeaserTeaserFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentTeaserTeaserFiltersInput>>>;
  not?: InputMaybe<ComponentTeaserTeaserFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentTeaserTeaserFiltersInput>>>;
  paragraph?: InputMaybe<ComponentLayoutParagraphFiltersInput>;
};

export type ComponentTeaserTeasers = {
  __typename?: 'ComponentTeaserTeasers';
  heading?: Maybe<ComponentLayoutHeading>;
  id: Scalars['ID'];
  teasers: Array<Maybe<ComponentTeaserTeaser>>;
};


export type ComponentTeaserTeasersTeasersArgs = {
  filters?: InputMaybe<ComponentTeaserTeaserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ContactPage = {
  __typename?: 'ContactPage';
  createdAt?: Maybe<Scalars['DateTime']>;
  flexContent: Array<Maybe<ContactPageFlexContentDynamicZone>>;
  hero: Array<Maybe<ContactPageHeroDynamicZone>>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<ContactPageRelationResponseCollection>;
  seo?: Maybe<ComponentSharedSeo>;
  teaser?: Maybe<ComponentSharedTeaser>;
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

export type ContactPageFlexContentDynamicZone = ComponentContentAccordion | ComponentContentAccordionItem | ComponentContentImage | ComponentContentImageText | ComponentContentQuote | ComponentContentText | ComponentContentVideo | Error;

export type ContactPageHeroDynamicZone = ComponentHeroHeroButtons | Error;

export type ContactPageInput = {
  flexContent?: InputMaybe<Array<Scalars['ContactPageFlexContentDynamicZoneInput']>>;
  hero?: InputMaybe<Array<Scalars['ContactPageHeroDynamicZoneInput']>>;
  seo?: InputMaybe<ComponentSharedSeoInput>;
  teaser?: InputMaybe<ComponentSharedTeaserInput>;
  title?: InputMaybe<Scalars['String']>;
};

export type ContactPageRelationResponseCollection = {
  __typename?: 'ContactPageRelationResponseCollection';
  data: Array<ContactPageEntity>;
};

export type ContentPage = {
  __typename?: 'ContentPage';
  createdAt?: Maybe<Scalars['DateTime']>;
  flexContent: Array<Maybe<ContentPageFlexContentDynamicZone>>;
  hero: Array<Maybe<ContentPageHeroDynamicZone>>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<ContentPageRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  seo?: Maybe<ComponentSharedSeo>;
  slug: Scalars['String'];
  teaser?: Maybe<ComponentSharedTeaser>;
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
  teaser?: InputMaybe<ComponentSharedTeaserFiltersInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ContentPageFlexContentDynamicZone = ComponentContentAccordion | ComponentContentAccordionItem | ComponentContentImage | ComponentContentImageText | ComponentContentQuote | ComponentContentText | ComponentContentVideo | Error;

export type ContentPageHeroDynamicZone = ComponentHeroHeroButtons | Error;

export type ContentPageInput = {
  flexContent?: InputMaybe<Array<Scalars['ContentPageFlexContentDynamicZoneInput']>>;
  hero?: InputMaybe<Array<Scalars['ContentPageHeroDynamicZoneInput']>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  seo?: InputMaybe<ComponentSharedSeoInput>;
  slug?: InputMaybe<Scalars['String']>;
  teaser?: InputMaybe<ComponentSharedTeaserInput>;
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

export enum Enum_Componentgeneralsocialmedia_Channel {
  Facebook = 'facebook',
  Instagram = 'instagram',
  Linkedin = 'linkedin',
  Tiktok = 'tiktok',
  Twitter = 'twitter'
}

export enum Enum_Componentinputbutton_Target {
  Blank = 'blank',
  Self = 'self'
}

export enum Enum_Componentinputbutton_Variant {
  Primary = 'primary',
  Secondary = 'secondary'
}

export enum Enum_Componentinputlink_Target {
  Blank = 'blank',
  Self = 'self'
}

export enum Enum_Componentsharedmetasocial_Socialnetwork {
  Facebook = 'Facebook',
  Twitter = 'Twitter'
}

export type Error = {
  __typename?: 'Error';
  code: Scalars['String'];
  message?: Maybe<Scalars['String']>;
};

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
  createdAt?: Maybe<Scalars['DateTime']>;
  footer?: Maybe<ComponentGeneralFooter>;
  googleTagManager?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<GeneralSettingRelationResponseCollection>;
  redirects: Array<Maybe<ComponentInputRedirect>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type GeneralSettingRedirectsArgs = {
  filters?: InputMaybe<ComponentInputRedirectFiltersInput>;
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
  footer?: InputMaybe<ComponentGeneralFooterInput>;
  googleTagManager?: InputMaybe<Scalars['String']>;
  redirects?: InputMaybe<Array<InputMaybe<ComponentInputRedirectInput>>>;
};

export type GeneralSettingRelationResponseCollection = {
  __typename?: 'GeneralSettingRelationResponseCollection';
  data: Array<GeneralSettingEntity>;
};

export type GenericMorph = ArticleOverviewPage | ArticlePage | ComponentContentAccordion | ComponentContentAccordionItem | ComponentContentImage | ComponentContentImageText | ComponentContentQuote | ComponentContentText | ComponentContentVideo | ComponentGeneralFooter | ComponentGeneralSocialMedia | ComponentHeroHero | ComponentHeroHeroButtons | ComponentInputAddress | ComponentInputButton | ComponentInputLink | ComponentInputLinks | ComponentInputRedirect | ComponentLayoutHeading | ComponentLayoutParagraph | ComponentSharedMetaSocial | ComponentSharedSeo | ComponentSharedTeaser | ComponentTeaserTeaser | ComponentTeaserTeasers | ContactPage | ContentPage | GeneralSetting | Homepage | I18NLocale | NotFound | UploadFile | UploadFolder | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsUser;

export type Homepage = {
  __typename?: 'Homepage';
  createdAt?: Maybe<Scalars['DateTime']>;
  flexContent: Array<Maybe<HomepageFlexContentDynamicZone>>;
  hero: Array<Maybe<HomepageHeroDynamicZone>>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<HomepageRelationResponseCollection>;
  seo?: Maybe<ComponentSharedSeo>;
  teaser?: Maybe<ComponentSharedTeaser>;
  test?: Maybe<Scalars['JSON']>;
  testtt?: Maybe<ContentPageEntityResponse>;
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

export type HomepageFlexContentDynamicZone = ComponentContentAccordion | ComponentContentImage | ComponentContentImageText | ComponentContentQuote | ComponentContentText | ComponentContentVideo | Error;

export type HomepageHeroDynamicZone = ComponentHeroHeroButtons | Error;

export type HomepageInput = {
  flexContent?: InputMaybe<Array<Scalars['HomepageFlexContentDynamicZoneInput']>>;
  hero?: InputMaybe<Array<Scalars['HomepageHeroDynamicZoneInput']>>;
  seo?: InputMaybe<ComponentSharedSeoInput>;
  teaser?: InputMaybe<ComponentSharedTeaserInput>;
  test?: InputMaybe<Scalars['JSON']>;
  testtt?: InputMaybe<Scalars['ID']>;
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
  createArticleOverviewPageLocalization?: Maybe<ArticleOverviewPageEntityResponse>;
  createArticlePage?: Maybe<ArticlePageEntityResponse>;
  createArticlePageLocalization?: Maybe<ArticlePageEntityResponse>;
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
  deleteArticleOverviewPage?: Maybe<ArticleOverviewPageEntityResponse>;
  deleteArticlePage?: Maybe<ArticlePageEntityResponse>;
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
  updateArticleOverviewPage?: Maybe<ArticleOverviewPageEntityResponse>;
  updateArticlePage?: Maybe<ArticlePageEntityResponse>;
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
  upload: UploadFileEntityResponse;
};


export type MutationChangePasswordArgs = {
  currentPassword: Scalars['String'];
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
};


export type MutationCreateArticleOverviewPageLocalizationArgs = {
  data?: InputMaybe<ArticleOverviewPageInput>;
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateArticlePageArgs = {
  data: ArticlePageInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateArticlePageLocalizationArgs = {
  data?: InputMaybe<ArticlePageInput>;
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
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


export type MutationDeleteArticleOverviewPageArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeleteArticlePageArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
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


export type MutationUpdateArticleOverviewPageArgs = {
  data: ArticleOverviewPageInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationUpdateArticlePageArgs = {
  data: ArticlePageInput;
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
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


export type MutationUploadArgs = {
  field?: InputMaybe<Scalars['String']>;
  file: Scalars['Upload'];
  info?: InputMaybe<FileInfoInput>;
  ref?: InputMaybe<Scalars['String']>;
  refId?: InputMaybe<Scalars['ID']>;
};

export type NavigationItem = {
  __typename?: 'NavigationItem';
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

export type NavigationItemRelated = ArticleOverviewPage | ArticlePage | ContactPage | ContentPage;

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
  flexContent: Array<Maybe<NotFoundFlexContentDynamicZone>>;
  hero: Array<Maybe<NotFoundHeroDynamicZone>>;
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

export type NotFoundFlexContentDynamicZone = ComponentContentAccordion | ComponentContentImage | ComponentContentImageText | ComponentContentText | ComponentContentVideo | Error;

export type NotFoundHeroDynamicZone = ComponentHeroHeroButtons | Error;

export type NotFoundInput = {
  flexContent?: InputMaybe<Array<Scalars['NotFoundFlexContentDynamicZoneInput']>>;
  hero?: InputMaybe<Array<Scalars['NotFoundHeroDynamicZoneInput']>>;
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
  articleOverviewPage?: Maybe<ArticleOverviewPageEntityResponse>;
  articlePage?: Maybe<ArticlePageEntityResponse>;
  articlePages?: Maybe<ArticlePageEntityResponseCollection>;
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
};


export type QueryArticleOverviewPageArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type QueryArticlePageArgs = {
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type QueryArticlePagesArgs = {
  filters?: InputMaybe<ArticlePageFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
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

export type ComponentContentAccordionFragment = { __typename?: 'ComponentContentAccordion', id: string, heading: { __typename?: 'ComponentLayoutHeading', id: string, title: string, subtitle: string }, items: Array<{ __typename?: 'ComponentContentAccordionItem', id: string, title: string, text: string } | null> };

export type ComponentContentAccordionItemFragment = { __typename?: 'ComponentContentAccordionItem', id: string, title: string, text: string };

export type ComponentContentHeadingFragment = { __typename?: 'ComponentLayoutHeading', id: string, title: string, subtitle: string };

export type ComponentContentImageFragment = { __typename?: 'ComponentContentImage', caption: string, narrow: boolean, image: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string, placeholder?: string | null, hash: string, mime: string, name: string, provider: string, size: number } | null } | null } };

export type ComponentContentImageTextFragment = { __typename?: 'ComponentContentImageText', id: string, textLeft: boolean, background: boolean, paragraph: { __typename?: 'ComponentLayoutParagraph', id: string, text: string, heading: { __typename?: 'ComponentLayoutHeading', id: string, title: string, subtitle: string }, button?: { __typename?: 'ComponentInputButton', id: string, label: string, href: string, variant: Enum_Componentinputbutton_Variant, target: Enum_Componentinputbutton_Target } | null }, image: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string, placeholder?: string | null, hash: string, mime: string, name: string, provider: string, size: number } | null } | null } };

export type ComponentContentQuoteFragment = { __typename?: 'ComponentContentQuote', heading: { __typename?: 'ComponentLayoutHeading', id: string, title: string, subtitle: string }, image: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string, placeholder?: string | null, hash: string, mime: string, name: string, provider: string, size: number } | null } | null } };

export type ComponentContentTextFragment = { __typename?: 'ComponentContentText', id: string, narrow: boolean, background: boolean, paragraph: { __typename?: 'ComponentLayoutParagraph', id: string, text: string, heading: { __typename?: 'ComponentLayoutHeading', id: string, title: string, subtitle: string }, button?: { __typename?: 'ComponentInputButton', id: string, label: string, href: string, variant: Enum_Componentinputbutton_Variant, target: Enum_Componentinputbutton_Target } | null } };

export type ComponentGeneralFooterFragment = { __typename?: 'ComponentGeneralFooter', id: string, socials: Array<{ __typename?: 'ComponentGeneralSocialMedia', channel?: Enum_Componentgeneralsocialmedia_Channel | null } | null>, links?: Array<{ __typename?: 'ComponentInputLink', id: string, label: string, href?: string | null, target?: Enum_Componentinputlink_Target | null } | null> | null, columns?: Array<{ __typename?: 'ComponentInputLinks', id: string, title: string, links: Array<{ __typename?: 'ComponentInputLink', id: string, label: string, href?: string | null, target?: Enum_Componentinputlink_Target | null } | null> } | null> | null };

export type ComponentInputAddressFragment = { __typename?: 'ComponentInputAddress', id: string, street?: string | null, houseNumber?: string | null, houseNumberAddition?: string | null, postalCode?: string | null, place?: string | null, email?: string | null, phone?: string | null, phoneHref?: string | null };

export type ComponentInputButtonFragment = { __typename?: 'ComponentInputButton', id: string, label: string, href: string, variant: Enum_Componentinputbutton_Variant, target: Enum_Componentinputbutton_Target };

export type ComponentInputLinkFragment = { __typename?: 'ComponentInputLink', id: string, label: string, href?: string | null, target?: Enum_Componentinputlink_Target | null };

export type ComponentInputLinksFragment = { __typename?: 'ComponentInputLinks', id: string, title: string, links: Array<{ __typename?: 'ComponentInputLink', id: string, label: string, href?: string | null, target?: Enum_Componentinputlink_Target | null } | null> };

export type ComponentInputRedirectFragment = { __typename?: 'ComponentInputRedirect', id: string };

export type ComponentLayoutParagraphFragment = { __typename?: 'ComponentLayoutParagraph', id: string, text: string, heading: { __typename?: 'ComponentLayoutHeading', id: string, title: string, subtitle: string }, button?: { __typename?: 'ComponentInputButton', id: string, label: string, href: string, variant: Enum_Componentinputbutton_Variant, target: Enum_Componentinputbutton_Target } | null };

export type NavigationItemFragment = { __typename?: 'NavigationItem', id: number, title: string, path?: string | null, type: string, externalPath?: string | null, related?: { __typename?: 'NavigationItemRelatedData', attributes?: { __typename: 'ArticleOverviewPage' } | { __typename: 'ArticlePage', slug: string } | { __typename: 'ContactPage' } | { __typename: 'ContentPage', slug: string } | null } | null };

export type NavigationQueryVariables = Exact<{
  id: Scalars['String'];
  locale: Scalars['I18NLocaleCode'];
}>;


export type NavigationQuery = { navigation: Array<{ __typename?: 'NavigationItem', id: number, title: string, path?: string | null, type: string, externalPath?: string | null, items?: Array<{ __typename?: 'NavigationItem', id: number, title: string, path?: string | null, type: string, externalPath?: string | null, related?: { __typename?: 'NavigationItemRelatedData', attributes?: { __typename: 'ArticleOverviewPage' } | { __typename: 'ArticlePage', slug: string } | { __typename: 'ContactPage' } | { __typename: 'ContentPage', slug: string } | null } | null } | null> | null, related?: { __typename?: 'NavigationItemRelatedData', attributes?: { __typename: 'ArticleOverviewPage' } | { __typename: 'ArticlePage', slug: string } | { __typename: 'ContactPage' } | { __typename: 'ContentPage', slug: string } | null } | null } | null> };

export type PaginationFragment = { __typename?: 'Pagination', total: number, page: number, pageSize: number, pageCount: number };

export type ComponentSharedSeoFragment = { __typename?: 'ComponentSharedSeo', id: string, metaTitle?: string | null, metaRobots?: string | null, metaDescription?: string | null, metaViewport?: string | null, canonicalURL?: string | null, keywords?: string | null, metaImage: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string, placeholder?: string | null, hash: string, mime: string, name: string, provider: string, size: number } | null } | null } };

export type ComponentSharedTeaserFragment = { __typename?: 'ComponentSharedTeaser', id: string, title: string, description: string, image: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string, placeholder?: string | null, hash: string, mime: string, name: string, provider: string, size: number } | null } | null } };

export type ComponentUploadFileFragment = { __typename?: 'UploadFile', alternativeText?: string | null, url: string, placeholder?: string | null, hash: string, mime: string, name: string, provider: string, size: number };

export type SingleTypeGeneralQueryVariables = Exact<{
  locale: Scalars['I18NLocaleCode'];
}>;


export type SingleTypeGeneralQuery = { generalSetting?: { __typename?: 'GeneralSettingEntityResponse', data?: { __typename?: 'GeneralSettingEntity', id?: string | null, attributes?: { __typename?: 'GeneralSetting', googleTagManager?: string | null, redirects: Array<{ __typename?: 'ComponentInputRedirect', id: string } | null>, footer?: { __typename?: 'ComponentGeneralFooter', id: string, socials: Array<{ __typename?: 'ComponentGeneralSocialMedia', channel?: Enum_Componentgeneralsocialmedia_Channel | null } | null>, links?: Array<{ __typename?: 'ComponentInputLink', id: string, label: string, href?: string | null, target?: Enum_Componentinputlink_Target | null } | null> | null, columns?: Array<{ __typename?: 'ComponentInputLinks', id: string, title: string, links: Array<{ __typename?: 'ComponentInputLink', id: string, label: string, href?: string | null, target?: Enum_Componentinputlink_Target | null } | null> } | null> | null } | null } | null } | null } | null };

export type SingleTypeHomepageQueryVariables = Exact<{
  locale: Scalars['I18NLocaleCode'];
}>;


export type SingleTypeHomepageQuery = { homepage?: { __typename?: 'HomepageEntityResponse', data?: { __typename?: 'HomepageEntity', id?: string | null, attributes?: { __typename?: 'Homepage', title: string, flexContent: Array<{ __typename: 'ComponentContentAccordion', id: string, heading: { __typename?: 'ComponentLayoutHeading', id: string, title: string, subtitle: string }, items: Array<{ __typename?: 'ComponentContentAccordionItem', id: string, title: string, text: string } | null> } | { __typename: 'ComponentContentImage' } | { __typename: 'ComponentContentImageText' } | { __typename: 'ComponentContentQuote' } | { __typename: 'ComponentContentText' } | { __typename: 'ComponentContentVideo' } | { __typename: 'Error' } | null> } | null } | null } | null };

export type SingleTypeNotFoundQueryVariables = Exact<{
  locale: Scalars['I18NLocaleCode'];
}>;


export type SingleTypeNotFoundQuery = { notFound?: { __typename?: 'NotFoundEntityResponse', data?: { __typename?: 'NotFoundEntity', attributes?: { __typename?: 'NotFound', title: string } | null } | null } | null };
