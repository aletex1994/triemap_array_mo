import Array "mo:base/Array";
import Int "mo:base/Int";
import Iter "mo:base/Iter";
import List "mo:base/List";
import Map "mo:base/HashMap";
import Nat "mo:base/Nat";
import Principal "mo:base/Principal";
import Text "mo:base/Text";
import TrieMap "mo:base/TrieMap";
actor Registry {

  stable var entries : [(Text, Nat)] = [];

  var whitelist = TrieMap.fromEntries<Text,Nat>(
    entries.vals(), Text.equal, Text.hash);

  public func register(name : Text) : async Nat {
    switch (whitelist.get(name)) {
      case null  {
        whitelist.put(name, whitelist.size());
        return whitelist.size();
      };
      case (?id) {
        return whitelist.size()
       };
    }
    
  };

  public func lookup(name : Text) : async ?Nat {
    whitelist.get(name);
  };

  public func addToWhitelist() : async [(Text, Nat)] {
    entries := Iter.toArray(whitelist.entries());
    return entries;
  };

  system func postupgrade() {
    entries := [];
  };
}


//     dfx deploy triemap_array