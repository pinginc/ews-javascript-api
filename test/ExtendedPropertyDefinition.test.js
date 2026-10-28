const assert = require("node:assert/strict");
const { test } = require("node:test");
const { DefaultExtendedPropertySet, EwsServiceXmlWriter, ExchangeService, ExtendedPropertyDefinition, MapiPropertyType } = require("../js/ExchangeWebService");

test("ExtendedPropertyDefinition writes an ExtendedFieldURI element", () => {
  const definition = new ExtendedPropertyDefinition(DefaultExtendedPropertySet.PublicStrings, "AdaLovelace", MapiPropertyType.String);
  const writer = new EwsServiceXmlWriter(new ExchangeService());

  definition.WriteToXml(writer);

  assert.equal(writer.GetXML(), '<t:ExtendedFieldURI xmlns:t="http://schemas.microsoft.com/exchange/services/2006/types" DistinguishedPropertySetId="PublicStrings" PropertyName="AdaLovelace" PropertyType="String"></t:ExtendedFieldURI>');
});
