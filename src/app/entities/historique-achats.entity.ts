export interface HistoriqueAchats {
  id: number;
  produit: string;
  quantite: number;
  delai_livraison: number;
  fournisseur: {
    id: number;
    nom: string;
  };
}