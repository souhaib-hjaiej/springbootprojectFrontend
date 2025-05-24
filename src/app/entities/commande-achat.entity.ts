export interface LigneCommandeAchat {
  produit: string;
  quantite: number;
  prix_unitaire: number;
}


export interface CommandeAchatRequest {
  date: Date;
  statut: string;
  fournisseurId: number;
  lignes: LigneCommandeAchat[];
}