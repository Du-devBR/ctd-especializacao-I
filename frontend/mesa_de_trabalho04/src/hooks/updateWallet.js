import {useQueryClient, useQuery, useMutation} from '@tanstack/react-query'
import { getWalletData, wallet } from '../assets/db/wallet'



export function CrudWallet(){
  const queryClient = useQueryClient()

  const {data, isFetching, error} = useQuery(["wallet"], getWalletData, {
    refetchOnWindowFocus: false
  })

  const saveNewWallet = useMutation(wallet, {
    onSuccess: () => queryClient.invalidateQueries(["wallet"]),
  })

  return {
    walletData: data,
    isFetching,
    error,
    save: saveNewWallet.mutate
  }
}
