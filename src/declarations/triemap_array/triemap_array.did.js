export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'clearWhitelist' : IDL.Func(
        [],
        [IDL.Vec(IDL.Tuple(IDL.Text, IDL.Nat))],
        [],
      ),
    'getSize' : IDL.Func([], [IDL.Nat], []),
    'lookup' : IDL.Func([IDL.Text], [IDL.Opt(IDL.Nat)], []),
    'register' : IDL.Func([IDL.Text, IDL.Nat], [IDL.Text], []),
    'removeItem' : IDL.Func([IDL.Text], [IDL.Opt(IDL.Nat)], []),
    'showWhitelist' : IDL.Func([], [IDL.Vec(IDL.Tuple(IDL.Text, IDL.Nat))], []),
  });
};
export const init = ({ IDL }) => { return []; };
